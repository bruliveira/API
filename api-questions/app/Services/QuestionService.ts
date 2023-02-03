import Question from "App/Models/Question";
import { IQuestion } from "Contracts/interfaces/IQuestion";
import { uuid } from "uuidv4";

export class QuestionService {
    private questionn: IQuestion[] = []
    
    //Retorna todas
    async findAll(){
        return await Question.all()
    }

    //Retorna uma pelo id
    async findOne(id: string){
        return await Question.find(id)
    }

    //Criar
    async create(question: IQuestion){
        const QuestionCreated: IQuestion = {
            ...question,
            id:uuid()
        }
        this.questionn.push(QuestionCreated)
        const questionCriada = await Question.create(QuestionCreated)
        return questionCriada;
    }

    //Atualizar
    async update(id: string, questionDto: IQuestion) {
        const question = await Question.find(id)
        if(!question){
            return null
        }
        return await Question.updateOrCreate({id}, questionDto)
    }
    
    //Deletar
    async delete (id: string){
        const question = await Question.find(id)
        
        if(!question){
            return null
        }
        return await question.delete()
    }

}

