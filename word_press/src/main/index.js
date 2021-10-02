const express = require("express")
const app = express();
const connection = require('./models/db');

const categoriesController = require('./controllers/categories/CategoriesController');
const articlesController = require('./controllers/articles/ArticlesController');

const Article = require('./models/Article');
const Catergoty = require('./models/Category');

//View engine
app.set('view engine','ejs');

//Static
app.use(express.static('../resources'));

//Body-parser

    //A opção estendida permite escolher entre analisar os dados codificados por 
    //URL com a biblioteca querystring (quando falso) ou a biblioteca qs (quando verdadeiro)

app.use(express.urlencoded({extended: false}))
app.use(express.json());

//Db

connection
    .authenticate()
    .then(()=>{
        console.log("Conexão feita com sucesso!");
    }).catch((error)=>{
        console.log(error);
    });


app.use('/', categoriesController);
    
app.use('/', articlesController);
    
app.get("/", (req, res) =>{
    res.render('index');
})

app.listen(8080, () =>{
    console.log("ASADASDAS");
})