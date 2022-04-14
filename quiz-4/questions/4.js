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
const getByVIN = (data, vin) => {

    

        for(let item of data){
        const vehicles = item.vehicle;
        vehicle_list = vehicles.filter(item =>item.vin == vin);
        }

return vehicle_list;
};

module.exports = getByVIN;
