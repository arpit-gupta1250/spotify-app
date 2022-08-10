const axios = require('axios');
const env = require('../config/env');
const db = require('../secrets');

module.exports = {
  async saveAuthorizationToken(authorizationCode) {
    const authorizationToken = await getAuthorizationToken(authorizationCode);
    const userEmail = await getUserEmail(authorizationToken);
    db.push({ email: userEmail, token: authorizationToken });
    return { email: userEmail, message: "success" };
  },
};

async function getAuthorizationToken(authorizationCode) {
  const payload = {
    grant_type: env.Spotify_Grant_Type,
    code: authorizationCode,
    redirect_uri: env.Redirect_Url,
    client_id: env.Client_Id,
    client_secret: env.Client_Secret,
  };

  const response = await axios.post(
    env.Spotify_Token_Url,
    new URLSearchParams(payload),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data.access_token;
}

async function getUserEmail(authorizationToken) {
  const response = await axios.get(
    "https://api.spotify.com/v1/me",
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authorizationToken}`
      }
    }
  );
  return response.data.email;
}
