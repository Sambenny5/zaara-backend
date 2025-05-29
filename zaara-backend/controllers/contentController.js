import Content from "../models/Content.js";

export const getContent = async (req, res) => {
  try {
    const contentItems = await Content.find().sort({ date: -1 });
    res.json(contentItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createContent = async (req, res) => {
  const { type, title, description, fileUrl } = req.body;
  try {
    const newContent = new Content({ type, title, description, fileUrl });
    const saved = await newContent.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};