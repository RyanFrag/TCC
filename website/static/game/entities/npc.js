export class Npc {
    constructor(positions,type){
            this.npcs = []
            for(const position of positions){
                this.npcs.push(
                    add([
                        sprite(`idle-${type}`, {anim: "idle"}),
                        pos(position),
                        area({
                            shape: new Rect(vec2(0,3), 16, 16),
                        }),
                        anchor("center"),
                        body({isStatic: true}),
                        scale(3 ),
                        "npc"
                    ])
                    )
            }
        }
}
