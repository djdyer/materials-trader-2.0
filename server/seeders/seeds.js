const db = require("../config/connection");
const { User, Material, Listing } = require("../models");
const materialData = require("./materialData");
const userData = require("./userData");
const listingData = require("./listingData");

db.once("open", async () => {
  await Material.deleteMany();
  const insertMaterial = await User.insertMany(materialData);
  console.log("materials seeded");

  await User.deleteMany();
  const insertUser = await User.insertMany(userData);
  console.log("users seeded");

  await Listing.deleteMany();
  const insertListing = await Listing.insertMany(listingData);
  console.log("listings seeded");

  process.exit();
});
