const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
app.use(cors());
app.use(routes);

app.listen(4000, ()=> console.log("Servidor rodando na porta 4000"))