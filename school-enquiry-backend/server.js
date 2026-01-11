// server.js – Production Ready for Render

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { google } = require("googleapis");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

/* ---------------- Middleware ---------------- */
// Allow your frontend domain
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://littlejuniordps.com',
    'https://www.littlejuniordps.com'
  ],
  credentials: true
}));
app.use(express.json());

/* ---------------- Email Transport ---------------- */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

transporter.verify(() => {
  console.log("✅ Email transporter ready");
});

/* ---------------- Google Sheets Setup ---------------- */
const fs = require("fs");

// For Render: Use environment variable if available, else fall back to file
let auth;

if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
  // In production (Render), use environment variable
  console.log("🔑 Using service account from environment variable");
  const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
} else {
  // In development, use file
  const SERVICE_ACCOUNT_PATH = path.join(__dirname, "service-account.json");
  console.log("📁 Looking for service account at:", SERVICE_ACCOUNT_PATH);
  
  if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
    console.error("❌ File not found at:", SERVICE_ACCOUNT_PATH);
    process.exit(1);
  }
  
  console.log("✅ Service account file found!");
  auth = new google.auth.GoogleAuth({
    keyFile: SERVICE_ACCOUNT_PATH,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

const sheets = google.sheets({ version: "v4", auth });

const SHEET_ID = process.env.SHEET_ID || "1-lbK08_JbKTPZiJaUw56XvHqLBojKabd0kU1buSH2r8";

/* ---------------- Health Check ---------------- */
app.get("/", (req, res) => {
  res.json({ 
    status: "✅ Server is running!",
    message: "Little Junior DPS Backend API",
    timestamp: new Date().toISOString()
  });
});

/* ---------------- Test Endpoint ---------------- */
app.get("/test-sheets", async (req, res) => {
  try {
    console.log("🧪 Testing Google Sheets connection...");
    const response = await sheets.spreadsheets.get({
      spreadsheetId: SHEET_ID,
    });
    
    console.log("✅ Connection successful!");
    res.json({ 
      success: true, 
      sheetTitle: response.data.properties.title,
      message: "✅ Google Sheets connection working!"
    });
  } catch (error) {
    console.error("❌ Sheets test failed:", error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message,
      hint: "Check: 1) Service account credentials correct? 2) Service account has Editor access?"
    });
  }
});

/* ---------------- Enquiry API ---------------- */
app.post("/api/enquiry", async (req, res) => {
  try {
    console.log("\n🔥 Received enquiry:", req.body);

    const {
      childName,
      childAge,
      parentName,
      phone,
      email,
      class: className,
      message,
    } = req.body;

    if (!childName || !childAge || !parentName || !phone) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ 
        success: false,
        error: "Missing required fields" 
      });
    }

    const timestamp = new Date().toLocaleString("en-IN", { 
      timeZone: "Asia/Kolkata" 
    });

    console.log("📝 Writing to Google Sheets...");
    
    // Write to Google Sheets
    const sheetsResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Sheet1!A:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          timestamp,
          childName,
          childAge,
          parentName,
          phone,
          email || "",
          className || "",
          message || ""
        ]],
      },
    });

    console.log("✅ Sheets write successful!");
    console.log("   Updated:", sheetsResponse.data.updates.updatedCells, "cells");

    // Send email to school
    console.log("📧 Sending email to school...");
    await transporter.sendMail({
      from: `"Little Junior DPS" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📋 New Enquiry from ${parentName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5;">
          <div style="background: white; padding: 30px; border-radius: 10px; max-width: 600px;">
            <h2 style="color: #ff6b35;">📋 New School Enquiry</h2>
            <p style="color: #666; font-size: 14px;">${timestamp}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            
            <h3 style="color: #333;">👶 Child Information</h3>
            <p><strong>Name:</strong> ${childName}</p>
            <p><strong>Age:</strong> ${childAge} years</p>
            <p><strong>Class:</strong> ${className || "Not specified"}</p>
            
            <h3 style="color: #333; margin-top: 30px;">👨‍👩‍👧 Parent Information</h3>
            <p><strong>Name:</strong> ${parentName}</p>
            <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>Email:</strong> ${email || "Not provided"}</p>
            
            <h3 style="color: #333; margin-top: 30px;">💬 Message</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
              ${message || "No message provided"}
            </p>
            
            <hr style="border: 1px solid #eee; margin: 30px 0;">
            <p style="color: #999; font-size: 12px;">
              This enquiry has been saved to Google Sheets
            </p>
          </div>
        </div>
      `,
    });

    console.log("✅ Email sent successfully!\n");

    res.json({ 
      success: true,
      message: "Enquiry submitted successfully" 
    });

  } catch (error) {
    console.error("\n❌ ERROR:", error.message);
    console.error("Full error:", error);

    res.status(500).json({ 
      success: false, 
      error: error.message
    });
  }
});

/* ---------------- Start Server ---------------- */
app.listen(PORT, () => {
  console.log("\n" + "=".repeat(50));
  console.log("🚀 Server running on port:", PORT);
  console.log("📊 Sheet ID:", SHEET_ID.substring(0, 20) + "...");
  console.log("📧 Email:", process.env.EMAIL_USER);
  console.log("🌍 Environment:", process.env.NODE_ENV || "development");
  console.log("=".repeat(50) + "\n");
});
