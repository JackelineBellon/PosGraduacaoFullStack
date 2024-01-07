let employees = [];
let roles = [];
let selectedItem;
const listE1 = document.querySelector("ul");
const formE1 = document.querySelector("form");
const bDelete = document.getElementById("bDelete");
const bCancel = document.getElementById("bCancel");
const bSubmit = document.getElementById("bSubmit");

async function init() {
  [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
  renderRoles();
  renderData();
  clearSelection();
  bCancel.addEventListener("click", clearSelection());
  formE1.addEventListener("submit", onSubmit());
  bDelete.addEventListener("click", onDelete());
}
init();

function selectItem(employee, li) {
  clearSelection();
  selectedItem = employee;
  li.classList.add("selected");
  formE1.name.value = employee.name;
  formE1.salary.valueAsNumber = employee.salary;
  formE1.role_id.value = employee.id_role;
  bDelete.style.display = "inline";
  bCancel.style.display = "inline";
  bSubmit.textContent = "Update";
}

function clearSelection() {
  clearError();
  selectedItem = undefined;
  const li = listE1.querySelector(".selected");
  if (li) {
    li.classList.remove("selected");
  }

  formE1.name.value = "";
  formE1.salary.value = "";
  formE1.role_id.value = "";
  bDelete.style.display = "none";
  bCancel.style.display = "none";
  bSubmit.textContent = "Create";
}

async function onSubmit(evt) {
  evt.preventDefault();
  const employeeData = {
    name: formE1.name.value,
    salary: formE1.salary.valueAsNumber,
    role_id: +formE1.role_id.value,
  };

  if (!employeeData.name || !employeeData.salary || !employeeData.role_id) {
    showError("You must fill all form fields");
  } else {
    if (selectedItem) {
      const updatedItem = await updateEmployee(selectItem.id, employeeData);
      const i = employees.indexOf(selectItem);
      employees[i] = updatedItem;
      renderData();
      selectItem(updatedItem, listE1.children[i]);
    } else {
      const createdItem = await createEmployee(employeeData);
      employees.push(createdItem);
      renderData();
      selectItem(createdItem, listE1.lastChild);
      listE1.lastChild.scrollIntoView();
    }
  }
}

async function onDelete() {
  if (selectedItem) {
    await deleteEmployee(selectItem.id);
    const i = employees.indexOf(selectItem);
    employees.splice(i, 1);
    renderData();
    clearSelection();
  }
}

function renderData() {
  listE1.innerHTML = "";
  for (const employee of employees) {
    let role = roles.find((role) => role.id == employee.role_id);
    const li = document.createElement("li");
    const divName = document.createElement("div");
    divName.textContent = employee.name;
    const divRole = document.createElement("div");
    divRole.textContent = role.name;
    li.appendChild(divName);
    li.appendChild(divRole);
    listE1.appendChild(li);

    li.addEventListener("click", () => selectItem(employee, li));
  }
}

function renderRoles() {
  for (const role of roles) {
    const option = document.createElement("option");
    option.textContent = role.name;
    option.value = role.id;
    const divName = document.createElement("div");
    formE1.role_id.appendChild(option);
  }
}

function showError(message, error) {
  document.getElementById("errors").textContent = message;
  if (error) {
    console.log(error);
  }
}

function clearError() {
  document.getElementById("errors").textContent = "";
}
