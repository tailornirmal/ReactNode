import express from "express";
import db from "../db/db";
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

  const pi = '34';

  res.status(200).send({
    success: 'true',
    message: `todos retrieved successfully ${pi}`,
    todos: db
  });
});


module.exports = router;
