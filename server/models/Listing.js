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
  user_Id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  materials_Id: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Material'
    },
  ],
  comments_Id: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    },
  ],
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
