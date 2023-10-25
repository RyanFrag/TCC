import events from "../controller/events.js"

export class Altar {
    createAltar(position, key){
            this.gameObj = add([
                    sprite(`altar`, {anim: "animAltar"}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(36,32), 16, 23),
                    }),
                    scale(4.5),
                    `altar`,
                ])
            return this.gameObj
    }
}