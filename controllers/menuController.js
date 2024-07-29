const menus = require('../models/menuModel') 
 
// get all menu
exports.getAllMenuController = async (req,res) => {
    console.log(`Inside getAllMenuController `);
    try{
        const allMenu = await menus.find()
        res.status(200).json(allMenu)
    }catch(err){
        res.status(401).json(err)
    }
}

// view menu
exports.viewMenuController = async (req,res) => {
    console.log(`Inside viewMenuController`);
    const {id} = req.params
    try{
        const singleMenu = await menus.findOne({id})
        res.status(200).json(singleMenu)
    }catch(err){
        res.status(401).json(err)
    }
}
 