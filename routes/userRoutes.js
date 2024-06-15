const express = require('express');
const router = express.Router();


// route : http://localhost:5001/user/?name=______
router.get('/', (req, res) => {
    let name = req.query.name
    res.send({ mess: `Welcome ${name} , To User page` });

});

//route : http://localhost:5001/user/info/?name=______
router.get('/info', (req, res) => {
    let name = req.query.name
    res.send({ name:name,
        sem:'6th sem',
        university :"CHARUSAT",
     });

});



module.exports = router;
