import mongoose from 'mongoose';

const DeliveryRequestSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    farmerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Farmer', required: true },
    quantity: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Processing', 'Delivered'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('DeliveryRequest', DeliveryRequestSchema);
