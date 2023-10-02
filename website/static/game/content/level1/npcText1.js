var speed = {
    pause: 500,
    slow: 10000,
    normal: 5000,
    fast: 2000,
}

export function NpcTextLines(character){
    if(character == 'hero'){
        return [ 
            { text: "Isso e um teste de texto Heroi", speed: speed.normal, sprite: 1, character: 'hero' },
            { text: "Isso tambem e um teste de texto", speed: speed.slow, sprite: 2, character: 'hero' },
            { text: "Mais um texto de teste", speed: speed.fast, sprite: 3, character: 'hero' },
            { text: "O ultimo texto de teste", speed: speed.normal, sprite: 4, character: 'hero' },
        ]
    }else{
        return [ 
            { text: "Isso e um teste de texto Sacerdotisa", speed: speed.normal, sprite: 1, character: 'sacerdotisa' },
            { text: "Isso tambem e um teste de texto", speed: speed.slow, sprite: 2, character: 'sacerdotisa'},
            { text: "Mais um texto de teste", speed: speed.fast, sprite: 3, character: 'sacerdotisa' },
            { text: "O ultimo texto de teste", speed: speed.normal, sprite: 4, character: 'sacerdotisa' },
        ]
    }
    
}
