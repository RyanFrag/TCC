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
                go("selection");
            })

        }


    } 
    
    displayGameOver(){
        add([rect(1280, 720), color(0,0,0)])
        add([
            sprite("castle-background"),
            scale(4),
        ])
        add([
            text("Game Over", {
                size: 65,
                font: "Round",
            }),
            area(),
            anchor("center"),
            pos(center())
        ])
        this.displayBlinkingUiMessage(
            "Pressione ENTER para jogar novamente", 
            vec2(center().x, center().y + 200)
        )
    
        onKeyPress("enter", () => {
            play("confirm-ui", {speed: 1.5});
            go("selection");
        })
    }
    
    displayWinScreen(){
        add([rect(1280, 720), color(0,0,0)])
        add([
            sprite("castle-background"),
            scale(4),
        ])
        add([
            text("Voce venceu Parabens! um diploma apareceu no seu Perfil", {
                size: 32,
                font: "Round",
            }),
            area(),
            anchor("center"),
            pos(center())
        ])

        this.displayBlinkingUiMessage(
            "Pressione ENTER para Recomeçar", 
            vec2(center().x, center().y + 200)
        )
    
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
    displaySelection(){
        const background = add([
            sprite("castle-background"),
            scale(4)
        ])
        add([
          text("Escolha seu personagem", {
            size: 65,
            align: 'center',
          }),
          pos(250, 90)
        ])

        add([
            pos(290, 250),
            sprite("hero-profile"),
            scale(2),
        ])
        add([
          text("Hero"),
          pos(370, 250)
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
            go(1, "hero")
        })
    
        selectMale.onUpdate(() => {
          if (selectMale.isHovering()) {
            selectMale.color = rgb(53, 21, 171)
          } else {
            selectMale.color = rgb()
          }
        })
        
        add([
            pos(730, 250),
            sprite("priestness-profile"),
            scale(2),
        ])
        add([
            text("Sacerdotisa"),
            pos(740, 250)
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
            go(1,  "sacerdotisa")
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