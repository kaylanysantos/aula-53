const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-active"); // Adiciona ou remove a classe que exibe o menu
});

function Cadastro () {
  document.getElementById("name").value 
  document.getElementById("email").value

constCadastro = document.getElementById("name").value;
constCadastro = document.getElementById("email").value;

Cadastro.addEventListener("submit",function (event){
  event.preventDefault(value);
  validarFormulario;
})
}

const email = "exemplo@gmail.com";
const regex = /^[A-Za-z]{3,}$/;


if(regex.test(email)) {
  console.log("E-mail Válido!");

} else{
  console.log("E-mail Inválido!");
}
