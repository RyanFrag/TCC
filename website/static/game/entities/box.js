
export class Box {
    createBoxes(position, key, type){
            this.gameObj = add([
                    sprite(`wood-box-${type}`, {anim: `${key}`}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 16, 16),
                    }),
                    anchor("center"),
                    body(),
                    scale(3),
                    `box-${key}`,
                    `wood-box`,
                ])
            return this.gameObj
    }
}