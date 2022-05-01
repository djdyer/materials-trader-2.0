const db = require("../config/connection");
const { User, Material, Listing } = require("../models");
const materialData = require("./materialData");
const userData = require("./userData");
const listingData = require("./listingData");

db.once("open", async () => {
  try {
    await Material.deleteMany();
    const materials = await Material.create(materialData);
    console.log("materials:", materials);

    await User.deleteMany();
    const users = await User.create(userData);
    console.log("users:", users);

    await Listing.deleteMany();
    const listings = await Listing.create(listingData);
    console.log("listing:", listings);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("materials seeded");
  console.log("users seeded");
  console.log("listings seeded");

  process.exit(0);
});
