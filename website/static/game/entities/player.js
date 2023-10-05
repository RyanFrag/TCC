import { Cutscene } from "../content/cutscene.js"
import { NpcTextLines } from "../content/level1/npcText1.js"
import { QuestionTextLines } from "../content/level1/questionText1.js"

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
                        death: "death-" + character
                    }
                },
                area({shape: new Rect(vec2(0,3), 16, 16) }),
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


        setPlayerControls() {
                if(this.speed == 0) this.gameObj.play("idle")
                onKeyDown("left", () => {
                    if(this.gameObj.curAnim() !== "run" && this.speed > 0){
                        this.gameObj.use(sprite(this.gameObj.sprites.run))
                        this.gameObj.play("run")
                    }
                    this.gameObj.flipX = true
                    this.gameObj.move(-this.speed, 0)
                })
                onKeyDown("right", () => {
                    if(this.gameObj.curAnim() !== "run" && this.speed > 0){
                        this.gameObj.use(sprite(this.gameObj.sprites.run))
                        this.gameObj.play("run")
                    }                    
                    this.gameObj.flipX = false
                    this.gameObj.move(this.speed, 0)
                })
                onKeyDown("up", () => {
                    if(this.gameObj.curAnim() !== "run" && this.speed > 0){
                        this.gameObj.use(sprite(this.gameObj.sprites.run))
                        
                        this.gameObj.play("run")
                    }                    
                    this.gameObj.move(0, -this.speed)
                })
                onKeyDown("down", () => {
                    if(this.gameObj.curAnim() !== "run" && this.speed > 0){
                        this.gameObj.use(sprite(this.gameObj.sprites.run))
                        this.gameObj.play("run")
                    }                    
                    this.gameObj.move(0, this.speed)
                })
                
                onKeyRelease(() => {
                    if(isKeyReleased("left")){
                        this.playIdleAnimation()
                        this.gameObj.flipX = true
                    }
                    
                    if(isKeyReleased("right") || isKeyReleased("up") || isKeyReleased("down")){   
                        this.playIdleAnimation()
                        this.gameObj.flipX = false
                    }
                })
            
      
        }
        respawnPlayer(){
            if(this.lives > 0){
                this.lives--
                this.gameObj.pos = vec2(this.initialX, this.initialY)
                return
            }
            go("gameOver")
        }

        hitByMobs(){
            function hitAndRespawn(context){
                // context.respawnPlayer()
            }
            this.gameObj.onCollide("dangerous", () => hitAndRespawn(this))
        }


        hitQuestionTile(numberOfQuestion){
            async function  startDialogueQuestion(context){
                context.onCutscene = true
                const cutscene = new Cutscene()
                const questionLines = QuestionTextLines(numberOfQuestion)

                context.onCutscene = await cutscene.cutsceneCreator(questionLines)
            }
            this.gameObj.onCollide(`question-${numberOfQuestion}`, () => startDialogueQuestion(this))
        }

        async hitByNpc(npc){
            async function  startDialogue(context){
                context.onCutscene = true
                const cutscene = new Cutscene()
                const npcLines = NpcTextLines(npc)
                context.onCutscene = await cutscene.cutsceneCreator(npcLines)

            }
            this.gameObj.onCollide("npc", () => startDialogue(this))
        }
        
        attack(excludedKeys) {
            for (const key of excludedKeys) {
                if (isKeyDown(key)) {
                    return
                }
            }

            const currentFlip = this.gameObj
            if(this.gameObj.curAnim() !== "attack"){         
                // this.gameObj.use(sprite(this.gameObj.sprites.attack))
                this.gameObj.flipX = currentFlip
                const slashX = this.gameObj.pos.x + 110
                const slashXFlipped = this.gameObj.pos.x - 110
                let x = null
                x = currentFlip ? slashXFlipped : slashX
            add([
                rect(50,50),
                area(),
                pos(vec2(x, this.gameObj.pos.y -70)),
                scale(3),
                opacity(0),
                "slash"
            ])
    
            onKeyPress("space", () => {
                this.gameObj.play("attack", {
                    onEnd: () => {
                        this.playIdleAnimation()
                        this.gameObj.flipX = currentFlip
                        }
                    }) 
                    }
                )
            onKeyRelease("space", () => {
                destroyAll("slash")
            })
                
            }  
        }
        goNextLevel(character){
            function newLevel(context, character){
                if(context.finalLevel === true){
                    go("end")
                }else{
                    go(context.currentLevel+1, character)
                }
            }
            this.gameObj.onCollide("ladder-down", () => newLevel(this, character))
        }
        
        goPreviousLevel(character){
            function previousLevel(context, character){
                go(context.currentLevel-1, character, true)
            }
            this.gameObj.onCollide("ladder-up", () => previousLevel(this, character))
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
        
    
    }
