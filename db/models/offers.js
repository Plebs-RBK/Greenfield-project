const mongoose = require("mongoose");

const offreSchema = mongoose.Schema({
  username: String,
  categorie: String,
  price: Number,
  region: String,
  views: {
    type: Number,
    default: 0
  },
  description: String
});

let Offre = mongoose.model("Offre", offreSchema);

const addToDb = obj =>{
  let offre = new Offre(obj)
  return offre.save(obj)
}

module.exports.addToDb = addToDb;