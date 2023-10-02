import events from "../controller/events.js"

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
                            shape: new Rect(vec2(0,3), 8, 8),
                            collisionIgnore: ["dangerous"]
                        }),
                        anchor("center"),
                        body(),
                        scale(2),
                        state("idle", ["idle", "walk-left", "walk-right"]),
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
                easings.easeOutSine
                )
        }
    
        update(){
            onUpdate(() => {
                this.openBarriers()
            })
        }



        setMovementEnemy(){
        for (const [index, enemy] of this.enemys.entries()){
            const idle = enemy.onStateEnter("idle", async (previousState)=>{
    
                if(enemy.currAnim !== "idle") enemy.play("idle")
        
                await new Promise((resolve) => {
                    setTimeout(() =>  resolve(), 1000)
                })
         
               if(previousState === "walk-left"){
                    enemy.enterState("walk-right")
                }else{
                    enemy.enterState("walk-left")
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

            onSceneLeave(() => {
                idle.cancel(),
                walkLeft.cancel(),
                walkRight.cancel()
            })
        }
    }
}
