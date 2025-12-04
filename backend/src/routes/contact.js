import express from 'express';
import Lead from '../models/Lead.js';
import { sendInquiryEmail } from '../utils/sendEmail.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, company, summary } = req.body || {};

  if (!name || !email || !summary) {
    return res.status(400).json({ error: 'name, email, and summary are required' });
  }

  try {
    const lead = await Lead.create({
      name,
      email,
      company,
      summary
    });

    // Fire and forget email; do not block response on email errors.
    sendInquiryEmail({ name, email, company, summary }).catch((err) =>
      console.error('Email error', err)
    );

    return res.status(201).json({ message: 'Lead stored', leadId: lead._id });
  } catch (err) {
    console.error('Lead creation error', err);
    return res.status(500).json({ error: 'Failed to store lead' });
  }
});

// Simple admin-ready route to list leads later (protect with auth in real use).
router.get('/', async (_req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(50);
    return res.json(leads);
  } catch (err) {
    console.error('Lead fetch error', err);
    return res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

export default router;


