function fetchJson(url, option) {
  return fetch(url, option)
    .then((r) => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error(r.statusText);
      }
    })
    .catch((error) => {
      showError("Error loading data", error);
      throw error;
    });
}

const baseUrl = "http://localhost:3000";

function listEmployees() {
  return fetchJson(`${baseUrl}/employess`);
}

function listRoles() {
  return fetchJson(`${baseUrl}/roles`);
}

function updateEmployee(employee) {
  return fetchJson(`${baseUrl}//employees/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

function updateEmployee(employee) {
  return fetchJson(`${baseUrl}/employees/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
}

function updateEmployee(id) {
  return fetchJson(`${baseUrl}/employees/${id}`, {
    method: "DELETE",
  });
}
