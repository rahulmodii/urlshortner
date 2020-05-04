const mongoose = require('mongoose');
const urlschema = new mongoose.Schema({
    ip: { type: String },
    url: { type: String },
    shortcode:{type:String}
}, {
    timestamps: true
})

module.exports = mongoose.model('UrlSchema', urlschema);    