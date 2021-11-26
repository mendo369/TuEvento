const { response } = require("express");
const { find } = require("../models/events");
const evento = require("../models/events");


async function BuscarUsurioName(req, res){
    const name = req.params.name; 
    try { 
        const eventodb =  await evento.find({"fullName": name }); 
        if (eventodb){
            res.json(eventodb)
        }
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error })
    } 
}

async function BuscarUsuario(req, res){
    try{
        const eventodb = await evento.find();
        res.json(eventodb)
    }catch(error){
        return res.status(400).json({ joa : 'ha ocurrido un error'})
    }
}

function saveevento(req,res){
    var newUsuer= new evento(req.body);
    newevento.save((err,result)=>{
    res.status(200).send({message:result});
    });
    }


//Actualizar usuario
async function Updateevento(req, res){ 
    const _id = req.params.id; 
    const body = req.body; 
    try { 
        const usuarioDB = await Usuario.findByIdAndUpdate(_id, body, {new: true}); 
        res.json(usuarioDB); 
    } catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error', error }) 
    } 
}

function Deleteevento(req, res){

    var idevento=req.params.id;
    evento.findByIdAndRemove(idevento, function(err, evento){
        if(err) {
            return res.json(500, {
            message: 'No hemos encontrado el usuario'
            })
        }else{
            if(!idevento){
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
        const eventodb =  await evento.findOne({email});
        res.json({login : true});
        if (eventodb && password == eventodb.password){
                res.json({login : true});
        }else{
            res.json({login : false});
        }
    } 
    catch (error) { 
        return res.status(400).json({ mensaje: 'Ocurrio un error'})
    } 
}


module.exports = {BuscarUsurioName, BuscarUsuario, Updateevento, Deleteevento, saveevento, Login};