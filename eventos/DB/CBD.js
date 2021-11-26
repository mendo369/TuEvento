var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }, (err, res) =>{
    if(err){
        console.log('la conexion a la base de datos fue incorrecta...');
        throw err;
    }else{
        console.log('la conexion a la base de datos fue correcta...');
    }
});

module.exports = mongoose;