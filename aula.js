// let name = 'Joao'
// let age = 40
// let weight = 180
// let surName = 'Santos'
// let approved = true
// let person = {
//     name: name,
//     age: age,
//     approved: approved,
//     weight: weight
// }
// console.log(person)
// console.log(person.name)
// console.log(person.age)
// console.log(person.approved)
// console.log(person.weight)

// Arrays
//  let family = [true,45,'Márcio',100]
//  console.log(family[0])
//  console.log(family.length)
//  console.log(family.concat)

// Functions (Verbo + Substantivo) - Ex.: resetColor, changeObject, changeSize ...
// let colorSite = "Blue"
// function resetColor(color, tonalidade) {
//     colorSite = color + ' ' + tonalidade
// }
// console.log(colorSite)
// resetColor('Green','Dark')
// console.log(colorSite)

// const person = ['Levy','38']
// for(let key of person) {
//     console.log(person)
// }

// FizzBuzz

// const result = fizzBuzz(7)
// console.log(result)
// function fizzBuzz(entrada) {
//     if(typeof entrada !== 'number')
//         return 'Não é um número';
//     else if(entrada % 3 === 0 && entrada % 5 === 0)
//         return 'FizzBuzz';
//     else if(entrada % 3 === 0)
//         return 'Fizz';
//     else if(entrada % 5 === 0)
//         return 'Buzz';
    
//     return entrada;
// }

// valor(10)
// function valor(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) 
//             console.log(i,'Par');
//         else
//             console.log(i,'Ímpar');
//         }
// }
// const film = {
//     title: 'Vingadores',
//     year: 2020,
//     director: 'Steven',
//     character: 'Thor'
// }
// displayProperties(film);
// function displayProperties(obj) {
//     for (prop in obj) 
//         if(typeof obj[prop] === 'string')
//             console.log(prop,obj[prop])
// }

// somar(10)
// function somar(limit) {
//     let multiples3 = 0;
//     let multiples5 = 0;
//     for(i = 0;i <= limit; i++) {
//         if(i % 3 === 0)
//             multiples3 += i;
//         if(i % 5 === 0)
//             multiples5 += i;
//     }
//     console.log(multiples3 + multiples5)
// }

// const array = [70,80,90]
// console.log(media(array))
// function media(notes) {
//     const media = calculateMedia(notes);
//     if(media < 59) return 'F';
//     if(media < 69) return 'D';
//     if(media < 79) return 'C';
//     if(media < 89) return 'B';
//     return 'A'
// }
// function calculateMedia(array) {
//     let sum = 0;
//     for (let note of array) {
//         sum += note;
//     }
//     return sum/(array.length);
// }

// asteristcs(27)
// function asteristcs(limit) {
//     let lines = '';
//     for(let i = 1; i <= limit; i++) {
//         lines += '*'
//         console.log(lines)
//     }
// }

// asteristcs(27)
// function asteristcs(limit) {
//     for(let lines = 1; lines <= limit; lines++) {
//         let line = '';
//         for(let i = 0; i < lines; i++) {
//             line += '*'
//         }
//         console.log(line)
//     }
// }
// let adress = {
//     namestreet: 'a',
//     number: 20,
//     district: 'b',
//     city: 'c',
//     zipCode: '88090-175'
// }
// function displayAdress(adress) {
//     for (let displayAdress in adress)
//         console.log(displayAdress,adress[displayAdress]);
// }
// displayAdress(adress)

// 

/*
const list = [1,2,3]
list.unshift(0) // Inserir no início do array
console.log(list)
list.splice(0,1,'a ') // Inserir no meio do array
console.log(list) 
list.push(4) // Inserir no final do array
console.log(list)
*/

/*
const list = ['a','b','c','d']
// posições  [0,1,2,3..]
console.log(list.indexOf('b')) // Encontra qual a posição no índice do array encontra-se item pesquisado (iniciando por 0)
*/
/*
const list = ['a','b','c','d','a']
console.log(list.lastIndexOf('a')) // Buscar a última ocorrência do item pesquisado.
*/
/*
const list = ['a','b','c','d','a']
console.log(list.includes('e'))
*/
/*
const marcas = [
    {id:1, name: 'A'},
    {id:2, name: 'B'},
    {id:3, name: 'C'},
    {id:4, name: 'D'},
    {id:5, name: 'E'}
]
// console.log(marcas.includes({id:1, name: 'A'})) // JS não permite essa aplicação do includes (tipos de referência)
const marca = marcas.find(function(marca){
    return marca.name === 'C';
})
console.log(marca)
*/
/*
const marcas = [
    {id:1, name: 'A'},
    {id:2, name: 'B'},
    {id:3, name: 'C'},
    {id:4, name: 'D'},
    {id:5, name: 'E'}
]
console.log(marcas.find(marca => marca.name === 'D'))
*/
/*
Remover itens de um Array
const list = [1,2,3,4,5,6,7]
const first = list.shift() // Retira o primeiro item do array
const splice = list.splice(2,1) // Retira o item 2[no ex. '4'] 1 vez
const last = list.pop() // Retira o último item do array
console.log(list)
*/
/*
const first = [1,2,3]
const second = [4,5,6]
const jointArrays = first.concat(second) // Combinar arrays
console.log(jointArrays)
const sliceArrays1 = jointArrays.slice(2,5) // Dividir arrays do índice 2 até 5
const sliceArrays2 = jointArrays.slice(3) // Dividir arrays a partir do 3 
const sliceArrays3 = jointArrays.slice() // Copia todos os itens para uma variável (sliceArrays3)
console.log(sliceArrays1)
console.log(sliceArrays2)
console.log(sliceArrays3)
*/
/*
const first = [1,2,3]
const second = [4,5,6]

const spreadArrays1 = [...first,...second]
const spreadArrays2 = [...first,'A',...second,true]
console.log(spreadArrays1)
console.log(spreadArrays2)

const cloned1 = [...spreadArrays1]
const cloned2 = [...spreadArrays2]
console.log(cloned1)
console.log(cloned2)
*/
// const numbers = [1,2,3,4,5,6,7]
// For / Of
    // for (number of numbers) 
    //     console.log(number)
// For / Each
    // Example 1
    // numbers.forEach(function(number) {
    //     console.log(number);
    // })
    // Example 2
    // numbers.forEach((number) => console.log(number))
    // numbers.forEach((number,index) => console.log(number,index)) // Com o índice

// const numbers = [1,2,3,4,5,6,7]
// const concat = numbers.join('-') // Adiciona o termo entre todos os itens do array
// console.log(concat)
// const frase = 'Olá! Bem vindo ao curso';
// const result = frase.split(' ') // Separar os itens do array pelo termo (Ex.: space)
// console.log(result)
// console.log(result.join('-')) // Hifens entre os itens (slug)






