const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    userId: {
        type: String,
        required: true
    }
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

module.exports = Wishlist;
