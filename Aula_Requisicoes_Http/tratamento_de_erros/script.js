function fetchJson(url) {
  return fetch(url).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error(r.statusText);
    }
  });
}

function solution2() {
  fetchJson("http://localhost:3000/employess")
    .then((employees) => {
      fetchJson("http://localhost:3000/roles")
        .then((roles) => {
          let table = renderTable(employees, roles);
          document.getElementById("app").innerHTML = table;
        })
        .catch(showError());
    })
    .catch(showError())
    .finally(() => {
      console.log("carregou");
    });
}

function solution3() {
  Promise.all([
    fetchJson("http://localhost:3000/employess"),
    fetchJson("http://localhost:3000/roles"),
  ]).then(([employees, roles]) => {
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  }, showError());
}

async function solution4() {
  try {
    let employees = await fetchJson("http://localhost:3000/employess");
    let roles = await fetchJson("http://localhost:3000/roles");
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  } catch (error) {
    showError(error);
  }
}
solution4();

async function solution5() {
  try {
    let [employees, roles] = await Promise.all([
      fetchJson("http://localhost:3000/employess"),
      fetchJson("http://localhost:3000/roles"),
    ]);
    let table = renderTable(employees, roles);
    document.getElementById("app").innerHTML = table;
  } catch (error) {
    showError(error);
  } finally {
    console.log("Carregou");
  }
}

function renderTable(employees, roles) {
  let rows = employees.map((employee) => {
    let role = roles.find(role.id == employee.role_id);
    return `<tr><td>${employee.id}</td> <td>${employee.name}</td>  <td>${role.name}</td></tr>`;
  });
  return `<table>${rows.join("")}</table>`;
}

function showError(error) {
  document.getElementById("app").innerHTML = "Erro ao carregar dados!";
}
