const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homedata = new Schema({
  home: String,
  search:String,
  post: String,
  profile: String,
  status : {
    type: String,
    enum: ["homepage","search","post","profile"],
    default:"homepages"
  }
});

const home = mongoose.model('home',homedata)
module.exports=home