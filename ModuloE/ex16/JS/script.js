function verificar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let intervalo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if(inicio.value.length==0 || fim.value.length==0 || intervalo.value.length==0){
        res.innerHTML='Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    }else{
        res.innerHTML=`Contando:<br>`
        let i =Number(inicio.value)
        let f =Number(fim.value)
        let p =Number(intervalo.value)//
        if(p<=0){
            window.alert('passo inválido! Considerando INTERVALO=1')
            p=1
        }
        if(i<f){//contagem crescente
            for(let c = i;c <= f;c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{//contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML+= `\u{1F3C1}`
    }
}