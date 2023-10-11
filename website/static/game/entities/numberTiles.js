export class NumberTiles {
    constructor(position, number) {
        add([
            sprite(`wood-numbers`, { anim: `${number}` }),
            pos(position),
            area({
                shape: new Rect(vec2(1, 3), 8, 8),
            }),
            anchor("center"),
            scale(5),
            "number-tile"
            ])
        
    }
}
    