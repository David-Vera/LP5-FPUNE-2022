// Llamada del modelo autos
const autos = require('../models/autos.model');


// Guardar auto
function create(req, res){
    console.log(req.body);
    autos.create(req.body)
    .then(auto=>{

        res.status(200).send({
            success: 'OK',
            auto
        });
    })
    .catch(err=>{
        res.status(500).send({msg : 'No ha guardado la auto...!'});
    })

}

// Actualizar auto
function update(req, res){
    var id = req.params.id;

    autos.findOne({ where: { per_codigo: id } })
    
    .then(auto => {
        if (auto != null) {
            auto.update(req.body)
            .then(() => {
                res.status(200).send({
                    success: 'OK',
                    auto
                });
            })
            .catch(err => {
                res.status(500).send({err});
            })
        } else {
            res.status(500).send({msg : 'La auto ' + id + ' no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}



// Buscar auto por codigo

function getById(req, res){
    var id = req.params.id;
    
    autos.findOne({ where: { per_codigo: id } })
    .then(auto=>{
        res.status(200).send({
            success: 'OK',
            auto
        });
    })
    .catch(err=>{
        res.status(500).send({err});
    })

}

// Eliminar auto por codigo 
function remove(req, res){
   
    var id = req.params.id;

    autos.findOne({ where: { 
        per_codigo: id,
    } })
    
    .then(autoBuscar => {

        if (autoBuscar != null){
            autos.destroy({
                where: {
                    per_codigo : id,
                }
            })
            .then(auto => {
                res.status(200).send({
                    success: 'OK'
                });
            })
            .catch(err => {
                res.status(500).send({message:"Ocurrio un error al eliminar la auto"});
            })
        } else {
            res.status(500).send({msg : 'La auto ' + id + ' no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}

// FUNCTION DE LISTA DE TODAS LAS autos

function list(req, res){
   


    autos.findAll()
    
    .then(autolista => {
        res.status(200).send({
            success: 'OK',
            autolista
        });
      
    })
    .catch(err => {
        res.status(500).send({msg : 'no existe autos'});
    });
}

module.exports={
    list, getById, create, update, remove
}