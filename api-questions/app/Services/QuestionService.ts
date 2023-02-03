import Question from "App/Models/Question";
import { IQuestion } from "Contracts/interfaces/IQuestion";
import { uuid } from "uuidv4";

export class StoreService {
    private question: IQuestion[] = []
    
    async findAll(){
        return await Question.all()
    }
    async create(question: IQuestion){
        const QuestionCreated: IQuestion = {
            ...question,
            id:uuid()
        }
        this.question.push(QuestionCreated)
    }

}

