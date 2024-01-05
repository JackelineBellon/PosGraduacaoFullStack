function solution1() {
  let employeesPromisse = fetch("http://localhost:3000/employess");

  employeesPromisse.then((resp) => {
    resp.json().then((employees) => {
      let rolesPromisse = fetch("http://localhost:3000/roles");
      employeesPromisse.then((respRoles) => {
        respRoles.json().then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        });
      });
    });
  });
}

function fetchJson(url) {
  return fetch(url).then((r) => {
    return r.json();
  });
}

//esse caso só é util quando a proxima requisão depende da anterior.
//Caso contrario da para fazer em paralelo conforme feito na solução 3
function solution2() {
  fetchJson("http://localhost:3000/employess").then((employees) => {
    fetchJson("http://localhost:3000/roles").then((roles) => {
      let table = renderTable(employees, roles);
      document.getElementById("app").innerHTML = table;
    });
  });
}

function solution3() {
  Promise.all([
    fetchJson("http://localhost:3000/employess"),
    fetchJson("http://localhost:3000/roles"),
  ]).then(([employees, roles]) => {
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  });
}

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find(role.id == employee.role_id);
    return `<tr><td>${employee.id}</td> <td>${employee.name}</td>  <td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}
