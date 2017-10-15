const router = require('express').Router();
const Student = require('../db/models/students');

//Get all students
router.get('/', (req, res, next) => {
    Student.findAll({})
    .then(students => res.json(students))
    .catch(console.error)
})

//Get student by id
router.get('/:id', (req, res, next) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(student => res.json(student))
    .catch(console.error)
})

//Create new student
router.post('/', (req, res, next) => {
	Student.create(req.body)
	.then(student => res.json(student))
    .catch(console.error)
})

//Update student
router.put('/:id', (req, res, next) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(student => {
        return student.update(req.body)
    })
    .then(student => res.json(student))
    .catch(console.error)
})

//Delete student
router.delete('/:id', (req, res, next) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(student => {
        return student.destroy();
    })
    .then(student => res.json(student))
    .catch(console.error)
})

module.exports = router
