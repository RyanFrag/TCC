

export function QuestionTextLines(numberOfQuestion){
    if(numberOfQuestion == 0){
        return [ 
            { text: "Bem vindo ao Labirinto Logico"},
            { text: "Este e o Puzzle No. 1"},
            { text: "Para Prosseguir Araste as para suas posicoes corretas"},
        ]
    }else if(numberOfQuestion == 2){
        return [ 
            { text: "Bem vindo ao Labirinto Logico" },
            { text: "Este e o Puzzle No. 2"},
            { text: "Para Prosseguir Derrote os Inimigos da Sala"  },
            { text: "para derrota-los deve acionar as alanvacas em determinada ordem" },
        ]
    }else if(numberOfQuestion == 3){
        return [ 
            { text: "Bem vindo ao Labirinto Logico!" },
            { text: "Este e o Puzzle No. 1\n "},
            { text: "           Para Prosseguir resolva a seguinte questao:" },
            { text: "           Arraste as caixas para suas posicoes corretas" },
        ]
    }
    
}
