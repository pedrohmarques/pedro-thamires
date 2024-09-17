const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user/index')


const app = express()
app.use(express.json());

// Mongo Connect
mongoose.connect('mongodb+srv://pedrim6661:pedrothamires@casamento-api.t8cn5.mongodb.net/?retryWrites=true&w=majority&appName=casamento-api')


// Rotas
app.get('/', (req, res) => {
    res.send("Hello")
})

app.use('/user', userRoutes);


// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});