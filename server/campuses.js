const router = require('express').Router();
const Campus = require('../db/models/campuses');

//Get all campuses
router.get('/', (req, res, next) => {
    Campus.findAll({})
    .then(campuses => res.json(campuses))
    .catch(console.error)
})

//Get campus by id
router.get('/:id', (req, res, next) => {
    Campus.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(campus => res.json(campus))
    .catch(console.error)
})

//Create new campus
router.post('/', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => res.json(campus))
    .catch(console.error)
})

//Update campus
router.put('/:id', (req, res, next) => {
    Campus.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(campus => {
        return campus.update(req.body)
    })
    .then(campus => res.json(campus))
    .catch(console.error)
})

//Delete campus
router.delete('/:id', (req, res, next) => {
    Campus.destroy(
        { where: {
            id: req.params.id
        }
    })
    .catch(console.error)
})

module.exports = router
