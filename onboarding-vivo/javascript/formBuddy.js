const formBuddy = document.getElementById("form-buddy");

formBuddy.addEventListener("submit", (event) => {
  event.preventDefault();

  //prevent form send if it has errors
  if (!formBuddy.checkValidity()) {
    formBuddy.reportValidity();
    return;
  }

  const nome = document.getElementById("nome-buddy").value;
  const cargo = document.getElementById("cargo-buddy").value;
  const tipo = document.getElementById("tipo-buddy").value;
  const linkedin = document.getElementById("linkedin-buddy").value;
  const email = document.getElementById("email-buddy").value;

  console.log(nome, cargo, tipo, linkedin, email);

  formBuddy.reset();
});
