
import events from "../controller/events.js"
import { playerObj } from "../../game.js"
let isFollowingPlayer = false
const followDistance = 200; 

export class Enemy {
    constructor(positions, rangeX, rangeY, speeds, type, killed, key){
            this.rangeX = rangeX
            this.rangeY = rangeY
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
                        state("idle", ["idle", "walk-left", "walk-right", 'walk-up', 'walk-down', "follow-player"]),
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
        
        async walkVertical(enemy, moveBy, duration){
            if (enemy.curAnim() !== "walk") enemy.play("walk");
            await tween(
                enemy.pos.y,
                enemy.pos.y + moveBy,
                duration,
                (nextPosition) => enemy.pos.y = nextPosition,
                easings.easeOutSine
            );
        }

        async walk(enemy, moveBy, duration){
            if (enemy.curAnim() !== "walk") enemy.play("walk")
            await tween(
                enemy.pos.x,
                enemy.pos.x + moveBy,
                duration,
                (nextPosition) => enemy.pos.x = nextPosition,
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
                let isMoving = false;
                if(enemy.currAnim !== "idle") enemy.play("idle")
        
                await new Promise((resolve) => {
                    setTimeout(() =>  resolve(), 2000)
                })
                
                if (!isFollowingPlayer) {
                    if (!isMoving) {
                        isMoving = true; 
                        if (previousState === "walk-left") {
                            enemy.enterState("walk-right");
                        } else if (previousState === "walk-right") {
                            enemy.enterState("walk-up");
                        } else if (previousState === "walk-up") {
                            enemy.enterState("walk-down");
                        } else {
                            enemy.enterState("walk-left");
                        }
                        isMoving = false
                    }
                } else {
                    enemy.enterState("follow-player");
                }
            })
            

            const walkLeft = enemy.onStateEnter("walk-left",  async ()=>{
                enemy.flipX = false
                await this.walk(
                    enemy, 
                    -this.rangeX[index], 
                    this.speeds[index]
                )
                enemy.enterState("idle", "walk-left")
            })

            const walkRight = enemy.onStateEnter("walk-right",  async ()=>{
                play("skeleton-walk", {volume: 0.1})
                enemy.flipX = true
                await this.walk(
                    enemy, 
                    this.rangeX[index], 
                    this.speeds[index]
                )
                enemy.enterState("idle", "walk-right")
            })

            const walkUp = enemy.onStateEnter("walk-up",  async ()=>{
                play("skeleton-walk", {volume: 0.1})
                await this.walkVertical(
                    enemy, 
                    -this.rangeY[index], 
                    this.speeds[index]
                )
                enemy.enterState("idle", "walk-up")
            })

            const walkDown = enemy.onStateEnter("walk-down",  async ()=>{
                await this.walkVertical(
                    enemy, 
                    this.rangeY[index], 
                    this.speeds[index]
                )
                enemy.enterState("idle", "walk-down")
            })


            const followPlayer = enemy.onStateEnter("follow-player",  async ()=>{

                if(followDistance < this.distanceFromPlayer(enemy.pos, playerObj.pos)){
                    isFollowingPlayer = false
                    enemy.enterState("idle", "walk-right")
                }else{
                    const moveByX = playerObj.pos.x > enemy.pos.x ? 1 : -1; 
                    const verticalDistance = Math.abs(playerObj.pos.y - enemy.pos.y);
                    const horizontalDistance = Math.abs(playerObj.pos.x - enemy.pos.x);
                    let range = null
                    let rangeY = null
                    if (horizontalDistance > 20) {
                        if(moveByX === 1){
                            enemy.flipX = true
                            range = this.rangeX[index]
                        }else{
                            enemy.flipX = false,
                            range = -this.rangeX[index]
                        }
                        await this.walk(enemy,range, this.speeds[index])
                    }
                    if (verticalDistance > 20) {
                        const moveByY = playerObj.pos.y > enemy.pos.y ? 1 : -1;
                        if (moveByY === 1) {
                            rangeY = this.rangeY[index];
                        } else {
                            rangeY = -this.rangeY[index];
                        }
                        await this.walkVertical(enemy, rangeY, this.speeds[index]);
                    }
                    enemy.enterState("follow-player")
                }
            })    

            onSceneLeave(() => {
                idle.cancel(),
                walkLeft.cancel(),
                walkRight.cancel(),
                walkUp.cancel(),
                walkDown.cancel(),
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
