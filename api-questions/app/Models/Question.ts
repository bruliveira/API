import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import {uuid} from "uuidv4";
export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public discipline:string

  @column()
  public question:string

  @column()
  public alternativea:string

  @column()
  public alternativeb:string

  @column()
  public alternativec:string
  
  @column()
  public alternatived:string

  @column()
  public correct:string  

  @column()
  public spots:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static async createUUID (model: Question){
    model.id = uuid()
  }
  
}
