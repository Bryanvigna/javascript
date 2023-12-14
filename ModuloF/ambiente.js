let num=[5, 4,7,6,8]
num.sort()
/*num[3]=9
num.push(90)

console.log(`${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro vetor é ${num[0]}`)


for(let pos = 0;pos<num.length; pos++){
    console.log(`posição ${pos} tem o valor ${num[pos]}`)
}*/

for(let pos in num ){
    console.log(`posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(8)
if(pos==-1){
    console.log(`valor não encontrado!`)
}else{
    console.log(`o valor 8 esta na posição ${pos}`)
}

