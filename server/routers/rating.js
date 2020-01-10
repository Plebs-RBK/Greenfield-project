const express = require("express");
const db = require("../../db/models/offers");
const router = express.Router();

router.patch('/update', (req,res)=>{
let rating = parseInt(req.body.rating)
let id = req.body.id
console.log({id, rating})
db.findOne(id)
.then(user => {
  return (user.rating + rating) / 2
})
.then(ratings => db.updateDb(id, ratings))
.then(updatedData => res.send("updated"))
.catch(err => console.log(err))
// db.update()

})
module.exports = router;