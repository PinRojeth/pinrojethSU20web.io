function showFormData(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let salary = document.getElementById("salary").value;
  let hireDate = document.getElementById("hireDate").value;  

  let formatedSalary = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(salary);

  // Get Alert Box
  let alertBox = document.getElementById("formAlert");

  alertBox.innerHTML = `
   <div class="d-flex justy-content-between align-items-center">
        <strong>Form Submitted!</strong>
        <button
          type="button"
          class="btn-close"
          onclick="hideAlert()"
          aria-label="Close"
        ></button>
      </div>
      <hr />
      <p><b>Name: </b>${name}</p>
      <p><b>email: </b>${email}</p>
      <p><b>Salary: </b>${formatedSalary}</p>
      <p><b>Hire Date: </b>${hireDate}</p>
  `;
  // Show Alert
  alertBox.classList.remove("d-none");
  alert(
    "Form Submitted!\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Salary: " + formatedSalary + "\n" +
    "Hire Date: " + hireDate
  );
}


function hideAlert() {
  // instead of remove and just hide it
  document.getElementById("formAlert").classList.add("d-none");
}
