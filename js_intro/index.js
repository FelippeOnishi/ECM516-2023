// // // // // // // // // // // // // // // // // // // // // // // // // // //declarando constantes
// // // // // // // // // // // // // // // // // // // // // // // // // // const nome = 'José';
// // // // // // // // // // // // // // // // // // // // // // // // // // const idade = 27, outra_idade = 10;
// // // // // // // // // // // // // // // // // // // // // // // // // // //aspas simples e duplas tem o mesmo efeito
// // // // // // // // // // // // // // // // // // // // // // // // // // const sexo = "M";
// // // // // // // // // // // // // // // // // // // // // // // // // // const endereco = 'Rua K, 12';
// // // // // // // // // // // // // // // // // // // // // // // // // // console.log(nome, idade, outra_idade, sexo, endereco);  

// // // // // // // // // // // // // // // // // // // // // // // // // // //declarando variáveis

// // // // // // // // // // // // // // // // // // // // // // // // // // //let: variável local, escopo de bloco
// // // // // // // // // // // // // // // // // // // // // // // // // // let a = 2;
// // // // // // // // // // // // // // // // // // // // // // // // // // let b = 'abc';
// // // // // // // // // // // // // // // // // // // // // // // // // // console.log(a, b);
// // // // // // // // // // // // // // // // // // // // // // // // // // b = 20;
// // // // // // // // // // // // // // // // // // // // // // // // // // console.log(a, b);
// // // // // // // // // // // // // // // // // // // // // // // // // // b = 20;

// // // // // // // // // // // // // // // // // // // // // // // // // // /*var: variável global ou com escopo dentro da 
// // // // // // // // // // // // // // // // // // // // // // // // // // função onde foi criada*/
// // // // // // // // // // // // // // // // // // // // // // // // // // var c = 2 + 3
// // // // // // // // // // // // // // // // // // // // // // // // // // var d = "abcd"
// // // // // // // // // // // // // // // // // // // // // // // // // // console.log(c, d)

// // // // // // // // // // // // // // // // // // // // // // // // // // console.log('antes da chave', x, a)

// // // // // // // // // // // // // // // // // // // // // // // // // // if (a > 1){
// // // // // // // // // // // // // // // // // // // // // // // // // //     var x = 0
// // // // // // // // // // // // // // // // // // // // // // // // // //     a = 10
// // // // // // // // // // // // // // // // // // // // // // // // // //     console.log('dentro da chave', x, a)
// // // // // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // // // console.log('fora da chave', x, a)

// // // // // // // // // // // // // // // // // // // // // // // // // var linguagem = 'Javascript'
// // // // // // // // // // // // // // // // // // // // // // // // // console.log('Aprendendo '+linguagem)
// // // // // // // // // // // // // // // // // // // // // // // // // //pode ser redeclarada
// // // // // // // // // // // // // // // // // // // // // // // // // var linguagem = 'Java'
// // // // // // // // // // // // // // // // // // // // // // // // // console.log('Aprendendo '+linguagem)

// // // // // // // // // // // // // // // // // // // // // // // // // var idade = 18;

// // // // // // // // // // // // // // // // // // // // // // // // // console.log(`Oi, ${nome}, tudo bem?`)

// // // // // // // // // // // // // // // // // // // // // // // // // if (idade >= 18) {
// // // // // // // // // // // // // // // // // // // // // // // // //     var nome = 'Joao'
// // // // // // // // // // // // // // // // // // // // // // // // //     console.log(`Parabéns, ${nome}. Você pode dirigir`)
// // // // // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // // // // console.log(`Até mais, ${nome}.`)

// // // // // // // // // // // // // // // // // // // // // // // // const n1 = 2
// // // // // // // // // // // // // // // // // // // // // // // // const n2 = '3'
// // // // // // // // // // // // // // // // // // // // // // // // //coerção implícita de n1, acontece concatenação
// // // // // // // // // // // // // // // // // // // // // // // // const n3 = n1 + n2
// // // // // // // // // // // // // // // // // // // // // // // // console.log(n3)
// // // // // // // // // // // // // // // // // // // // // // // //  //coerção explícita, soma acontece
// // // // // // // // // // // // // // // // // // // // // // // //  const n4 = n1 + Number(n2)
// // // // // // // // // // // // // // // // // // // // // // // //  console.log(n4)

