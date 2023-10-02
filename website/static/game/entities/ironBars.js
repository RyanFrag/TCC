import events from "../controller/events.js";

export const Bars = (positions, key, boxesRequired, openWithBox) => {
    let open = false;
    let barsList = [];

    let boxesPressed = 0; 

    for (const position of positions) {
        barsList.push(
            add([
                sprite(`iron-bars`, { anim: "closed" }),
                pos(position),
                area({
                    shape: new Rect(vec2(1, 3), 32, 32),
                }),
                body({ isStatic: true }),
                anchor("center"),
                scale(2),
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
                }
            } 
        }    
    });

    events.listen("close_bars_" + key, () => {
        console.log("[LISTERN] Event");
        if (open) {
            open = false;
            for (const bar of barsList) {
                bar.play("closeUp");
                setTimeout(() => {
                    bar.use(body({ isStatic: true }));
                }, 2000);
            }
        }
        else{
            events.listen("open_bars_" + key, openBars);
            
        }
    });


    function openBars() {
        console.log("[LISTERN] Event");
        if (barsList.length > 0) {
            for (const bar of barsList) {
                open = true;
                console.log("open1")
                bar.play("open");
                events.remove("open_bars_" + key, openBars);
                setTimeout(() => {
                    bar.unuse("body")
                }, 500);
            }
        }
    }

    events.listen("open_bars_" + key, openBars);
}