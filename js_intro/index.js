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

// //Closures

// /*uma função pode ser atribuída a uma variável*/
// // let umaFuncao = function () {
// //     console.log("Fui armazenada em uma variável")
// // }
// // umaFuncao()

// /* f recebe uma função como parâmetro e, por isso, é
//    uma função de alta ordem.
//    Por devolver uma função, g também é de alta ordem */

//    function f (funcao){
//     //chamada da função
//     //note com a tipagem dinâmica tem seu preço
//     funcao()
// }

// function g() {
//     function outraFuncao(){
//         console.log("Fui criada por g")
//     }
//     return outraFuncao;
// }

// //f pode ser chamada assim
// //f(function() {
// //    console.log("Estou sendo passada para f")
// //})

// //e g pode ser chamada assim
// //const gResult = g()
// //gResult()

// //e assim também
// //g()()

// //outros testes
// /** f chama g, que somente devolve uma função; 
//  * nada é exibido */
// //f(g)

// /**f chama a função devolvida por g
//  * "Fui criada por g" é exibido
//  */
// //f(g())

// /**
//  * f tenta chamar o que a função criada por g
//  * devolve. Ela não devolve nada. Por isso,
//  * um erro acontece - somente em tempo de execução
//  */
// //f(g()())

// //o que acontece?
// f(1)

// function f() {
//     let nome = 'João';
//     function g() {
//         console.log(nome);
//     }
//     g()
// }
// f()

// function ola() {
//     let nome = 'João';
//     return function () {
//         console.log('Olá, João');
//     }
// }

// let olaResult = ola();
// /*perceba que aqui a função ola já terminou.
//  É de se esperar que a variável nome já não
// possa ser acessada.*/
// olaResult();

// //também vale com parâmetros
// function saudacoesFactory(saudacao, nome) {
//     return function () {
//         console.log(saudacao + ', ' + nome);
//     }
// }
// let olaJoao = saudacoesFactory('Olá', 'João');
// let tchauJoao = saudacoesFactory('Tchau', 'João');
// olaJoao();
// tchauJoao();


// function eAgora() {
//     let cont = 1;
//     function f1() {
//         console.log(cont);
//     }
//     cont++;
//     function f2() {
//         console.log(cont);
//     }
//     //JSON contendo as duas funções
//     return { f1, f2 }
// }

// let eAgoraResult = eAgora();

// /* neste momento, a funcao eAgora já
// executou por completo e a variável
// cont já foi incrementada. Seu valor final
// é mantido e, assim, ambas f1 e f2 exibirão 2.
// */
// eAgoraResult.f1();
// eAgoraResult.f2();


// let pessoa = {
//     nome: "João",
//     idade: 17,
// }
// //o acesso a propriedades pode ser feito com ponto
// console.log("Me chamo " + pessoa.nome);
// //e com [] também
// console.log("Tenho " + pessoa["idade"] + " anos");

// let pessoaComEndereco = {
//     nome: "Maria",
//     idade: 21,
//     endereco: {
//         logradouro: "Rua B",
//         numero: 121,
//     },
// };
// console.log(
//     `Sou ${pessoaComEndereco.nome},
//      tenho ${pessoaComEndereco.idade} anos
//      e moro na rua ${pessoaComEndereco.endereco.logradouro} 
//      número ${pessoaComEndereco["endereco"]["numero"]}`
// );

// let concessionaria = {
//     cnpj: "00011122210001-45",
//     endereco: {
//         logradouro: "Rua A",
//         numero: 10,
//         bairro: "Vila J",
//     },
//     veiculos: [
//         {
//             marca: "Ford",
//             modelo: "Ecosport",
//             anoDeFabricacao: 2018,
//         },
//         {
//             marca: "Chevrolet",
//             modelo: "Onix",
//             anoDeFabricacao: 2020,
//         },
//         {
//             marca: "Volkswagen",
//             modelo: "Nivus",
//             anoDeFabricacao: 2020,
//         },
//     ],
// };
// for (let veiculo of concessionaria.veiculos) {
//     console.log(`Marca: ${veiculo.marca}`);
//     console.log(`Modelo: ${veiculo.modelo}`);
//     console.log(`Ano de Fabricação:
//       ${veiculo.anoDeFabricacao}`);
// }

// let calculadora = {
//     //pode ser arrow function
//     soma: (a, b) => a + b,
//     //e função comum também
//     subtracao: function (a, b) {
//         return a - b;
//     },
// };
// console.log(`2 + 3 = ${calculadora.soma(2, 3)}`);
// console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`);


// console.log('Eu primeiro')
// console.log("Agora eu")
// console.log("Sempre vou ser a última...:(")

// const a = 2 + 7
// const b = 5
// //só faz sentido se os valores a e b já estiverem disponíveis
// console.log(a + b)

// function demorada() {
//     const atualMais2Segundos = new Date().getTime() + 2000
//     //não esqueça do ;, única instrução no corpo do while
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }
// const a = 2 + 3
// const b = 5 + 9
// //função será executada depois de, pelo menos, 500 milissegundos
// setTimeout(function () {
//     const d = demorada()
//     console.log(d)
// }, 500)

// //enquanto isso, essas linhas prosseguem executando
// //sem ficar esperando
// const e = 2 + a + b
// console.log(e)

// setTimeout(function () {
//     console.log('dentro da timeout')
// }, 0)
// const a = new Date().getTime() + 1000
// //não esqueça do ;, única instrução no corpo do while
// while (new Date().getTime() <= a);
// console.log('fora da timeout')

