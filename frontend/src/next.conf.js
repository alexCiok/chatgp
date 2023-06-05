require("dotenv").config();

module.exports = {
    env: {
        FIREBASE_API_KEY : process.env.VUE_APP_FIREBASE_API_KEY,
    },
}