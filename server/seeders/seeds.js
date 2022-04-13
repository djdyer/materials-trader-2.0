const db = require("../config/connection");
const { User, Material, Listing } = require("../models");
const materialData = require("./materialData");
const userData = require("./userData");
const listingData = require("./listingData");

db.once("open", async () => {
  try {
    await Material.deleteMany();
    await Material.create(materialData);

    await User.deleteMany();
    await User.create(userData);

    await Listing.deleteMany();
    await Listing.create(listingData);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("materials seeded");
  console.log("users seeded");
  console.log("listings seeded");

  process.exit(0);
});
