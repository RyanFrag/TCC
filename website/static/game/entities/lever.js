import events from "../controller/events.js"

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
                        shape: new Rect(vec2(0, 3), 24, 24),
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
        if(this.pull){
            this.gameObj.onCollide("player", () => {
                onKeyPress("z", async () => {
                    await this.moveLever(false)
                    this.pull = false
                    events.emit("close_bars_"+this.key)
                })
            })
        }
        if(!this.pull){
            this.gameObj.onCollide("player", () => {
                onKeyPress("z", async () => {
                    await this.moveLever(true)
                    this.pull = true
                    events.emit("open_bars_"+this.key)
                })
            }) 
        }
    }

    async moveLever(open){
        if(open){
            if(!this.pull){
                this.gameObj.play("midle")
                setTimeout(() => {
                    this.gameObj.play("left")
                }, 1000)
            }
        }else{
            if(this.pull){
                this.gameObj.play("midle")
                setTimeout(() => {
                    this.gameObj.play("right")
                }, 1000)
            }
        }
    }
}