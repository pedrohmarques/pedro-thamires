const gift = require('../../models/gift.model.js')
const express = require('express')
const router = express.Router()

router.post('/register', async (req, res) => {
    const { image, name, recomendation, gifter_name } = req.body;
    try {
        const newGift = new gift({ image, name, recomendation, gifter_name  })

        await newGift.save()
        res.status(201).send(newGift)
    } catch(error) {
        res.status(400).send({ error: 'Erro ao registrar presente', details: error.message });
    }    
})

router.get('/', async(req, res) => {
    const gifts = await gift.find()
    res.send(gifts)
})

router.put('/update/:id', async(req, res) => {
    const { gifter_name } = req.body;
    const updateGift = await gift.findByIdAndUpdate(req.params.id, 
    { 
        gifter_name  
    })

    return res.send(updateGift)
})

module.exports = router;