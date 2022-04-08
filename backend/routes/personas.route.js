const personasController = require('../controllers/personas.controller');



module.exports = (app) => {
    app.get('/api/personas', personasController.list);
    app.get('/api/persona/:id', personasController.getById);
    app.post('/api/persona', personasController.create);
    app.put('/api/persona/:id', personasController.update);
    app.delete('/api/persona/:id', personasController.remove);
    app.post('/api/personaIngreso', personasController.ingreso);
}