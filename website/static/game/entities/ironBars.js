import events from "../controller/events.js";
import { SoundTile } from "./soundTile.js";

export const Bars = (positions, key, boxesRequired, openWithBox, type) => {
    let open = false;
    let barsList = [];
    let boxesPressed = 0; 

    for (const position of positions) {
        barsList.push(
            add([
                sprite(`iron-bars-${type}`, { anim: "closed" }),
                pos(position),
                area({
                    shape: new Rect(vec2(1, 3), 16, 16),
                }),
                body({ isStatic: true }),
                anchor("center"),
                scale(4),
                "barsList"
            ])
        );
    }

    events.listen("box_pressed", (boxKey) => {
        if(openWithBox){
            if (!open) {
                boxesPressed++;
                if (boxesPressed >= boxesRequired) {
                    events.emit("open_bars_"+key)
                    events.emit("progress_" + key)

                }
            } 
        }    
    });

    function openBars() {
        if (barsList.length > 0) {
            for (const bar of barsList) {
                open = true;
                bar.play("open");
                events.emit("progress_" + key);
                bar.unuse("body");
            }
        }
    }
    
    events.listen("open_bars_" + key, openBars);
    
    events.listen("close_bars_" + key, () => {
        if (open) {
            open = false;
            for (const bar of barsList) {
                bar.play("closeUp");
                bar.use(body({ isStatic: true }));
            }
        }
    })
}