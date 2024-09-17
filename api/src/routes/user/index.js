const user = require('../../models/user.model.js')
const express = require('express')
const router = express.Router()

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = new user({ name, email, password })

        await newUser.save()
        res.status(201).send(newUser)
    } catch(error) {
        res.status(400).send({ error: 'Erro ao registrar usuário', details: error.message });
    }    
})

module.exports = router;