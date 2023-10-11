import events from "../controller/events.js";
let multiply = 1;

export const Car = (position, walkSpeed, key) => {
    const gameObj = add([
        sprite(`enemy-1`),
        pos(position),
        area({
            shape: new Rect(vec2(0,3), 32, 32),
        }),
        anchor("center"),
        body({ isStatic: true }),
        scale(2),
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
    })

    events.listen("walk_right_" + key, () => {
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(walkSpeed, 0);
            }, i * 1000);
        }
    })
    events.listen("walk_down_" + key, () => {
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(0, walkSpeed)
            }, i * 1000);
        }
    })
    events.listen("walk_up_" + key, () => {
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(0, -walkSpeed)
            }, i * 1000);
        }
    })
    events.listen("walk_left_" + key, () => {
        for (let i = 0; i < multiply; i++) {
            setTimeout(() => {
                gameObj.move(-walkSpeed, 0)
            }, i * 1000);
        }
    })
}
