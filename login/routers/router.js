const { Router } = require('express');
const router = Router();
var userC = require('../controllers/usersC');
//C=Controller
router.delete('/delete:id', userC.DeleteUser);
router.get('/user', userC.BuscarUsuario); 
router.get('/user/:name', userC.BuscarUsurioName);
router.post('/UV', userC.Login);
router.post('/created', userC.saveUser);
router.put('/update:id', userC.UpdateUser);

module.exports = router;
