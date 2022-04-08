const autosController = require('../controllers/autos.controller');



module.exports = (app) => {
    app.get('/api/autos', autosController.list);
    app.get('/api/auto/:id', autosController.getById);
    app.post('/api/auto', autosController.create);
    app.put('/api/auto/:id', autosController.update);
    app.delete('/api/auto/:id', autosController.remove);

}