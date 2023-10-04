import kaboom from "./game/libs/kaboom.mjs"
import { Level } from "./game/utils/Level.js"
import { uiManager } from "./game/utils/UIManager.js"
import { load } from "./game/utils/loader.js"
import { level1Layout} from "./game/content/level1/level1Layout.js";
import { Player } from "./game/entities/player.js";
import { leve1Config } from "./game/content/level1/config.js";
import { Enemy } from "./game/entities/enemy.js";
import { Cutscene } from "./game/content/cutscene.js";
import { Camera } from "./game/utils/Camera.js";
import { Npc } from "./game/entities/npc.js";
import { textLines } from "./game/content/level1/textlevel1.js";
import { level2Layout } from "./game/content/level2/level2Layout.js";
import { leve2Config } from "./game/content/level2/config.js";
import { Box } from "./game/entities/box.js";
import { Lever } from "./game/entities/lever.js";
import { Bars } from "./game/entities/ironBars.js";
import { Question } from "./game/entities/question.js";
import { Pressure } from "./game/entities/pressure.js";

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
        let  onCutscene = true
        leve1Config.playerPositionX = 128
        leve1Config.playerPositionY = 768
        if(reEnter){
            onCutscene = false,
            leve1Config.playerPositionX = 2190
            leve1Config.playerPositionY = 64
        }
        const level1 = new Level()
        level1.drawMapLayout(level1Layout)
        uiManager.displayLivesCounter()

        const npc = character === "hero" ? "sacerdotisa" : "hero";
        if(character == "hero"){
            new Npc([vec2(220,180)], "sacerdotisa",)
        }else{
            new Npc([vec2(220, 180)], "hero")
        }
     
        Bars([
            vec2(1440, 160),
            vec2(1500, 160),
        ], 'open1', 0, false)

        Bars([
            vec2(670, 160),
            vec2(610, 160),
        ], 'open3', 3, true)

        const pressPlate = new Pressure(vec2(730, 250), "x")
        const pressPlate2 = new Pressure(vec2(730, 450), "smile")
        const pressPlate3 = new Pressure(vec2(730, 330),"devil")

        const box1 = new Box()
        box1.createBoxes(vec2(600, 400),'normal' )
        const box2 = new Box()
        box2.createBoxes(vec2(600, 400),'happy' )
        const box3 = new Box()
        box3.createBoxes(vec2(450, 460),'sad' )

        pressPlate.pressPlate()
        pressPlate2.pressPlate()
        pressPlate3.pressPlate()

   
        const question1 = new Question([vec2(1950, 610)], 0 )
        const question2 = new Question([vec2(1500, 545)], 2)
        const question3 = new Question([vec2(353, 480)], 3)

        Bars([
            vec2(1050, 225)
        ], "lever1", 0, false)
        Bars([
            vec2(1050, 355)
        ], "lever2", 0, false)
        Bars([
            vec2(1050, 480)
        ], "lever3", 0, false)
   
        const lever1 = new Lever(
            [
                vec2(1500, 225),
            ], "lever1")
        lever1.pullLever()
        
        const lever2 = new Lever(
            [
                vec2(1500, 355),
            ], "lever2")
        lever2.pullLever()

        const lever3 = new Lever(
            [
            vec2(1500, 480),
            ], "lever3")
        lever3.pullLever()

        Bars([
            vec2(1785, 480),
            vec2(1835, 480),
            vec2(1895, 480),
            vec2(1955, 480),
            vec2(2015, 480),
            vec2(2075, 480),
            vec2(2135, 480),
        ], 'barrier1', 0, false
        )

        Bars([
            vec2(1785, 380),
            vec2(1835, 380),
            vec2(1895, 380),
            vec2(1955, 380),
            vec2(2015, 380),
            vec2(2075, 380),
            vec2(2135, 380),
        ], 'barrier2', 0, false
        )

        Bars([
            vec2(1785, 290),
            vec2(1835, 290),
            vec2(1895, 290),
            vec2(1955, 290),
            vec2(2015, 290),
            vec2(2075, 290),
            vec2(2135, 290),
        ], 'barrier3', 0, false
        )

        Bars([
            vec2(1950, 170),
        ], 'barrier4', 0, false)

        
        const lever4 = new Lever(
            [
                vec2(1770, 615),
            ], "barrier1")
        lever4.pullLever(true)

        const lever5 = new Lever(
            [
                vec2(1650, 615),
            ], "barrier2")
        lever5.pullLever(true)

        const lever6 = new Lever(
            [
                vec2(2100, 615),
            ], "barrier3")
        lever6.pullLever(true)
        
        const lever7 = new Lever(
            [
                vec2(2250, 615),
            ], "barrier4")
        lever7.pullLever(true)


        const player = new Player(
            leve1Config.playerPositionX,
            leve1Config.playerPositionY,
            leve1Config.playerSpeed,
            1,
            false,
            leve1Config.nbLives,
            onCutscene
            )

            
        playerObj = player.makePlayer(character)
        player.playIdleAnimation()

        player.hitQuestionTile(question1.questionNumber);
        player.hitQuestionTile(question2.questionNumber);
        player.hitQuestionTile(question3.questionNumber);
        player.updateLives(uiManager.livesCountUi)
        
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142)

        const enemys = new Enemy(
            leve1Config.enemysPositions.map(enemyPos => enemyPos()),
            leve1Config.enemysRange,
            leve1Config.enemysRangeY,
            leve1Config.enemysSpeeds,
            leve1Config.enemysType,
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
        level2.drawMapLayout(level2Layout)
        const player = new Player(
            leve2Config.playerPositionX,
            leve2Config.playerPositionY,
            leve2Config.playerSpeed,
            2,
            true,
            leve2Config.nbLives,
            false
            )
        
        playerObj =  player.makePlayer(character)
        player.playIdleAnimation()
        level2.displayLevel(player.currentLevel)
        
        const camera = new Camera()
        camera.attach(player.gameObj, 0, -142)

        uiManager.displayLivesCounter()
        player.updateLives(uiManager.livesCountUi)
        const enemys = new Enemy(
            leve2Config.enemysPositions.map(enemyPos => enemyPos()),
            leve2Config.enemysRange,
            [50],
            leve2Config.enemysSpeeds,
            leve2Config.enemysType,
            false,
            'open2',
            
        )
        enemys.update()

        if(character == "hero"){
            new Npc([vec2(200,100)], "sacerdotisa")
        }else{
            new Npc([vec2(200, 100)], "hero")
        }
        
        // const cutscene = new Cutscene()
        
        enemys.setMovementEnemy()
        
        // player.onCutscene = await cutscene.cutsceneCreator(textLines)
        
        player.setPlayerControls()
        player.hitByMobs()
        player.hitQuestionTile();
        
        const npc = character === "hero" ? "sacerdotisa" : "hero";
        player.hitByNpc(npc);
        player.goNextLevel(character)
        player.goPreviousLevel(character)
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