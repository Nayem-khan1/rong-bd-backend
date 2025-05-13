import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    items: {type: Array, required: true},
    amount: {type: Number, required: true},
    address: {type: String, required: true},
    status: {type: String, required: true, default: 'Order Placed'},
    paymentMethod: {type: String, required: true},
    payment: {type: Number, required: true, default: false},
    createdAt: {type: Number, required: true},
})

const orderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default orderModel;