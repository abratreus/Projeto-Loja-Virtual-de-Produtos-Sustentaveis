let btn = document.getElementById("button")
let div = document.getElementById("perfil")

function cadastrar(){
  let nome = document.getElementById("username")
  let email = document.getElementById("email")
  if (nome==""||" "||nome.length<=3||IsEmail(email)==false){
    alert("Escreva um Nome ou um Email válido")
  }
}
function inprimir(){

}
function error(){

}
function IsEmail(email){
  let exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
  let check=/@[w-]+./;
  let checkend=/.[a-zA-Z]{2,3}$/;
  if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
  else {return true;}
}
btn.addEventListener('click', cadastrar)