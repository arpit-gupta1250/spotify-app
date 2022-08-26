const axios = require('axios');

module.exports = {
  async logout(windowObj) {
    const loggedInEmail = windowObj.localStorage.getItem('loggedInEmail');
    removeEmailFromLocalStorage(windowObj);
    const result = await logoutUser(loggedInEmail);
    if (result.status !== 200) return false;
    return true;
  },

  getLoggedInUserEmail(windowObj) {
    return windowObj.localStorage.getItem("loggedInEmail");
  },

  setLoggedInUserEmail(windowObj, email) {
    windowObj.localStorage.setItem('loggedInEmail', email);
  },
};

function removeEmailFromLocalStorage(windowObj) {
  windowObj.localStorage.removeItem("loggedInEmail");
}

async function logoutUser(loggedInEmail) {
  return await axios.post('http://localhost:5000/logout', { loggedInEmail: loggedInEmail });
}