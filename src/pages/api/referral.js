// pages/api/referral.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { referrerName, referrerEmail, referralName, referralEmail, type } = req.body;
  if (!referrerName || !referrerEmail || !referralName || !referralEmail || !type) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // For demo: store in a JSON file. Replace with DB in production.
  const filePath = path.join(process.cwd(), 'data', 'referrals.json');
  let referrals = [];
  try {
    if (fs.existsSync(filePath)) {
      referrals = JSON.parse(fs.readFileSync(filePath));
    }
    referrals.push({ referrerName, referrerEmail, referralName, referralEmail, type, createdAt: new Date() });
    fs.writeFileSync(filePath, JSON.stringify(referrals, null, 2));
    return res.status(200).json({ message: 'Referral submitted successfully!' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save referral.' });
  }
}
