import mongoose from 'mongoose';

const milkProductionSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  quality: {
    type: String,
    enum: ['A', 'B', 'C'],
    required: true
  },
  notes: String
});

export default mongoose.models.MilkProduction || mongoose.model('MilkProduction', milkProductionSchema);