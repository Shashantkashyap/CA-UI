// pages/api/newsletter.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required.' });
  }

  // For demo: store in a JSON file. Replace with DB or 3rd-party API in production.
  const filePath = path.join(process.cwd(), 'data', 'newsletter.json');
  let subscribers = [];
  try {
    if (fs.existsSync(filePath)) {
      subscribers = JSON.parse(fs.readFileSync(filePath));
    }
    if (subscribers.some((s) => s.email === email)) {
      return res.status(400).json({ error: 'Email already subscribed.' });
    }
    subscribers.push({ email, createdAt: new Date() });
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));
    return res.status(200).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    return res.status(500).json({ error: 'Failed to subscribe.' });
  }
}
