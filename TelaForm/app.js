const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html")
})
app.get("/produto/:item/:quantidade", function(req, res){
    res.send(req.params.item + ": " + req.params.quantidade)
})
app.get("/contato", function(req, res){
    res.send("<h1>Pagina de contato</h1>")
})

app.listen(8081, () => {
    console.log("[Server] Rodando - http://localhost:8081");
})