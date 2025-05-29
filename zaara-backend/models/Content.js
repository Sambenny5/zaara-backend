import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  fileUrl: String,
  date: { type: Date, default: Date.now },
});

const Content = mongoose.model("Content", contentSchema);
export default Content;