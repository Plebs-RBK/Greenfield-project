const mongoose = require("mongoose");

const offreSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  categorie: String,
  price: String,
  region: String,
  views: {
    type: String,
    default: 0
  },
  phone: String,
  description: String,
  rating:{
    type: Number,
    default: 0
  }
});

let Offre = mongoose.model("Offre", offreSchema);

const findOffer = categorie => {
  return Offre.find({ categorie })
    .limit(3)
    .sort({ views: -1 });
};

const findOne = id => {
  return Offre.findOne({ _id: id });
};

const findAll = categorie => {
  return Offre.find({ categorie });
};

const addToDb = obj => {
  let offre = new Offre(obj);
  return offre.save(obj);
};
const updateDb = (id,rating) => {
  return Offre.findOneAndUpdate({_id : id},{rating},{useFindAndModify : false})
}

module.exports.addToDb = addToDb;
module.exports.findOffer = findOffer;
module.exports.findAll = findAll;
module.exports.findOne = findOne;
module.exports.updateDb = updateDb;
