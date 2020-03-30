const db = require("../models");
const axios = require('axios');
const API_key = "AIzaSyBJvXcfJNaDOF8TLcw3XC-qm5CovQPgXpU";

module.exports = {
    // Make a request for a user with a given ID
    findAll: function(req, res) {
        const { query: params } = req;
        axios.get("https://www.googleapis.com/auth/books/key=" + API_key, {params})
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}
};
