var speed = {
    pause: 500,
    slow: 10000,
    normal: 5000,
    fast: 2000,
}

export function QuestionTextLines(numberOfQuestion){
    if(numberOfQuestion == 0){
        return [ 
            { text: "Bem vindo ao Labirinto Logico", speed: speed.normal},
            { text: "Este e o Puzzle No. 1", speed: speed.slow},
            { text: "Para Prosseguir Araste as para suas posicoes corretas", speed: speed.fast },
        ]
    }else if(numberOfQuestion == 2){
        return [ 
            { text: "Bem vindo ao Labirinto Logico", speed: speed.normal},
            { text: "Este e o Puzzle No. 2", speed: speed.slow},
            { text: "Para Prosseguir Derrote os Inimigos da Sala", speed: speed.fast },
            { text: "para derrota-los deve acionar as alanvacas em determinada ordem", speed: speed.normal },
        ]
    }else if(numberOfQuestion == 3){
        return [ 
            { text: "Bem vindo ao Labirinto Logico", speed: speed.normal},
            { text: "Este e o Puzzle No. 1", speed: speed.slow},
            { text: "Para Prosseguir Araste as caixas para suas posicoes corretas", speed: speed.fast },
        ]
    }
    
}
