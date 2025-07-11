require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;
const SERVICE_ACCOUNT = require('./service-account.json');

// Initialize Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: SERVICE_ACCOUNT,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Token endpoint
app.get('/get-token', async (req, res) => {
  try {
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();
    res.json({ access_token: accessToken.token });
  } catch (error) {
    console.error('Error getting access token:', error);
    res.status(500).json({ error: 'Failed to get access token' });
  }
});

// Webhook for Telegram
app.post('/webhook', async (req, res) => {
  const { secret } = req.query;
  if (secret !== process.env.WEBHOOK_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Handle Telegram updates here
  console.log('Telegram update:', req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
