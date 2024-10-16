import React, { useState, useEffect } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function Produto({ produto, adicionarAoCarrinho }) {
  return (
    <div className="produto">
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>Preço: R${produto.preco.toFixed(2)}</p>
      
      {produto.promocao && <span className="promocao">Promoção!</span>}
      <button onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
    </div>
  );
}

function Carrinho({ carrinho, removerDoCarrinho }) {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2);
  };

  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {carrinho.map((item, index) => (
            <div key={index} className="item-carrinho">
              <p>{item.nome} - R${item.preco.toFixed(2)}</p>
              <button onClick={() => removerDoCarrinho(index)}>Remover</button>
            </div>
          ))}
          <h3>Total: R${calcularTotal()}</h3> {/* Mostra o preço total */}
        </>
      )}
    </div>
  );
}



function App() {
  const [produtos, setProdutos] = useState([
    {
      nome: "Morango 250gr - bandeja",
      preco: 9.99,
      validade: "15/10/2024",
      imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/1/111040.jpg",
    },
    {
      nome: "Manga Tommy",
      preco: 5.00,
      imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/3/137488-manga-tommy-organica-unidade.jpg",
    },
    {
      nome: "Pera - bandeja",
      preco: 16.99,
      imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/3/136263---2114400000008---pera-org-400g-un.jpg",
    },
    {
      nome: "Abacaxi fatiado",
      preco: 19.99,
      imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/5/151852.jpg",
    },
  ]);

  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  return (
    <div className="app">
      <div className="produtos">
        {produtos.map((produto, index) => (
          <Produto key={index} produto={produto} adicionarAoCarrinho={adicionarAoCarrinho} />
        ))}
      </div>
      <Carrinho carrinho={carrinho} removerDoCarrinho={removerDoCarrinho} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));