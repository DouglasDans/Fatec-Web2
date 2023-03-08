const Sequelize = require("sequelize")
const sequelize = new Sequelize('test', 'root', "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso");
}).catch(function(erro) {
    console.log("Falha no servidor: " + erro);
})

const Agendamentos = sequelize.define("agendamentos" , {
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.SMALLINT
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.STRING
    },
})
// Agendamentos.sync()

Agendamentos.create({
    nome: "Marceliano Dias",
    endereco: "Rua Brasileiro Farraz",
    bairro: "Guaiantuba",
    cep: 08413150 ,
    cidade: "são paulo",
    estado: "SP",
    observacao: "Torceu o pé escorregando na faixa de pedestres"
})

