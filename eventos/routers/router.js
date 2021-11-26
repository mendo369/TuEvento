const { Router } = require('express');
const router = Router();
var eventoC = require('../controllers/eventsC');
//C=Controller
router.delete('/delete:id', eventoC.Deleteevento);
router.get('/evento', eventoC.BuscarUsuario); 
router.get('/evento/:name', eventoC.BuscarUsurioName);
router.post('/UV', eventoC.Login);
router.post('/created', eventoC.saveevento);
router.put('/update:id', eventoC.Updateevento);

module.exports = router;
