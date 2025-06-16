const { google } = require('googleapis');
require('dotenv').config(); 

// Juste pour vérification (tu peux les retirer après)
console.log('CLIENT_ID:', process.env.CLIENT_ID);
console.log('CLIENT_SECRET:', process.env.CLIENT_SECRET);
console.log('REDIRECT_URI:', process.env.REDIRECT_URI);

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const SCOPES = ['https://www.googleapis.com/auth/userinfo.email'];

const getAuthUrl = (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  res.redirect(url);
};

const handleOAuthCallback = async (req, res) => {
  const { code } = req.query;
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);

  const people = google.people({ version: 'v1', auth: oauth2Client });
  const me = await people.people.get({
    resourceName: 'people/me',
    personFields: 'emailAddresses'
  });

  const email = me.data.emailAddresses?.[0]?.value || 'No email found';
  res.send(`Tu email est : ${email}`);
};

module.exports = { getAuthUrl, handleOAuthCallback };
