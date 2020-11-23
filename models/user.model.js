const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userschema = new schema({
    username: { type: String, required: true}
},{
    timestamps: true
});
const user = mongoose.model('user', userschema);
module.exports = user;
