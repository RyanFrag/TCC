import { Cutscene } from "../content/cutscene.js"
import { NpcTextLines } from "../content/npcText.js"
import { QuestionTextLines } from "../content/questionText.js"
let currentFlip = null
let canAttack = true; 

export class Player {
    constructor(
        posX, 
        posY, 
        speed, 
        currentLevel, 
        finalLevel,
        nbLives,
        onCutscene
        ){
            this.finalLevel =  finalLevel
            this.currentLevel = currentLevel
            this.initialX = posX
            this.initialY = posY
            this.speed = speed
            this.lives = nbLives
            this.onCutscene = onCutscene

        }
        makePlayer(character){
            this.gameObj = add([
                {
                    sprites: {
                        run: "run-" + character,
                        idle: "idle-" + character,
                        attack: "attack-" + character,
                        win: "win-" + character
                    }
                },
                area({shape: new Rect(vec2(0, 10), 16, 16) }),
                anchor("center"),
                pos(this.initialX, this.initialY),
                scale(3),
                body(),
                "player"
            ])
            return this.gameObj
        }

        playIdleAnimation(){
            this.gameObj.use(sprite(this.gameObj.sprites.idle))
            this.gameObj.play("idle")
        }


        async setPlayerControls(){ 

                if (this.speed === 0) this.gameObj.play("idle");
                
                onKeyDown("left",async () => {
                    if(!this.onCutscene){

                        currentFlip = true;
                        if (this.gameObj.curAnim() !== "run" && this.speed > 0) {
                            this.gameObj.use(sprite(this.gameObj.sprites.run));
                            this.gameObj.play("run");
                        }
                        this.gameObj.flipX = true;
                        this.gameObj.move(-this.speed, 0);
                    }
                });
                
                onKeyDown("right",async () => {
                    if(!this.onCutscene){
                        currentFlip = false
                        if(this.gameObj.curAnim() !== "run" && this.speed > 0){
                            this.gameObj.use(sprite(this.gameObj.sprites.run))
                            this.gameObj.play("run")
                        }                    
                        this.gameObj.flipX = false
                        this.gameObj.move(this.speed, 0)
                    }    
                })
                onKeyDown("up",async () => {
                    if(!this.onCutscene){
                        if(this.gameObj.curAnim() !== "run" && this.speed > 0){
                            this.gameObj.use(sprite(this.gameObj.sprites.run))
                            
                            this.gameObj.play("run")
                        }                    
                        this.gameObj.move(0, -this.speed)
                    }
                })
                onKeyDown("down", async() => {
                    if(!this.onCutscene){
                        if(this.gameObj.curAnim() !== "run" && this.speed > 0 && !this.onCutscene){
                            this.gameObj.use(sprite(this.gameObj.sprites.run))
                            this.gameObj.play("run")
                        }                    
                        this.gameObj.move(0, this.speed)
                    
                    }
                })
                
                onKeyRelease(() => {
                    if(!this.onCutscene){
                        if(isKeyReleased("left")){
                            this.playIdleAnimation()
                            this.gameObj.flipX = true
                        }
                        
                        if(isKeyReleased("right") || isKeyReleased("up") || isKeyReleased("down")){   
                            this.playIdleAnimation()
                            this.gameObj.flipX = false
                        }
                    }
                })
                
            }        
        respawnPlayer(){
            if(this.lives > 0){
                play("lost-heart", {
                    volume: 0.3
                })
                this.lives--
                this.gameObj.pos = vec2(this.initialX, this.initialY)
                return
            }
            go("gameOver")
        }

        hitByMobs(character){
            function hitAndRespawn(context){
                play(`player-hit-${character}`, {
                    volume: 0.3
                })
                context.respawnPlayer()
            }
            this.gameObj.onCollide("dangerous", () => hitAndRespawn(this, character))
        }

        hitByBoss(character){
            function GoRespawn(context){
                play(`player-hit-${character}`, {
                    volume: 0.3
                })
                context.respawnPlayer()
            }
            this.gameObj.onCollide("boss", () => GoRespawn(this, character))
        }


