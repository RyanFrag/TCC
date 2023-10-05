

export class Level {

    async displayLevel(level){
        const dataToSend = { level: level };
        await fetch('/save-game', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })    

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


    drawMapLayout(levelLayout){  
        const mappings = {
            tileWidth: 64,
            tileHeight: 64,
            pos: vec2(0, 0),
            tiles: {
                'a': () => [sprite('stoneWall'), "wall", area(), scale(4), body({isStatic: true})],
                't': () => [sprite('stoneWall-bottom'), "wall", area(), scale(4),body({isStatic: true}) ],
                'm': () => [sprite('stoneWall-full'), "wall", area(), scale(4), body({isStatic: true})],
                'z': () => [sprite('stoneWall-t'), "wall",  area(), scale(4), body({isStatic: true})],
                'v': () => [sprite('stoneWall-b'), "wall", area(), scale(4), body({isStatic: true})],
                'p': () => [sprite('stoneWall-lt'), "wall", area(), scale(4), body({isStatic: true})],
                'y': () => [sprite('stoneWall-lb'), "wall", area(), scale(4), body({isStatic: true})],        
                'k': () => [sprite('stoneWall-r'), "wall", area(), scale(4), body({isStatic: true})],
                'h': () => [sprite('stoneWall-rb'), "wall", area(), scale(4), body({isStatic: true})],
                'n': () => [sprite('stoneWall-rt'), "wall", area(), scale(4), body({isStatic: true})],
                "j": () => [sprite("stoneWall-l"), "wall", area(), scale(4), body({isStatic: true})],
                'd': () => [sprite('stoneWall-rbt'), "wall", area(), scale(4), body({isStatic: true})],
                'o': () => [sprite('stoneWall-rtb'), "wall", area(), scale(4), body({isStatic: true})], 
                "i": () => [sprite("stoneWall-lbt"), "wall", area(), scale(4), body({isStatic: true})],

               


                "l": () => [sprite("ladder-down"), "ladder-down", area(), scale(2)],
                "u": () => [sprite("ladder-up"), "ladder-up", area(), scale(2)],


                "w": () => [sprite("lava", {anim: "lava"}),"lava", area(), scale(4), body({isStatic: true})],
                "x": () => [sprite("lava-right"), area(), scale(4), body({isStatic: true})],
                "s": () => [sprite("lava-left"), area(), scale(4), body({isStatic: true})],
                "f": () => [sprite("lava-top"), area(), scale(4), body({isStatic: true})],
                "c": () => [sprite("lava-bottom"), area(), scale(4), body({isStatic: true})],
                "r": () => [sprite("lava-bottom-left"), area(), scale(4), body({isStatic: true})],
                ")": () => [sprite("lava-bottom-right"), area(), scale(4), body({isStatic: true})],
                "b": () => [sprite("lava-left-top"), area(), scale(4), body({isStatic: true})],
                "g": () => [sprite("lava-right-top"), area(), scale(4)],
                
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