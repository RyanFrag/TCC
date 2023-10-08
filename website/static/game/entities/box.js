import { SoundTile } from "./soundTile.js"

export class Box {
    createBoxes(position, key){
            this.gameObj = add([
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

    collideWithPlayer(playerObj){
        let playing  = false
        onUpdate(() => {
            if(this.gameObj.isColliding(playerObj)){
                if (!playing) {
                    playing = true;
                    const sound = new SoundTile()
                    sound.addSound("wood-box", {
                        volume: 0.1,
                    })
                    onCollideEnd("player", "wood-box", () => {
                        playing = false
                        soundTile.pause("wood-box")
                    })       
                }
            }    
        })
    }
}