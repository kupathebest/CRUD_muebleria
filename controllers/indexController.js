module.exports = {
    index: (req,res) => {
        return res.render('index')
    },
    prueba: (req, res) => {
        return res.send(req.body)
    },
    indice: (req, res) => {
        return res.render('indice')
    }
}