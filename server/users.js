const router = require('express').Router();
const Users = require('../db/models/users');

//Get single user's vets
router.get('/:id', (req, res, next) => {
    Users.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(user => res.json(user))
    .catch(console.error)
})

module.exports = router
