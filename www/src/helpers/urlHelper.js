const secrets = require('../secrets.json');
 
module.exports = {
  getSpotifyAuthorizeUrl() {
    return `${secrets.Base_Url}/authorize?client_id=${secrets.Client_Id}&response_type=${secrets.Response_Type}&redirect_uri=${secrets.Redirect_Url}&scope=${secrets.Scopes}`;
  }
}