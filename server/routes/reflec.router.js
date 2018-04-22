var express = require('express')
var pool = require('../modules/pool')
var router = express.Router();

router.get('/', (req, res)=>{
    const currentDescriptions = req.query.id;
    const queryText = `SELECT * from "reflection" ORDER BY date DESC`
    pool.query(queryText).then((result)=>{
    res.send(result.rows)
    console.log('test')
    console.log('test', result.rows)
    }).catch((error) =>{
        console.log('error getting current descriptions ')
        res.sendStatus(500)
    })
})

router.post('/', (req, res) => {
    var reflection = req.body;
    var queryText = `INSERT INTO "reflection" ("topic", "description", "bookmarked", "date")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [reflection.topic, reflection.description, reflection.bookmarked, reflection.date]).then((response) => {
        console.log('Succesfully posted reflection!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in posting reflection: ', error);
        res.sendStatus(500);
    })
})

module.exports = router