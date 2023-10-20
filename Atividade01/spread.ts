interface Produto {
  nome: string;
  preço: number;
  categoria: string;
}

const produto1: Produto = {
  nome: "Apple Watch",
  preço: 999.99,
  categoria: "Eletrônicos",
};

const produto2: Produto = {
  nome: "camiseta",
  preço: 69.99,
  categoria: "Vestuário",
};

const listaProdutos: Produto[] = [produto1, produto2];

console.log(...listaProdutos);
