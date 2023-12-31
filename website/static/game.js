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
import events from "./game/controller/events.js";
import { Save } from "./game/utils/Save.js";
import { Altar } from "./game/entities/altar.js";
import { Collums } from "./game/entities/collums.js";
import { Boss } from "./game/entities/boss.js";
import { Timer } from "./game/utils/Timer.js";

export const k = kaboom({
    width: 1200,
    height: 700,
    canvas: document.querySelector("#gameCanvas"),
})

export let playerObj = null

load.fonts()
load.sounds()
load.assets()
const timer = new Timer()


const scenes = {
    
    menu: () => {
        uiManager.displayMainMenu()
    },
    selection: () => {
        uiManager.displaySelection()
        const save = new Save()
        save.saveGame(1, 130, 700, 0)
    },
    
    controls: () => {
        uiManager.displayControls()
    },
    cutscene: () => {
        uiManager.displayIntroCutscene()
        const music = play("start", {
            volume: 0.1,
            loop: true
        })
        onSceneLeave(() => {
            music.paused = true
        })
    },
    
    1: async (character, positionX, positionY) => {
        const save = new Save()
        save.saveGame(1, positionX, positionY, 0)
        let onCutscene = true

        if(positionX > 600){
            onCutscene = false
            timer.checkAndStartTimer()

        }else{
            timer.startTimer();

        }
        const music = play("level1", {
            volume: 0.2,
            loop: true
        })
        const level1 = new Level()
        level1.drawMapLayout(level1Layout, "stoneWall")
        level1.displayLevel(1)
        const npc = character === "hero" ? "sacerdotisa" : "hero";
        if(character == "hero"){
            new Npc([vec2(320,710)], "sacerdotisa",)
        }else{
            new Npc([vec2(320, 710)], "hero")
        }
     
        Bars([
            vec2(1440, 690),
            vec2(1440, 770),
        ], 'open2', 0, false, 'vertical')

        Bars([
            vec2(870, 690),
            vec2(870, 770),
        ], 'open3', 3, true, 'vertical')

        const soundTile = new SoundTile()
        const sound = soundTile.addSoundTile("t1", 'lava', vec2(1600, 256), 200)
        const question1 = new Question([vec2(1650, 420)], 0, "brick")
        const question2 = new Question([vec2(1150, 700)], 2, "brick")
        const question3 = new Question([vec2(220, 525)], 3, "brick")
        const pressPlate = new Pressure(vec2(730, 420), "normal", "brick", "normal")
        const pressPlate2 = new Pressure(vec2(730, 260), "happy", "brick", "happy")
        const pressPlate3 = new Pressure(vec2(730, 550),"sad", "brick", "sad")
        const pressPlate4 = new Pressure(vec2(100, 225),"restart", "brick", "restart")
        const box1 = new Box()

        const boxObj = box1.createBoxes(vec2(300, 330),'normal', 'normal' )
        const box2 = new Box()
        const boxObj2 = box2.createBoxes(vec2(600, 360),'happy', 'normal' )
        const box3 = new Box()
        const boxObj3 = box3.createBoxes(vec2(520, 460),'sad', 'normal' )

        pressPlate.pressPlate(false, false, true)
        pressPlate2.pressPlate(false, false, true)
        pressPlate3.pressPlate(false, false,  true)
        const boxesObjsPosition = [
            {
                boxObj1: { box: boxObj, position: vec2(500, 260)},
            },
            {
                boxObj2: { box: boxObj2, position: vec2(600, 360)},
            },
            {
                boxObj3: { box: boxObj3, position: vec2(540, 400)},
            }
        ];
            
        pressPlate4.resetBoxes(boxesObjsPosition)



        Bars([
            vec2(940, 415),
            vec2(1010, 415),
            vec2(1080, 415),
            vec2(1150, 415),
            vec2(1220, 415),
            vec2(1290, 415),
            vec2(1360, 415),
        ], "lever1", 0, false, 'horizontal')

   
        const lever1 = new Lever(
            [
                vec2(1140, 600),
            ], "lever1")
        


        Bars([
            vec2(1880, 600),
            vec2(1880, 500),
            vec2(1880, 400),
        ], 'barrier1', 0, false, 'vertical'
        )

        Bars([
            vec2(2020, 400),
            vec2(2020, 500),
            vec2(2020, 600),
        ], 'barrier2', 0, false, 'vertical'
        )

        Bars([
            vec2(2150, 400),
            vec2(2150, 500),
            vec2(2150, 600),
        ], 'barrier3', 0, false, 'vertical'
        )

        Bars([
            vec2(2260, 400),
            vec2(2260, 500),
            vec2(2260, 600),
        ], 'barrier4', 0, false, 'vertical'
        )

        
        const lever4 = new Lever(
            [
                vec2(1640, 325),
            ], "barrier1")

        const lever5 = new Lever(
            [
                vec2(1640, 220),
            ], "barrier2")

        const lever6 = new Lever(
            [
                vec2(1640, 500),
            ], "barrier3")
        
        const lever7 = new Lever(
            [
                vec2(1640, 620),
            ], "barrier4")


        new NumberTiles(vec2(1540, 230), "one", "brick")
        new NumberTiles(vec2(1540, 330), "two", "brick")
        new NumberTiles(vec2(1540, 520), "three", "brick")
        new NumberTiles(vec2(1540, 620), "four", "brick")


        const player = new Player(
            positionX,
            positionY,
            level1Config.playerSpeed,
            1,
            false,
            level1Config.nbLives,
            onCutscene
            )

            
        playerObj = player.makePlayer(character)

        let playing  = false
        let playingBox = false
  
        onUpdate(() => {
            lever1.pullLever()

            lever4.pullLever()
            lever5.pullLever()
            lever6.pullLever()
            lever7.pullLever()
            for (const boxObjPosition of boxesObjsPosition) {
                const boxObject = Object.values(boxObjPosition)[0].box;
                if (boxObject.isColliding(playerObj)) {
                    if (!playingBox) {
                        soundTile.addSound("wood-box", {
                            volume: 0.2,
                            loop: true,
                            speed: 1.5
                        });
                        playingBox = true;
                        onCollideEnd("player", `wood-box`, () => {
                            playingBox = false;
                            soundTile.pause("wood-box");
                        });
                    }
                }
            }
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
                        music.paused = true
                }); 
                }
            } 
        });
  
        player.playIdleAnimation()
        player.hitQuestionTile(question1.questionNumber, player.currentLevel);
        player.hitQuestionTile(question2.questionNumber, player.currentLevel);
        player.hitQuestionTile(question3.questionNumber, player.currentLevel);
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
            'open2',
        )

        enemys.setMovementEnemy()
        enemys.killEnemy(0)
        enemys.killEnemy(1)
        enemys.killEnemy(2)
        enemys.update()

        events.listen("progress_open3", () => {
            save.saveGame(1,900, 700, timer.segundos)
            

        })
        events.listen("progress_open2", () => {
            save.saveGame(1, 1700, 700, timer.segundos)
        })
        player.hitByMobs(character)
        if(onCutscene){
            const cutscene = new Cutscene()
            player.onCutscene = await cutscene.cutsceneCreator(textLines)
        }  
        player.setPlayerControls()
        onKeyPress("space", () => {
            player.attack(["left", "right", "up", "down"], character)
        })
        onKeyRelease("space", () => {
                destroyAll("slash")
        });  
        player.hitByNpc(npc, player.currentLevel);
        player.goNextLevel(character, 230, 670)
        player.update()

        onSceneLeave(() => {
            
            music.paused = true
        }); 
    
    },
    2: async (character, positionX, positionY) => {
        timer.checkAndStartTimer()     

        const save = new Save()
        save.saveGame(2, positionX, positionY, timer.segundos)
        
        const music = play("level2", {
            volume: 0.2,
            loop: true
        })
        const level2 = new Level()
        level2.drawMapLayout(level2Layout, "woodWall")
        const pressPlate0 = new Pressure(vec2(830, 630), "blank", "woodNumbers", "heart")

        pressPlate0.pressPlate(false, true, false)
        Bars([
            vec2(480, 380),
            vec2(420, 380),
        ], 'leverLevel1', 0, false, 'horizontal')
        Bars([
            vec2(100, 380),
            vec2(160, 380),
        ], 'leverLevel2', 0, false, 'horizontal'),
        Bars([
            vec2(730, 230),
            vec2(730, 290),
        ], 'leverLevel3', 0, false, 'vertical')

        Bars([
            vec2(990, 780),
            vec2(990, 720),
        ], 'blank', 0, false, 'vertical')

        Bars([
            vec2(1950, 540),
            vec2(1950, 480),
        ], 'open', 4, true, 'vertical')
        
        const lever1 = new Lever(
            [
                vec2(220,480),
            ], "leverLevel1")
        const lever2 = new Lever(
            [
                vec2(340, 480),
            ], "leverLevel2")
        const lever3 = new Lever(
            [
                vec2(830, 500),
            ], "leverLevel3")

        const question1 = new Question([vec2(470, 740)], 0, "wood")
        const pressPlate = new Pressure(vec2(280, 260), "blank", "woodNumbers", "skull")
        pressPlate.pressPlate(true, false, false)

        new NumberTiles(vec2(1200, 270), "two", "wood")
        new Simbols(vec2(1300, 270), "multiplication")
        const pressPlate2 = new Pressure(vec2(1400, 270), "nine", "wood", "blank")
        pressPlate2.pressPlate(false, false, true)
        new Simbols(vec2(1500, 270), "igual")
        new NumberTiles(vec2(1600, 270), "one", "wood")
        new NumberTiles(vec2(1660, 270), "eight", "wood")
        new NumberTiles(vec2(1200, 400), "six", "wood")
        new Simbols(vec2(1300, 400), "division")
        const pressPlate3 = new Pressure(vec2(1400, 400), "two", "wood", "blank")
        pressPlate3.pressPlate(false, false, true)
        new Simbols(vec2(1500, 400), "igual")
        new NumberTiles(vec2(1600, 400), "three", "wood")
        new NumberTiles(vec2(1200, 530), "nine", "wood")
        new NumberTiles(vec2(1300, 530), "seven", "wood")
        const pressPlate4 = new Pressure(vec2(1400, 530), "maior", "wood", "blank")
        pressPlate4.pressPlate(false, false, true)
        new NumberTiles(vec2(1500, 530), "four", "wood")
        new NumberTiles(vec2(1600, 530), "five", "wood")
        new NumberTiles(vec2(1200, 660), "seven", "wood")
        new Simbols(vec2(1300, 660), "exclamation")
        new Simbols(vec2(1400, 660), "igual")
        const pressPlate5 = new Pressure(vec2(1500, 660), "one", "wood", "blank")
        pressPlate5.pressPlate(false, false, true)
        new NumberTiles(vec2(1600, 660), "one" , "wood")
        const box1 = new Box()
        const box2 = new Box()
        const box3 = new Box()
        const box4 = new Box()
        const boxObj = box1.createBoxes(vec2(1800, 530),'nine', 'numbers')
        const boxObj2 = box2.createBoxes(vec2(1800, 400),'two', 'numbers')
        const boxObj3 = box3.createBoxes(vec2(1800, 270),'one', 'numbers')
        const boxObj4 = box4.createBoxes(vec2(1800, 660),'maior', 'normal')

        const pressPlateR = new Pressure(vec2(1090, 250),"restart", "wood", "restart")

        const boxesObjsPosition = [
            {
                boxObj1: { box: boxObj, position: vec2(1800, 530)},
            },
            {
                boxObj2: { box: boxObj2, position: vec2(1800, 400)},
            },
            {
                boxObj3: { box: boxObj3, position: vec2(1800, 270)}, 
            },
            {
                boxObj4: { box: boxObj4, position: vec2(1800, 660)},
            }
        ];

        pressPlateR.resetBoxes(boxesObjsPosition)
        const question2 = new Question([vec2(1090, 460)], 1,"wood")
        

        const enemys = new Enemy(
            level2Config.enemysPositions.map(enemyPos => enemyPos()),
            level2Config.enemysRangeX,
            level2Config.enemysRangeY,
            level2Config.enemysSpeeds,
            level2Config.enemysType,
            false,
            'open2', 
        )
        enemys.killEnemy(0)
        if(character == "hero"){
            new Npc([vec2(600, 650)], "sacerdotisa")
        }else{
            new Npc([vec2(600, 650)], "hero")
        }

        const player = new Player(
            positionX,
            positionY,
            level2Config.playerSpeed,
            2,
            false,
            level2Config.nbLives,
            false
            )

        playerObj =  player.makePlayer(character)


        player.playIdleAnimation()
        level2.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level2Config.cameraLeftBound, level2Config.cameraRightBound, level2Config.cameraTopBound, level2Config.cameraBottomBound)
        uiManager.displayLivesCounter()
        enemys.update()

        enemys.setMovementEnemy()
        
        player.setPlayerControls()
        onKeyPress("space", () => {
            player.attack(["left", "right", "up", "down"], character)
        })
        onKeyRelease("space", () => {
                destroyAll("slash")
        });  
        player.hitByMobs(character)
        player.hitQuestionTile(question1.questionNumber, player.currentLevel);
        player.hitQuestionTile(question2.questionNumber, player.currentLevel);
        const npc = character === "hero" ? "sacerdotisa" : "hero";
        player.hitByNpc(npc, player.currentLevel);
        player.goNextLevel(character, 230, 690)
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
        events.listen("progress_blank", () => {
            save.saveGame(2,1040, 700, timer.segundos)
        })

        events.listen("progress_open", () => {
            save.saveGame(2, 2100, 420, timer.segundos)
            
        })
        let playingBox = false
        const soundTile = new SoundTile()

        onUpdate(() => {
            lever1.pullLever()
            lever2.pullLever()
            lever3.pullLever()
            for (const boxObjPosition of boxesObjsPosition) {
                const boxObject = Object.values(boxObjPosition)[0].box;
                if (boxObject.isColliding(playerObj)) {
                    if (!playingBox) {
                        soundTile.addSound("wood-box", {
                            volume: 0.2,
                            loop: true,
                            speed: 1.5
                        });
                        playingBox = true;
                        onCollideEnd("player", `wood-box`, () => {
                            playingBox = false;
                            soundTile.pause("wood-box");
                        });
                    }
                }
            }
            onSceneLeave(() => {
                music.paused = true
            }); 
        });

    },
    3: async (character, positionX, positionY) => {

        const music = play("level2", {
            volume: 0.1,
            loop: true
        })
        const save = new Save()
        save.saveGame(3, positionX, positionY, timer.segundos) 
        timer.checkAndStartTimer()     
       
        const soundTile = new SoundTile()

 
        const level3 = new Level()
        const sound = soundTile.addSoundTile("t1-wood", 'blacktar', vec2(80, 200), 300)

        level3.drawMapLayout(level3Layout, "woodWall")
        const sound2 = soundTile.addSoundTile("t1-wood", 'blacktar', vec2(2000, 200), 220)

        Bars([
            vec2(3170, 280),
            vec2(3170, 220),
        ], 'open1', 0, false, "vertical")
        new NumberTiles(vec2(500, 770), "two", "wood")
        new NumberTiles(vec2(900, 520), "eight", "wood")
        new NumberTiles(vec2(1700, 510), "four", "wood")
        new NumberTiles(vec2(2050, 770), "three", "wood")
        new NumberTiles(vec2(2800, 250), "five", "wood")
        new NumberTiles(vec2(2600, 770), "nine", "wood")
        new Question([vec2(2900, 770)], 1, "wood")
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
            positionX,
            positionY,
            level3Config.playerSpeed,
            3,
            false,
            level3Config.nbLives,
            false
            )
        playerObj =  player.makePlayer(character)
        const enemys = new Enemy(
            level3Config.enemysPositions.map(enemyPos => enemyPos()),
            level3Config.enemysRangeX,
            level3Config.enemysRangeY,
            level3Config.enemysSpeeds,
            level3Config.enemysType,
            false,
            ' ',

        )
        enemys.killEnemy(0)
        enemys.killEnemy(1)
        enemys.killEnemy(2)
        enemys.killEnemy(3)
        enemys.killEnemy(4)
        enemys.update()
        enemys.setMovementEnemy()
        player.playIdleAnimation()
        player.setPlayerControls()
        onKeyPress("space", () => {
            player.attack(["left", "right", "up", "down"], character)
        })
        onKeyRelease("space", () => {
                destroyAll("slash")
        });  
        player.hitByMobs(character)
        player.hitQuestionTile(1, player.currentLevel);
        const npc = character === "hero" ? "sacerdotisa" : "hero";
        player.hitByNpc(npc, player.currentLevel);
        player.goNextLevel(character, 230, 690)
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
        level3.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level3Config.cameraLeftBound, level3Config.cameraRightBound, level3Config.cameraTopBound, level3Config.cameraBottomBound)
        events.listen("progress_open$", () => {
            save.saveGame(3, 3200, 600, timer.segundos)
        })


        let playing = false
        onUpdate(() => {
            onSceneLeave(() => {
                music.paused = true
            }); 
            if (playerObj.isColliding(sound) || playerObj.isColliding(sound2)) {
                if (!playing) {
                    playing = true;
                    soundTile.addSound("blacktar", {
                        volume: 0.5,
                        loop: true
                    })
                    onCollideEnd("player", "blacktar", () => {
                        playing = false
                        soundTile.pause("blacktar")
                    })       
                    onSceneLeave(() => {
                        soundTile.pause("blacktar")
                }); 
                }
            } 
        });
    },
    4: async (character, positionX, positionY) => {
        const save = new Save()
        save.saveGame(4, positionX, positionY, timer.segundos)  
        timer.checkAndStartTimer()     

    


        const music = play("level1", {
            volume: 0.1,
            loop: true       
        })
        const soundTile = new SoundTile()
        const sound = soundTile.addSoundTile("t1", 'lava', vec2(65, 190), 800)
        const level4 = new Level()
        level4.drawMapLayout(level4Layout, "stoneWall")
    
        const player = new Player(
            positionX,
            positionY,
            level4Config.playerSpeed,
            4,
            false,
            level4Config.nbLives,
            false
        )

        const question1 = new Question([vec2(300, 700)], 1,"brick")
        Bars([
            vec2(140, 470)
        ], "lever3", 0, false, "horizontal")
        Bars([
            vec2(240, 470)
        ], "lever3", 0, false, "horizontal")
        Bars([
            vec2(340, 470)
        ], "lever3", 0, false, "horizontal")
        Bars([
            vec2(440, 470)
        ], "lever3", 0, false, "horizontal")
        Bars([
            vec2(540, 470)
        ], "lever3", 0, false, "horizontal")
        Bars([
            vec2(640, 470)
        ], "lever3", 0, false, "horizontal")
        Bars([
            vec2(740, 470)
        ], "lever3", 0, false, "horizontal")
        Bars([
            vec2(840, 470)
        ], "lever3", 0, false, "horizontal")


        const pressPlate = new Pressure(vec2(820, 280), "macqueen", "brick", "blank")
        pressPlate.pressPlate()

        Bars([
            vec2(930, 740),
            vec2(930, 800),
        ], "macqueen", 0, false, "vertical")

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



        const pressPlateWalkRight1 = new Pressure(vec2(1330, 620), "jose", "brick", "left")
        const pressPlateWalkLeft1 = new Pressure(vec2(1330, 360), "jose", "brick", "right")
        const pressPlateWalkUp1 = new Pressure(vec2(1330, 490), "jose", "brick", "up")
        const pressPlateWalkDown1 = new Pressure(vec2(1330, 760), "jose", "brick", "down")
        const reset1 = new Pressure(vec2(1330, 230), "jose", "brick", "restart")


        const twoTime1 = new Pressure(vec2(1000, 340), "jose", "brickNumbers", "two")
        const threeTime1 = new Pressure(vec2(1000, 470), "jose", "brickNumbers", "three")
        const fourTime1 = new Pressure(vec2(1000, 600), "jose", "brickNumbers", "four")
        const oneTime1 = new Pressure(vec2(1000, 230), "jose", "brickNumbers", "one")

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
            vec2(1410, 470)
        ], "jose", 0, false, "vertical")
        Bars([
            vec2(1410, 570)
        ], "jose", 0, false, "vertical")
        Bars([
            vec2(1410, 670)
        ], "jose", 0, false, "vertical")

        Bars([
            vec2(1410, 340)
        ], "jose", 0, false, "vertical")
        Bars([
            vec2(1410, 230)
        ], "jose", 0, false, "vertical")

        Bars([
            vec2(1410, 770)
        ], "jose", 0, false, "vertical")
        Bars([
            vec2(1950, 540)
        ], "jose", 0, false, "vertical")
        Bars([
            vec2(1950, 480)
        ], "jose", 0, false, "vertical")
        
        Bars([
            vec2(1750, 470)
        ], "jose", 0, false, "horizontal")

 

        Bars([
            vec2(1880, 700)
        ], "jose", 0, false, "horizontal")

        if(character == "hero"){
            new Npc([vec2(500,720)], "sacerdotisa")
        }else{
            new Npc([vec2(500, 720)], "hero")
        }


        playerObj =  player.makePlayer(character)
        Car(vec2(1510, 220), 1200, "jose")
        Car(vec2(150, 200), 1200, "macqueen")
        player.setPlayerControls()
        onKeyPress("space", () => {
            player.attack(["left", "right", "up", "down"], character)
        })
        onKeyRelease("space", () => {
                destroyAll("slash")
        });  
        player.playIdleAnimation()
        player.hitQuestionTile(0, player.currentLevel)
        const npc = character === "hero" ? "sacerdotisa" : "hero";
        player.hitQuestionTile(question1.questionNumber, player.currentLevel);
        player.hitByNpc(npc, player.currentLevel);
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
        level4.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level4Config.cameraLeftBound, level4Config.cameraRightBound, level4Config.cameraTopBound, level4Config.cameraBottomBound)
        player.goNextLevel(character, 600, 1340)
        events.listen("progress_macqueen", () => {
            save.saveGame(4, 1100, 690, timer.segundos)
        })
        onSceneLeave(() => {
            music.paused = true
        })


        let playing = false
        onUpdate(() => {
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
                        music.paused = true
                }); 
                }
            } 
        });
    },
    5: async (character, positionX, positionY) => {

        const save = new Save()
        save.saveGame(5, positionX, positionY, timer.segundos)  
        timer.checkAndStartTimer()     

        const music = play("battle-music", {
            volume: 0.1,
            loop: true       
        })
  
        const level5 = new Level()
        level5.drawMapLayout(level5Layout, "stoneWall")
        const altar = new Altar()
        const altarObj = altar.createAltar(vec2(380, 0), "End")

        const player = new Player(
            positionX,
            positionY, 
            level5Config.playerSpeed,
            5,
            true,
            level5Config.nbLives,
            false
        )

        const npc = character === "hero" ? "sacerdotisa" : "hero";
        if(character == "hero"){
            new Npc([vec2(400,1280)], "sacerdotisa",)
        }else{
            new Npc([vec2(400,1280)], "hero")
        }


        Bars([
            vec2(100, 910),
            vec2(200, 910),
            vec2(300, 910),
            vec2(400, 910),
            vec2(500, 910),
            vec2(700, 910),
            vec2(800, 910),
            vec2(900, 910),
            vec2(1000, 910),
            vec2(1100, 910),
        ], "static", 0, false, "horizontal")

        Bars([
            vec2(100, 320),
            vec2(200, 320),
            vec2(300, 320),
            vec2(400, 320),
            vec2(500, 320),
            vec2(600, 320),
            vec2(700, 320),
            vec2(800, 320),
            vec2(900, 320),
            vec2(1000, 320),
            vec2(1100, 320),
        ], "boss", 0, false, "horizontal")

        const collums3 = new Collums();
        collums3.createCollums(
            level5Config.columsPositions3.map(collumPos => collumPos()),
            level5Config.columsTypes3.map(collumType => collumType())
        )
        const collums4 = new Collums();
        collums4.createCollums(
            level5Config.columsPositions4.map(collumPos => collumPos()),
            level5Config.columsTypes4.map(collumType => collumType())
        )


        const boss = new Boss(vec2(300, 600), 100, 100, 3, "boss")
        boss.playIdleAnimation()
        boss.setMovementBoss()
        boss.update()
        boss.killBoss()

        playerObj =  player.makePlayer(character)
        player.hitByBoss(character)
        player.hitByBossAttack(character)
        


        player.setPlayerControls()
        onKeyPress("space", () => {
            if (!playerObj.isColliding(altarObj)) {
                player.attack(["left", "right", "up", "down"], character)
            }
  
        })
        onKeyRelease("space", () => {
                destroyAll("slash")
        });  
        player.playIdleAnimation()
        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        player.update()
        player.hitByNpc(npc, player.currentLevel);

        level5.displayLevel(player.currentLevel)
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142, level5Config.cameraLeftBound, level5Config.cameraRightBound, level5Config.cameraTopBound, level5Config.cameraBottomBound)
        player.goNextLevel(character, 128, 700)
        player.endGame(altarObj)

        events.listen("progress_end", () => {
            save.saveGame(5, positionX, positionY, timer.segundos)          
        })
        onUpdate(() => {
            onSceneLeave(() => {
                music.paused = true
            })
        });
    },
    gameOver: () =>{
        uiManager.displayGameOver()
        timer.stopTimer()

    },
    end: () =>{
        uiManager.displayWinScreen()
        timer.restartTimer()
        const save = new Save()
        save.saveGame(0, 0, 0, 0)
    }
}

for ( const key in scenes ){
    scene(key, scenes[key]) 
}

go("menu");