import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@ioc:Adonis/Lucid/Orm'
import {uuid} from "uuidv4";
export default class Stor extends BaseModel {


  @column({ isPrimary: true })
  public id: string

  @column()
  public nome:string

  @column()
  public produtos:string

  @column()
  public valor:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  @beforeCreate()
  public static async createUUID (model: Stor){
    model.id = uuid()
  }
}
