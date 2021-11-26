var moongose = require('mongoose');
var Schema = moongose.Schema;
var EV = new Schema({
    email: {type: String, require : true},
    nameEvent: {type: String, require : true},
    activo : {type: Boolean, require : true, default: active},
    ubicacion: {type: String, require : true},
});

const evento = moongose.model("evento", EV);

module.exports = evento;