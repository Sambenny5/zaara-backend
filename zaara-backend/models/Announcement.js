import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
  imageUrl: String,
  redirectUrl: String,
});

const Announcement = mongoose.model("Announcement", announcementSchema);
export default Announcement;