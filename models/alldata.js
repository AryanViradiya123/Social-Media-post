const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alldatadata = new Schema({
    userid : {
    type: Schema.Types.ObjectId, ref: 'user',
    required : true
    },
    adminid : {
      type: Schema.Types.ObjectId, ref: 'admin',
      required : true
    },
    homeid : {
      type: Schema.Types.ObjectId, ref: 'home',
      required : true
    },
    Status: {
    type: String,
    enum : ["homepage","search","post","profile"],
    default : "homepages",
    required : true
    } 
});

const alldata = mongoose.model('alldata',alldatadata)
module.exports=alldata