const mongoose = require('mongoose');

const { Schema } = mongoose;
const itemSchema = new Schema({
  category : {
    type: String,
  },
  name : {
    type: String,
    required: true,
    unique: true,
  },
  checked : {
    type: Boolean,
  }, 
  url : {
    type: String,
  },
  pos : {
    type: String,
  },
});

module.exports = mongoose.model('item', itemSchema);