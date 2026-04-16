export default async function handler(req, res) {
    if (req.method === "POST") {
        const { nama, email, pesan } = req.body;

        const message = `
📩 Pertanyaan Baru:
👤 Nama: ${nama}
📧 Email: ${email}
💬 Pesan: ${pesan}
        `;

        await fetch(`https://api.telegram.org/bot8761048983:AAHDX6MXBGFOm7R_eXLXrMnzVTQCgifJ4Lg/sendMessage`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: "7955039754",
                text: message
            })
        });

        return res.status(200).json({
            success: true,
            message: "Pesan terkirim ke Telegram!"
        });
    }

    return res.status(405).json({
        message: "Method tidak diizinkan"
    });
}