// Llamada del modelo reservas
const { Reservas } = require('../models/reservas.model')
const { sequelize } = require('../config/bd.service');
const sqlString = require('sqlstring');

// Guardar reserva
function create(req, res){

    Reservas.create(req.body)
    .then(reserva=>{
        res.status(200).send({reserva});
    })
    .catch(err=>{
        res.status(500).send({msg : 'No ha guardado la reserva...!'});
    })

}

// Actualizar reserva
function update(req, res){
    var id = req.params.id;

    Reservas.findOne({ where: { res_persona: id } })
    
    .then(reserva => {
        if (reserva != null) {
            reserva.update(req.body)
            .then(() => {
                res.status(200).send({reserva});
            })
            .catch(err => {
                res.status(500).send({err});
            })
        } else {
            res.status(500).send({msg : 'La reserva ' + id + ' no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}



// Buscar reserva por codigo

function getById(req, res){
    var id = req.params.id;
    
    Reservas.findOne({ where: { res_codigo: id } })
    .then(reserva=>{
        res.status(200).send({reserva});
    })
    .catch(err=>{
        res.status(500).send({err});
    })

}

// Eliminar reserva por codigo 
function remove(req, res){
   
    var id = req.params.id;

    Reservas.findOne({ where: { 
        res_codigo: id,
    } })
    
    .then(reservaBuscar => {

        if (reservaBuscar != null){
            Reservas.destroy({
                where: {
                    res_codigo : id,
                }
            })
            .then(reserva => {
                res.status(200).send({reserva});
            })
            .catch(err => {
                res.status(500).send({message:"Ocurrio un error al eliminar la reserva"});
            })
        } else {
            res.status(500).send({msg : 'La reserva ' + id + ' no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}

// FUNCTION DE LISTA DE TODAS LAS reservas

function list(req, res){

    Reservas.findAll()
    
    .then(reservalista => {
        res.status(200).send({reservalista});
      
    })
    .catch(err => {
        res.status(500).send({msg : 'no existe reservas'});
    });
}

async function listReserva (req, res){

    var estado = req.params.estado;
    let result = null;

    var sql = 'select r.res_monto_pagar, r.res_fecha, r.res_estado, a.aut_descripcion, a.aut_ano, a.aut_marca  ' +
    'from reservas r ' +
    'inner join autos a on a.aut_codigo = r.res_auto where r.res_estado = '+ sqlString.escape(estado);

    result = await sequelize.query(sql);
    
    let reservas = result[0];
   
    if(reservas != null){
        res.status(200).send({reservas});
    }else{
        res.status(500).send({msg : 'no existe reservas'});
    }
   
}

module.exports={
    list, getById, create, update, remove, listReserva
}