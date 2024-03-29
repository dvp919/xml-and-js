/**
 * Function to get array of all states.
 * - with no duplicates
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of strings, e.g ["value1", "value2"]
 */

const data_check = require("../data.example.json");

const getAllStates = (data) => 
new Promise((resolve) => {
    
    resolve(data.filter((user) => user.data));

});

module.exports = getAllStates;
