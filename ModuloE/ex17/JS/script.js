function tabuada(){
    let num = document.getElementById('txtn')
    let tab=document.getElementById('seltab')
    if(num.value.length==0){
        window.alert('digite um numero')
    }else{
        tab.innerHTML=''//espaço do resultado vai zerar para depois entrar os resultados
        let n =Number(num.value)
        for(c = 1 ; c <= 10; c++){
            let item=document.createElement('option')
            tab.appendChild(item)//criação do espaço dos resultados
            item.text=`${n} x ${c} = ${n*c}`//resultados
        }
    }
}