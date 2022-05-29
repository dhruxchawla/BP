const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
   name: { type: String, required: true },
   email: { type: String, required: true, unique:true },
   age: { type: Number, required: true },
   gender: {type: String, required: true },
   bloodGrp: {type: String, required: true },
   aadharNo: { type: Number, required: true },
   phone: { type: Number, required: true },
   password: { type: String, required: true },
   date: { type: Date, default: Date.now },
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
