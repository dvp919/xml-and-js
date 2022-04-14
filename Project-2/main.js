const { getAllDealers, getDealerById } = require("./api/dealer");

const renderTable = (data) => {
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }
  
  const rows = data.reduce(
    (acc, { id, first_name, last_name, email, gender, car, car_year, ip_address, company, cost}) =>
      acc +
      `<tr>
        <td>${id}</td>
        <td>${first_name}</td>
        <td>${last_name}</td>
        <td>${email}</td>
        <td>${gender}</td>
        <td>${car}</td>
        <td>${car_year}</td>
        <td>${ip_address}</td>
        <td>${company}</td>
        <td>${cost}</td>
    </tr>`,
    ``
  );

  tableBody.innerHTML = rows;
};



getAllDealers().then(({ data }) => renderTable(data));  

const onSubmit = (event) => {
  event.preventDefault();
  const term = event.target.filters.value;
  const cars_brand = event.target.cars_brand.value;
  const valueTerm = event.target.input.value;
  
  if(term === `id`) {
    getDealerById(valueTerm).then(({ data }) => renderTable(data));
  } else {
    getAllDealers(term, cars_brand.toLowerCase(), valueTerm.toLowerCase()).then(({ data }) => renderTable(data));
  }
};

const onReset = () => {
  window.location.replace(window.location.pathname);
  getAllDealers().then(({ data }) => renderTable(data));
};

document.getElementById("myForm").addEventListener("submit", onSubmit);
document.getElementById("myForm").addEventListener("reset", onReset);