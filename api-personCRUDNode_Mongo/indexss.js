//Configurações iniciais
const express = require('express')
const { default: mongoose, Mongoose } = require('mongoose')
const app = express() //Importou agora inicializa

//Forma de ler JSON - usar middlewares
//Quer criar um middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
) 
app.use(express.json)


//Rota inicial / endpoint
app.get('/', (req, res) => {

    //Mostrar requisição

    res.json({message: 'Oi Expprfdelss! '})
}) //Visualiza

const DB_USER = 'bruna'
const DB_PASSWORD = encodeURIComponent('') 
mongoose
    .connect(
        `mongodb+srv://${DB_USER}:<${DB_PASSWORD}>@apicluster.iifvlfq.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log('Conectado ao MongoDB!!')
        //Entregar uma porta
        app.listen(3000)
    })
    .catch((err) => console.log(err))



//mongodb+srv://bruna:<13032002>@apicluster.iifvlfq.mongodb.net/bancodaapi?retryWrites=true&w=majority