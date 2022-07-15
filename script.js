function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()
msg.innerHTML = `It is now ${hora} hours and ${minuto} minutes.`
if (hora >= 0 && hora < 12){
    // good morning
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    // good afternoon
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
} else {
    // good night
    img.src = 'noite.png'
    document.body.style.background = '#515154'
}
}
