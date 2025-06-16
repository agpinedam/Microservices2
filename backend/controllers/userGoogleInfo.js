const { google } = require('googleapis');
const people = google.people('v1');

require('dotenv').config(); 

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const SCOPES = ['https://people.googleapis.com/userinfo.email'];

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
  res.send(`Tu email es: ${email}`);
};

module.exports = { getAuthUrl, handleOAuthCallback };
