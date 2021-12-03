const mongoose = require('mongoose')


const vmSchema = new mongoose.Schema({
    nom: {type: String},
	adresseIP:{type: String},
    system:{type: String},
    etat:{type: String},
	

	


})








module.exports = mongoose.model('vm', vmSchema)