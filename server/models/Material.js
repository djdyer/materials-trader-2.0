const mongoose = require("mongoose");

const { Schema } = mongoose;

const materialSchema = new Schema({
  // purchaseDate: {
  //   type: Date,
  //   default: Date.now
  // },
  // flight:
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Auction'
  //   }
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;

// ========================================================================

// [
//   {
//     "id": 1,
//     "type": "Plastic",
//     "is_hazardous": "false"
//   },
//   {
//     "id": 2,
//     "type": "Glass",
//     "is_hazardous": "false"
//   },
//   {
//     "id": 3,
//     "type": "Aluminum",
//     "is_hazardous": "false"
//   },
//   {
//     "id": 4,
//     "type": "Steel",
//     "is_hazardous": "false"
//   },
//   {
//     "id": 5,
//     "type": "Cardboard",
//     "is_hazardous": "false"
//   },
//   {
//     "id": 6,
//     "type": "Paper",
//     "is_hazardous": "false"
//   },
//   {
//     "id": 7,
//     "type": "Electronics",
//     "is_hazardous": "true"
//   },
//   {
//     "id": 8,
//     "type": "Appliances",
//     "is_hazardous": "true"
//   },
//   {
//     "id": 9,
//     "type": "Concrete",
//     "is_hazardous": "false"
//   },
//   {
//     "id": 10,
//     "type": "Oil",
//     "is_hazardous": "true"
//   },
//   {
//     "id": 11,
//     "type": "Batteries",
//     "is_hazardous": "true"
//   },
//   {
//     "id": 12,
//     "type": "Textiles",
//     "is_hazardous": "false"
//   }

// ]
