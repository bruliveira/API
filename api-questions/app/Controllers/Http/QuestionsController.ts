import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { QuestionService } from 'App/Services/QuestionService';
import { IQuestion } from 'Contracts/interfaces/IQuestion';

export default class QuestionsController {
    private questionService = new QuestionService()

    //Mostrar todas
    public async index({ request, response }: HttpContextContract) {
        const questions = await this.questionService.findAll()
        return response.ok(questions) //Mostar todos os questions da loja
    }

    //Adiciona uma nova questão
    public async store({ request, response }: HttpContextContract) {
        const payload = request.body() as IQuestion
        const produto = await this.questionService.create(payload)
        return response.ok(produto)
    }

    //Pesquisar pelo id
    public async show({ request, response }: HttpContextContract) {
        const id = request.params()['id']
        const question = await this.questionService.findOne(id)

        if (!question) {
            return response.notFound("Desculpe, o id solicitado não foi encontrando Id digitado: " + id)
        }
        return response.ok(question)
    }

    //Atualizar, com o id
    public async update({ request, response }: HttpContextContract) {
        const id = request.params()['id']
        const payload = request.body() as IQuestion
        const question = await this.questionService.update(id, payload)

        if (!question) {
            return response.notFound('Produto não localizado. Id :' + id)
        }
        return response.ok(question)
    }

    //Deletar, com o id
    public async delete({ request, response }: HttpContextContract) {
        const id = request.params()['id']
        const question = await this.questionService.findOne(id)

        if (!question) {
            return response.notFound('Produto não localizado' + id)
        }
        await this.questionService.delete(id)
        return response.noContent()
    }

}
