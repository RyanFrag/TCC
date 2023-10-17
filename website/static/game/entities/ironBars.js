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
                    shape: new Rect(vec2(1, 3), 32, 32),
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


    events.listen("close_bars_" + key, () => {
        if (open) {
            open = false;
            for (const bar of barsList) {
                bar.play("closeUp");
                bar.use(body({ isStatic: true }));
               
            }
        }
        else{
            events.listen("open_bars_" + key, openBars);
            
        }
    });


     function openBars() {
        if (barsList.length > 0) {
            for (const bar of barsList) {
 
                open = true;
                bar.play("open");
                events.emit("progress_" + key)
                events.remove("open_bars_" + key, openBars);
                bar.unuse("body")          
                
            }
        }
    }

    events.listen("open_bars_" + key, openBars);
}