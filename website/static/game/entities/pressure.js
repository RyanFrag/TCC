import events from "../controller/events.js"

export class Pressure {
    pressed = false
    constructor(position, key) {
        this.key = key
        this.gameObj = add([
            sprite('brick-button', { anim: `${key}` }),
            pos(position),
            area({
                shape: new Rect(vec2(1, 3), 32, 32),
            }),
            anchor("center"),
            scale(2),
            'pressure'
        ])

    }

    
    pressPlate(){
        if(!this.pressed){
            this.gameObj.onCollide(`box-${this.key}`, () => {
                this.pressed =  true
                this.gameObj.play(`pressed${this.key}`)
                events.emit("box_pressed", this.key)   
            }) 
        }
    }
    

}