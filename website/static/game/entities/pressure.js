import events from "../controller/events.js"
import { Enemy } from "./enemy.js"
import { SoundTile } from "./soundTile.js"
let playing = false
const senha = "284395";
let entrySenha = "";

export class Pressure {
    pressed = false
    constructor(position, key, type, buttonType) {
        this.key = key
        this.buttonType = buttonType
        this.gameObj = add([
            sprite(`${type}-button`, { anim: `${buttonType}` }),
            pos(position),
            area({
                shape: new Rect(vec2(1, 3), 8, 8),
            }),
            anchor("center"),
            scale(4),
            'pressure'
        ])
    }

    
    pressPlate(enemyPress=false, playerPress=false, boxPress=false){
        if(!this.pressed){
            if(enemyPress){
                this.gameObj.onCollide(`dangerous`, () => {
                    console.log("pressed")
                    this.pressed =  true
                    this.gameObj.play(`pressed${this.buttonType}`)
                    const sound = new SoundTile()
                    sound.addSound("button", {
                        volume: 0.1
                    })
                    events.emit("open_bars_" + this.key)   
                }) 
            } else if(playerPress){
                const sound = new SoundTile()
                this.gameObj.onCollide(`player`,  () => {
                    if (!playing) {
                        const enemys = new Enemy(
                            [vec2(910,200)],
                            [100],
                            [100],
                            [2],
                            [1],
                            false,
                            'open2', 
                        )
                        enemys.birth(0)
                        enemys.killEnemy(0)
                        enemys.setMovementEnemy()
                        enemys.update()   
                        this.pressed =  true
                        playing = true;
                        this.gameObj.play(`pressed${this.buttonType}`)
                        sound.addSound("button", {
                            volume: 0.001
                        })
                    }
                    playing = false;
                    setTimeout(() => {
                        this.pressed =  false
                        sound.playSound("button", {
                            volume: 0.1
                        })
                        this.gameObj.play(`unpressed${this.buttonType}`)
                    }, 4000)
  
                })
            }else if(boxPress){
                this.gameObj.onCollide(`box-${this.key}`, () => {
                    this.pressed =  true
                    this.gameObj.play(`pressed${this.buttonType}`)
                    const sound = new SoundTile()
                    sound.addSound("button", {
                        volume: 0.1
                    })
                    events.emit("box_pressed", this.key)   

                }) 
                
            }else{
                this.gameObj.onCollide(`car`, () => {
                    this.pressed =  true
                    this.gameObj.play(`pressed${this.buttonType}`)
                    const sound = new SoundTile()
                    sound.addSound("button", {
                        volume: 0.1
                    })
                    events.emit("open_bars_" + this.key)
                })
            }
        }
    }
    resetBoxes(boxesObjsPosition){
        const sound = new SoundTile()
        this.gameObj.onCollide(`player`, () => {
        for (const boxData of boxesObjsPosition) {
            for (const objName in boxData) {
                if (boxData.hasOwnProperty(objName)) {
                    const { box, position } = boxData[objName];
                    box.moveTo(position);
                }
            }
        }
        this.gameObj.play(`pressed${this.buttonType}`)
        sound.addSound("button", {
            volume: 0.001
        })
        setTimeout(() => {
            this.pressed =  false
            sound.playSound("button", {
                volume: 0.1
            })
            this.gameObj.play(`unpressed${this.buttonType}`)
        }, 4000)
    })
    }

    puzzleNumbers(entry){
        this.gameObj.onCollide(`player`, () => {
            if(entry == "restart"){
                entrySenha = "";
            }else{
                entrySenha += entry
            }
            if(entrySenha == senha){
                events.emit("open_bars_" + this.key)
            }
            this.pressed =  true
                playing = true;
                this.gameObj.play(`pressed${this.buttonType}`)
                const sound = new SoundTile()
                sound.addSound("button", {
                    volume: 0.001
                })
            playing = false;
            setTimeout(() => {
                this.pressed =  false
                sound.playSound("button", {
                    volume: 0.1
                })
                this.gameObj.play(`unpressed${this.buttonType}`)
            }, 4000)
        })
    }

    puzzle(type){
        if(!this.pressed){
            this.gameObj.onCollide(`player`, () => {
                if(type == "reset"){
                    events.emit("reset_" + this.key)   
                }else if(type == "walk-right"){
                    events.emit("walk_right_" + this.key)   
                }else if(type == "walk-left"){
                    events.emit("walk_left_" + this.key)   
                }else if(type == "walk-up"){
                    events.emit("walk_up_" + this.key)   
                }else if(type == "walk-down"){
                    events.emit("walk_down_" + this.key)   
                }else if(type == "two"){
                    events.emit("two_" + this.key)   
                }else if(type == "three"){
                    events.emit("three_" + this.key)   
                }else if(type == "four"){
                    events.emit("four_" + this.key)   
                }else if(type == "one"){
                    events.emit("one_" + this.key)
                }
                this.pressed =  true
                playing = true;
                this.gameObj.play(`pressed${this.buttonType}`)
                const sound = new SoundTile()
                sound.addSound("button", {
                    volume: 0.001
                })
                playing = false;
                setTimeout(() => {
                    this.pressed =  false
                    sound.playSound("button", {
                        volume: 0.1
                    })
                    this.gameObj.play(`unpressed${this.buttonType}`)
                }, 4000)
            })
        }
    }
}