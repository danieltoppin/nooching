const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});
//creating model class
mongoose.model("users", userSchema);
