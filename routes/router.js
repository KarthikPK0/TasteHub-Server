const express = require('express')
const menuController = require('../controllers/menuController')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/wishlistController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const cartController = require('../controllers/cartController')


const router = new express.Router()

// get all menu
router.get('/all-menu',menuController.getAllMenuController)

// view menu
router.get('/:id/view-menu',menuController.viewMenuController)

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

// add to wishlist
router.post('/addToWishlist', jwtMiddleware, wishlistController.addToWishlistController)

// get wishlist
router.get('/get-Wishlist', jwtMiddleware, wishlistController.getWishlistController)

// remove wishlist
router.delete('/wishlist/:id/remove', jwtMiddleware, wishlistController.removeWishlistController)

// add to cart
router.post('/addToCart', jwtMiddleware, cartController.addToCart)

// get cart
router.get('/get-cart', jwtMiddleware, cartController.getCart)

// remove cart item
router.delete('/cart/:id/remove', jwtMiddleware, cartController.removeCartItem)

// increment cart quantity
router.get('/cart/:id/increment', jwtMiddleware, cartController.incrementCart)

// decrement cart quantity
router.get('/cart/:id/decrement', jwtMiddleware, cartController.decrementCart)

// empty cart
router.delete('/empty-cart', jwtMiddleware, cartController.emptyCart)

 

module.exports = router