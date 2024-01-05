let employeesPromisse = fetch("http://localhost:3000/employess");

employeesPromisse.then((resp) => {
  resp.json().then((employees) => {
    let table = renderTable(employees);

    //apesar de ter sido utilizado o innerHtml não é recomendado pois pode haver
    //algum cóigo malicioso aqui e comprometer a sua api ou site
    document.getElementById("app").innerHTML = table;
  });
});

function renderTable(employees) {
  let rows = employees.map((employee) => {
    return `<tr><td>${employee.id}</td> <td>${employee.name}</td> </tr>`;
  });

  return `<table>${rows.join("")}</table>`;
}
