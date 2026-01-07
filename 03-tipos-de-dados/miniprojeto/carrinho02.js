const itens = [
    {id: 1, nome: "Mouse", preco: 160, quantidade:2},
    {id: 1, nome: "Mouse", preco: 160, quantidade:2},
    {id: 2, nome: "Notebook", preco: 2500, quantidade:2}
];

const addItem = (carrinho, item) =>{
    const existe = carrinho.find(prod => prod.id === item.id);

    if(existe){
        return carrinho.map (prod => 
            prod.id === item.id ? {...prod, quantidade: prod.quantidade + item.quantidade} : prod
        );
    };
    return [...carrinho, {...item}];
};

const removeItem = (carrinho, itemId) =>{
    return carrinho.filter(prod => prod.id !== itemId);
};

const updateQuantidade = (carrinho, itemId, quantidade) =>{
    if (quantidade <= 0){
        return removeItem(carrinho, itemId)
    }

    return carrinho.map(item =>
        item.id === itemId ? {...item, quantidade} : item
    );
};

const calcularTotal = (carrinho) =>{
    return carrinho.reduce(
        (total, item) => total + item.preco * item.quantidade, 0
    );
};

let carrinho = [];

carrinho = addItem(carrinho, itens[0]);
carrinho = addItem(carrinho, itens[1]);
carrinho = addItem(carrinho, itens[2]);

carrinho = updateQuantidade(carrinho, 1, 5);
carrinho = removeItem(carrinho, 2);

const total = calcularTotal(carrinho);

console.log(carrinho);
console.log(total)