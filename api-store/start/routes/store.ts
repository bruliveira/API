import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
    //Deixei por id tudo aqui - Mudar depois
    //Route.get('/', 'StoresController.index') //O Chatbot vai buscar todos os produtos
    Route.get('/:id', 'StoresController.show')
    Route.get('/', 'StoresController.mostrar') 
    Route.post('/', 'StoresController.store') //Vai criar o produto
    Route.patch('/:id', 'StoresController.update')
    Route.delete('/:id', 'StoresController.delete') 
}).prefix('/store')