
import events from "../controller/events.js"
import { playerObj } from "../../game.js"

const followDistance = 400; 
let call = false;
let canAttack = true;

export class Boss {
    constructor(position, rangeX, rangeY, speeds,  key){
            this.rangeX = rangeX
            this.rangeY = rangeY
            this.speeds = speeds
            this.killed = false
            this.health = 100
            this.key = key
            this.isFollowingPlayer = false; 
            this.lastAttackTime = 0;
            this.gameObj = add([
                {
                    sprites: {
                        idle: "enemy-1",
                        // run: "run-" + character,
                        // idle: "idle-" + character,
                        attack: "attack-boi",
                        // death: "death-"
                    }
                },                
                pos(position),
                area({
                    shape: new Rect(vec2(0,3), 16, 16),
                    collisionIgnore: ["dangerous"]
                }),
                anchor("center"),
                body(),
                scale(3),
                state("idle", ["idle", "walk-left", "walk-right", 'walk-up', 'walk-down', "follow-player", "attack"]),
                "dangerous"
                ])         
            }
        
    
        openBarriers(){
            if (this.killed) {
                if(!call){
                    events.emit("open_bars_" + this.key);
                    events.emit("progress_open$");
                    call = true
                }
            }
        }


        playIdleAnimation(){
            this.gameObj.use(sprite(this.gameObj.sprites.idle))
            this.gameObj.play("idle")
        }

        killBoss(){
            this.gameObj.onCollide("slash", () => {
                play("hit", {
                    volume: 0.2
                })
                this.health -= 20
                if (this.health == 0) {
                    this.gameObj.unuse("dangerous");
                    if(!this.killed ){
                        this.killed = true;
                        this.gameObj.play("death", {
                            onEnd: () => {
                                destroy(this.gameObj);
                            }
                        });
                    }

                }
            })
        }
        
        async walkVertical( moveBy, duration){
            if (this.gameObj.curAnim() !== "walk") this.gameObj.play("walk");
            await tween(
                this.gameObj.pos.y,
                this.gameObj.pos.y + moveBy,
                duration,
                (nextPosition) => this.gameObj.pos.y = nextPosition,
                easings.easeOutSine
            );
        }

        async walk( moveBy, duration){
            if (this.gameObj.curAnim() !== "walk") this.gameObj.play("walk")
            await tween(
                this.gameObj.pos.x,
                this.gameObj.pos.x + moveBy,
                duration,
                (nextPosition) => this.gameObj.pos.x = nextPosition,
                easings.easeOutSine
                )
        }
    

