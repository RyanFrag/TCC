import events from "../controller/events.js";
let multiply = 1;

export const Car = (position, walkSpeed, key) => {
    const gameObj = add([
        sprite(`fire`, {anim: "idle"}),
        pos(position),
        area({
            shape: new Rect(vec2(0,3), 8, 8),
        }),
        anchor("center"),
        body({ isStatic: true }),
        scale(3),
        "car"
    ])
    events.listen("two_" + key, () => {
        multiply = 2;
    })
    events.listen("three_" + key, () => {
        multiply = 3;
    })
    events.listen("four_" + key, () => {
        multiply = 4;
    })
    events.listen("one_" + key, () => {
        multiply = 1;
    })
    
    events.listen("reset_" + key, () => {
        gameObj.moveTo(position)
        gameObj.play("appear")
        resetIdleAnimation(gameObj)

    })

    events.listen("walk_right_" + key, () => {
        gameObj.play("vanish")
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(walkSpeed, 0);
                gameObj.play("appear")
            }, i * 1000);
        }
        resetIdleAnimation(gameObj)

    })
    events.listen("walk_down_" + key, () => {
        gameObj.play("vanish")
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(0, walkSpeed)
                gameObj.play("appear")
            }, i * 1000);
        }
        resetIdleAnimation(gameObj)
    })
    events.listen("walk_up_" + key, () => {
        gameObj.play("vanish")
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(0, -walkSpeed)
                gameObj.play("appear")
            }, i * 1000);
        }
        resetIdleAnimation(gameObj)
    })
    events.listen("walk_left_" + key, () => {
        gameObj.play("vanish")
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(-walkSpeed, 0)
                gameObj.play("appear")
            }, i * 1000);
        }
        resetIdleAnimation(gameObj)
    })

    gameObj.onCollide("lava", () => {
        gameObj.moveTo(position)
    })
    gameObj.onCollide("barsList", () => {
        gameObj.moveTo(position)
    })

    function resetIdleAnimation(gameObj){
        setTimeout(() => {
            gameObj.play("idle")
        }, 1000)    }

}
