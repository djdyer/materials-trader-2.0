const mongoose = require("mongoose");

const { Schema } = mongoose;

const materialSchema = new Schema({
  material: {
    type: Date,
  },
  hazardous: {
    type: Boolean,
  },
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
