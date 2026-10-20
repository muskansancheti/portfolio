const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// =========================
// CV DOWNLOAD ROUTES
// =========================

app.get("/api/cv/pdf", (req, res) => {
  const filePath = path.join(
    __dirname,
    "files",
    "Muskan_Sancheti_CV.pdf"
  );

  res.download(filePath, "Muskan_Sancheti_CV.pdf");
});

app.get("/api/cv/docx", (req, res) => {
  const filePath = path.join(
    __dirname,
    "files",
    "Muskan_Sancheti_CV.docx"
  );

  res.download(filePath, "Muskan_Sancheti_CV.docx");
});

// =========================
// CONTACT FORM
// =========================

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

// =========================
// CONNECT TO MONGODB
// =========================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error);
  });