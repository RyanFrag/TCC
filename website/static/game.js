import kaboom from "./game/libs/kaboom.mjs"
import { Level } from "./game/utils/Level.js"
import { uiManager } from "./game/utils/UIManager.js"
import { load } from "./game/utils/loader.js"
import { level1Layout} from "./game/content/level1/level1Layout.js";
import { Player } from "./game/entities/player.js";
import { level1Config } from "./game/content/level1/config.js";
import { Enemy } from "./game/entities/enemy.js";
import { Cutscene } from "./game/content/cutscene.js";
import { Camera } from "./game/utils/Camera.js";
import { Npc } from "./game/entities/npc.js";
import { textLines } from "./game/content/level1/textlevel1.js";
import { level2Layout } from "./game/content/level2/level2Layout.js";
import { level2Config } from "./game/content/level2/config.js";
import { Box } from "./game/entities/box.js";
import { Lever } from "./game/entities/lever.js";
import { Bars } from "./game/entities/ironBars.js";
import { Question } from "./game/entities/question.js";
import { Pressure } from "./game/entities/pressure.js";
import { SoundTile } from "./game/entities/soundTile.js";

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
        play("level1", {
            volume: 0.4,
            loop: true
        })
        let  onCutscene = true
        level1Config.playerPositionX = 128
        level1Config.playerPositionY = 768
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
     
        // Bars([
        //     vec2(1570, 690),
        //     vec2(1570, 770),
        // ], 'open1', 0, false)

        // Bars([
        //     vec2(610, 690),
        //     vec2(610, 770),
        // ], 'open3', 3, true)
        const soundTile = new SoundTile()
        const sound = soundTile.addSoundTile("t1", 'lava', vec2(1600, 256))
        
        const pressPlate = new Pressure(vec2(730, 360), "normal", "brick")
        const pressPlate2 = new Pressure(vec2(730, 260), "happy", "brick")
        const pressPlate3 = new Pressure(vec2(730, 450),"sad", "brick")

        const box1 = new Box()
        box1.createBoxes(vec2(500, 260),'normal' )
        const box2 = new Box()
        box2.createBoxes(vec2(600, 360),'happy' )
        const box3 = new Box()
        box3.createBoxes(vec2(540, 400),'sad' )

        pressPlate.pressPlate()
        pressPlate2.pressPlate()
        pressPlate3.pressPlate()

   
        const question1 = new Question([vec2(1650, 440)], 0 )
        const question2 = new Question([vec2(1375, 160)], 2)
        const question3 = new Question([vec2(420, 225)], 3)

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

        // Bars([
        //     vec2(1880, 600),
        //     vec2(1880, 500),
        //     vec2(1880, 400),
        // ], 'barrier1', 0, false
        // )

        // Bars([
        //     vec2(2020, 400),
        //     vec2(2020, 500),
        //     vec2(2020, 600),
        // ], 'barrier2', 0, false
        // )

        // Bars([
        //     vec2(2150, 400),
        //     vec2(2150, 500),
        //     vec2(2150, 600),
        // ], 'barrier3', 0, false
        // )

        // Bars([
        //     vec2(2360, 460),
        //     vec2(2360, 550),
        // ], 'barrier4', 0, false
        // )

        
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
            level1Config.enemysRange,
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
    
    },
    2: async (character, reEnter=false) => {
        const level2 = new Level()
        level2.drawMapLayout(level2Layout, "woodWall")
        // Bars([
        //     vec2(220, 780),
        //     vec2(220, 720),
        // ], 'leverLevel1', 0, false)
        // Bars([
        //     vec2(675, 780),
        //     vec2(675, 720),
        // ], 'leverLevel2', 0, false),
        // Bars([
        //     vec2(930, 340),
        //     vec2(870, 340),
        // ], 'leverLevel3', 0, false)
        
        // Bars([
        //     vec2(990, 780),
        //     vec2(990, 720),
        // ], 'blank', 0, false)
        
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

        const pressPlate = new Pressure(vec2(460, 760), "blank", "wood")
        pressPlate.pressPlate(true)
        const question1 = new Question([vec2(470, 440)], 0 )
        const enemys = new Enemy(
            level2Config.enemysPositions.map(enemyPos => enemyPos()),
            level2Config.enemysRange,
            [50],
            level2Config.enemysSpeeds,
            level2Config.enemysType,
            false,
            'open2',
            
        )

        
        const player = new Player(
            level2Config.playerPositionX,
            level2Config.playerPositionY,
            level2Config.playerSpeed,
            2,
            true,
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

        if(character == "hero"){
            new Npc([vec2(200,300)], "sacerdotisa")
        }else{
            new Npc([vec2(200, 300)], "hero")
        }
        
        // const cutscene = new Cutscene()
        
        enemys.setMovementEnemy()
        
        // player.onCutscene = await cutscene.cutsceneCreator(textLines)
        
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
    },
    3: () => {
        
    },
    4: () => {
        
    },
    5: () => {
        
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