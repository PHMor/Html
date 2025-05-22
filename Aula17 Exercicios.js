let numeros = [10,20,30,1,5,3]


function SomaArray(array){
    let soma = 0
    let a = array.length
    while(a > 0){
        soma += array[a-1]
        a -= 1;
    }
}


console.log(SomaArray(numeros))

let texto = ["Bernardo","Bernardinho","Bernardao"]


function TransformaEmMaiusculo(array){
    let listaMaiuscula = array.map(item => item.toUpperCase());
    return listaMaiuscula
}


console.log("Lista minuscula: ",texto)
console.log("Lista maiuscula: ",TransformaEmMaiusculo(texto))


function AdicionaItem(array,item){
    array.push(item)
    return array
}


console.log("Lista sem o item extra: ",texto)
console.log("Lista com o item extra: ",AdicionaItem(texto,"Bisteca"))

function RemovePrimeiroItem(array){
    array.shift()
    return array
}


console.log("Lista normal: ",texto)
console.log("Lista sem o primeiro item: ",RemovePrimeiroItem(texto))

function FiltraNumeros(array){
    let itenspares = array.filter(item => item%2 === 0);
    let itensimpares = array.filter(item => item%2 === 1);
    return {itenspares,itensimpares}
}
let {itenspares, itensimpares} = FiltraNumeros(numeros)


console.log("Lista sem fitro: ",numeros)
console.log("Lista de numeros pares: ",itenspares)
console.log("Lista de numeros impares: ",itensimpares)

function Filtrapalavra(array){
    let itens5 = array.filter(item => item.length < 6);
    return itens5
}

let bernardo = ["bernardo","burro","bisteca","bistecone","amigo"]

console.log("Lista sem fitro: ",bernardo)
console.log("Lista de palavras com ate 5 letras: ",Filtrapalavra(bernardo))

function Maiornumero(array){
    let maiornumero = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiornumero) {
            maiornumero = array[i];
        }
    }
    return maiornumero;
}


console.log("Lista de numeros: ",numeros)
console.log("Maior numero: ",Maiornumero(numeros))

function JuntaArray(array){
    return array.join(', ')
}


console.log("Lista de nomes: ", texto)
console.log("String com todos os nomes: ",JuntaArray(texto))

let amigo = [1,2,3,4,5];
function InverteArray(array){
    for(let i = array.length; i>1; i--){
        valor = array[i-2];
        array.splice(i-2,1);
        array.push(valor);
    }
    return array;
}

console.log("Lista normal:",amigo)
console.log("Lista invertida: ",InverteArray(amigo))

function Aoquadrado(array){
    for(i = array.length-1; i > -1;i--){
        let valor = array[i] * array[i]
        array[i] = valor
    }
    return array;
}

console.log("Lista ao quadrado: ",Aoquadrado(amigo))
