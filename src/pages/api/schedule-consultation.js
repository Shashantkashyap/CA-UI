// pages/api/schedule-consultation.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, date, time } = req.body;
  if (!name || !email || !date || !time) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // For demo: store in a JSON file. Replace with DB in production.
  const filePath = path.join(process.cwd(), 'data', 'consultations.json');
  let consultations = [];
  try {
    if (fs.existsSync(filePath)) {
      consultations = JSON.parse(fs.readFileSync(filePath));
    }
    consultations.push({ name, email, date, time, createdAt: new Date() });
    fs.writeFileSync(filePath, JSON.stringify(consultations, null, 2));
    return res.status(200).json({ message: 'Consultation scheduled successfully!' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save consultation.' });
  }
}
