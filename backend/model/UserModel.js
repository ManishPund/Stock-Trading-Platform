const { model } = require("mongoose");
const { userSchema } = require("../schemas/UserSchema");

const UserModel = new model("user", userSchema);

module.exports = { UserModel };
