const Item = require('../models/itemModel');

exports.getItems = async (req, res) => {
    const items = await Item.find();
    res.json(items);
};

exports.addItem = async (req, res) => {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
};

exports.deleteItem = async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
};
