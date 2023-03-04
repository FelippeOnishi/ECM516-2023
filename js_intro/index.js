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

// console.log(1==1) // true
// console.log(1=="1") // true

// console.log(1===1) //true
// console.log(1==="1") //false

// console.log(true == 1) // true
// console.log(true == 2) // false
// console.log(true == -1) // false
// console.log(false == 0) // true

// console.log(1 ==[1]) // true
// console.log(null==null) // true
// console.log(null == undefined) // true
// console.log([] == false) // true
// console.log([] == []) //false


// // Declaração

// v1 = []
// v1[0] = 3.4
// v1[10] = "abc"
// console.log(v1.length)
// console.log(v1)

// // Inicializando na criação

// v2 = [2, "abc", true]
// console.log(v2)

// // iterando
// for(let i = 0; i <v2.length; i++){
//     console.log(v2[i])
// }
// console.log(v2[i])


// // Método utilitário dos vetores
// const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// // Filter
// const apenasComA = nomes.filter((n) => n.startsWith("A"))

// console.log(apenasComA)

// // map
// const res = nomes.map(nome => nome.charAt(0))
// console.log(res)

// // every
// const todosComecamComA = nomes.every(n => n.startsWith("A"))
// console.log(todosComecamComA)

// // reduce
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac,v) => ac + v)
// console.log(soma)

// // Criação de funções

// function hello(){
//     console.log("Oi ")
// }
// hello() // Por conta do que foi feito abaixo resulta em "Oi Undefined"

// // Cuidado, aqui redefinimos a função sem parametro
// function hello(nome){
//     console.log("Oi, "+nome)
// }
// hello("Pedro")

// function soma(a,b){
//     return a + b
// }
// const res = soma(2, 3)
// console.log(res)
// console.log(soma(2, 2))
// console.log(hello("Silva"))

// // Funções anônimas
// const dobro = function (n) {
//     return n * 2
// }
// const res = dobro(4)
// console.log(res)

// // Valor default para parâmetro
// const triplo = function (n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))

// // Arrow functions
// const hello = () => console.log("Hello")
// hello()

// const dobro = valor => {return valor * 2} // Se colocar as chaves {} precisa ter (return), caso contrário não é necessário
// console.log(dobro(10))

// const triplo = valor => {
//     return valor * 3
// }
// console.log(triplo(10))

// const ehPar = n => {
//     return n % 2 == 0
// }
// console.log(ehPar(10))

// Closures
/*Uma função pode ser atribuída a uma variavel*/
let umaFuncao = function(){
    console.log("Fui armazenada em uma variável")
}
umaFuncao()
/* f recebe uma função como parâmetro e, por isso é uma função de alta ordem,
    Por devolver uma função, g também é de alta ordem */
    function f(funcao){
        // Chamada de função
        // Note com a tipagem dinâmica tem seu preço
        funcao()
    }

function g(){
    function outraFuncao(){
        console.log("Fui criada por g")
    }
    return outraFuncao
}

// f pode ser chamada assim
f(function(){
    console.log("Estou sendo passada para f")
})

// e g pode ser chamada assim
const gResult = g()
gResult()

//e assim também
g()()

//outros testes
/* f chama g, que somente devolve uma funcao;
    nada é exibido*/
f(g)

/**f chama a função devolvida por g
 * "Fui criada por g" é exibido **/
f(g())

/**f tenta chamar o que a função criada por g
 * devolve. Ela não devolve nada. Por isso,
 * um erro acontece - somente em tempo de execução
 */