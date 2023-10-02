export class Box {
    constructor(positions, key) {
        this.boxes = []
        for(const position of positions){
            this.boxes.push(
                add([
                    sprite(`wood-box-${key}`),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 32, 32),
                    }),
                    anchor("center"),
                    body(),
                    scale(2),
                    `box-${key}`,
                ])
                )
        }
    }

}