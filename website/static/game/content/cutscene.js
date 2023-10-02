export class Cutscene {
    addTextContent(content){
        const message = add([
            text(content, {
                size: 16,
            }),
            area(),
            anchor("center"),
            fixed(),
            pos(center().x -90, center().y -140),

        ])
    }

    async cutsceneCreator(textLines){
        const modal = add([
            sprite("modal"),
            scale(10),
            pos(center().x -40, center().y -90),
            fixed() 
        ])
        
        let  typeQuestion = false
        if(textLines[0].sprite){
        this.spriteEmotions = add([
            sprite('emotions', {anim: 1}),
            pos(center().x -200, center().y + 40),
            scale(2),
        ])}else{
            typeQuestion = true
        }

        let currentMessageIndex = 0; 
        let currentMessage = this.callMessage(textLines[currentMessageIndex].text, textLines[currentMessageIndex].sprite)
        currentMessageIndex++;
        return new Promise((resolve) => {
            onKeyPress("z", () => {
                if(currentMessageIndex > textLines.length - 1){
                    destroy(modal),
                    destroy(currentMessage)
                    if(!typeQuestion) destroy(this.spriteEmotions)
                    resolve(false)
                    return
                }
                if (currentMessage){
                    destroy(currentMessage);
                }
                currentMessage = this.callMessage(textLines[currentMessageIndex].text, textLines[currentMessageIndex].sprite);
                currentMessageIndex++;
                })
            });   
        }
    callMessage(message, sprite=null){
        if(sprite) this.spriteEmotions.play(sprite)
        return add([
            text(message, {
                size: 16,
                font: "Round",
                transform: () => ({
                    color: BLACK,
                }),
            }),
            area(),
            anchor("center"),
            body(),
            fixed(),
            pos(center().x + 140, center().y + 140),
        ]);

    }
}
 
