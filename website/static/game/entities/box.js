export class Box {
    createBoxes(position, key){
                return add([
                    sprite(`wood-box`, {anim: `${key}`}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 32, 32),
                    }),
                    anchor("center"),
                    body({mass:5}),
                    scale(2),
                    `box-${key}`,
                ])
    }

}