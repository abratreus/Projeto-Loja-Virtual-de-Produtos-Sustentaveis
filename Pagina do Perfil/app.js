  let userPerfil = localStorage.getItem('username')
  let emailPerfil = localStorage.getItem('email')

document.getElementById('username').innerHTML=`
  <h4>Username:${userPerfil}</h4>
  `
document.getElementById('email').innerHTML=`
  <h4>Email:${emailPerfil}</h4>
  `