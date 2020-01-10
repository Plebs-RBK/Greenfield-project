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
  description: String,
  rating:{
    type: Number,
    default: 0
  }
});
let Offre = mongoose.model("Offre", offreSchema);


const findOffer = (categorie) => {

  return Offre.find({categorie}).limit(3).sort({views: -1});
}
module.exports.findOffer = findOffer;