const wishlists = require('../models/wishlistModel');

// add to wishlist
exports.addToWishlistController = async (req,res) => {
    console.log('Inside addToWishlistController');
    const { id, name, price, description, category, image, rating} = req.body
    const userId = req.payload.userId;

    try{

        const existingMenu = await wishlists.findOne({id,userId})
        if(existingMenu){
          res.status(406).json('Item already in your wishlist!!')
        }else{

            const newMenu = new wishlists({
                id, name, price,  description, category, image, rating, userId
            })
            await newMenu.save()
            res.status(200).json(newMenu)

        }

    }catch(err){
        res.status(401).json(err)
    }
}

// get wishlist
exports.getWishlistController = async (req,res) => {
    console.log('Inside addToWishlistController');
    const userId = req.payload.userId
    try{ 
        const allMenu = await wishlists.find({userId})
        res.status(200).json(allMenu)

    }catch(err){
        res.status(401).json(err)
    }
}

// remove wishlist item
exports.removeWishlistController = async (req,res) => {
    console.log('Inside removeWishlistController');
    const {id} = req.params
    try{ 
        const removeItem = await wishlists.findByIdAndDelete({_id:id})
        res.status(200).json(removeItem)

    }catch(err){
        res.status(401).json(err)
    }
}