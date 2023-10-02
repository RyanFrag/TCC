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
                area({shape: new Rect(vec2(0,3), 8, 8) }),
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
            // N faço ideia como fzr a hitbox do ataque :)
            add([
                rect(300,300),
                area(),
                opacity(0),
            ])

            onKeyPress("space", () => {
                if(this.gameObj.curAnim() !== "attack"){
                    this.gameObj.play("attack")    
                }}
                )
            
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
