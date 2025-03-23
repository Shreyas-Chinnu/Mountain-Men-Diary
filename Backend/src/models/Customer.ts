import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    milkRequests: [{
        date: { type: Date, default: Date.now },
        quantity: { type: Number, required: true },
    }]
});

const Customer = mongoose.model('Customer', CustomerSchema);
export default Customer;