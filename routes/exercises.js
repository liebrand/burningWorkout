var express = require('express');
var router = express.Router();
var ExerciseSchema = require('../schemas/exercise');

/* GET home page. */
router.put('/add/:string', function(req, res) {
  debugger;
  var name = req.param('string');
  var newRecord = new ExerciseSchema({name: name});
  console.log('bingo');
  newRecord.save(function(err) {
    console.log('save returned: ' + err);
    if (err) {
      console.log(err);
      res.status(500).json({status: 'failure'});
    } else {
      res.json({status: 'success'});
    }
  });
  // res.json({status: 'done'});
});

module.exports = router;
