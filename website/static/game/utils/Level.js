

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
                'a': () => [sprite('wall-tile'), "wall", area(), scale(2), body({isStatic: true})],
                't': () => [sprite('wall-tile-torch'), "wall", area(), scale(2), ],
                'z': () => [sprite('wall-collum'), "wall",  area(), scale(2), body({isStatic: true})],
                'd': () => [sprite('wall-collum-base'), "wall", area(), scale(2), body({isStatic: true})],
                'p': () => [sprite('wall-collum-upbase'), "wall", area(), scale(2), body({isStatic: true})],
                'f': () => [sprite('floor-tile'), area(), scale(2)],
                "l": () => [sprite("ladder-down"), "ladder-down", area(), scale(2)],
                "u": () => [sprite("ladder-up"), "ladder-up", area(), scale(2)],
                "x": () => [sprite("lava-right"), area(), scale(2), body({isStatic: true})],
                "s": () => [sprite("lava-left"), area(), scale(2), body({isStatic: true})],
                "w": () => [sprite("lava"), area(), scale(2), body({isStatic: true})],
                "?": () => [sprite("t1", {anim: "tile" + Math.floor(Math.random() * 7)  }), area(), scale(4)],
                "!": () => [sprite("t2", {anim: "tile" + Math.floor(Math.random() * 7)  }), area(), scale(4)],
                ".": () => [sprite("t3", {anim: "tile" + Math.floor(Math.random() * 4)  }), area(), scale(4)],
                ";": () => [sprite("t4", {anim: "tile" + Math.floor(Math.random() * 7)  }), area(), scale(4)],
                "/": () => [sprite("t5", {anim: "tile" + Math.floor(Math.random() * 2)  }), area(), scale(4)],
                
            }
        }
        add([
            sprite("castle-background"),
            scale(4),
        ])

        const gamelevel = addLevel(levelLayout, mappings)
        
    }
    drawBackground(bgSprite){
        add([sprite(bgSprite),fixed(), scale(12)])
    }
}