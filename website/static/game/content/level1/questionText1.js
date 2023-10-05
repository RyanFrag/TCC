

export function QuestionTextLines(numberOfQuestion){
    if(numberOfQuestion == 0){
        return [ 
            { text: "Bem vindo ao Labirinto Logico"},
            { text: "Este e o Puzzle No. 1"},
            { text: "Para Prosseguir Araste as para suas posicoes corretas"},
        ]
    }else if(numberOfQuestion == 2){
        return [ 
            { text: "          Muito Bem, parabens por passar o ultimo puzzle.." },
            { text: "Porem este e apenas o comeco do Labirinto" },
            { text: "                                       Para Prosseguir, o Puzzle No. 2, Derrote os Inimigos desta Sala"  },
            { text: " use as alavancas para abrir suas celas" },
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
