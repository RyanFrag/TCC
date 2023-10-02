export class Box {
    constructor(positions, key) {
        this.boxes = []
        this.createBoxes(positions, key);
    }
    createBoxes(positions, key){
        for(const position of positions){
            this.boxes.push(
                this.gameObj = add([
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
            return this.gameObj
        }
    }

}