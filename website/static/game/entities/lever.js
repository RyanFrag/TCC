import events from "../controller/events.js"
import { playerObj } from "../../game.js"

export class Lever {
    pull = false
    constructor(positions, key) {
        this.key = key
        this.levers = []
        for(const position of positions){
            this.levers.push(
                this.gameObj = add([
                    sprite(`lever`, {anim: "right"}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 16, 16),
                    }),
                    anchor("center"),
                    body({isStatic: true}),
                    scale(2),
                    "lever"
                ])
            )
        }

    }

    pullLever(){
        onUpdate(() => {
            if(!this.pull){
                onKeyPress("z", async () => {
                    if(this.gameObj.isColliding(playerObj)){
                        await this.animate()
                        this.pull = true
                        if(this.key == "barrier1"){
                            events.emit("close_bars_barrier4")
                        }else if(this.key == "barrier2"){
                            events.emit("close_bars_barrier1")
                        }else if(this.key == "barrier3"){
                            events.emit("close_bars_barrier2")
                        }
                        events.emit("open_bars_"+this.key)
                    }
                })
            }else{
                onKeyPress("z", async () => {
                    if(this.gameObj.isColliding(playerObj)){
                    await this.animate()
                    this.pull = false
                    events.emit("close_bars_"+this.key)
                    }
                })
            }
        })
    }

    async animate(){
        if(!this.pull){
            this.gameObj.play("midleLeft")
            setTimeout(() => {
                this.gameObj.play("left")
            }, 1000)
        }else{
            this.gameObj.play("midleRight")
            setTimeout(() => {
                this.gameObj.play("right")
            }, 1000)
        }
    }
}