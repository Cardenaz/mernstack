const express = require('express'); 
const router = express.Router(); 
const Item = require('../../models/Item');

//@route get
router.get('/', (req, res) => {
    Item.find().sort({date: -1}).then(items => res.json(items)); 
}); 
// @route post 
router.post('/', (req, res) =>  {
    const newItem = new Item({
        name: req.body.name,
    }); 
newItem.save().then(item => res.json(item)); 
});
// @route delete
router.delete('/:id', (req, res) =>  {
    //req.params.id gets the id from the uri.
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false})); 
});
module.exports = router; 



