

    export function NpcTextLines(character, level){
        if(level == 1){
            if(character == 'hero'){
                return [ 
                    { text: "Olá, parece que estamos trancados aqui.", sprite: "static", character: 'hero' },
                    { text: "Parece que para prosseguirmos precisamos\n resolver essa charada.", sprite: "static", character: 'hero' },
                    { text: "Essas caixas e botões\n tem simbolos parecidos..", sprite: "static", character: 'hero' },
                    { text: "E aquele simbolo com interrogação parece estranho..",  sprite: "static", character: 'hero' },
                ]
            }else{
                return [ 
                    { text: "Maravilha, acabamos de entrar no labirinto\n e já estamos trancados por essas barras.",  sprite: "static", character: 'sacerdotisa' },
                    { text: "Parece que essas caixas e botões tem simbolos parecidos\n será que têm algo aver com essas barras?", sprite: "static", character: 'sacerdotisa'},
                    { text: "Olha, o que é aquele piso com uma interrogação?",  sprite: "static", character: 'sacerdotisa' },
                ]
            }        
        }else if(level == 2){
            if(character == 'hero'){
                return [ 
                    { text: "Chegamos em uma área diferente.", sprite: "static", character: 'hero' },
                    { text: "Creio que só iria ficar mais díficil\n tome cuidado.", sprite: "static", character: 'hero' },
                    { text: "Ei, aquilo é um inimigo naquela jaula?\n se precisar de ajuda eu lido com ele.", sprite: "static", character: 'hero' },
                ]
            }else{    
                return [ 
                    { text: "Ufa.. bem, parece que conseguimos descer\n    pelas aquelas escadas, pareciam que não iam acabar nunca.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Esse ambiente é... diferente, gostei!\n muito melhor que aqueles tijolos de masmorra.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Parece que os desafios estão mais complexos agora,\n devemos ir com cautela.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Por favor, faça a frente.", sprite: "static", character: 'sacerdotisa' },
                ]
            }
        }else if(level == 3){
            if(character == 'hero'){
                return [ 
                    { text: "Chegamos a metade do labirinto, ótimo.", sprite: "static", character: 'hero' },
                    { text: "Tome cuidado daqui em diante.", sprite: "static", character: 'hero' },
                    { text: "Parece aver vários inimigos a frente.", sprite: "static", character: 'hero' },
                    { text: "Tome cuidado, por favor.",  sprite: "static", character: 'hero' },
                ]
            }else{    
                return [ 
                    { text: "Conseguimos! Chegamos a metade do labirinto.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Bem essa sala realmente parece um..\n você sabe, labirinto.", sprite: "static", character: 'sacerdotisa' },
                    { text: "E têm esses números no chão,\n não tenho ideia do que fazer.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Bem, faça a frente como sempre se não se importa.", sprite: "static", character: 'sacerdotisa' },
                ]
            }
        }else if(level == 4){
            if(character == 'hero'){
                return [ 
                    { text: "Parabéns por acertar a Senha.", sprite: "static", character: 'hero' },
                    { text: "Estamos bem perto do fim.", sprite: "static", character: 'hero' },
                    { text: "Creio que você já é melhor que eu nisso.", sprite: "static", character: 'hero' },
                    { text: "Vamos seguir nosso caminho, não falta muito.",  sprite: "static", character: 'hero' },
                ]
            }else{    
                return [ 
                    { text: "Nossa, você adivinhou a senha, estou impressionada.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Agora estamos bem perto do fim acho,\n é uma pena, estou me divertindo até.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Bem, vamos nos focar no agora,\n acho que devemos ver o que aqueles botões fazem.", sprite: "static", character: 'sacerdotisa' },
                ]
            }
        }else if(level == 5){
            if(character == 'hero'){
                return [ 
                    { text: "Parece que chegamos ao fim,\nfinalmente podemos...", sprite: "static", character: 'hero' },
                    { text: "Espere, aquilo a nossa a frente é?", sprite: "static", character: 'hero' },
                    { text: "Cuidado, o minotauro ele ainda vive, droga.", sprite: "static", character: 'hero' },
                    { text: "Ele não é como os inimigos que enfrentamos até agora.",  sprite: "static", character: 'hero' },
                    { text: "Espere a oportunidade para atacar,\n assim podemos derrotar ele.",  sprite: "static", character: 'hero' },
                ]
            }else{    
                return [ 
                    { text: "Parece que chegamos ao fim, finalmente...", sprite: "static", character: 'sacerdotisa' },
                    { text: "Não é possivel, aquele monstro é o minotauro??", sprite: "static", character: 'sacerdotisa' },
                    { text: "Não podemos pegar o cetro até derrotar ele, droga.", sprite: "static", character: 'sacerdotisa' },
                    { text: "Faça o seguinte,\n ele não é como os inimigos que enfrentamos ate agora", sprite: "static", character: 'sacerdotisa' },
                    { text: "Precisamos de uma bracha para Atacar", sprite: "static", character: 'sacerdotisa' },
                    { text: "Logo depois, pegamos o cetro, capiche?", sprite: "static", character: 'sacerdotisa' },
                ]
            }
        }      
    }

