

export class Level {

    async displayLevel(level){
    

        const message = add([
            text(`Level: ${level}`, {
                size: 32,
                font: "Round",
            }),
            area(),
            anchor("center"),
            pos(center().x, center().y -100),
            opacity(),
            state("flash-up"),

        ])
        message.onStateEnter("flash-up", async ()=>{
            await tween(
                message.opacity,
                0,
                0.5,
                (nextOpacityValue) => message.opacity = nextOpacityValue,
                easings.linear
            )
        })
    }


    drawMapLayout(levelLayout, type){ 
        const mappings = {
            tileWidth: 64,
            tileHeight: 64,
            pos: vec2(0, 0),
            tiles: {
                'a': () => [sprite(`${type}`), "wall", area(), scale(4), body({isStatic: true})],
                't': () => [sprite(`${type}-bottom`), "wall", area(), scale(4),body({isStatic: true}) ],
                'm': () => [sprite(`${type}-full`), "wall", area(), scale(4), body({isStatic: true})],
                'z': () => [sprite(`${type}-t`), "wall",  area(), scale(4), body({isStatic: true})],
                'v': () => [sprite(`${type}-b`), "wall", area(), scale(4), body({isStatic: true})],
                'p': () => [sprite(`${type}-lt`), "wall", area(), scale(4), body({isStatic: true})],
                'y': () => [sprite(`${type}-lb`), "wall", area(), scale(4), body({isStatic: true})],        
                'k': () => [sprite(`${type}-r`), "wall", area(), scale(4), body({isStatic: true})],
                'h': () => [sprite(`${type}-rb`), "wall", area(), scale(4), body({isStatic: true})],
                'n': () => [sprite(`${type}-rt`), "wall", area(), scale(4), body({isStatic: true})],
                "j": () => [sprite(`${type}-l`), "wall", area(), scale(4), body({isStatic: true})],
                'd': () => [sprite(`${type}-rbt`), "wall", area(), scale(4), body({isStatic: true})],
                'o': () => [sprite(`stoneWall-rtb`), "wall", area(), scale(4), body({isStatic: true})], 
                "i": () => [sprite(`${type}-lbt`), "wall", area(), scale(4), body({isStatic: true})],

                "1": () => [sprite("t1-wood", {anim: "tile" + Math.floor(Math.random() * 11)  }), area(), scale(4)],
               
                "l": () => [sprite("ladder-down"), "ladder-down", area(), scale(2.5)],
                "u": () => [sprite("ladder-up"), "ladder-up", area(), scale(2)],

                "@": () => [sprite("ladder-down-wood"), "ladder-down", area(), scale(2)],
                "#": () => [sprite("ladder-up-wood"), "ladder-up", area(), scale(2)],

                "w": () => [sprite("lava", {anim: "lava"}),"lava", area(), scale(4), body({isStatic: true})],
                "x": () => [sprite("lava-right"), area(), scale(4), body({isStatic: true})],
                "s": () => [sprite("lava-left"), area(), scale(4), body({isStatic: true})],
                "f": () => [sprite("lava-top"), area(), scale(4), body({isStatic: true})],
                "c": () => [sprite("lava-bottom"), area(), scale(4), body({isStatic: true})],
                "r": () => [sprite("lava-bottom-left"), area(), scale(4), body({isStatic: true})],
                ")": () => [sprite("lava-bottom-right"), area(), scale(4), body({isStatic: true})],
                "b": () => [sprite("lava-left-top"), area(), scale(4), body({isStatic: true})],
                "g": () => [sprite("lava-right-top"), area(), scale(4)],
                
                
                "$": () => [sprite("blacktar", {anim: "blacktar"}), "blacktar", area(), scale(4),body({isStatic: true})],
                "(": () => [sprite("blacktar-left"), area(), scale(4), body({isStatic: true})],
                "+": () => [sprite("blacktar-right"), area(), scale(4), body({isStatic: true})],
                "^": () => [sprite("blacktar-top"), area(), scale(4), body({isStatic: true})],
                "%": () => [sprite("blacktar-bottom"), area(), scale(4), body({isStatic: true})],

                "?": () => [sprite("t1", {anim: "tile" + Math.floor(Math.random() * 7)  }), area(), scale(4)],
                "!": () => [sprite("t2", {anim: "tile" + Math.floor(Math.random() * 7)  }), area(), scale(4)],
                ".": () => [sprite("t3", {anim: "tile" + Math.floor(Math.random() * 4)  }), area(), scale(4)],
                ";": () => [sprite("t4", {anim: "tile" + Math.floor(Math.random() * 7)  }), area(), scale(4)],
                
            }
        }
        add([
            sprite("castle-background"),
            scale(12),
        ])

        const gamelevel = addLevel(levelLayout, mappings)
        
    }
    drawBackground(bgSprite){
        add([sprite(bgSprite),fixed(), scale(12)])
    }
}