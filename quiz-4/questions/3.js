/**
 * Function to get username and total age of user's vehicles
 * - should return a promise
 * @param {*} data - see shape in ../../data.example.json
 * @returns Array of objects:
 * [{
 *  userName - string,
 *  totalAgent - number
 * }]
 */
const getUserNameAndVehicleAge = async (data) => {

    //arrays
    const finalarray=[] ;

    //user list and calculate age
    const userListAge = data.reduce((finalarray,user)=>{
    
        let acc = 0;
        acc = user.vehicle.reduce((acc,x) => {
            return acc+x.age;
        },0)
    

    finalarray.push({userName : user.userName,
        totalAge : acc
    });

    return finalarray

},[]);

return userListAge;

};

module.exports = getUserNameAndVehicleAge;
