const dealers = require("../data/mock_data.json");

const getAllDealers = (term, selling, cars_brand, valueTerm) =>
  new Promise((resolve) => {
    let data = dealers;

    if(term) {

        switch(term) {
            case "first_name":
                data = data.filter((dealer) => dealer.first_name.toLowerCase().includes(valueTerm));
                break;
            case "last_name":
                data = data.filter((dealer) => dealer.last_name.toLowerCase().includes(valueTerm));
                break;
            case "gender":
                data = data.filter((dealer) => dealer.gender.toLowerCase() === valueTerm.toLowerCase());
                break;
            case "email":
                data = data.filter((dealer) => dealer.email.toLowerCase().includes(valueTerm));
                break;
            case "car":
                data = data.filter((dealer) => dealer.car.toLowerCase().includes(valueTerm));
                break;
            case "car_year":
                data = data.filter((dealer) => dealer.car_year.toLowerCase().includes(valueTerm));
                break;
            case "ip_address":
                data = data.filter((dealer) => dealer.ip_address.includes(valueTerm));
                break;    
            default:
                //Pass it empty
                break;
        }
    }

    // check status
    if(selling && selling != "none") {
        selling = (selling == "selling") ? true : false;
        data = data.filter(({is_selling}) => selling === is_selling);
      }
    
    
    if(cars_brand && cars_brand != "all") {
        data = data.filter((dealer) => dealer.comapny.toLowerCase() === cars_brand);
    }
    
    resolve({ code: 200, data: data });
  });

const getDealerById = (id) =>
  new Promise((resolve) => {
    const dealer = dealers.find((dealer) => dealer.id === Number(id.trim()));

    if (dealer) {
        resolve({ code: 200, data: Array(dealer) });
    } else {
        resolve({
            code: 404,
            data: { message: `No car found for id ${id}` },
        });
    }
  });

module.exports = {
  getAllDealers,
  getDealerById,
};