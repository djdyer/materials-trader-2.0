const db = require("../config/connection");
const { User, Material, Listing } = require("../models");
const materialData = require("./materialData");
const userData = require("./userData");
const listingData = require("./listingData");
const { forEach } = require("./materialData");

db.once("open", async () => {
  try {
    await Material.deleteMany();
    const materials = await Material.create(materialData);
    console.log("materials seeded");

    await User.deleteMany();
    const users = [];

    for (let i in userData) {
      users.push(await User.create(
        userData[i],
      ));
    }
    console.log("users seeded");

    await Listing.deleteMany();
    const listings = [];

    for (let i in listingData) {
      listings.push(await Listing.create(
        {
          ...listingData[i],
          user_Id: users[i].id,
          materials_Id: materials[i].id
        }
      ))
    }
    console.log("listings seeded");

    await User.deleteMany();

    for (let i in userData) {
      await User.create({
        ...userData[i],
        listings: listings[i]._id
      }
      );
    }

    console.log("users updated");

  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  process.exit(0);
});
