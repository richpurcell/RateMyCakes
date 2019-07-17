const my_modules = require('./models');
const Cake = my_modules.cake;
const Review = my_modules.review;

module.exports = {
    allCakes: (req, res)=>{ // Retrieve all Cakes
        Cake.find({})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    get_cake: (req, res)=>{ // Retrieve a Cake by ID
        console.log('The Cake id requested is:', req.params.id);
        Cake.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    add_cake: (req, res)=>{ // Create a Cake
        var cake = new Cake(req.body);
        console.log('The Cake obj requested is:', req.body);
        cake.save(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    update_cake: (req, res)=>{ // Update a Cake by ID
        console.log('The Cake id requested is:', req.params.id);
        Cake.findByIdAndUpdate(req.params.id, {$set:req.body})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    add_cake_review: (req, res)=>{ // Add a Review to a Cake using the ID
        console.log('The Cake id requested is:', req.params.id);
        Cake.findByIdAndUpdate(req.params.id, {$push: {reviews: {stars: req.body.stars, review: req.body.review}}})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    delete_cake: (req, res)=>{ // Delete a Cake by ID
        console.log('The Cake id requested is:', req.params.id);
        Cake.remove({_id: req.params.id})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
}