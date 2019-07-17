// since the logic is in the controller.js file we must require './controller'
// This is analogous to an import statement in python
const controller = require('./controller');

// This is analagous to the urls.py file in Django
module.exports = function(app) {
    app.get('/cakes', controller.allCakes); // Retrieve all Cakes
    app.get('/cakes/:id', controller.get_cake); // Retrieve a Cake by ID
    app.post('/cakes', controller.add_cake); // Create a Cake
    // app.put('/cakes/:id', controller.update_cake); // Update a Cake by ID
    app.put('/cakes/:id', controller.add_cake_review); // Update Cake by adding a Review
    app.delete('/cakes/:id', controller.delete_cake); // Delete a Cake by ID
}