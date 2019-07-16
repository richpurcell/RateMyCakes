const mongoose = require('mongoose');

// This is how we connect to the mongodb database using mongoose -- "cake_review" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/cake_review');



const ReviewSchema = new mongoose.Schema({
    stars: {type: Number, required: true},
    review: {type: String, required: [true, "The review text is required"], minlength: [5, "The review length must be at least 5 characterts"]},
    // created_at: {type: Date, default: Date()},
    // updated_at: {type: Date, default: Date()},
}, {timestamps: true})
mongoose.model('Review', ReviewSchema);
var Review = mongoose.model('Review');


const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: [true, "Baker name is required"], minlength: [5, "The Bakers name must be at least 5 characters"]},
    imageUrl: {type: String, required: [true, "ImageUrl is required"], minlength: 11},
    created_at: {type: Date, default: Date()},
    updated_at: {type: Date, default: Date()},
    reviews: [ReviewSchema]
})
mongoose.model('Cake', CakeSchema);
var Cake = mongoose.model('Cake');


module.exports = {cake: Cake, review: Review};