// // // // // // // // // // // // // // // // // // // // // // // console.log(1 == 1) //true
// // // // // // // // // // // // // // // // // // // // // // // console.log(1 == "1") //true
// // // // // // // // // // // // // // // // // // // // // // // console.log(1 === 1) //true
// // // // // // // // // // // // // // // // // // // // // // // console.log(1 === "1") //false

// // // // // // // // // // // // // // // // // // // // // // // console.log(true == 1) //true
// // // // // // // // // // // // // // // // // // // // // // // console.log(true == 2) //false
// // // // // // // // // // // // // // // // // // // // // // // console.log(true == -1) //false
// // // // // // // // // // // // // // // // // // // // // // // console.log(false == 0) //true

// // // // // // // // // // // // // // // // // // // // // // // console.log(1 == [1]) // true
// // // // // // // // // // // // // // // // // // // // // // // console.log(null == null) //true
// // // // // // // // // // // // // // // // // // // // // // // console.log(null == undefined)//true
// // // // // // // // // // // // // // // // // // // // // // // console.log([] == false) //true
// // // // // // // // // // // // // // // // // // // // // // // console.log([] == []) // false

// // // // // // // // // // // // // // // // // // // // // // //declaração
// // // // // // // // // // // // // // // // // // // // // // v1 = []
// // // // // // // // // // // // // // // // // // // // // // v1[0] = 3.4
// // // // // // // // // // // // // // // // // // // // // // v1[10] = "abc"
// // // // // // // // // // // // // // // // // // // // // // console.log(v1.length)
// // // // // // // // // // // // // // // // // // // // // // console.log(v1)

// // // // // // // // // // // // // // // // // // // // // // //inicializando na criação
// // // // // // // // // // // // // // // // // // // // // // v2 = [2, "abc", true]
// // // // // // // // // // // // // // // // // // // // // // console.log(v2)

// // // // // // // // // // // // // // // // // // // // // // //iterando
// // // // // // // // // // // // // // // // // // // // // // for (let i = 0; i < v2.length; i++){
// // // // // // // // // // // // // // // // // // // // // //     console.log(v2[i])
// // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // //métodos utilitário dos vetores

// // // // // // // // // // // // // // // // // // // // // const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex", "Cristina"]

// // // // // // // // // // // // // // // // // // // // // //filter
// // // // // // // // // // // // // // // // // // // // // const apenasComA = nomes.filter(n => n.startsWith("A"))
// // // // // // // // // // // // // // // // // // // // // console.log(apenasComA)

// // // // // // // // // // // // // // // // // // // // // //map
// // // // // // // // // // // // // // // // // // // // // const res = nomes.map(nome => nome.charAt(0))
// // // // // // // // // // // // // // // // // // // // // console.log(res)

// // // // // // // // // // // // // // // // // // // // // //every
// // // // // // // // // // // // // // // // // // // // // const todosComecamComA = nomes.every(n => n.startsWith("A"))
// // // // // // // // // // // // // // // // // // // // // console.log(todosComecamComA)

// // // // // // // // // // // // // // // // // // // // // //reduce
// // // // // // // // // // // // // // // // // // // // // const valores = [1, 2, 3, 4]
// // // // // // // // // // // // // // // // // // // // // const soma = valores.reduce((ac, v) => ac + v)
// // // // // // // // // // // // // // // // // // // // // console.log(soma)

// // // // // // // // // // // // // // // // // // // // //criação de funções

// // // // // // // // // // // // // // // // // // // // function hello(){
// // // // // // // // // // // // // // // // // // // //     console.log('Oi')
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // hello()

