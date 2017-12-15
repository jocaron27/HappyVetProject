const router = require('express').Router();
const Vets = require('../db/models/vets');

//Get all vets
router.get('/', (req, res, next) => {
    Vets.findAll({})
    .then(vets => res.json(vets))
    .catch(console.error)
})

//Get vet by id
router.get('/:id', (req, res, next) => {
    Vets.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(vet => res.json(vet))
    .catch(console.error)
})

//Update vet
router.put('/:id', (req, res, next) => {
    Vets.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(vet => {
        return vet.update(req.body)
    })
    .then(vet => res.json(vet))
    .catch(console.error)
})



module.exports = router
