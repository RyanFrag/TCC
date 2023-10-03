

    export function NpcTextLines(character){
        if(character == 'hero'){
            return [ 
                { text: "Isso e um teste de texto Heroi", sprite: 1, character: 'hero' },
                { text: "Isso tambem e um teste de texto", sprite: 2, character: 'hero' },
                { text: "Mais um texto de teste", sprite: 3, character: 'hero' },
                { text: "O ultimo texto de teste",  sprite: 4, character: 'hero' },
            ]
        }else{
            return [ 
                { text: "Isso e um teste de texto Sacerdotisa",  sprite: 1, character: 'sacerdotisa' },
                { text: "Isso tambem e um teste de texto", sprite: 2, character: 'sacerdotisa'},
                { text: "Mais um texto de teste",  sprite: 3, character: 'sacerdotisa' },
                { text: "O ultimo texto de teste", sprite: 4, character: 'sacerdotisa' },
            ]
        }
        
    }

