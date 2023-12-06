function carregar(){
    var msg=document.querySelector('div#msg')
    var img=document.querySelector('img#img')
    var data =new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas<br>`

    if(hora >= 0 && hora<12){
        //dia!
        msg.innerHTML += 'bom dia!'
        img.src= 'imagens/manha.png'
        document.body.style.background = '#C2D3E6'
    }else if(hora >=12 && hora <18){
        //tarde!
        msg.innerHTML += 'boa tarde!'
        img.src= 'imagens/tarde.png'
        document.body.style.background = '#F0BB6C'
    }else{
        //noite!
        msg.innerHTML += 'boa noite!'
        img.src= 'imagens/noite.png' 
        document.body.style.background = '#B7A9C3' 
    }
}