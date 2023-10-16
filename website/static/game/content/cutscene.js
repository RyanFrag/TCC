let typeQuestion = false
let character = null
export class Cutscene {
    async cutsceneCreator(textLines){
        const modal = add([
            rect(width() - 520, 300),
            pos(center().x - 100, height() -310),
            outline(4),
            fixed()
        ])

        const z = add([
            sprite('z'),
            pos(center().x +520, center().y + 300),
            scale(2),
            fixed()
        ])


        character = textLines[0].character
        if(textLines[0].sprite){
            this.spriteEmotions = add([
                sprite('emotions', {anim: 1}),
                pos(center().x -350, center().y + 20),
                scale(2),
                fixed()
            ])
        }
        let currentMessageIndex = 0; 
        let currentMessage = this.callMessage(textLines[currentMessageIndex].text, textLines[currentMessageIndex].sprite)
        let MessageAuthor = this.callMessageAuthor(character)
        currentMessageIndex++;
        
        return new Promise((resolve) => {
            onKeyPress("z", () => {
                if(currentMessageIndex > textLines.length - 1){
                    destroy(modal),
                    destroy(z),
                    destroy(MessageAuthor),
                    destroy(currentMessage)
                    if(this.spriteEmotions) destroy(this.spriteEmotions)
                    resolve(false)
                    return
                }
                if (currentMessage){
                    destroy(currentMessage);
                    destroy(MessageAuthor);
                }
                this.confirm();
                currentMessage = this.callMessage( textLines[currentMessageIndex].text, textLines[currentMessageIndex].sprite);
                MessageAuthor = this.callMessageAuthor(textLines[currentMessageIndex].character)
                currentMessageIndex++;
                })
            });   
        }

        
    callMessage(message, sprite=null){
        if(sprite) this.spriteEmotions.play(sprite)
        
        return add([
            text(message, {
                size: 20,
                width: width() - 230, 
                align: "center",
                
                transform: () => ({
                    color: BLACK,
                }),
            }),
            area(),
            anchor("center"),
            fixed(),
            pos(center().x + 220, center().y + 180),
        ]);
    }

    confirm(){
        play("confirm-ui", {speed: 1.5, volume: 0.4});
    }

    callMessageAuthor(character){
        return add([
            text(character, {
                size: 18,
                font: "Round",
                width: width() - 100, 
                align: "center",  
                transform: () => ({
                    color: BLACK,
                }),
            }),
            area(),
            anchor("center"),
            fixed(),
            pos(center().x -20, center().y + 70),
        ])
    }

}
 
