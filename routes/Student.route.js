const { Router } = require('express');
const { studentsController } = require('../controllers/students.controllers');

const router = Router();


router.get('/', studentsController.getStudents);
router.post('/', studentsController.addStudents);
router.patch('/', studentsController.updateStudents);
router.delete('/:id', studentsController.deleteStudents);
router.patch('/:id', studentsController.updateStudents)



module.exports = router;