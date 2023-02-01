import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Stor from 'App/Models/Stor';
import { StoreService } from 'App/Services/StoreService';
import { ISmartersList } from 'Contracts/interface/ISmartersList';
import { IStore } from 'Contracts/interface/IStore';

export default class StoresController {
    private storeService = new StoreService()

    //Busca todos os produtos - Visualizar todos de uma vez
    public async index({ request, response }: HttpContextContract) {
        const produtos = await this.storeService.findAll()
        return response.ok(produtos) //Mostar todos os produtos da loja
    }

    //Pesquisar pelo id
    public async show({ request, response }: HttpContextContract) {
        const id = request.params()['id']
        const produto = await this.storeService.findOne(id)

        if (!produto) {
            return response.notFound("Desculpe, o id solicitado não foi encontrando Id digitado: " + id)
        }
        return response.ok(produto)
    }

    //Criar - Adicionar
    public async store({ request, response }: HttpContextContract) {
        const payload = request.body() as IStore
        const produto = await this.storeService.create(payload)
        return response.ok(produto)
    }


    //Atualizar, com o id
    public async update({ request, response }: HttpContextContract) {
        const id = request.params()['id']
        const payload = request.body() as IStore
        const produto = await this.storeService.update(id, payload)

        if (!produto) {
            return response.notFound('Produto não localizado. Id :' + id)
        }
        return response.ok(produto)
    }

    //Deletar, com o id
    public async delete({ request, response }: HttpContextContract) {
        const id = request.params()['id']
        const store = await this.storeService.findOne(id)

        if (!store) {
            return response.notFound('Produto não localizado' + id)
        }
        await this.storeService.delete(id)
        return response.noContent()
    }

    //Mostra o title e payload para o usuario!
    public async mostrar({ request, response }: HttpContextContract) {
        //const id = request.params()['id']
        const products = this.storeService.findAll()

        const produtcsSmartes: ISmartersList[] = (await products).map(p => {
            return {
                title: `${p.nome}`,
                payload: p.id
            }
        })
        return response.ok(produtcsSmartes)
    }

    //Selecionando itens
}
