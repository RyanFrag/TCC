

    export function NpcTextLines(character, level){
        if(level == 1){
            if(character == 'hero'){
                return [ 
                    { text: "Isso e um teste de texto Heroi", sprite: 1, character: 'hero' },
                    { text: "Isso tambem e um teste de texto", sprite: 2, character: 'hero' },
                    { text: "Mais um texto de teste", sprite: 3, character: 'hero' },
                    { text: "O ultimo texto de teste",  sprite: 4, character: 'hero' },
                ]
            }else{
                return [ 
                    { text: "Maravilha, acabamos de entrar no labirinto\n e já estamos trancados por essas barras",  sprite: 1, character: 'sacerdotisa' },
                    { text: "parece que essas caixas e botões tem simbolos parecidos\n será que têm algo aver com essas barras?", sprite: 2, character: 'sacerdotisa'},
                    { text: "Olha, o que é aquele piso com uma interrogação?",  sprite: 3, character: 'sacerdotisa' },
                ]
            }        
        }else if(level == 2){
            if(character == 'hero'){
                return [ 
                    { text: "Isso e um teste de texto Heroi", sprite: 1, character: 'hero' },
                    { text: "Isso tambem e um teste de texto", sprite: 2, character: 'hero' },
                    { text: "Mais um texto de teste", sprite: 3, character: 'hero' },
                    { text: "O ultimo texto de teste",  sprite: 4, character: 'hero' },
                ]
            }else{    
                return [ 
                    { text: "Ufa.. bem, parece que conseguimos descer\n    pelas aquelas escadas, pareciam que não iam acabar nunca", sprite: 1, character: 'sacerdotisa' },
                    { text: "Esse ambiente é... diferente, gostei!\n muito melhor que aqueles tijolos de masmorra", sprite: 2, character: 'sacerdotisa' },
                    { text: "parece que os desafios estão mais complexos agora,\n devemos ir com cautela.", sprite: 3, character: 'sacerdotisa' },
                    { text: "Por favor, faça a frente.", sprite: 3, character: 'sacerdotisa' },
                ]
            }
        }else if(level == 3){
            if(character == 'hero'){
                return [ 
                    { text: "Isso e um teste de texto Heroi", sprite: 1, character: 'hero' },
                    { text: "Isso tambem e um teste de texto", sprite: 2, character: 'hero' },
                    { text: "Mais um texto de teste", sprite: 3, character: 'hero' },
                    { text: "O ultimo texto de teste",  sprite: 4, character: 'hero' },
                ]
            }else{    
                return [ 
                    { text: "conseguimos! Chegamos a metade do labirinto", sprite: 1, character: 'sacerdotisa' },
                    { text: "Bem essa sala realmente parece um..\n você sabe, labirinto", sprite: 2, character: 'sacerdotisa' },
                    { text: "E têm esses números no chão,\n não tenho ideia do que fazer", sprite: 3, character: 'sacerdotisa' },
                    { text: "Bem, faça a frente como sempre se não se importa", sprite: 3, character: 'sacerdotisa' },
                ]
            }
        }else if(level == 4){
            if(character == 'hero'){
                return [ 
                    { text: "Isso e um teste de texto Heroi", sprite: 1, character: 'hero' },
                    { text: "Isso tambem e um teste de texto", sprite: 2, character: 'hero' },
                    { text: "Mais um texto de teste", sprite: 3, character: 'hero' },
                    { text: "O ultimo texto de teste",  sprite: 4, character: 'hero' },
                ]
            }else{    
                return [ 
                    { text: "Nossa, você adivinhou a senha, estou impressionada.", sprite: 1, character: 'sacerdotisa' },
                    { text: "Agora estamos bem perto do fim acho,\n é uma pena, estou me divertindo até.", sprite: 2, character: 'sacerdotisa' },
                    { text: "Bem, vamos nos focar no agora,\n acho que devemos ver o que aqueles botões fazem.", sprite: 3, character: 'sacerdotisa' },
                ]
            }
        }   
    }

