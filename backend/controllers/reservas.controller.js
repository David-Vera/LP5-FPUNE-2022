// Llamada del modelo reservas
const reservas = require('../models').reservas.model;

// Guardar reserva
function create(req, res){

    console.log(req.body);

    reservas.create(req.body)
    .then(reserva=>{
        console.log('ok ');
        res.status(200).send({reserva});
    })
    .catch(err=>{
        res.status(500).send({msg : 'No ha guardado la reserva...!'});
    })

}

// Actualizar reserva
function update(req, res){
    var id = req.params.id;

    reservas.findOne({ where: { per_codigo: id } })
    
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
    
    reservas.findOne({ where: { per_codigo: id } })
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

    reservas.findOne({ where: { 
        per_codigo: id,
    } })
    
    .then(reservaBuscar => {

        if (reservaBuscar != null){
            reservas.destroy({
                where: {
                    per_codigo : id,
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
   


    reservas.findAll()
    
    .then(reservalista => {
        res.status(200).send({reservalista});
      
    })
    .catch(err => {
        res.status(500).send({msg : 'no existe reservas'});
    });
}

module.exports={
    list, getById, create, update, remove
}