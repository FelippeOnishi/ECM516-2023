// // Nao é obrigatório o uso do ;
// // Declarando constantes


// const nome = 'José';
// const idade = 27;
// const sexo = 'M';
// const endereco = 'Rua K, 12'

// console.log(nome, idade, sexo, endereco);

// // Quando criado uma constante o valor dela não pode ser alterado Ex:
// // nome = 'Maria';
// // console.log(nome);

// // Declarando variaveis
// // let: variavel local, escopo de bloco
// let a = 2
// let b = "abc"
// console.log(a, b)
// b = 20;
// console.log(b)
// //var : variavel global ou com escopo dento da funcao onde foi criada
// var c = 2 + 3
// var d = "abcd"
// console.log(c, d)


// if (a>1){
//     var x = 0 // let so poderia ser usado ate o final do if, por isso usamos o var que é global
//     a = 10
// }
// console.log(x, a)


// var linguagem = "Javascript"
// console.log("Aprendendo "+ linguagem)

// // pode ser redeclarada

// var linguagem = "Java"
// console.log("Aprendendo "+ linguagem)

// var idade = 18
// var nome = "João"

// console.log(`Oi, ${nome}, tudo bem?`)

// if (idade>= 18){
//     var nome = "João"
//     console.log(`Parabéns, ${nome}. Voce pode dirigir`)
// }

// const n1 = 2
// const n2 = "3"
// // coerção implicita de n1, acontece concatenação
// const n3 = n1 + n2
// console.log(n3)
// // coerção explicita, soma acontece
// const n4 = n1 + Number(n2)
// console.log(n4)

console.log(1==1) // true
console.log(1=="1") // true

console.log(1===1) //true
console.log(1==="1") //false

console.log(true == 1) // true
console.log(true == 2) // false
console.log(true == -1) // false
console.log(false == 0) // true

console.log(1 ==[1]) // true
console.log(null==null) // true
console.log(null == undefined) // true
console.log([] == false) // true
console.log([] == []) //false