// // // // // // // // // // // // // // // // // // // // // cuidado, aqui redefinimos a função sem parâmetros
// // // // // // // // // // // // // // // // // // // // function hello(nome){
// // // // // // // // // // // // // // // // // // // //     console.log('Oi, '+nome)
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // hello('Pedro')

// // // // // // // // // // // // // // // // // // // // function soma(a, b){
// // // // // // // // // // // // // // // // // // // //     return a + b
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // const res = soma(2, 3)

// // // // // // // // // // // // // // // // // // // // console.log(res)
// // // // // // // // // // // // // // // // // // // // console.log(soma(2, 2))
// // // // // // // // // // // // // // // // // // // // console.log(hello('Silva'))

// // // // // // // // // // // // // // // // // // // //funções anônimas

// // // // // // // // // // // // // // // // // // // const dobro = function (n) {
// // // // // // // // // // // // // // // // // // //     return n * 2
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // const res = dobro(4)
// // // // // // // // // // // // // // // // // // // console.log(res)

// // // // // // // // // // // // // // // // // // // //valor default para parâmetro
// // // // // // // // // // // // // // // // // // // const triplo = function (n = 5) {
// // // // // // // // // // // // // // // // // // //     return 3 * n
// // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // console.log(triplo())
// // // // // // // // // // // // // // // // // // // console.log(triplo(10))

// // // // // // // // // // // // // // // // // // //arrow functions
// // // // // // // // // // // // // // // // // // const hello = () => console.log("Hello")
// // // // // // // // // // // // // // // // // // hello()

// // // // // // // // // // // // // // // // // // const dobro = valor => valor * 2
// // // // // // // // // // // // // // // // // // console.log(dobro(10))

// // // // // // // // // // // // // // // // // // const triplo = valor => {
// // // // // // // // // // // // // // // // // //     return valor * 3
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // console.log(triplo(10))

// // // // // // // // // // // // // // // // // // const ehPar = n => {
// // // // // // // // // // // // // // // // // //     return n % 2 === 0
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // console.log(ehPar(10))

// // // // // // // // // // // // // // // // // //Closures

// // // // // // // // // // // // // // // // // /*uma função pode ser atribuída a uma variável*/
// // // // // // // // // // // // // // // // // // let umaFuncao = function () {
// // // // // // // // // // // // // // // // // //     console.log("Fui armazenada em uma variável")
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // umaFuncao()

// // // // // // // // // // // // // // // // // /* f recebe uma função como parâmetro e, por isso, é
// // // // // // // // // // // // // // // // //    uma função de alta ordem.
// // // // // // // // // // // // // // // // //    Por devolver uma função, g também é de alta ordem */

// // // // // // // // // // // // // // // // // function f (funcao){
// // // // // // // // // // // // // // // // //     //chamada da função
// // // // // // // // // // // // // // // // //     //note com a tipagem dinâmica tem seu preço
// // // // // // // // // // // // // // // // //     funcao()
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // function g() {
// // // // // // // // // // // // // // // // //     function outraFuncao(){
// // // // // // // // // // // // // // // // //         console.log("Fui criada por g")
// // // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // // //     return outraFuncao;
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // //f pode ser chamada assim
// // // // // // // // // // // // // // // // // //f(function() {
// // // // // // // // // // // // // // // // // //    console.log("Estou sendo passada para f")
// // // // // // // // // // // // // // // // // //})

// // // // // // // // // // // // // // // // // //e g pode ser chamada assim
// // // // // // // // // // // // // // // // // //const gResult = g()
// // // // // // // // // // // // // // // // // //gResult()

// // // // // // // // // // // // // // // // // //e assim também
// // // // // // // // // // // // // // // // // //g()()

// // // // // // // // // // // // // // // // // //outros testes
// // // // // // // // // // // // // // // // // /** f chama g, que somente devolve uma função; 
// // // // // // // // // // // // // // // // //  * nada é exibido */
// // // // // // // // // // // // // // // // // //f(g)

// // // // // // // // // // // // // // // // // /**f chama a função devolvida por g
// // // // // // // // // // // // // // // // //  * "Fui criada por g" é exibido
// // // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // // //f(g())

