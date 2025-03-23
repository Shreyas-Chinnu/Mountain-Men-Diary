import { Schema, model, Document } from 'mongoose';

interface IMilkProduction extends Document {
  date: string;
  quantity: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  deliveryTime: '06:00-08:00' | '16:00-18:00';
  farmer: Schema.Types.ObjectId; // Reference to the farmer who added the production
}

const milkProductionSchema = new Schema<IMilkProduction>({
  date: { type: String, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  deliveryTime: { type: String, enum: ['06:00-08:00', '16:00-18:00'], required: true },
  farmer: { type: Schema.Types.ObjectId, ref: 'Farmer', required: true },
});

export default model<IMilkProduction>('MilkProduction', milkProductionSchema);