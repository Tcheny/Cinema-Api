import mongoose from "mongoose";

let Schema = mongoose.Schema;
let CinemaSchema = new Schema({
  title: String,
  autor: String,
  type: String
});

module.exports = mongoose.model("Cinema", CinemaSchema);
