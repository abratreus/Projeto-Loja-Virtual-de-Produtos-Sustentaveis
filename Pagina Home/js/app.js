// Obtendo as referências às divs e ao botão
let btn = document.getElementById("liveAlertBtn");
let div = document.getElementById("perfil");
let cad = document.getElementById("cadastro");
let mss = document.getElementById("message");

function imprimir() {
  let nome = document.getElementById('username').value;
  let email = document.getElementById("email").value;

  // Adiciona a classe 'd-none' à div de cadastro e remove da div de perfil
  cad.classList.add('d-none');
  div.classList.remove('d-none');

  // Atualiza o conteúdo da div de perfil
  div.innerHTML = `
    <label>Username:</label><br>
    <h2>${nome}</h2><br>

    <label for="email">Email:</label><br>

    <h2>${email}</h2>

  `
}

// Função de validação de e-mail
const validacaodoemail = (email) => {
  let validacao = /\S+@\S+\.\S+/;
  return validacao.test(email);
};

// Função para limpar os campos
function clear() {
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("username").focus();
}
function clearModal(){
  document.getElementById('message-text').value=""
}

// Adicionando Event Listener ao botão
btn.addEventListener('click', function (event) {
  let email = document.getElementById("email").value;
  let respostaEmail = validacaodoemail(email);

  if (respostaEmail) {
    imprimir();
    clear();
  } else {
    alert('e-mail inválido');
  }
  event.preventDefault();
});
// modal
const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', event => {

    // Update the modal's content.
    const modalTitle = exampleModal.querySelector('.modal-title')

    modalTitle.textContent = `New message to Support`
  }
)
clearModal()
}
mss.addEventListener('click', clearModal)