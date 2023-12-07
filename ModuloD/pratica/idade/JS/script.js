function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length==0 || Number(fano.value)>ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-h.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','imagens/jovem-h.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','imagens/adulto-h.png')
            }else if(idade>=50){
                //véio
                img.setAttribute('src','imagens/idoso-h.png')
            }
        }
        else if(fsex[1].checked){
            genero='Mulher'
            if(idade>=0 && idade<10){
                //criança
                img.setAttribute('src','imagens/bebe-m.png')
            }else if(idade<21){
                //jovem
                img.setAttribute('src','imagens/jovem-m.png')
            }else if(idade<50){
                //adulto
                img.setAttribute('src','imagens/adulto-m.png')
            }else{
                //véio
                img.setAttribute('src','imagens/idoso-m.png')
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}