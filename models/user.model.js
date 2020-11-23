const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userschema = new schema({
    username: { type: String, required: true},
    age : {type: String, required: true},
    email: {type: String, required: true}
},{
    timestamps: true
});
const user = mongoose.model('User', userschema);
module.exports = user;
