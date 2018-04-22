var express = require('express')
var pool = require('../modules/pool')
var router = express.Router();

//GET existing reflections from postgreSQL
router.get('/', (req, res)=>{
    const currentDescriptions = req.query.id;
    const queryText = `SELECT * from "reflection" ORDER BY date DESC`
    pool.query(queryText).then((result)=>{
    res.send(result.rows)
    console.log(result.rows)
    }).catch((error) =>{
        console.log('error getting current descriptions ')
        res.sendStatus(500)
    })//end catch
})//end get

//POST new reflection to postgreSQL
router.post('/', (req, res) => {
    var reflection = req.body;
    var queryText = `INSERT INTO "reflection" ("topic", "description")
    VALUES ($1, $2);`
    pool.query(queryText, [reflection.topic, reflection.description]).then((response) => {
        console.log('Succesfully posted reflection!');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in posting reflection: ', error);
        res.sendStatus(500);
    })//end catch
})//end post

//DELETE an existing reflection from postgreSQL
router.delete('/:id', (req, res)=>{
    console.log('hello')
    console.log('req.params test', req.params);
    let reflecId = req.params.id;
    console.log('successful router.delete', reflecId );
    const queryText = 'DELETE FROM "reflection" WHERE "id" = $1;'
    pool.query(queryText, [reflecId]).then((response)=>{
      console.log(response);
      res.sendStatus(200);
    }).catch((err)=>{
      res.sendStatus(500);
    });//end catch
});//end delete

//UPDATE the status of bookmarked of an existing reflection from postgreSQL
router.put('/:id', (req, res)=>{
    console.log('PUT for bookmarked', req.body, req.params);
    const bookmarkBoolean = req.body;
    const reflecId = req.params.id;
    const queryText = `UPDATE "reflection" SET "checkedIn" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [bookmarkBoolean.checkedIn, reflecId])
    .then((response)=>{
      res.sendStatus(200);
    }).catch((error)=>{
      console.log('error updating bookmark', error);
      res.sendStatus(500);
    });//end catch
 });//end put

module.exports = router