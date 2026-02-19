function gerarRelatorioAnalitico(){

    function saidasAprovadas(transacoes){
        return transacoes.filter(({tipo, status}) => tipo === "saida" && status === "aprovado");
    };
    function calcularGastosPorCliente(transacoes){
        return transacoes.reduce((acc, {cliente, valor}) =>{
            //acc[cliente] = (status === "aprovado" && tipo === "saida") ? (acc[cliente] ?? 0) + valor : acc[cliente] <--> Nunca escreva no acumulador se não tiver certeza que deve
            //if(status !== "aprovado" || tipo !== "saida") return acc;
            acc[cliente] =  (acc[cliente] ?? 0) + valor;
            return acc;
        }, {});
    };

    function gerarRankingClientes(gastosPorCliente){
    /**  const listaDeClentesRanqueada = Object.entries(gastosPorCliente)
        .sort((a, b) => b[1] - a[1]);
        return listaDeClentesRanqueada.map(item => ({cliente: item[0], total: item[1]}))*/

        const listaDeClentesRanqueada = Object.entries(gastosPorCliente);
        return [...listaDeClentesRanqueada]
        .sort((a, b) => b[1] - a[1])
        .map(([cliente, total]) => ({cliente, total}))
    };

    function calcularGastosPorCategoria(transacoes){

        return [...transacoes]
        .sort((a, b) => a.valor - b.valor)
        .reduce((acc, {categoria, valor}) =>{
            acc[categoria] =  (acc[categoria] ?? 0) + valor;
            return acc;
        }, {});
    }

    return{
        load(transacoes){
            const saidas = saidasAprovadas(transacoes);
            const gastosPorCliente = calcularGastosPorCliente(saidas);
            const RankingClientes = gerarRankingClientes(gastosPorCliente);
            const gastosPorCategoria = calcularGastosPorCategoria(saidas)
            return{
                RankingClientes,
                gastosPorCategoria
            }
        }
    }
}


const transacoes = [
  { cliente: "Ana", categoria: "Alimentação", valor: 120, tipo: "saida", status: "aprovado" },
  { cliente: "Carlos", categoria: "Transporte", valor: 80, tipo: "saida", status: "aprovado" },
  { cliente: "Ana", categoria: "Salário", valor: 3000, tipo: "entrada", status: "aprovado" },
  { cliente: "Maria", categoria: "Freelance", valor: 1500, tipo: "entrada", status: "aprovado" },
  { cliente: "Carlos", categoria: "Aluguel", valor: 1000, tipo: "saida", status: "aprovado" },
  { cliente: "Maria", categoria: "Alimentação", valor: 300, tipo: "saida", status: "aprovado" },
  { cliente: "Ana", categoria: "Transporte", valor: 150, tipo: "saida", status: "pendente" },
  { cliente: "Carlos", categoria: "Salário", valor: 2800, tipo: "entrada", status: "aprovado" }
];

const saidasAprovadas = gerarRelatorioAnalitico();
console.log(saidasAprovadas.load(transacoes));
//console.log(saidasAprovadas);