// // // // // // // // // // // // // // // // // /**
// // // // // // // // // // // // // // // // //  * f tenta chamar o que a função criada por g
// // // // // // // // // // // // // // // // //  * devolve. Ela não devolve nada. Por isso,
// // // // // // // // // // // // // // // // //  * um erro acontece - somente em tempo de execução
// // // // // // // // // // // // // // // // //  */
// // // // // // // // // // // // // // // // // //f(g()())

// // // // // // // // // // // // // // // // // //o que acontece?
// // // // // // // // // // // // // // // // // f(1)

// // // // // // // // // // // // // // // // function f() {
// // // // // // // // // // // // // // // //     let nome = 'João'
// // // // // // // // // // // // // // // //     function g() {
// // // // // // // // // // // // // // // //         console.log (nome)
// // // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // //     g()
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // f()

// // // // // // // // // // // // // // // function ola() {
// // // // // // // // // // // // // // //     let nome = 'João'
// // // // // // // // // // // // // // //     return function () {
// // // // // // // // // // // // // // //         console.log('Olá, João')
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // let olaResult = ola()

// // // // // // // // // // // // // // // olaResult()

// // // // // // // // // // // // // // function saudacoesFactory(saudacao, nome){
// // // // // // // // // // // // // //     return function(){
// // // // // // // // // // // // // //         console.log(saudacao + ", " + nome)
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // let olaJoao = saudacoesFactory('Olá', 'João')
// // // // // // // // // // // // // // let tchauJoao = saudacoesFactory('Tchau', 'João')
// // // // // // // // // // // // // // olaJoao()
// // // // // // // // // // // // // // tchauJoao()

// // // // // // // // // // // // // function eAgora(){
// // // // // // // // // // // // //     let cont = 1
// // // // // // // // // // // // //     function f1(){
// // // // // // // // // // // // //         console.log(cont)
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     cont++
// // // // // // // // // // // // //     function f2(){
// // // // // // // // // // // // //         console.log(cont)
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //     //json contendo duas funções
// // // // // // // // // // // // //     return {f1, f2}
// // // // // // // // // // // // // }

// // // // // // // // // // // // // let eAgoraResult = eAgora()

// // // // // // // // // // // // // eAgoraResult.f1()
// // // // // // // // // // // // // eAgoraResult.f2()

// // // // // // // // // // // // let pessoa = {
// // // // // // // // // // // //     nome: 'Joao',
// // // // // // // // // // // //     idade: 17
// // // // // // // // // // // // }
// // // // // // // // // // // // //o acesso a propriedades pode ser feito com ponto
// // // // // // // // // // // // console.log('Me chamo' + pessoa.nome)

// // // // // // // // // // // // //também pode ser com []
// // // // // // // // // // // // console.log('Tenho ' + pessoa['idade'] + ' anos')

// // // // // // // // // // // let pessoaComEndereco = {
// // // // // // // // // // //     nome: 'Maria',
// // // // // // // // // // //     idade: 21,
// // // // // // // // // // //     endereco: {
// // // // // // // // // // //         logradouro: 'Rua B',
// // // // // // // // // // //         numero: 121
// // // // // // // // // // //     }
// // // // // // // // // // // }
// // // // // // // // // // // console.log(
// // // // // // // // // // //     `Sou ${pessoaComEndereco.nome},
// // // // // // // // // // //     tenho ${pessoaComEndereco.idade} anos
// // // // // // // // // // //     e moro na rua ${pessoaComEndereco.endereco.logradouro}
// // // // // // // // // // //     número ${pessoaComEndereco['endereco']['numero']}
// // // // // // // // // // //     `
// // // // // // // // // // // )

