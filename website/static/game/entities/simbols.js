export class Simbols {
    constructor(position, simbol) {
                add([
                    sprite(`wood-simbols`, { anim: `${simbol}` }),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 8, 8),
                    }),
                    anchor("center"),
                    scale(5),
                    "simbol-tile"
                    ])
                
            }
        }
    