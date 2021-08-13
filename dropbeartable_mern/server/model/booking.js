const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    endAt: {type: Date, required: 'Date is required!'},
    startAt: {type: Date, required: 'Number Date is required!'},
    totalPrice: Number,
    days: Number,
    guests: Number,
    createdAt: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    
});

module.exports = mongoose.model('Booking', bookingSchema);