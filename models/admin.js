const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admindata = new Schema({
  username: String ,
  email:String,
  password: String
});

const admin = mongoose.model('admin',admindata)
module.exports=admin