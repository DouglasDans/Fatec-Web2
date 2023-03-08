const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("rodando")
})

app.listen(8081, () => {
    console.log("[server] WORKING http://localhost:8081");
})