// // // // // // // // // // let concessionaria = {
// // // // // // // // // //     cnpj: '001.112.221/0001-45',
// // // // // // // // // //     endereco: {
// // // // // // // // // //         logradouro: 'Rua A',
// // // // // // // // // //         numero: 10,
// // // // // // // // // //         bairro: 'Vila J',
// // // // // // // // // //     },
// // // // // // // // // //     veiculos: [
// // // // // // // // // //         {
// // // // // // // // // //             marca: 'Ford',
// // // // // // // // // //             modelo: 'Ecosport',
// // // // // // // // // //             anoDeFabricacao: 2018
// // // // // // // // // //         },
// // // // // // // // // //         {
// // // // // // // // // //             marca: 'Chevrolet',
// // // // // // // // // //             modelo: 'Onix',
// // // // // // // // // //             anoDeFabricacao: 2020,
// // // // // // // // // //         },
// // // // // // // // // //         {
// // // // // // // // // //             marca: 'Volkswagen',
// // // // // // // // // //             modelo: 'Nivus',
// // // // // // // // // //             anoDeFabricacao: 2020,
// // // // // // // // // //         },
// // // // // // // // // //     ],
// // // // // // // // // // }

// // // // // // // // // // for (let veiculo of concessionaria.veiculos) {
// // // // // // // // // //     console.log(`Marca: ${veiculo.marca}`)
// // // // // // // // // //     console.log(`Modelo: ${veiculo.modelo}`)
// // // // // // // // // //     console.log(`Ano de Fabricação: ${veiculo.anoDeFabricacao}`)
// // // // // // // // // // }

// // // // // // // // // let calculadora = {
// // // // // // // // //     soma: (a, b) => a + b,
// // // // // // // // //     subtracao: function (a, b) {
// // // // // // // // //         return (a - b)
// // // // // // // // //     }
// // // // // // // // // }

// // // // // // // // // console.log(`2 + 3 = ${calculadora.soma(2,3)}`)
// // // // // // // // // console.log(`2 - 3 = ${calculadora.subtracao(2,3)}`)

// // // // // // // function demorada() {
// // // // // // //     const atualMais2Segundos = new Date().getTime() + 2000
// // // // // // //     while(new Date().getTime() <= atualMais2Segundos);
// // // // // // //     const d = 8 + 4
// // // // // // //     return d
// // // // // // // }
// // // // // // // const a = 2 + 3
// // // // // // // const b = 5 + 9
// // // // // // // //const d = demorada()
// // // // // // // setTimeout(function(){
// // // // // // //     const d = demorada()
// // // // // // //     console.log(d)
// // // // // // // }, 500)
// // // // // // // const e = 2 + a + b
// // // // // // // console.log(e)

// // // // // // setTimeout(function() {
// // // // // //     console.log('dentro da timeout')
// // // // // // }, 0)
// // // // // // const a = new Date().getTime() + 1000
// // // // // // while(new Date().getTime() <= a);
// // // // // // console.log('fora da timeout')

// // // // // function demorada(tempo) {
// // // // //     console.log(`demorada ${tempo}`)
// // // // //     const autalMaisTempo = new Date().getTime() + tempo

// // // // //     while (new Date().getTime() <= autalMaisTempo);
// // // // //     const d = 8 + 4
// // // // //     return d
// // // // // }
// // // // // setTimeout(function(){demorada(2000)}, 2000)
// // // // // setTimeout(function(){demorada(1000)}, 1000)
// // // // // console.log('chegou ao fim do script principal')

// // // // const fs = require("fs")
// // // // const abrirArquivo = function (nomeArquivo) {
// // // //     const exibirConteudo = function (erro, conteudo) {
// // // //         if (erro) {
// // // //             console.log(`Deu erro: ${erro}`)
// // // //         } else {
// // // //             console.log(conteudo.toString())
// // // //         }
// // // //     }
// // // //     fs.readFile(nomeArquivo, exibirConteudo)
// // // // }
// // // // abrirArquivo('arquivo.txt')

