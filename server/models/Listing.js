const mongoose = require("mongoose");

const { Schema } = mongoose;

const listingSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  contact: {
    type: String,
    required: true,
  },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
