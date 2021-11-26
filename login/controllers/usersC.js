const { response } = require("express");
const { find } = require("../models/users");
const user = require("../models/users");



async function BuscarUsurioName(req, res){
    const name = req.params.name; 
    try { 
        const userdb =  await user.find({"fullName": name }); 
        if (userdb){
            res.json(userdb)
        }
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    } 
}

async function BuscarUsuario(req, res){
    try{
        const userdb = await user.find();
        res.json(userdb)
    }catch(error){
        return res.status(400).json({ joa : 'ha ocurrido un error'})
    }
}

function saveUser(req,res){
    var newUsuer= new user(req.body);
    newUser.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }


//Actualizar usuario
async function UpdateUser(req, res){ 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const usuarioDB = await Usuario.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(usuarioDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
}

function DeleteUser(req, res){

    var iduser=req.params.id;
    user.findByIdAndRemove(iduser, function(err, user){
        if(err) {
            return res.json(500, {
            message: 'No hemos encontrado el usuario'
            })
        }else{
            if(!iduser){
                res.status(404).send({message:'El registro a buscar no se encuentra disponible'});
            }else{
            res.status(200).send({result});
                }
            }
    }                       );
}

async function Login(req, res){
    const { password, email } = req.body;
    try { 
        const userdb =  await user.findOne({email});
        if (userdb && password == userdb.password){
                res.json({login : true});
        }else{res.json({login : false});}
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    } 
}


module.exports = {BuscarUsurioName, BuscarUsuario, UpdateUser, DeleteUser, saveUser, Login};