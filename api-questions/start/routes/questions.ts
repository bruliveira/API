import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
    Route.get('/', 'QuestionsController.index') //Mostrar todas
    Route.get('/:id', 'QuestionsController.show') //Mostrar uma
    Route.post('/', 'QuestionsController.store') //Adicionar novas questões
    Route.patch('/:id', 'QuestionsController.update') //Atualiza uma questão
    Route.delete('/:id', 'QuestionsController.delete') //Deleta uma questão
    
}).prefix('question')