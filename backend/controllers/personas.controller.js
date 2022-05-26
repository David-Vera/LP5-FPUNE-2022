// Llamada del modelo personas
const { Personas } = require('../models/personas.model')


//Consulta por correo y pass
function ingreso(req, res){

    console.log('test', req.body);

    var params = req.body;

    if(params.correo && params.pass){

        
      Personas.findOne({ where: { 
            per_correo: params.correo,
            per_password: params.pass
        } })
     

        .then(personaIngresar => {

            if (personaIngresar != null){

                res.status(200).send({personaIngresar});

            } else {
                res.status(500).send({msg : 'La persona no existe ...!'});
            }
     
        })
        .catch(err => {
            res.status(500).send({msg : 'Error de consulta...!'});
        });
   }else{
      res.status(200).send({
        msg : 'El email y contraseña del usuario es obligatorio'
      });
    }
}

// Guardar persona
function create(req, res){

    console.log(req.body);

    Personas.create(req.body)
    .then(persona=>{
        console.log('ok ');
        res.status(200).send({persona});
    })
    .catch(err=>{
        res.status(500).send({msg : 'No ha guardado la persona...!'});
    })

}

// Actualizar persona
function update(req, res){
    var id = req.params.id;

    Personas.findOne({ where: { per_codigo: id } })
    
    .then(persona => {
        if (persona != null) {
            persona.update(req.body)
            .then(() => {
                res.status(200).send({persona});
            })
            .catch(err => {
                res.status(500).send({err});
            })
        } else {
            res.status(500).send({msg : 'La persona ' + id + ' no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}



// Buscar persona por codigo

function getById(req, res){

    var id = req.params.id;
    
    Personas.findOne({ where: { per_codigo: id } })
    .then(persona=>{
        res.status(200).send({persona});
    })
    .catch(err=>{
        res.status(500).send({err});
    })

}

// Eliminar persona por codigo 
function remove(req, res){
   
    var id = req.params.id;

    Personas.findOne({ where: { 
        per_codigo: id,
    } })
    
    .then(personaBuscar => {

        if (personaBuscar != null){
            Personas.destroy({
                where: {
                    per_codigo : id,
                }
            })
            .then(persona => {
                res.status(200).send({persona});
            })
            .catch(err => {
                res.status(500).send({message:"Ocurrio un error al eliminar la persona"});
            })
        } else {
            res.status(500).send({msg : 'La persona ' + id + ' no existe...!'});
        }
    })
    .catch(err => {
        res.status(500).send({err});
    });
}

// FUNCTION DE LISTA DE TODAS LAS PERSONAS

function list(req, res){
   
    Personas.findAll()
    
    .then(personalista => {
        res.status(200).send({personalista});
      
    })
    .catch(err => {
        res.status(500).send({msg : 'no existe personas'});
    });
}

module.exports={
    list, getById, create, update, remove, ingreso
}