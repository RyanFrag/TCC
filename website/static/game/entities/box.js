import { SoundTile } from "./soundTile.js"

export class Box {
    createBoxes(position, key, type){
            this.gameObj = add([
                    sprite(`wood-box-${type}`, {anim: `${key}`}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 32, 32),
                    }),
                    anchor("center"),
                    body(),
                    scale(2),
                    `box-${key}`,
                    `wood-box`,
                ])
            return this.gameObj
    }
}