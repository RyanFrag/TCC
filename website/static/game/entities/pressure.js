import events from "../controller/events.js"
import { SoundTile } from "./soundTile.js"

export class Pressure {
    pressed = false
    constructor(position, key, type) {
        this.key = key
        this.gameObj = add([
            sprite(`${type}-button`, { anim: `${key}` }),
            pos(position),
            area({
                shape: new Rect(vec2(1, 3), 32, 32),
            }),
            anchor("center"),
            scale(4),
            'pressure'
        ])

    }

    
    pressPlate(enemyPress=false){
        if(!this.pressed){
            if(enemyPress){
                this.gameObj.onCollide(`dangerous`, () => {
                    this.pressed =  true
                    this.gameObj.play(`pressed${this.key}`)
                    const sound = new SoundTile()
                    sound.addSound("button", {
                        volume: 0.1
                    })
                    console.log(this.key)
                    events.emit("open_bars_" + this.key)   
                }) 
            }
            this.gameObj.onCollide(`box-${this.key}`, () => {
                this.pressed =  true
                this.gameObj.play(`pressed${this.key}`)
                const sound = new SoundTile()
                sound.addSound("button", {
                    volume: 0.1
                })
                events.emit("box_pressed", this.key)   
            }) 
        }
    }
    

}