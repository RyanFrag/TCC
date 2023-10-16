

export function QuestionTextLines(numberOfQuestion, level){
    if(level == 1){
        if(numberOfQuestion == 0){
            return [ 
                { text: "Olha só você, já sabe o básico!", character: 'Questao'},
                { text: "Bem se você acha que consegue,\n aqui está um desafio mais dificil", character: 'Questao'},
                { text: "Para descer no Labirinto,\n utilize as alavancas e abra as barreiras", character: 'Questao'},
                { text: "Simples, não? pense bem a ordem\n que deve puxa-las, isso é tudo que direi", character: 'Questao'},
            ]
        }else if(numberOfQuestion == 2){
            return [ 
                { text: "Muito Bem, parabéns por passar o último puzzle.", character: 'Questao'},
                { text: "Porém este é apenas o começo do Labirinto,\n então não cante vitória", character: 'Questao'},
                { text: "Para Prosseguir no Puzzle No. 2 aqui está uma dica:\n derrote os inimigos desta sala", character: 'Questao'},
                { text: " Use as alavancas para abrir as jaulas,\n mas cuidado, eles não são passivos", character: 'Questao'},
            ]
        }else if(numberOfQuestion == 3){
            return [ 
                { text: "Boas Vindas ao Labirinto Logico!", character: 'Questao'},
                { text: "Esta é uma pedra Questão,\n quando tiver dúvidas de como prosseguir, interaja comigo", character: 'Questao'},
                { text: "Este é o Puzzle de No. 1", character: 'Questao'},
                { text: "   Para Prosseguir você dever resolver a seguinte questao:", character: 'Questao'},
                { text: "  Tente arrastar as caixas para suas posicões corretas", character: 'Questao'},
                { text: "  Caso ocorra algum erro, aperte o Botão de restart", character: 'Questao'},
                { text: "Lhe desejamos boa sorte", character: 'Questao'},
            ]
        }
    }else if(level == 2){
        if(numberOfQuestion == 0){
            return [ 
                { text: "Parabéns, você passou o level 1,\n chegamos a área de madeira do Labirinto", character: 'Questao'},
                { text: "Bem, se chegou até aqui lhe devo uma\n explicação do próximo quebra-cabeça", character: 'Questao'},
                { text: "Vê o inimigo nesta jaula ao lado?\n libere ele e faça-o dar uma volta.", character: 'Questao'},
                { text: "não o mate, mas se matar\n é só apertar o Botão ao lado que um novo vai aparecer.", character: 'Questao'},
                { text: "Boa sorte, não deixe ele te acertar!", character: 'Questao'},
            ]
        }else if(numberOfQuestion == 1){
            return [ 
                { text: "Espero que o último puzzle\n não tenha sido dificil para você", character: 'Questao'},
                { text: "Não se preocupe, este não irá\n precisar que lide com os esqueletos", character: 'Questao'},
                { text: "Para chegar ao level 3,\n você deve completar as equações faltantes", character: 'Questao'},
                { text: "Até o próximo puzzle amigo.", character: 'Questao'},
            ]
        }
    }else if(level == 3){
            return [ 
                { text: "Chegamos ao level 3, muito bem", character: 'Questao'},
                { text: "bem para descer as escadas dessa\n vez, será preciso que você insira uma senha", character: 'Questao'},
                { text: "A senha está no labirinto que acabou de passsar,\n se preciso, dê meia volta", character: 'Questao'},
                { text: "Nos vemos no level 4", character: 'Questao'},
            ]
    }else if(level == 4){
            return [ 
                { text: "Olá novamente, falta pouco agora para o fim", character: 'Questao'},
                { text: "Vê esses botões? eles controlam\n o carinha da pista", character: 'Questao'},
                { text: "Seu Objetivo é fazer ele apertar o botão\n para você possa passar", character: 'Questao'},
                { text: "Os botões que possuem setas controlam ele,\n mas como ele é meio lerdo, use os botões de velocidade,\n para incrementar o seu número de ações", character: 'Questao'},
                { text: "O próximo desafio é parecido com esse,\n então o que lhe disse vale para a próxima pista", character: 'Questao'},
                { text: "Novamente, boa sorte!", character: 'Questao'},

            ]
        }
}

    

