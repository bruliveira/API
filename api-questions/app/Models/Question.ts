import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Question extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public discipline:string

  @column()
  public question:string

  @column()
  public alternativeA:string

  @column()
  public alternativeB:string

  @column()
  public alternativeC:string
  
  @column()
  public alternativeD:string

  @column()
  public correct:string  

  @column()
  public spots:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
