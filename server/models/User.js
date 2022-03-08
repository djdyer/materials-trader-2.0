const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    // firstName: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    // lastName: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    // email: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   match: [/.+@.+\..+/, 'Must use a valid email address'],
    // },
    // password: {
    //   type: String,
    //   required: true,
    //   minlength: 5
    // },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;

// ==================================================================

// [
//   {
//     "id": 1,
//     "username": "SallyJesse",
//     "email": "sally.J1971@gmail.com",
//     "password": "password123"
//   },
//   {
//     "id": 2,
//     "username": "MikeBoogie",
//     "email": "michealboo@hotmail.com",
//     "password": "password123"
//   },
//   {
//     "id": 3,
//     "username": "ArmandGee",
//     "email": "ag1990@aol.com",
//     "password": "password123"
//   },
//   {
//     "id": 4,
//     "username": "JohnnyLaw",
//     "email": "john_bravo47@yahoo.com",
//     "password": "password123"
//   },
//   {
//     "id": 5,
//     "username": "MaggieLee",
//     "email": "maggieLee123@gmail.com",
//     "password": "password123"
//   },
//   {
//     "id": 6,
//     "username": "RobVaz",
//     "email": "robbie_vasquez@aol.com",
//     "password": "password123"
//   },
//   {
//     "id": 7,
//     "username": "SpikeLean",
//     "email": "spikeL33@hotmail.com",
//     "password": "password123"
//   },
//   {
//     "id": 8,
//     "username": "Juli3Maz3",
//     "email": "julieM447@hotmail.com",
//     "password": "password123"
//   },
//   {
//     "id": 9,
//     "username": "myEarthShip",
//     "email": "lara_fuller@aol.com",
//     "password": "password123"
//   },
//   {
//     "id": 10,
//     "username": "mechanic_Sam",
//     "email": "sam_delano@yahoo.com",
//     "password": "password123"
//   },
//   {
//     "id": 11,
//     "username": "PoolsByBrett",
//     "email": "poolsbybrett@gmail.com",
//     "password": "password123"
//   },
//   {
//     "id": 12,
//     "username": "SolarStorm75",
//     "email": "nathan_solar75@aol.com",
//     "password": "password123"
//   }
// ]
