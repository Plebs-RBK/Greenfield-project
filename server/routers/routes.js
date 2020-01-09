const express = require("express");
const db = require("../../db/models/offre")
const router = express.Router();

router.post('/add', (req,res)=>{
  db.addToDb(req.body)
  .then(result => res.send(result))
})