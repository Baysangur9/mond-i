const { Router } = require('express');

const router = Router();

router.use('/students', require('./Students.route'));

router.use('/students', studentsRoute)

module.exports = router;
