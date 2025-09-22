const formColaborador = document.getElementById("form-colaborador");

formColaborador.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formColaborador.checkValidity()) {
    formColaborador.reportValidity();
    return;
  }

  const nome = document.getElementById("nome").value;
  const inicio = document.getElementById("inicio").value;
  const email = document.getElementById("email").value;
  const cargo = document.getElementById("cargo").value;
  const roleBuddy = document.getElementById("role-buddy").value;
  const cultureBuddy = document.getElementById("culture-buddy").value;

  console.log(nome, inicio, email, cargo, roleBuddy, cultureBuddy);

  formColaborador.reset();
});
