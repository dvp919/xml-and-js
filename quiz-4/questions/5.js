/**
 * Function to get vehicle object by VIN
 * - should return a promise
 * - should reject if no VIN passed
 *   error message: "No VIN provided"
 * - should reject if no matches found
 *   error message: "No items matching ${vin}"
 * @param {*} data - see shape in ../../data.example.json
 * @returns vehicle object
 */
const getEmailDomains = (data) => {
    return new Promise((resolve, reject) => {
      const domains = data.map((data) =>
        data.email.slice(data.email.indexOf("@") + 1)
      );
      resolve([...new Set(domains)]);
    });
};
module.exports = getEmailDomains;
