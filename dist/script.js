import React, { useState, useEffect } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

function Produto({ produto, adicionarAoCarrinho }) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "produto" }, /*#__PURE__*/
    React.createElement("img", { src: produto.imagem, alt: produto.nome }), /*#__PURE__*/
    React.createElement("h3", null, produto.nome), /*#__PURE__*/
    React.createElement("p", null, "Pre\xE7o: R$", produto.preco.toFixed(2)),

    produto.promocao && /*#__PURE__*/React.createElement("span", { className: "promocao" }, "Promo\xE7\xE3o!"), /*#__PURE__*/
    React.createElement("button", { onClick: () => adicionarAoCarrinho(produto) }, "Comprar")));


}

function Carrinho({ carrinho, removerDoCarrinho }) {
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "carrinho" }, /*#__PURE__*/
    React.createElement("h2", null, "Carrinho de Compras"),
    carrinho.length === 0 ? /*#__PURE__*/
    React.createElement("p", null, "Seu carrinho est\xE1 vazio.") : /*#__PURE__*/

    React.createElement(React.Fragment, null,
    carrinho.map((item, index) => /*#__PURE__*/
    React.createElement("div", { key: index, className: "item-carrinho" }, /*#__PURE__*/
    React.createElement("p", null, item.nome, " - R$", item.preco.toFixed(2)), /*#__PURE__*/
    React.createElement("button", { onClick: () => removerDoCarrinho(index) }, "Remover"))), /*#__PURE__*/


    React.createElement("h3", null, "Total: R$", calcularTotal()), " ")));




}



function App() {
  const [produtos, setProdutos] = useState([
  {
    nome: "Morango 250gr - bandeja",
    preco: 9.99,
    validade: "15/10/2024",
    imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/1/111040.jpg" },

  {
    nome: "Manga Tommy",
    preco: 5.00,
    imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/3/137488-manga-tommy-organica-unidade.jpg" },

  {
    nome: "Pera - bandeja",
    preco: 16.99,
    imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/3/136263---2114400000008---pera-org-400g-un.jpg" },

  {
    nome: "Abacaxi fatiado",
    preco: 19.99,
    imagem: "https://hortifruti.com.br/media/catalog/product/cache/90a67334732b2408839e146d4f241496/1/5/151852.jpg" }]);



  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = produto => {
    setCarrinho([...carrinho, produto]);
  };

  const removerDoCarrinho = index => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "app" }, /*#__PURE__*/
    React.createElement("div", { className: "produtos" },
    produtos.map((produto, index) => /*#__PURE__*/
    React.createElement(Produto, { key: index, produto: produto, adicionarAoCarrinho: adicionarAoCarrinho }))), /*#__PURE__*/


    React.createElement(Carrinho, { carrinho: carrinho, removerDoCarrinho: removerDoCarrinho })));


}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));