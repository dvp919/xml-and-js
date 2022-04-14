const loadData = () =>
  new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ({ target }) => {
      if (target.readyState == 4 && target.status == 200) {
        resolve(JSON.parse(target.response));
      }
    };
    xhttp.open(
      "GET",
      `https://6253799f90266e3d0e0373e6.mockapi.io/ok/user`,
      true
    );
    xhttp.send();
  });


loadData().then((data) => {

  const user_data = data.map(user = user.address[0]);
  // render data in html table
  const tableBody = document.getElementById("table-body");

  if (!tableBody) {
    throw new Error("No table element found");
  }




  const rows = data.reduce(
    (acc, {id,country, state, city, zipcode, userId}) =>
      acc + 
      `<tr>
      <td>${id}</td>
        <td>${country}</td>
        <td>${state}</td>
        <td>${city}</td>
        <td>${zipcode}</td>
        <td>${userId}</td>
    </tr>`,
    ``
  );



  tableBody.innerHTML = rows;

});


