import events from "../controller/events.js"
import { playerObj } from "../../game.js"
import { SoundTile } from "./soundTile.js"

export class Lever {
    pull = false
    constructor(positions, key) {
        this.key = key
        this.levers = []
        this.call = false
        for(const position of positions){
            this.levers.push(
                this.gameObj = add([
                    sprite(`lever`, {anim: "right"}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 8, 8),
                    }),
                    anchor("center"),
                    body({isStatic: true}),
                    scale(4),
                    "lever"
                ])
            )
        }

    }

    pullLever() {
        onKeyPress("z", async () => {
            if (!this.call) {
                if (!this.pull) {
                    if (this.gameObj.isColliding(playerObj)) {
                        this.call = true;
                        await this.animate();
                        this.pull = true;
                        if (this.key == "barrier1") {
                            events.emit("close_bars_barrier4");
                        } else if (this.key == "barrier2") {
                            events.emit("close_bars_barrier1");
                        } else if (this.key == "barrier3") {
                            events.emit("close_bars_barrier2");
                        }
                        events.emit("open_bars_" + this.key);
                    }
                } else if (this.pull) {
                    if (this.gameObj.isColliding(playerObj)) {
                        this.call = true;
                        await this.animate();
                        this.pull = false;
                        events.emit("close_bars_" + this.key);
                    }
                }
                this.call = false;
            }
        });
    }
    
    

    async animate(){
        const sound = new SoundTile()
        if(!this.pull){
            this.gameObj.play("midleLeft")
            sound.addSound("lever", {
                volume: 0.1
            })
            setTimeout(() => {
                this.gameObj.play("left")
            }, 1000)
        }else{
            sound.addSound("lever", {
                volume: 0.1
            })
            this.gameObj.play("midleRight")
            setTimeout(() => {
                this.gameObj.play("right")
            }, 1000)
        }
    }
}