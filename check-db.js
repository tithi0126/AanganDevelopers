import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Lead from './backend/src/models/Lead.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, 'backend/.env') });

async function checkLeads() {
    const mongoUri = process.env.MONGODB_URI;
    try {
        await mongoose.connect(mongoUri, { dbName: process.env.MONGODB_DB || 'aangan_developers' });
        console.log('Connected to MongoDB');

        const leads = await Lead.find().sort({ createdAt: -1 }).limit(5);
        console.log('--- Latest 5 Leads ---');
        if (leads.length === 0) {
            console.log('No leads found.');
        } else {
            leads.forEach((l, i) => {
                console.log(`${i + 1}. Name: ${l.name}, Email: ${l.email}, CreatedAt: ${l.createdAt}`);
            });
        }
        await mongoose.connection.close();
    } catch (err) {
        console.error('Error:', err.message);
    }
}

checkLeads();
