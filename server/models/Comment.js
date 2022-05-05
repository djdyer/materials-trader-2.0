const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  user_Id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Listing = mongoose.model("Comment", commentSchema);

module.exports = Listing;
