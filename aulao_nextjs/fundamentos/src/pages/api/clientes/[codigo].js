export default function handler(req, res) {
    const codigo = req.query.codigo
    res.status(200).json({
        id: req.query.id,
        name: `John Doe ${codigo}`,
    })
}