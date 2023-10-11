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
                    `wood-box-${type}`,
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
                        volume: 0.5,
                    })
                    onCollideEnd("player", `wood-box-${this.type}`, () => {
                        console.log('entrei')
                        playing = false
                        soundTile.pause("wood-box")
                    })       
                }
            }
        })
    }
}