        hitByBossAttack(character){
            function GoRespawn(context){
                play(`player-hit-${character}`, {
                    volume: 0.3
                })
                context.respawnPlayer()
            }
            this.gameObj.onCollide("boss-attack", () => GoRespawn(this, character))
        }
        

        hitQuestionTile(numberOfQuestion, level){
            async function  startDialogueQuestion(context){
                context.onCutscene = true
                const cutscene = new Cutscene()
                const questionLines = QuestionTextLines(numberOfQuestion, level)
                context.onCutscene = await cutscene.cutsceneCreator(questionLines)
            }
            this.gameObj.onCollide(`question-${numberOfQuestion}`, () => startDialogueQuestion(this, numberOfQuestion, level))
        }

        async hitByNpc(npc, level){
            async function  startDialogue(context, npc, level){
                context.onCutscene = true
                const cutscene = new Cutscene()
                const npcLines = NpcTextLines(npc, level)
                context.onCutscene = await cutscene.cutsceneCreator(npcLines)

            }
            this.gameObj.onCollide("npc", () => startDialogue(this, npc, level))
        }
        
        attack(excludedKeys, character) {
            for (const key of excludedKeys) {
                if (isKeyDown(key)) {
                    return
                }
            }
            if(canAttack){
                canAttack = false
                play("attack", {
                    volume: 0.2
                })
                let slashX = null
                let slashXFlipped = null
                if(character == "hero"){
                    slashX = this.gameObj.pos.x + 10
                    slashXFlipped = this.gameObj.pos.x - 90
                }else{
                    slashX = this.gameObj.pos.x + 40
                    slashXFlipped = this.gameObj.pos.x - 130
                }
                let x = null
                x = currentFlip ? slashXFlipped : slashX           
                this.gameObj.use(sprite(this.gameObj.sprites.attack));
                if (currentFlip) {
                    this.gameObj.flipX = true;
                    this.gameObj.play("attack", {
                        onEnd: () => {
                            this.playIdleAnimation();
                            this.gameObj.flipX = true
                        }
                    });
                } else {
                    this.gameObj.flipX = false;
                    this.gameObj.play("attack", {
                        onEnd: () => {
                            this.playIdleAnimation();
                            this.gameObj.flipX = false

                        }
                    });
                }
                if(character == "hero"){
                    add([
                        rect(30,30),
                        area(),
                        pos(vec2(x, this.gameObj.pos.y -40)),
                        scale(3),
                        opacity(0), 
                        "slash"
                    ])         
                }else{
                    add([
                        rect(30,30),
                        area(),
                        pos(vec2(x, this.gameObj.pos.y -40)),
                        scale(3),
                        opacity(0), 
                        "slash"
                    ])    
                }
                this.resetAttack()
            }
            
        }
        resetAttack(){
            setTimeout(() => {
                canAttack = true
            }, 500)
        }
        goNextLevel(character, positionX, positionY){
            function newLevel(context, character, positionX, positionY){
                if(context.finalLevel === true){
                    go("end")
                }else{
                    go(context.currentLevel+1, character, positionX, positionY)
                }
            }
            this.gameObj.onCollide("ladder-down", () => newLevel(this, character, positionX, positionY))
        }
        
        update(){
            onUpdate(() => {
              if(this.onCutscene){
                this.speed = 0
              }else{
                this.speed = 200
              } 
            })
        }

        updateLives(livesCountUi){
            onUpdate(() => {
                livesCountUi.text = this.lives
            })
        }
        endGame(altar) {
            let hasEnded = false;
            let isWinAnimationPlaying = false;
        
            onUpdate(() => {
                if (this.gameObj.isColliding(altar) && !isWinAnimationPlaying) {
                    isWinAnimationPlaying = true;
        
                    setTimeout(() => {
                        this.onCutscene = true;
        
                        this.gameObj.use(sprite(this.gameObj.sprites.win));
                        this.gameObj.play("win", {
                            onEnd: () => {
                                setTimeout(() => {
                                    hasEnded = true;
                                    go("end");
                                }, 500);
                            }
                        });
                    }, 1000);
                }
            });
        }
        
}
