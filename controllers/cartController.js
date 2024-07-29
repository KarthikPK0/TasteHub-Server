const cartItems = require('../models/cartModel')

//add to cart
exports.addToCart = async (req, res) => {
    const { id, name, image, price, quantity } = req.body
    const userId = req.payload.userId
    try {
        const existingMenu = await cartItems.findOne({ id, userId })

        if (existingMenu) {
            existingMenu.quantity += 1
            existingMenu.totalPrice = existingMenu.totalPrice = existingMenu.quantity * existingMenu.price
            await existingMenu.save()
            res.status(200).json(`Items added to your cart...`)
        } else {

            const newMenu = new cartItems({
                id, name, price, image, quantity, totalPrice: price, userId
            })
            await newMenu.save()
            res.status(200).json(`Item added to your cart...`)

        }

    } catch (err) {
        res.status(401).json(err)
    }
}

//get cart
exports.getCart = async (req, res) => {
    const userId = req.payload.userId
    try {
        const allMenu = await cartItems.find({ userId })
        res.status(200).json(allMenu)

    } catch (err) {
        res.status(401).json(err)
    }
}

//remove cart
exports.removeCartItem = async (req, res) => {
    const { id } = req.params
    try {
        const removedItem = await cartItems.findByIdAndDelete({ _id: id })
        res.status(200).json(removedItem)

    } catch (err) {
        res.status(401).json(err)
    }
}

//empty cart
exports.emptyCart = async (req,res) => {
    const userId = req.payload.userId
    try {

        const result = await cartItems.deleteMany({ userId })
        res.status(200).json(`All items removed successfully!!`)


    } catch (err) {
        res.status(401).json(err)
    }
}

//increment cart quantity
exports.incrementCart = async (req,res) => {
    const {id} = req.params

    try{
        const selectedMenu = await cartItems.findOne({_id:id})
        selectedMenu.quantity += 1
        selectedMenu.totalPrice = selectedMenu.quantity * selectedMenu.price
        await selectedMenu.save()
        res.status(200).json(selectedMenu)

    }catch(err){
        res.status(401).json(err)
    }
}

//decrement cart quantity
exports.decrementCart = async (req,res) => {
    const {id} = req.params

    try{
        const selectedMenu = await cartItems.findOne({_id:id})
        selectedMenu.quantity -= 1
       if(selectedMenu.quantity == 0){
            await cartItems.deleteOne({_id:id})
            res.status(200).json(`Item removed!!`)
       }else{
        selectedMenu.totalPrice = selectedMenu.quantity * selectedMenu.price
        await selectedMenu.save()
        res.status(200).json(selectedMenu)
       }

    }catch(err){
        res.status(401).json(err)
    }
}



