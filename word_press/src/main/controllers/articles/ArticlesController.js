const express = require('express');
const router = express.Router();

router.get('/articles', (req, res) =>{
    res.send('Rota');
});

router.get("/admin/articles/new", (req, res)=>{
    res.send('Rota para cirar um novo artigo!');
});

module.exports = router;