//Capturar nome da pessoa
let nome = prompt('Para avaliar seu 5S antes de tudo escreva seu nome abaixo:')
alert('Ok tudo certo!')

// Calcular resultado
function calcular_resultado(){


    let conteudo_primario = document.getElementById('conteudo_1')
    conteudo_primario.style.display = 'none'

    let valor_inicial = 10


    let primeira_pergunta = document.getElementsByName('pergunta_1')
    let resultado_primeira_pergunta = 0
    if(primeira_pergunta[0].checked){
        resultado_primeira_pergunta = -1
    }

    let segunda_pergunta = document.getElementsByName('pergunta_2')
    let resultado_segunda_pergunta = 0
    if(segunda_pergunta[0].checked){
        resultado_segunda_pergunta = -1
    }

    let terceira_pergunta = document.getElementsByName('pergunta_3')
    let resultado_terceira_pergunta = 0
    if(terceira_pergunta[0].checked){
        resultado_terceira_pergunta = -1
    }

    let quarta_pergunta = document.getElementsByName('pergunta_4')
    let resultado_quarta_pergunta = 0
    if(quarta_pergunta[1].checked){
        resultado_quarta_pergunta = -1
    }

    let quinta_pergunta = document.getElementsByName('pergunta_5')
    let resultado_quinta_pergunta = 0
    if(quinta_pergunta[1].checked){
        resultado_quinta_pergunta = -1
    }

    let sexta_pergunta = document.getElementsByName('pergunta_6')
    let resultado_sexta_pergunta = 0
    if(sexta_pergunta[1].checked){
        resultado_sexta_pergunta = -1
    }

    let setima_pergunta = document.getElementsByName('pergunta_7')
    let resultado_setima_pergunta = 0
    if(setima_pergunta[1].checked){
        resultado_setima_pergunta = -1
    }

    let oitava_pergunta = document.getElementsByName('pergunta_8')
    let resultado_oitava_pergunta = 0
    if(oitava_pergunta[1].checked){
        resultado_oitava_pergunta = -1
    }

    let nona_pergunta = document.getElementsByName('pergunta_9')
    let resultado_nona_pergunta = 0
    if(nona_pergunta[1].checked){
        resultado_nona_pergunta = -1
    }

    let decima_pergunta = document.getElementsByName('pergunta_10')
    let resultado_decima_pergunta = 0
    if(decima_pergunta[1].checked){
        resultado_decima_pergunta = -1
    }

    let resultado_final = valor_inicial + resultado_primeira_pergunta + resultado_segunda_pergunta + resultado_terceira_pergunta + resultado_quarta_pergunta + resultado_quinta_pergunta + resultado_sexta_pergunta + resultado_setima_pergunta + resultado_oitava_pergunta + resultado_nona_pergunta + resultado_decima_pergunta

    let texto = document.getElementById('texto')
    texto.style.textShadow = '1px 1px 1px black'
    
    if(resultado_final <= 3){
        texto.innerText = `OPS, Seu resultado final foi ${resultado_final}, Infelismente você não cuida do 5S`
        texto.style.color = 'red'

    } else if(resultado_final >= 4 && resultado_final <= 6 ){
        texto.innerText = `NORMAL, Seu resultado final foi ${resultado_final}, Você ainda tem muito o que fazer`
        texto.style.color = 'orange'
    } else if(resultado_final >= 7 && resultado_final <= 9){

        texto.innerText = `MUITO BOM!, seu resultado final foi ${resultado_final}, Você está chegando lá!`
        texto.style.color = 'blue'
    } else if(resultado_final == 10){

        texto.innerText = `EXCELENTE, Seu resultado final foi ${resultado_final}, Você está comprometido com o 5S!`
        texto.style.color = 'green'
    }

    
    let ultima_parte = document.getElementById('formulario')
    ultima_parte.style.display = 'block'

    let campo_nome = document.getElementById('campo_nome')
    let campo_resultado = document.getElementById('campo_resultado')

    campo_nome.value = nome
    campo_resultado.value = resultado_final





}