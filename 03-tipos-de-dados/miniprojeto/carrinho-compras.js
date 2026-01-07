function carrinhoDeCompras(opcao){

    let itens = [
        {id: 1, nome: "Mouse", preco: 160, quantidade: 2 },
        {id: 1, nome: "Mouse", preco: 160, quantidade: 2 },
        {id: 2, nome: "Notebook", preco: 2500, quantidade: 2 }
    ]

    const verDuplicados = (produtos) =>{
        const Produtos = [];
        produtos.forEach(produto => {
            const produtosUnicos = Produtos.find(prod => prod.id === produto.id);
            if(produtosUnicos){
                produtosUnicos.quantidade += produto.quantidade;
            }else{
                Produtos.push(produto)
            }
        })
        return Produtos;
    }

    switch(opcao){
        case "add":
            const carrinhoPadrao = [];
            const addItem = (carrinho, itens) =>{
                const newCarrinho = [...carrinho];
                const produtos = verDuplicados(itens);
                produtos.forEach(produto =>{
                    newCarrinho.push(produto);
                })
                return newCarrinho;
            };

            const meusItens = addItem(carrinhoPadrao, itens);
            console.log(meusItens);
            break;

        case "remove":
            const removerItem = (carrinho, itemId) =>{
                const produtos = verDuplicados(carrinho);
                produtos.splice((itemId - 1), 1);
                return produtos;
            };
            
            const meusItensUpdate = removerItem(itens, 1);
            console.log(meusItensUpdate);
            break;
        case "updatQuantidade":
            const updateQuantidade = (carrinho, itemId, quantidade) =>{
                const produtos = verDuplicados(carrinho);
                produtos.forEach(produto =>{
                    if(produto.id === itemId){
                        produto.quantidade += quantidade;
                    };
                })
                return produtos;
            };
            const quantidadeNova = updateQuantidade(itens,2, 6 )
            console.log(quantidadeNova);
            break;
        case "calcularTotal":
            const calcularTotal = (carrinho) => {
                const produtos = verDuplicados(carrinho);
                console.log(produtos);
                const precoTotal = [];
                produtos.forEach(produto =>{
                    if((Object.values(produto)).includes(produto.id)){
                        const arrTotal = (produto.preco * produto.quantidade);
                        precoTotal.push(arrTotal);
                    }
                })
                //console.log(precoTotal);
                const total = precoTotal.reduce((acc, produto ) => acc + produto, 0);
                return total;
            };
            const totalAhPagar = calcularTotal(itens);
            console.log("Total a pagar", totalAhPagar);
            break;
        default:
            console.log("Opção inválida!");
    }
}   

carrinhoDeCompras("calcularTotal");
