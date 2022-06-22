const reservasController = require('../controllers/reservas.controller');



module.exports = (app) => {
    app.get('/api/reservas', reservasController.list);
    app.get('/api/reservas-cliente/:estado/:id', reservasController.listReservaCliente);
    app.get('/api/reservas-empresa/:estado/:id', reservasController.listReservaEmpresa);
    app.get('/api/reserva/:id', reservasController.getById);
    app.post('/api/reserva', reservasController.create);
    app.put('/api/reserva/:id', reservasController.update);
    app.delete('/api/reserva/:id', reservasController.remove);
}