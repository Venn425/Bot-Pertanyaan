export default function handler(req, res) {
    if (req.method === "POST") {
        return res.status(200).json({
            success: true,
            message: "Pesan berhasil dikirim!"
        });
    }

    if (req.method === "GET") {
        return res.status(200).json({
            message: "API aktif"
        });
    }

    return res.status(405).json({
        message: "Method tidak diizinkan"
    });
}