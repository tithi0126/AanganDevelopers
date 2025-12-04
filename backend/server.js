import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRouter from './src/routes/contact.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || '*'
  })
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'aangan-backend' });
});

app.use('/api/contact', contactRouter);

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('Missing MONGODB_URI environment variable');
}

mongoose
  .connect(mongoUri, { dbName: process.env.MONGODB_DB || 'aangan_developers' })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
    process.exit(1);
  });


