const mongoose = require("mongoose");

const { Schema } = mongoose;

const listingSchema = new Schema({
  // auctionEndDate: {
  //   type: Date,
  //   default: Date.now,
  //   required: true,
  // },
  // origin: {
  //   type: String,
  //   required: true,
  // },
  // destination: {
  //   type: String,
  //   required: true,
  // },
  // flightDate: {
  //   required: true,
  //   type: Date,
  // },
  // currentBid: {
  //   type: Number,
  //   required: true,
  // },
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;

// ===========================================================================================

// [
//   {
//     material_id: 5,
//     description:
//       "I have a pallet of corrugated cardboard material from my job's warehouse out back. Whoever gets here first!",
//     amount: "1 pallet",
//     location: "Atlanta",
//     user_id: 1,
//     contact: "sally.J1971@gmail.com",
//   },
//   {
//     material_id: 7,
//     description:
//       "I want to giveaway my old desktop computer, it kinda works, might have a virus or three",
//     amount: "1 personal computer",
//     location: "Alpharetta",
//     user_id: 2,
//     contact: "213-555-0168",
//   },
//   {
//     material_id: 3,
//     description:
//       "I have a bunch of cans that still haven't been picked up by my recycling company, up for grabs, probably worth something.",
//     amount: "2 trash bags",
//     location: "Toccoa",
//     user_id: 3,
//     contact: "ag1990@aol.com",
//   },
//   {
//     material_id: 1,
//     description:
//       "We have a ton of plastic bottles from our family reunion last weekend, would be great to get this to someone that can recycle it",
//     amount: "At least 4 big trash bags",
//     location: "Duluth",
//     user_id: 4,
//     contact: "john_bravo47@yahoo.com",
//   },
//   {
//     material_id: 2,
//     description:
//       "For some reason my city decided to stop recycling glass, but I know this is all recyclable materials.",
//     amount: "Maybe 100 bottles",
//     location: "Norcross",
//     user_id: 5,
//     contact: "407-555-4451",
//   },
//   {
//     material_id: 12,
//     description:
//       "Just lost a bunch of weight and am giving away a bunch of my jeans. Anybody wearing size 36x32??",
//     amount: "about 10 pair",
//     location: "Roswell",
//     user_id: 6,
//     contact: "504-555-2478",
//   },
//   {
//     material_id: 6,
//     description:
//       "We just shut our doors, and have to purge a ton of paperwork after a nasty audit. Please come recycle all this waste paper!",
//     amount: "2 tall file cabinets worth",
//     location: "Kennesaw",
//     user_id: 9,
//     contact: "lara_fuller@aol.com",
//   },
//   {
//     material_id: 11,
//     description:
//       "After a failed solar storage experiment, I have fried all of these batteries. Maybe they are still good for something? What wiz kid can make use of them?",
//     amount: "6 car batteries",
//     location: "Canton",
//     user_id: 12,
//     contact: "323-555-9846",
//   },
//   {
//     material_id: 8,
//     description:
//       "We just remodeled our kitchen, and have this old dishwasher sitting out on the curb. Still in working order!",
//     amount: "1 unit 48h 36w 29d",
//     location: "Marietta",
//     user_id: 8,
//     contact: "678-555-4727",
//   },
//   {
//     material_id: 4,
//     description:
//       "Got the old rims up for grabs. 15in and only on is rusty! Does the job for any trailer or tow behind.",
//     amount: "Set of 4 rims",
//     location: "Dunwoody",
//     user_id: 7,
//     contact: "spikeL33@hotmail.com",
//   },
//   {
//     material_id: 9,
//     description:
//       "We just demo'ed old tile on a pool job, up for grabs to any facility with the ability to process crushed concrete.",
//     amount: "1 dumpster load",
//     location: "Cumming",
//     user_id: 11,
//     contact: "340-555-1196",
//   },
//   {
//     material_id: 10,
//     description:
//       "Our shop has been collecting used motor oil for year, and with some refinement, it can be repurposed. We do not have the necessary equipment.",
//     amount: "3 drums",
//     location: "Buford",
//     user_id: 10,
//     contact: "sam_delano@yahoo.com",
//   },
// ];
