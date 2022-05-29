const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReportSchema = new Schema({
   user:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
   reportNo: { type: Number, required: true },
   description: { type: String, required: true },
   medication: { type: String, required: true },
   date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('report', ReportSchema);
