const orphanages = require('./database/fakedata.js')

module.exports = { // essa linha exporta esse objeto

    index: function(req, res) { // aplicando a função como uma propriedade
        /* const city = req.query.city
        return res.render('index', { city }) */ // colocando o nome da cidade por meio da url

        return res.render('index')
    },

    orphanages(req, res) {
        return res.render('orphanages', { orphanages })
    },

    orphanage (req, res) {
        return res.render('orphanage')
    },

    createOrphanage (req, res) {
        return res.render('create-orphanage')
    }

}