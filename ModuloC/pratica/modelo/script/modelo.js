function carregar(){
    var msg=document.querySelector('div#msg')
    var img=document.getElementById('img')
    var data =new Date()
    //var hora = data.getHours()
    var hora=11
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora<12){
        //dia!
        img.src= 'manha.png'
        document.body.style.background = '#C2D3E6'
    }else if(hora >=12 && hora <18){
        //tarde!
        img.src= 'tarde.png'
    }else{
        //noite!
        img.src= 'noite.png'  
    }
}