        distanceFromPlayer(point1, point2){
            const dx = point1.x - point2.x;
            const dy = point1.y - point2.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

        async followPlayer() {
            if (playerObj) {
                const distanceToPlayer = this.distanceFromPlayer(this.gameObj.pos, playerObj.pos);
                if (distanceToPlayer < followDistance) {
                    this.isFollowingPlayer = true;  
                    } else if (distanceToPlayer > followDistance) {
                    this.isFollowingPlayer = false; 
                }
                
            }
        }
        
        setMovementBoss(){
            if (this.killed) return
            const idle = this.gameObj.onStateEnter("idle", async (previousState)=>{
                let isMoving = false;
                if(this.gameObj.currAnim !== "idle") this.gameObj.play("idle")
                await new Promise((resolve) => {
                    setTimeout(() =>  resolve(), 2000)
                })
                if (!this.isFollowingPlayer && !this.gameObj.currAnim !== "death") {
                    if (!isMoving) {
                        isMoving = true; 
                        if (previousState === "walk-left") {
                            this.gameObj.enterState("walk-right");
                        } else if (previousState === "walk-right") {
                            this.gameObj.enterState("walk-up");
                        } else if (previousState === "walk-up") {
                            this.gameObj.enterState("walk-down");
                        } else {
                            this.gameObj.enterState("walk-left");
                        }
                        isMoving = false
                    } 
                } else if(this.gameObj.currAnim !== "death") {
                        this.gameObj.enterState("follow-player");
                    }
                })
                
                const walkLeft = this.gameObj.onStateEnter("walk-left",  async ()=>{
                    this.gameObj.flipX = true
                    await this.walk( 
                        -this.rangeX, 
                        this.speeds
                    )
                    this.gameObj.enterState("idle", "walk-left")
                })

                const walkRight = this.gameObj.onStateEnter("walk-right",  async ()=>{
                    this.gameObj.flipX = false
                    await this.walk( 
                        this.rangeX, 
                        this.speeds
                    )
                    this.gameObj.enterState("idle", "walk-right")
                })
                
                const walkUp = this.gameObj.onStateEnter("walk-up",  async ()=>{
                    if (this.gameObj.killed) return
                    await this.walkVertical(
                        -this.rangeY, 
                        this.speeds
                    )
               
                    const randomDelay = Math.floor(Math.random() * 10 + 1) * 1000;
                    setTimeout(() => {
                        const sound = play("skeleton-walk", {volume: 0.1})
                        onSceneLeave(() => {
                            sound.paused = true
                        })
                    }, randomDelay);
                    this.gameObj.enterState("idle", "walk-up")
               
                })

                const walkDown = this.gameObj.onStateEnter("walk-down",  async ()=>{
                    await this.walkVertical(
                        this.rangeY, 
                        this.speeds
                    )
                    this.gameObj.enterState("idle", "walk-down")
                })

                const attack = this.gameObj.onStateEnter("attack",  async ()=>{

                    this.gameObj.use(sprite(this.gameObj.sprites.attack));
                    this.gameObj.play("attack")

                    add([
                        rect(30, 30),
                        area(),
                        pos(vec2(this.gameObj.pos.x - 40, this.gameObj.pos.y + 160)),
                        scale(3),
                        opacity(0),
                        "boss-attack"
                    ]);

                    add([
                        rect(30, 30),
                        area(),
                        pos(vec2(this.gameObj.pos.x - 40, this.gameObj.pos.y + 90)),
                        scale(3),
                        opacity(0),
                        "boss-attack"
                    ]);

                    add([
                        rect(30, 30),
                        area(),
                        pos(vec2(this.gameObj.pos.x - 140, this.gameObj.pos.y + 90)),
                        scale(3),
                        opacity(0),
                        "boss-attack"
                    ]);

                    add([
                        rect(30, 30),
                        area(),
                        pos(vec2(this.gameObj.pos.x -140, this.gameObj.pos.y + 160)),
                        scale(3),
                        opacity(0),
                        "boss-attack"
                    ]);

                    setTimeout(() => {
                        destroyAll("boss-attack");
                        this.playIdleAnimation()
                        this.gameObj.enterState("follow-player");
                    }, 3000);
                     
                })


                const followPlayer = this.gameObj.onStateEnter("follow-player",  async ()=>{
                    if (this.killed) return
                    const distance  = this.distanceFromPlayer(this.gameObj.pos, playerObj.pos)
                    if(followDistance < distance){
                        this.isFollowingPlayer = false; 
                        this.gameObj.enterState("idle", "walk-right")
                    }
                    else if(canAttack && 200 > distance){
                        this.gameObj.enterState("attack")
                        canAttack = false; 
                        setTimeout(() => {
                            canAttack = true; 
                        }, 5000);
                    }   
                    else{
                        const moveByX = playerObj.pos.x > this.gameObj.pos.x ? 1 : -1; 
                        const verticalDistance = Math.abs(playerObj.pos.y - this.gameObj.pos.y);
                        const horizontalDistance = Math.abs(playerObj.pos.x - this.gameObj.pos.x);
                        let range = null
                        let rangeY = null
                        if (horizontalDistance > 20) {
                            if(moveByX === 1){
                                this.gameObj.flipX = false
                                range = this.rangeX
                            }else{
                                this.gameObj.flipX = true,
                                range = -this.rangeX
                            }
                            await this.walk(range, this.speeds)
                        }
                        if (verticalDistance > 20) {
                            const moveByY = playerObj.pos.y > this.gameObj.pos.y ? 1 : -1;
                            if (moveByY === 1) {
                                rangeY = this.rangeY;
                            } else {
                                rangeY = -this.rangeY;
                            }
                            await this.walkVertical(rangeY, this.speeds);
                        }
                        this.gameObj.enterState("follow-player")
                    }
                })    

                onUpdate(() => {
                        if(this.killed){
                            idle.cancel(),
                            walkLeft.cancel(),
                            walkRight.cancel(),
                            walkUp.cancel(),
                            walkDown.cancel(),
                            followPlayer.cancel(),
                            attack.cancel()

                        }
                    })
                onSceneLeave(() => {
                    idle.cancel(),
                    walkLeft.cancel(),
                    walkRight.cancel(),
                    walkUp.cancel(),
                    walkDown.cancel(),
                    followPlayer.cancel(),
                    attack.cancel()
                })
            }
    
    update(){
        onUpdate(() => {
            this.openBarriers();
            this.followPlayer(this.gameObj);
                
            
        });
    }
}
