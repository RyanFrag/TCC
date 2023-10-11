import kaboom from "./game/libs/kaboom.mjs"
import { Level } from "./game/utils/Level.js"
import { uiManager } from "./game/utils/UIManager.js"
import { load } from "./game/utils/loader.js"
import { Player } from "./game/entities/player.js";
import { Enemy } from "./game/entities/enemy.js";
import { Cutscene } from "./game/content/cutscene.js";
import { Camera } from "./game/utils/Camera.js";
import { Npc } from "./game/entities/npc.js";
import { textLines } from "./game/content/level1/textlevel1.js";
import { level1Layout} from "./game/content/level1/level1Layout.js";
import { level1Config } from "./game/content/level1/config.js";
import { level2Layout } from "./game/content/level2/level2Layout.js";
import { level2Config } from "./game/content/level2/config.js";
import { level3Layout } from "./game/content/level3/level3Layount.js";
import { level3Config } from "./game/content/level3/config.js";
import { level4Layout } from "./game/content/level4/level4Layout.js";
import { level4Config } from "./game/content/level4/config.js";
import { level5Layout } from "./game/content/level5/level5Layout.js";
import { level5Config } from "./game/content/level5/config.js";
import { Box } from "./game/entities/box.js";
import { Lever } from "./game/entities/lever.js";
import { Bars } from "./game/entities/ironBars.js";
import { Question } from "./game/entities/question.js";
import { Pressure } from "./game/entities/pressure.js";
import { SoundTile } from "./game/entities/soundTile.js";
import { NumberTiles } from "./game/entities/numberTiles.js";
import { Simbols } from "./game/entities/simbols.js";
import { Car } from "./game/entities/car.js";

export const k = kaboom({
    width: 1200,
    height: 700,
    canvas: document.querySelector("#gameCanvas"),
})

export let playerObj = null

load.fonts()
load.sounds()
load.assets()

