const express = require('express');
const router = express.Router();

router.get('/', (req,res) => { res.send('Hello World');});


// localhost:8080/professional/
module.exports = router;