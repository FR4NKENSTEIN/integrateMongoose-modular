const controller = require("./controller");// access controller functions

module.exports = function(app){
    app.get('/', controller.index)
    app.post('/users', controller.create)
    app.get('/success', controller.success)
}
// Export anything in this .exports function to another file "requiring" this file