
import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

sourceMapSupport.install({ handleUncaughtExceptions: false })

new Ignitor(__dirname)
  .httpServer()
  .start()


 /*
import { IStore } from "./Contracts/interface/IStore";
import { ISmartersList } from "./Contracts/interface/ISmartersList";
import { StoreService } from "./app/Services/StoreService";

const formatter = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})

const storeService = new StoreService()

// ACAO DE CRIAR PRODUTO VIA INSOMNIA
const produtosMocked: IStore[] = [
  {
      nome: 'xbox',
      valor: 123.00
  },
  {
    nome: 'PS5',
      valor: 100.00
  }
]

for(let {nome, valor} of produtosMocked) {
  storeService.create({
      nome,
      valor
  });
}

// CHATBOT BUSCA TODOS PRODUTOS
const Store = storeService.findAll()

// MOSTRAR AO USUARIO O PAYLOAD
const produtcsSmartes: ISmartersList[] = Store.map(p => {
  return {
      title: `${p.name} - ${formatter.format(p.valor)}`, 
      payload: p.id
  }
})

const productsCart: IStore[] = []
// TODO: TESTAR E VER SE FUNCIONA
// flow.vars.productsCart: IProduto[] = []

// SIMULANDO USUARIO SELECIONADO ITEM 1 => POSICAO 0 DO ARRAY
for(let product of products) {

  const productIdSelected = product.id

  const productSelected = products.find(p => p.id == productIdSelected)

  // VERIFICAR SE USUARIO DESEJA ADICIONAR AO CARRINHO O PRODUTO SELECIONADO
  // SIM => ADICIONAR AO CARRINHO E QUESTIONAR NOVAMENTE
  // NAO => VERIFICAR SE DESEJA BUSCAR MAIS PRODUTOS

  // SIM => USUARIO ADICIONOU AO CARRINHO
  productsCart.push(productSelected)
}

const userProductsCart: ISmartersList[] = productsCart.map(p => {
  return {
      title: `${p.nome} - ${formatter.format(p.valor)}`, 
      payload: p.id
  }
})

console.log(userProductsCart)
const productRemoveIdSelected = productsCart[0].id
const indexRemove = productsCart.findIndex(p => p.id == productRemoveIdSelected)
const productToRemove = productsCart.splice(indexRemove, 1)

const valorTotal = productsCart.reduce((accumulator, object) => {
  console.log(object)
  return accumulator + object.valor;
}, 0);

console.log("valorTotal: ", valorTotal)

*/