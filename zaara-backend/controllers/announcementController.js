import Announcement from "../models/announcement.js";

export const getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ date: -1 });
    res.json(announcements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createAnnouncement = async (req, res) => {
  const { title, content, date, imageUrl, redirectUrl } = req.body;
  try {
    const newAnnouncement = new Announcement({
      title,
      content,
      date,
      imageUrl,
      redirectUrl,
    });
    const saved = await newAnnouncement.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
