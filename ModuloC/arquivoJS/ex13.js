var agora= new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora>=6 && hora< 12){
    console.log('bom dia!')
} else if(hora<18){
    console.log('boa tarde!')
}
else if(hora<=23){
    console.log('boa noite!')
} else{
    console.log('boa madrugada!')
}