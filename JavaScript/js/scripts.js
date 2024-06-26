// for(let i = 1; i <= 10; i++){
//     alert('SENAI nº' + i);
// }

let inputMail = document.getElementById('email')
inputMail.style.border = '3px solid orangered'

let inputPassword = document.getElementById('password')
inputPassword.style.border = '3px solid orangered'

let labels = document.getElementsByTagName('label')
for(let i = 0; i < labels.length; i++){
    labels[i].style.fontWeight = 'bold'
    labels[i].style.fontFamily = 'Tahoma'

    labels[i].ondblclick = function () {
        alert("Clina não mané!")
    }
}

let title = document.getElementById('title')
title.textContent = 'Bem vindo'
title.style.fontWeight = 'bold'
title.style.fontFamily = 'Tahoma'

let forgotPassword = document.createElement('a')
forgotPassword.style.padding = '10px'
forgotPassword.style.textDecoration = 'none'
forgotPassword.style.color = 'bisque'
forgotPassword.href = 'forgot.html'
forgotPassword.innerHTML = 'Esqueci a senha...'


let card = document.getElementById('card')
card.appendChild(forgotPassword)

