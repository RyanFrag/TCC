
export class Altar {
    createAltar(position, key){
            this.gameObj = add([
                    sprite(`altar`, {anim: "animAltar"}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(36,32), 16, 23),
                    }),
                    scale(4.5),
                    `altar-${key}`,
                ])
            return this.gameObj
    }

    endGame(){
        this.gameObj.onCollide("player", () => {
            go("end")
        })
    }

}