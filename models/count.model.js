const mongoose = require("mongoose");
const schema = mongoose.Schema;

const countSchema = new schema({
    username: { type: String, required: true},
    count:{type: Number}
},{
    timestamps: true
});
const count = mongoose.model('count', countSchema);
module.exports = count;