// // // const fs = require("fs")
// // // const abrirArquivo = function (nomeArquivo) {
// // //     const exibirConteudo = function (erro, conteudo) {
// // //         if (erro) {
// // //             console.log(`Deu erro: ${erro}`)
// // //         } else {
// // //             console.log(conteudo.toString())
// // //             const dobro = conteudo.toString() * 2
// // //             const finalizar = function (erro) {
// // //                 if (erro) {
// // //                     console.log('Deu erro tentando salvar o dobro')
// // //                 } else {
// // //                     console.log('Salvou o dobro com sucesso')
// // //                 }
// // //             }
// // //             fs.writeFile('dobro.txt', dobro.toString(), finalizar)
// // //         }  
// // //     }
// // //     fs.readFile(nomeArquivo, exibirConteudo)
// // // }
// // // abrirArquivo('arquivo.txt')

// // function calculoDemorado(numero){
// //     return new Promise(function (resolve, reject){
// //         let res = 0
// //         for (let i = 1; i <= numero; i++){
// //             res += i
// //         }
// //         resolve(res)
// //     })
// // }

// // calculoDemorado(10).
// //     then((resultado) => {
// //         console.log(resultado)
// //     }).catch((reject) => {
// //         console.log(reject)
// //     })

// function calculaRapidinho (numero) {
//     return numero >=0 
//         ? Promise.resolve((numero * (numero + 1))/2)
//         : Promise.reject("Somente valores positivos.")
// }

// calculaRapidinho(10)
//     .then(resultado => {
//         console.log('chamou o then', resultado)
//     })
//     .catch((err) => {
//         console.log('chamou o catch', err)
//     })

// calculaRapidinho(-1)
//     .then(resultado => {
//         console.log('chamou o then', resultado)
//     })
//     .catch((err) => {
//         console.log('chamou o catch', err)
//     })

// console.log('Esperando...')

// const axios = require("axios")
// const appid = "1d7002e58cf677ec39428aac15900d06"
// // Cidade a ser pesquisada
// const q = "Itu"
// const units = "metric"
// const lang = "pt_BR"
// //quantidade de resultados
// const cnt = "10"
// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`



// //faz a requisição
// axios
//     .get(url)
//     .then((res) => {
//         //mostra o resultado e devolve somente a parte de interesse
//         console.log(res)
//         return res.data
//     })
//     .then((res) => {
//         //mostra o total e devolve o resultado
//         console.log(res.cnt)
//         return res
//     })
//     .then((res) => {
//         //devolve somente a lista de previsões
//         console.log("aqui", res)
//         return res["list"]
//     })
//     .then((res) => {
//         //para cada resultado, mostra algumas informações
//         for (let previsao of res) {
//             console.log(`
//                     ${new Date(+previsao.dt * 1000).toLocaleString()},
//                     ${'Min: ' + previsao.main.temp_min}\u00B0C,
//                     ${'Max: ' + previsao.main.temp_max}\u00B0C,
//                     ${'Hum: ' + previsao.main.humidity}%,
//                     ${previsao.weather[0].description}
//                     `)
//         }
//         return res
//     })
//     .then((res) => {
//         //verifica quantas previsões têm percepção humana de tempertura acima de 30 graus
//         const lista = res.filter(r => r.main.feels_like >= 30);
//         console.log(`${lista.length} previsões têm
//   percepção humana de temperatura acima de 30
//   graus`)
//     })


// async function hello(nome) {
//     return "Oi, " + nome
// }
// const boasVindas = hello("João")
// console.log(boasVindas)
// boasVindas.then((res) => console.log(res))

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo")
    let res = 1
    for (let i = 2; i <= n; i++) res *= i
    return Promise.resolve(res)
}

function chamadaComThenCatch() {
    fatorial(5)
        .then((res) => console.log(res))
        .catch((res) => console.log(res))

    fatorial(-1)
        .then((res) => console.log(res))
        .catch((res) => console.log(res))
}
chamadaComThenCatch()

//para usar await tem que ser async
async function chamadaComAwait() {
    //note que não há paralelismo implícito
    //somente haverá paralelismo se a função chamada utilizar explicitamente
    const f1 = await fatorial(5)
    console.log(f1)
    try{
    const f2 = await fatorial(-1)
    console.log(f2)
    } catch(err){
        console.log(err)
    }
}

chamadaComAwait()
