const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

module.exports = mongoose.model('Item', itemSchema);
