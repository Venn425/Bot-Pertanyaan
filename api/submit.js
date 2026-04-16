export default function handler(req, res) {
    if (req.method === "POST") {
        const { nama, email, pesan } = req.body;

        return res.status(200).json({
            success: true,
            message: "Pesan berhasil dikirim!"
        });
    }

    // HANDLE GET
    if (req.method === "GET") {
        return res.status(200).json({
            message: "API aktif"
        });
    }

    res.status(405).json({
        message: "Method tidak diizinkan"
    });
}