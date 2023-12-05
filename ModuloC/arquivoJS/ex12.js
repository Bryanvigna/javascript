var idade = 17
console.log(`você tem ${idade} anos.`)
if(idade < 16){
    console.log(`não vota, RALA!`)
}else if(idade<18 || idade>65){
    console.log('voto opcional, escolhe ai fi!')
}else{
    console.log('voto obrigatório, bora!')
}