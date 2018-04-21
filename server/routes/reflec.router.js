var express = require('express')
var pool = require('../modules/pool')
var router = express.Router();

router.get('/', (req, res)=>{
    const currentDescriptions = req.query.id;
    const queryText = `SELECT * from "reflection"`
    pool.query(queryText).then((result)=>{
    res.send(result.rows)
    console.log('test')
    console.log('test', result.rows)
    }).catch((error) =>{
        console.log('error getting current descriptions ')
        res.sendStatus(500)
    })
})

module.exports = router