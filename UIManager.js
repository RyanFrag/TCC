import { SoundTile } from "../entities/soundTile.js"

class UIManager {


    displayLivesCounter(){
        this.livesCountUi = add([
            text("", {
                font: "Round",
                size: 50,
            }),
            fixed(),
            pos(70,10)
        ])

        this.livesCountUi.add([
            sprite("heart"),
            pos(-60, -5),
            scale(3),,
            fixed()
        ])
    }

    displaySaveUiMessage(){
        const message =  add([
            text("Salvando...", {
                size: 24,
                font: "Round",
            }),
            area(),
            anchor("center"),
            fixed(),
            pos(vec2(center().x + 500, center().y + 300)),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"]),
        ])
        message.onStateEnter("flash-up", async ()=>{
            await tween(
                message.opacity,
                0,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async ()=>{
            destroy(message)
        })
        
    }
    displayBlinkingUiMessage(content, position){
        const message = add([
            text(content, {
                size: 24,
                font: "Round",
            }),
            area(),
            anchor("center"),
            pos(position),
            opacity(),
            state("flash-up", ["flash-up", "flash-down"]),

        ])
        message.onStateEnter("flash-up", async ()=>{
            await tween(
                message.opacity,
                0,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-down")
        })

        message.onStateEnter("flash-down", async ()=>{
            await tween(
                message.opacity,
                1,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
            message.enterState("flash-up")
        })

    }
    
    async displayMainMenu(){
        var response = await fetch('/get-game-data', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        
        const responseData = await response.json();
        const menuMusic = new SoundTile()
        menuMusic.addSound("menu", {
            volume: 0.4,
            loop: true
        })

        onSceneLeave(() => {
            menuMusic.pause("menu")
        }); 

        add([
            sprite("castle-background"),
            scale(4),
        ])
        add([
            sprite("logo"),
            area(),
            anchor("center"),
            pos(center().x + 50, center().y -80),
            scale(6),
            rotate(),
        ]) 

        add([
            text("O Labirinto Logico", 
            {
                size: 32,
                font: "Round",
            }),            
            area(),
            anchor("center"),
            pos(center().x, center().y + 100),

        ])
        if(responseData['response']['level'] > 0){
            this.displayBlinkingUiMessage(
                "Presssione ENTER para Continuar", 
                vec2(center().x, center().y + 200)
            )

            this.loadGame(responseData['response']['level'], responseData['response']['character'], responseData['response']['startX'], responseData['response']['startY']);
            
        }else{
            this.displayBlinkingUiMessage(
                "Presssione ENTER para jogar", 
                vec2(center().x, center().y + 200)
            )
            onKeyPress("enter", () => {
                play("confirm-ui", {speed: 1.5});
                go("cutscene");
            })

        }


    } 
    
    displayGameOver(){
        add([rect(1280, 720), color(0,0,0)])
        add([
            sprite("gameOver"),
            scale(2.5),
        ])
        const music = play("game-over", 
            {
                volume: 0.2,
            })
        add([
            text("Game Over", {
                size: 65,
                font: "Round",
            }),
            area(),
            anchor("center"),
            pos(center().x, center().y - 100),
        ])
        add([
            text("Infelizmente, nossos heróis não conseguiram escapar do labirinto\n e nunca mais foram vistos, o conhecimento está perdido.", {
              size: 32,
              align: 'center',
    
            }),
            pos(20, 350)
        ])

        this.displayBlinkingUiMessage(
            "Pressione ENTER para jogar novamente", 
             vec2(center().x, center().y + 200)
        )
    
        onKeyPress("enter", () => {
            play("confirm-ui", {speed: 1.5});
            go("selection");
        })
        onSceneLeave(() => {
            music.paused = true
        })
    }
    
    displayWinScreen(){
        add([rect(1280, 720), color(0,0,0)])
        add([
            sprite("cutsceneEnd"),
            scale(2.5),
        ])
        add([
            text("            Voce venceu Parabens!\num diploma apareceu no seu Perfil", {
                size: 42,
                font: "Round",
                transform: () => ({
                    color: BLACK,
                    }), 
            }),
            area(),
            anchor("center"),
            pos(center().x, center().y -100 ),
        ])
        play("ending", 
            {
                volume: 0.2,
            })
        this.displayBlinkingUiMessage(
            "Pressione ENTER para Recomecar", 
            vec2(center().x, center().y + 200)
        )

        add([
            text("Os herós superam os desafios\n e recuperaram o cetro para o Povo Grego,\n assim restaurando o conhecimento,\n e para você, O bravo heró i que merece\n uma recompensa, acessse seu perfil!", {
              size:28,
              align: 'center',
              transform: () => ({
                color: BLACK,
                }), 
            }),
            
            pos(center().x - 320, center().y )
        ])
    
        onKeyPress("enter", async () => {
            const dataToSend = { win: true, level: 0 };
            await fetch('/play-game', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })    
            play("confirm-ui", {speed: 1.5});
            go("menu");
        }) 
    }
    
    loadGame(fase, character, positionX, positionY){
        onKeyPress("enter", () => {
            play("confirm-ui", {speed: 1.5});
            go(fase, character, positionX, positionY);
        })

    }
    
    displayIntroCutscene(){
        add([
            sprite("cutsceneStart"),
            scale(2.2)
        ])
        add([
            text("Era uma vez..", {
              size: 48,
              align: 'center',
              font: "Round",
              transform: () => ({
                  color: BLACK,
              }), 
            }),
            pos(450, 240)

        ]) 
        add([
            text("Em uma antiga Grécia repleta de lendas e sabedoria,\n a Sacerdotisa descobre que o Cetro da Sabedoria desapareceu!\nCom grande temor de perder  o conhecimento ancestral, \n a Sacerdotisa convoca o Herói, mestre na resolução de enigmas.\n  Juntos, eles embarcam em uma jornada épica ao labirinto do Minotauro,\n para recuperar o Cetro e preservar o conhecimento da civilização.\n O labirinto esconde segredos que irão testar sua determinação,\n começando uma missão para preservar a sabedoria da Grécia Antiga.", {
              size: 28,
              align: 'center',
              transform: () => ({
                color: BLACK,
                }),
            }),
            
            pos(30, 300)
        ])
        onKeyPress("enter", () => {
            go("selection");
        })
    }
    
    displaySelection(){
        const background = add([
            sprite("castle-background"),
            scale(4)
        ])
        add([
          text("Escolha seu personagem", {
            size: 65,
            align: 'center',
            font: "Round",  
        }),
          pos(200, 90)
        ])

        add([
            pos(230, 230),
            sprite(`idle-hero`, {anim: "idle"}),

            scale(6),
        ])
        add([
          text("Hero", {
                font: "Round",
          }),
          pos(380, 200)
        ])
        const selectMale = add([
          rect(300, 300),
          area(),
          pos(270, 250),
          body(),
          opacity(0.1),
        ])
        selectMale.onClick(async () => {
            const dataToSend = { character: "hero"};
            await fetch('/play-game', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })    
            go(1, "hero", 130, 700)
        })
    
        selectMale.onUpdate(() => {
          if (selectMale.isHovering()) {
            selectMale.color = rgb(53, 21, 171)
          } else {
            selectMale.color = rgb()
          }
        })

        add([
            pos(680, 230),
            sprite(`idle-sacerdotisa`, {anim: "idle"}),
            scale(6),
        ])
        add([
            text("Sacerdotisa",
            {
                font: "Round",  
            }),
            pos(740, 200)
        ])
        
        const selectFemale = add([
          rect(300, 300),
          area(),
          pos(700, 250),
          body(),
          opacity(0.1),
        ])
        selectFemale.onClick(async() => {
            const dataToSend = { character: "sacerdotisa" };
            await fetch('/play-game', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            })    
            go(1,  "sacerdotisa", 130, 700)
        })
    
        selectFemale.onUpdate(() => {
          if (selectFemale.isHovering()) {
            selectFemale.color = rgb(53, 21, 171)
          } else {
            selectFemale.color = rgb()
          }
        })
    }
}   



export const uiManager = new UIManager()