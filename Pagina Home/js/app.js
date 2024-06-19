// Obtendo as referências às divs e ao botão
let btn = document.getElementById("liveAlertBtn");
let div = document.getElementById("perfil");
let cad = document.getElementById("cadastro");
let mss = document.getElementById("message");

function imprimir() {
  let nome = document.getElementById('username').value;
  let email = document.getElementById("email").value;
  localStorage.setItem('username', nome);
  localStorage.setItem('email', email);



  // Adiciona a classe 'd-none' à div de cadastro e remove da div de perfil
  cad.classList.add('d-none');
  div.classList.remove('d-none');

  // Atualiza o conteúdo da div de perfil
  div.innerHTML = `
    <h1>Perfil</h1>
    <a target="_blank" href="../Pagina do Perfil/index.html" class="text-decoration-none text-reset"><h5 class="font-monospace">Ver Pagina do Perfil</h5></a>
    <label>Username:</label><br>
    <h5>${nome}</h5><br>

    <label for="email">Email:</label><br>

    <h5>${email}</h5>

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
function clearModal() {
  document.getElementById('message-text').value = ""
  alert("Mensagem enviada, espere 5 dias úteis")
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
}
mss.addEventListener('click', clearModal)
// alert
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('E-mail inválido. Por favor, insira um e-mail válido.', 'danger');
  })
}
// perfil
