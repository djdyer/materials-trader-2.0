const db = require("../config/connection");
const { User, Material, Listing, Comment } = require("../models");
const materialData = require("./materialData");
const userData = require("./userData");
const listingData = require("./listingData");

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

    await Comment.deleteMany();
    const comments = [];

      for (let i in userData) {
        comments.push(await Comment.create(
            {comment: `This is a comment no: ${"000"+i}`,
            user_Id: users[i].id,
          }
        ))
      }
      console.log("comments seeded");

      await Listing.deleteMany();
      const listings = [];

      for (let i in listingData) {
        listings.push(await Listing.create(
          {
            ...listingData[i],
            user_Id: users[i].id,
            materials_Id: materials[i].id,
            comments_Id: comments[i].id
          }
        ))
      }

    
      console.log("listings seeded");

      for (let i in users) {
        await User.findOneAndUpdate(
          { _id: users[i].id },
          { $addToSet: { listings_id: listings[i].id } },
        );
      }

      console.log("users updated");

    } catch (err) {
      console.log(err);
      process.exit(1);
    }

    process.exit(0);
  });
