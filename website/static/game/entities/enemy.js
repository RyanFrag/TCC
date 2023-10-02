
import events from "../controller/events.js"
import { playerObj } from "../../game.js"
let isFollowingPlayer = false
const followDistance = 200; 

export class Enemy {
    constructor(positions, ranges, speeds, type, killed, key){
            this.ranges = ranges
            this.speeds = speeds
            this.enemys = []
            killed = killed
            this.key = key
            for(const position of positions){
                this.enemys.push(
                    this.gameObj = add([
                        sprite(`enemy-${type}`, {anim: "walk"}),
                        pos(position),
                        area({
                            shape: new Rect(vec2(0,3), 32, 32),
                            collisionIgnore: ["dangerous"]
                        }),
                        anchor("center"),
                        body(),
                        scale(2),
                        state("idle", ["idle", "walk-left", "walk-right", "follow-player"]),
                        "dangerous"
                    ])
                    )
            }
        }
    
        openBarriers(){
            const allEnemiesKilled = this.enemys.every(enemy => enemy.killed === true);
            if (allEnemiesKilled) {
                events.emit("open_bars_" + this.key);
            }
        }

        killEnemy(index){
            this.enemys[index].onCollide("player", () => {
                if (index >= 0 && index < this.enemys.length) {
                    this.enemys[index].killed = true;
                }
            })
        }

        async walk(enemy, moveBy, duration){
            if (enemy.curAnim() !== "walk") enemy.play("walk")
            await tween(
                enemy.pos.x,
                enemy.pos.x + moveBy,
                duration,
                (nextPosition) => enemy.pos.x = nextPosition,
                easings.linear
                )
        }
    

        distanceFromPlayer(point1, point2){
            const dx = point1.x - point2.x;
            const dy = point1.y - point2.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

        async followPlayer() {
                if (playerObj) {
                for (const [index, enemy] of this.enemys.entries()){
                    const distanceToPlayer = this.distanceFromPlayer(enemy.pos, playerObj.pos);
                    if (distanceToPlayer < followDistance) {
                        isFollowingPlayer = true;
                    } else if (distanceToPlayer > followDistance) {
                        isFollowingPlayer = false;
                    }
                }
            }
        }

        setMovementEnemy(){
        for (const [index, enemy] of this.enemys.entries()){
            const idle = enemy.onStateEnter("idle", async (previousState)=>{
                
                if(enemy.currAnim !== "idle") enemy.play("idle")
        
                await new Promise((resolve) => {
                    setTimeout(() =>  resolve(), 2000)
                })
                if(!isFollowingPlayer){
                    if(previousState === "walk-left"){
                        enemy.enterState("walk-right")
                    }else{
                        enemy.enterState("walk-left")
                    }
                }else{
                    enemy.enterState("follow-player")
                }
            })
            

            const walkLeft = enemy.onStateEnter("walk-left",  async ()=>{
                enemy.flipX = false
                await this.walk(
                    enemy, 
                    -this.ranges[index], 
                    this.speeds[index]
                )
                enemy.enterState("idle", "walk-left")
            })

            const walkRight = enemy.onStateEnter("walk-right",  async ()=>{
                enemy.flipX = true
                await this.walk(
                    enemy, 
                    this.ranges[index], 
                    this.speeds[index]
                )
                enemy.enterState("idle", "walk-right")
            })

            const followPlayer = enemy.onStateEnter("follow-player",  async ()=>{
                    
                if(followDistance < this.distanceFromPlayer(enemy.pos, playerObj.pos)){
                    isFollowingPlayer = false
                    enemy.enterState("idle", "walk-right")
                }else{
                    const moveByX = playerObj.pos.x > enemy.pos.x ? 1 : -1; 
                    let range = null
                    if(moveByX === 1){
                        enemy.flipX = true
                        range = this.ranges[index]
                    }else{
                        enemy.flipX = false,
                        range = -this.ranges[index]
                    }
                    await this.walk(
                        enemy, 
                        range, 
                        this.speeds[index]
                    )
                    enemy.enterState("follow-player")
                }

                
            })    

            onSceneLeave(() => {
                idle.cancel(),
                walkLeft.cancel(),
                walkRight.cancel()
                followPlayer.cancel()
            })
        }
    }
    update(){
        onUpdate(() => {
            this.openBarriers();

            for (const enemy of this.enemys) {
                this.followPlayer(enemy);
            }
        });
    }
}
