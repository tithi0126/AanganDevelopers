import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    company: { type: String, trim: true },
    summary: { type: String, required: true, trim: true },
    source: { type: String, default: 'website' }
  },
  {
    timestamps: true
  }
);

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;


