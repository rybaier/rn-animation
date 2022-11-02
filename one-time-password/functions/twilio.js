const twilio = require('twilio')
// accountSID and AUTHTOKEN in .env remove before git push 
const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN

module.exports = new twilio.Twilio(accountSid, authToken);