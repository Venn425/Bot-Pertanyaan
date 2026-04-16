const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = "8761048983:AAHDX6MXBGFOm7R_eXLXrMnzVTQCgifJ4Lg";
const CHAT_ID = "7955039754";

app.post("/pengaduan", async (req, res) => {
    const { nama, email, pesan } = req.body;

    const message = `
📢 PERTANYAAN BARU!

👤 Nama: ${nama}
📧 Email: ${email}
📝 Pertanyaan: ${pesan}
  `;

    try {
        await axios.post(
            `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
            {
                chat_id: CHAT_ID,
                text: message,
            }
        );

        res.json({ success: true, message: "Berhasil Dikirim" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(3000, () => console.log("Server jalan di 3000"));