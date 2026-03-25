function processarOperacoes() {
  const log = (msg) => console.log(msg);

  const formatarValor = (valor) => {
    // Tratamento para BigInt não quebrar o formatador
    const valorParaFormatar = typeof valor === 'bigint' ? Number(valor) : valor;
    return new Intl.NumberFormat('pt-BR', {
      style: "currency",
      currency: "BRL"
    }).format(valorParaFormatar);
  };

  function processarTransacoes(transacoes, bancoDeDados) {
    // Cria a união dos dados de forma limpa
    return transacoes.map(transacao => {
      const cliente = bancoDeDados.find(c => c.id === transacao.clienteId);
      return { ...cliente, transacao };
    });
  }

  function relatorioTransacao(listaProcessada) {
    log(" --- RELATÓRIO DE PROCESSAMENTO ATLAS FINANCE --- \n");

    //log(listaProcessada);

    const saldosFinais = listaProcessada.reduce((acc, {id, nome, saldo, transacao, ...rest }) => {
      const { tipo, valor, meses } = transacao;

      if (!acc[id]) {
        acc[id] = { id, nome, saldo, ...rest };
      }


      switch (tipo) {
        case "SAQUE":
          if (acc[id].saldo < valor) {
            log(`[ERRO] ${nome}: Saldo insuficiente para saque de ${formatarValor(valor)}.`);
          } else {
            acc[id].saldo -= valor;
            log(`[SUCESSO] ${nome}: Saque de ${formatarValor(valor)} realizado.`);
          }
          break;

        case "DEPOSITO":
          acc[id].saldo += valor;
          log(`[SUCESSO] ${nome}: Depósito de ${formatarValor(valor)} realizado.`);
          break;

        case "INVESTIMENTO":
          const retorno = valor * Math.pow(1.01, meses);
          acc[id].saldo -= valor;
          log(`[INVESTIMENTO] ${nome}: ${formatarValor(valor)} movidos para aplicação. -> Estimativa: ${formatarValor(retorno)} (12 meses).`);
          // Investimento geralmente não altera o saldo líquido imediato, então mantemos o saldo original no relatório
          break;

        case "TRANSFERENCIA_ESTRUTURAL":
          // Lógica BigInt
          (acc[id].saldo) += BigInt(valor);
          log(`[BIG_CAPITAL] Movimentação institucional de ${BigInt(valor)} processada.`);
          break;
      }

      // Retorna o novo estado sem mutar o acumulador original (Padrão React)
      return acc;
    }, []);

    return Object.values(saldosFinais);
  }

  function relatorioAuditoria(relatorioTransacao) {
    log(relatorioTransacao)
    log("");
    log("------------------------------------------------");
    log("             RESUMO DA AUDITORIA");
    log("------------------------------------------------");

    const clientesSet = new Set();
    const contasNegativas = [];

    for (let { id, nome, saldo } of relatorioTransacao) {
      clientesSet.add(id);
      if (typeof saldo === "number" && saldo < 0) {
        contasNegativas.push({ id, nome, saldo });
      }
    }

    const numClientes = clientesSet.size;
    const patrimonio = relatorioTransacao.reduce((acc, { saldo }) => {
      if (typeof saldo === "number") return acc + saldo;
      return acc; // ignora BigInt para evitar erro de soma
    }, 0);

    log(`> Total de Clientes Processados: ${numClientes}`);
    log(`> Patrimônio Líquido Total (Small Caps): ${formatarValor(patrimonio)}`);

    if (contasNegativas.length === 0) {
      log("Alerta: Nenhuma conta com saldo negativo detectada.");
    } else {
      log("Contas com saldo negativo detectadas:");
      contasNegativas.forEach(({ id, nome, saldo }) =>
        log(`- ${nome} (ID: ${id}) | Saldo: ${formatarValor(saldo)}`)
      );
    }

    return {
      clientes: numClientes,
      patrimonio,
      contasNegativas
    };
  }
  
  return {
    load(transacoes, bancoDeDados) {
      const dadosUnificados = processarTransacoes(transacoes, bancoDeDados);
      const clientesAtualizados = relatorioTransacao(dadosUnificados);
      return relatorioAuditoria(clientesAtualizados);
    }
  };
}

const bancoDeDados = [
  { id: 101, nome: "Ana Silva", saldo: 5000.00, tipo: "Premium" },
  { id: 102, nome: "Bruno Costa", saldo: 1200.50, tipo: "Standard" },
  { id: 103, nome: "Reserva Institucional", saldo: 9007199254740991n, tipo: "BigInt_Account" } 
];

const transacoes = [
  { clienteId: 101, tipo: "SAQUE", valor: 1500 },
  { clienteId: 102, tipo: "DEPOSITO", valor: 300 },
  { clienteId: 101, tipo: "INVESTIMENTO", valor: 1000, meses: 12 }, // Aplicar Juros Compostos
  { clienteId: 103, tipo: "TRANSFERENCIA_ESTRUTURAL", valor: 100000000n }, // Uso de BigInt
];

const processos = processarOperacoes();
processos.load(transacoes, bancoDeDados)