const scenes = {
    
    menu: () => {
        uiManager.displayMainMenu()
    },
    selection: () => {
        uiManager.displaySelection()
    },
    
    1: async (character, reEnter=false) => {
        const music = play("level1", {
            volume: 0.4,
            loop: true
        })
        let  onCutscene = true
        if(reEnter){
            onCutscene = false,
            level1Config.playerPositionX = 2190
            level1Config.playerPositionY = 160
        }
        const level1 = new Level()
        level1.drawMapLayout(level1Layout, "stoneWall")

        const npc = character === "hero" ? "sacerdotisa" : "hero";
        if(character == "hero"){
            new Npc([vec2(220,180)], "sacerdotisa",)
        }else{
            new Npc([vec2(220, 180)], "hero")
        }
     
        Bars([
            vec2(1570, 690),
            vec2(1570, 770),
        ], 'open1', 0, false)

        Bars([
            vec2(610, 690),
            vec2(610, 770),
        ], 'open3', 3, true)
        const soundTile = new SoundTile()
        const sound = soundTile.addSoundTile("t1", 'lava', vec2(1600, 256))
        
        const pressPlate = new Pressure(vec2(730, 360), "normal", "brick", "normal")
        const pressPlate2 = new Pressure(vec2(730, 260), "happy", "brick", "happy")
        const pressPlate3 = new Pressure(vec2(730, 450),"sad", "brick", "sad")

        const box1 = new Box()
        box1.createBoxes(vec2(500, 260),'normal', 'normal' )
        const box2 = new Box()
        box2.createBoxes(vec2(600, 360),'happy', 'normal' )
        const box3 = new Box()
        box3.createBoxes(vec2(540, 400),'sad', 'normal' )

        pressPlate.pressPlate(false, false, true)
        pressPlate2.pressPlate(false, false, true)
        pressPlate3.pressPlate(false, false,  true)

   
        const question1 = new Question([vec2(1650, 440)], 0, "brick")
        const question2 = new Question([vec2(1375, 160)], 2, "brick")
        const question3 = new Question([vec2(420, 225)], 3, "brick")

        Bars([
            vec2(1175, 220)
        ], "lever1", 0, false)
        Bars([
            vec2(1175, 350)
        ], "lever2", 0, false)
        Bars([
            vec2(1175, 470)
        ], "lever3", 0, false)
   
        const lever1 = new Lever(
            [
                vec2(1500, 220),
            ], "lever1")
        lever1.pullLever()
        
        const lever2 = new Lever(
            [
                vec2(1500, 350),
            ], "lever2")
        lever2.pullLever()

        const lever3 = new Lever(
            [
            vec2(1500, 470),
            ], "lever3")
        lever3.pullLever()

        Bars([
            vec2(1880, 600),
            vec2(1880, 500),
            vec2(1880, 400),
        ], 'barrier1', 0, false
        )

        Bars([
            vec2(2020, 400),
            vec2(2020, 500),
            vec2(2020, 600),
        ], 'barrier2', 0, false
        )

        Bars([
            vec2(2150, 400),
            vec2(2150, 500),
            vec2(2150, 600),
        ], 'barrier3', 0, false
        )

        Bars([
            vec2(2360, 460),
            vec2(2360, 550),
        ], 'barrier4', 0, false
        )

        
        const lever4 = new Lever(
            [
                vec2(1640, 350),
            ], "barrier1")
        lever4.pullLever(true)

        const lever5 = new Lever(
            [
                vec2(1640, 270),
            ], "barrier2")
        lever5.pullLever(true)

        const lever6 = new Lever(
            [
                vec2(1640, 530),
            ], "barrier3")
        lever6.pullLever(true)
        
        const lever7 = new Lever(
            [
                vec2(1640, 620),
            ], "barrier4")
        lever7.pullLever(true)

        const player = new Player(
            level1Config.playerPositionX,
            level1Config.playerPositionY,
            level1Config.playerSpeed,
            1,
            false,
            level1Config.nbLives,
            onCutscene
            )

            
        playerObj = player.makePlayer(character)
        box1.collideWithPlayer(playerObj)
        box2.collideWithPlayer(playerObj)
        box3.collideWithPlayer(playerObj)


        let playing  = false
        onUpdate(() => {

            // player.attack(['left', 'right', 'up', 'down'])
            if (playerObj.isColliding(sound)) {
                if (!playing) {
                    playing = true;
                    soundTile.addSound("lava", {
                        volume: 0.5,
                        loop: true
                    })
                    onCollideEnd("player", "lava", () => {
                        playing = false
                        soundTile.pause("lava")
                    })       
                    onSceneLeave(() => {
                        soundTile.pause("lava")
                        music.pause = true
                }); 
                }
            } 
        });
        
        player.playIdleAnimation()
        player.hitQuestionTile(question1.questionNumber);
        player.hitQuestionTile(question2.questionNumber);
        player.hitQuestionTile(question3.questionNumber);
        uiManager.displayLivesCounter()

        player.updateLives(uiManager.livesCountUi)

        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level1Config.cameraLeftBound, level1Config.cameraRightBound, level1Config.cameraTopBound, level1Config.cameraBottomBound)
        const enemys = new Enemy(
            level1Config.enemysPositions.map(enemyPos => enemyPos()),
            level1Config.enemysRangeX,
            level1Config.enemysRangeY,
            level1Config.enemysSpeeds,
            level1Config.enemysType,
            false,
            'open1',
        )

        enemys.setMovementEnemy()
        enemys.killEnemy(0)
        enemys.killEnemy(1)
        enemys.killEnemy(2)
        enemys.update()
        player.hitByMobs()

        
        
        if(onCutscene){
            level1.displayLevel(player.currentLevel)
            const cutscene = new Cutscene()
            player.onCutscene = await cutscene.cutsceneCreator(textLines)
        }  
        player.setPlayerControls()
        player.attack(['left', 'right', 'up', 'down'])
        player.hitByNpc(npc);
        player.goNextLevel(character)
        player.update()

        onSceneLeave(() => {
            music.pause = true
        }); 
    
    },
    2: async (character, reEnter=false) => {
        const music = play("level2", {
            volume: 0.4,
            loop: true
        })
        const level2 = new Level()
        level2.drawMapLayout(level2Layout, "woodWall")
        const pressPlate0 = new Pressure(vec2(700, 260), "blank", "wood", "blank")
        pressPlate0.pressPlate(false, true, false)
        Bars([
            vec2(220, 780),
            vec2(220, 720),
        ], 'leverLevel1', 0, false)
        Bars([
            vec2(675, 780),
            vec2(675, 720),
        ], 'leverLevel2', 0, false),
        Bars([
            vec2(930, 340),
            vec2(870, 340),
        ], 'leverLevel3', 0, false)
        
        Bars([
            vec2(990, 780),
            vec2(990, 720),
        ], 'blank', 0, false)

        Bars([
            vec2(1950, 540),
            vec2(1950, 480),
        ], 'open', 4, true)
        
        const lever1 = new Lever(
            [
                vec2(560,550),
            ], "leverLevel1")
        lever1.pullLever()
        const lever2 = new Lever(
            [
                vec2(370, 550),
            ], "leverLevel2")
        lever2.pullLever()
        const lever3 = new Lever(
            [
                vec2(800, 400),
            ], "leverLevel3")
        lever3.pullLever()

        const question1 = new Question([vec2(470, 440)], 0, "wood")
        const pressPlate = new Pressure(vec2(460, 760), "blank", "wood", "blank")
        pressPlate.pressPlate(true, false, false)

        new NumberTiles(vec2(1200, 270), "two")
        new Simbols(vec2(1300, 270), "multiplication")
        const pressPlate2 = new Pressure(vec2(1400, 270), "nine", "wood", "blank")
        pressPlate2.pressPlate(false, false, true)
        new Simbols(vec2(1500, 270), "igual")
        new NumberTiles(vec2(1600, 270), "one")
        new NumberTiles(vec2(1660, 270), "eight")
        new NumberTiles(vec2(1200, 400), "six")
        new Simbols(vec2(1300, 400), "division")
        const pressPlate3 = new Pressure(vec2(1400, 400), "two", "wood", "blank")
        pressPlate3.pressPlate(false, false, true)
        new Simbols(vec2(1500, 400), "igual")
        new NumberTiles(vec2(1600, 400), "three")
        new NumberTiles(vec2(1200, 530), "nine")
        new NumberTiles(vec2(1300, 530), "seven")
        const pressPlate4 = new Pressure(vec2(1400, 530), "maior", "wood", "blank")
        pressPlate4.pressPlate(false, false, true)
        new NumberTiles(vec2(1500, 530), "four")
        new NumberTiles(vec2(1600, 530), "five")
        new NumberTiles(vec2(1200, 660), "seven")
        new Simbols(vec2(1300, 660), "exclamation")
        new Simbols(vec2(1400, 660), "igual")
        const pressPlate5 = new Pressure(vec2(1500, 660), "one", "wood", "blank")
        pressPlate5.pressPlate(false, false, true)
        new NumberTiles(vec2(1600, 660), "one")
        const box1 = new Box()
        const box2 = new Box()
        const box3 = new Box()
        const box4 = new Box()
        box1.createBoxes(vec2(1800, 530),'nine', 'numbers')
        box2.createBoxes(vec2(1800, 400),'two', 'numbers')
        box3.createBoxes(vec2(1800, 270),'one', 'numbers')
        box4.createBoxes(vec2(1800, 660),'maior', 'normal')

        const question2 = new Question([vec2(1800, 760)], 0,"wood")
        

        const enemys = new Enemy(
            level2Config.enemysPositions.map(enemyPos => enemyPos()),
            level2Config.enemysRangeX,
            level2Config.enemysRangeY,
            level2Config.enemysSpeeds,
            level2Config.enemysType,
            false,
            'open2', 
        )
        if(character == "hero"){
            new Npc([vec2(200,300)], "sacerdotisa")
            new Npc([vec2(4430,750)], "sacerdotisa")
        }else{
            new Npc([vec2(200, 300)], "hero")
            new Npc([vec2(4430,750)], "hero")
        }

        const player = new Player(
            level2Config.playerPositionX,
            level2Config.playerPositionY,
            level2Config.playerSpeed,
            2,
            false,
            level2Config.nbLives,
            false
            )

        playerObj =  player.makePlayer(character)
        box1.collideWithPlayer(playerObj)
        box2.collideWithPlayer(playerObj)
        box3.collideWithPlayer(playerObj)
        box4.collideWithPlayer(playerObj)

        player.playIdleAnimation()
        level2.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level2Config.cameraLeftBound, level2Config.cameraRightBound, level2Config.cameraTopBound, level2Config.cameraBottomBound)
        uiManager.displayLivesCounter()
        enemys.update()

        // const cutscene = new Cutscene()
        enemys.setMovementEnemy()
        
        // player.onCutscene = await cutscene.cutsceneCreator(textLines)
        player.setPlayerControls()
        player.hitByMobs()
        player.hitQuestionTile();
        player.hitQuestionTile(question1.questionNumber);
        player.hitQuestionTile(question2.questionNumber);
        const npc = character === "hero" ? "sacerdotisa" : "hero";
        player.attack(['left', 'right', 'up', 'down'])
        player.hitByNpc(npc);
        player.goNextLevel(character)
        player.goPreviousLevel(character)
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
  

        onUpdate(() => {
            // player.attack(['left', 'right', 'up', 'down'])
            onSceneLeave(() => {
                music.pause = true
            }); 
        });

    },
    3: async (character, reEnter=false) => {
        const soundTile = new SoundTile()
        const sound = soundTile.addSoundTile("t1-wood", 'blacktar', vec2(2100, 256))
 
        const level3 = new Level()
        level3.drawMapLayout(level3Layout, "woodWall")
        Bars([
            vec2(3170, 280),
            vec2(3170, 220),
        ], 'open1', 0, false)
        new NumberTiles(vec2(500, 770), "two")
        new NumberTiles(vec2(900, 520), "eight")
        new NumberTiles(vec2(1700, 510), "four")
        new NumberTiles(vec2(2050, 770), "three")
        new NumberTiles(vec2(2800, 250), "five")
        new NumberTiles(vec2(2600, 770), "nine")

        const pressPlate0 = new Pressure(vec2(3200, 500), "open1", "woodNumbers", "zero")
        const pressPlate1 = new Pressure(vec2(3300, 500), "open1", "woodNumbers", "one")
        const pressPlate2 = new Pressure(vec2(3400, 500), "open1", "woodNumbers", "two")
        const pressPlate3 = new Pressure(vec2(3500, 500), "open1", "woodNumbers", "three")
        const pressPlate4 = new Pressure(vec2(3600, 500), "open1", "woodNumbers", "four")
        const pressPlate5 = new Pressure(vec2(3600, 800), "open1", "woodNumbers", "five")
        const pressPlate6 = new Pressure(vec2(3500, 800), "open1", "woodNumbers", "six")
        const pressPlate7 = new Pressure(vec2(3400, 800), "open1", "woodNumbers", "seven")
        const pressPlate8 = new Pressure(vec2(3300, 800), "open1", "woodNumbers", "eight")
        const pressPlate9 = new Pressure(vec2(3200, 800), "open1", "woodNumbers", "nine")
        const pressPlateR = new Pressure(vec2(3100, 800), "open1", "wood", "restart")
        pressPlateR.puzzleNumbers("restart")
        pressPlate0.puzzleNumbers("0")
        pressPlate1.puzzleNumbers("1")
        pressPlate2.puzzleNumbers("2")
        pressPlate3.puzzleNumbers("3")
        pressPlate4.puzzleNumbers("4")
        pressPlate5.puzzleNumbers("5")
        pressPlate6.puzzleNumbers("6")
        pressPlate7.puzzleNumbers("7")
        pressPlate8.puzzleNumbers("8")
        pressPlate9.puzzleNumbers("9")
        

        if(character == "hero"){
            new Npc([vec2(800,720)], "sacerdotisa")
        }else{
            new Npc([vec2(800, 720)], "hero")
        }
        const player = new Player(
            level3Config.playerPositionX,
            level3Config.playerPositionY,
            level3Config.playerSpeed,
            3,
            false,
            level3Config.nbLives,
            false
            )
        const enemys = new Enemy(
            level3Config.enemysPositions.map(enemyPos => enemyPos()),
            level3Config.enemysRangeX,
            level3Config.enemysRangeY,
            level3Config.enemysSpeeds,
            level3Config.enemysType,
            false,
            'open1',
        )

        enemys.update()
        enemys.setMovementEnemy()
        playerObj =  player.makePlayer(character)
        player.playIdleAnimation()
        player.setPlayerControls()
        player.hitByMobs()
        player.hitQuestionTile();
        const npc = character === "hero" ? "sacerdotisa" : "hero";
        player.attack(['left', 'right', 'up', 'down'])
        player.hitByNpc(npc);
        player.goNextLevel(character)
        player.goPreviousLevel(character)
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
        level3.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level3Config.cameraLeftBound, level3Config.cameraRightBound, level3Config.cameraTopBound, level3Config.cameraBottomBound)

    
    },
    4: async (character, reEnter=false) => {
        const level4 = new Level()
        level4.drawMapLayout(level4Layout, "stoneWall")
    
        const player = new Player(
            level4Config.playerPositionX,
            level4Config.playerPositionY,
            level4Config.playerSpeed,
            4,
            false,
            level4Config.nbLives,
            false
        )

        Bars([
            vec2(140, 470)
        ], "lever3", 0, false)
        Bars([
            vec2(240, 470)
        ], "lever3", 0, false)
        Bars([
            vec2(340, 470)
        ], "lever3", 0, false)

        Bars([
            vec2(440, 470)
        ], "lever3", 0, false)
        Bars([
            vec2(540, 470)
        ], "lever3", 0, false)
        Bars([
            vec2(640, 470)
        ])
        Bars([
            vec2(740, 470)
        ])
        Bars([
            vec2(840, 470)
        ])

        const pressPlate = new Pressure(vec2(820, 270), "macqueen", "brick", "blank")
        pressPlate.pressPlate()

        Bars([
            vec2(930, 740),
            vec2(930, 800),
        ], "macqueen", 0, false)

        const pressPlateWalkRight = new Pressure(vec2(200, 560), "macqueen", "brick", "left")
        const pressPlateWalkLeft = new Pressure(vec2(120, 560), "macqueen", "brick", "right")
        const pressPlateWalkUp = new Pressure(vec2(280, 560), "macqueen", "brick", "up")
        const pressPlateWalkDown = new Pressure(vec2(360, 560), "macqueen", "brick", "down")
        const twoTime = new Pressure(vec2(560, 560), "macqueen", "brickNumbers", "two")
        const threeTime = new Pressure(vec2(640, 560), "macqueen", "brickNumbers", "three")
        const fourTime = new Pressure(vec2(720, 560), "macqueen", "brickNumbers", "four")
        const oneTime = new Pressure(vec2(480, 560), "macqueen", "brickNumbers", "one")
        const reset = new Pressure(vec2(800, 560), "macqueen", "brick", "restart")

        pressPlateWalkRight.puzzle("walk-right")
        pressPlateWalkLeft.puzzle("walk-left")
        pressPlateWalkUp.puzzle("walk-up")
        pressPlateWalkDown.puzzle("walk-down")
        reset.puzzle("reset")
        twoTime.puzzle("two")
        threeTime.puzzle("three")
        fourTime.puzzle("four")
        oneTime.puzzle("one")



        const pressPlateWalkRight1 = new Pressure(vec2(1330, 270), "jose", "brick", "left")
        const pressPlateWalkLeft1 = new Pressure(vec2(1330, 370), "jose", "brick", "right")
        const pressPlateWalkUp1 = new Pressure(vec2(1330, 470), "jose", "brick", "up")
        const pressPlateWalkDown1 = new Pressure(vec2(1330, 570), "jose", "brick", "down")
        const reset1 = new Pressure(vec2(1330, 670), "jose", "brick", "restart")


        const twoTime1 = new Pressure(vec2(1000, 370), "jose", "brickNumbers", "two")
        const threeTime1 = new Pressure(vec2(1000, 470), "jose", "brickNumbers", "three")
        const fourTime1 = new Pressure(vec2(1000, 570), "jose", "brickNumbers", "four")
        const oneTime1 = new Pressure(vec2(1000, 270), "jose", "brickNumbers", "one")

        pressPlateWalkRight1.puzzle("walk-right")
        pressPlateWalkLeft1.puzzle("walk-left")
        pressPlateWalkUp1.puzzle("walk-up")
        pressPlateWalkDown1.puzzle("walk-down")
        reset1.puzzle("reset")
        twoTime1.puzzle("two")
        threeTime1.puzzle("three")
        fourTime1.puzzle("four")
        oneTime1.puzzle("one")

        const pressPlateFinal = new Pressure(vec2(1800, 270), "jose", "brick", "blank")
        pressPlateFinal.pressPlate()

        Bars([
            vec2(1440, 470)
        ], "jose", 0, false)
        Bars([
            vec2(1440, 570)
        ], "jose", 0, false)
        Bars([
            vec2(1440, 670)
        ], "jose", 0, false)

        Bars([
            vec2(1440, 370)
        ], "jose", 0, false)
        Bars([
            vec2(1440, 270)
        ], "jose", 0, false)
        Bars([
            vec2(1440, 170)
        ],"jose", 0, false)
        Bars([
            vec2(1440, 770)
        ], "jose", 0, false)
        Bars([
            vec2(1950, 540)
        ], "jose", 0, false)
        Bars([
            vec2(1950, 480)
        ], "jose", 0, false)

        if(character == "hero"){
            new Npc([vec2(500,720)], "sacerdotisa")
        }else{
            new Npc([vec2(500, 720)], "hero")
        }


        playerObj =  player.makePlayer(character)
        Car(vec2(1500, 200), 1500, "jose")
        Car(vec2(200, 200), 1500, "macqueen")
        player.setPlayerControls()
        player.playIdleAnimation()
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
        level4.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level4Config.cameraLeftBound, level4Config.cameraRightBound, level4Config.cameraTopBound, level4Config.cameraBottomBound)
        player.goNextLevel(character)

    },
    5: async (character, reEnter=false) => {
        const level5 = new Level()
        level5.drawMapLayout(level5Layout, "stoneWall")

        const player = new Player(
            level5Config.playerPositionX,
            level5Config.playerPositionY,
            level5Config.playerSpeed,
            5,
            true,
            level5Config.nbLives,
            false
        )

        playerObj =  player.makePlayer(character)
        player.setPlayerControls()
        player.playIdleAnimation()
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
        level5.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level5Config.cameraLeftBound, level5Config.cameraRightBound, level5Config.cameraTopBound, level5Config.cameraBottomBound)
        player.goNextLevel(character)

    },
    gameOver: () =>{
        uiManager.displayGameOver()
    },
    end: () =>{
        uiManager.displayWinScreen()
    }
}


for ( const key in scenes ){
    scene(key, scenes[key]) 
}

go("menu");