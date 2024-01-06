function fetchJson(url) {
  return fetch(url).then((r) => {
    return r.json();
  });
}

//dessa forma estaremos executando a o roles depois de employess, com isso na solução 5
//iremos ver como resolver e faze a execução em paralelo.
async function solution4() {
  let employees = await fetchJson("http://localhost:3000/employess");
  let roles = await fetchJson("http://localhost:3000/roles");
  let table = renderTable(employees, roles);
  document.getElementById("app").innerHTML = table;
}
solution4();

async function solution3() {
  let [employees, roles] = await Promise.all([
    fetchJson("http://localhost:3000/employess"),
    fetchJson("http://localhost:3000/roles"),
  ]);
  let table = renderTable(employees, roles);
  document.getElementById("app").innerHTML = table;
}

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find(role.id == employee.role_id);
    return `<tr><td>${employee.id}</td> <td>${employee.name}</td>  <td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}
