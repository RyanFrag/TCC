import events from "../controller/events.js";

export class Bars {
    open = false;

    constructor(positions, key, boxesRequired, openWithBox) {
        this.key = key;
        this.boxesRequired = boxesRequired; 
        this.boxesPressed = 0; 
        this.BoxKeys = ['x', 'smile', 'devil'];

        this.bars = [];
        for (const position of positions) {
            this.bars.push(
                this.gameObj = add([
                    sprite(`iron-bars`, { anim: "closed" }),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 32, 32),
                    }),
                    body({ isStatic: true }),
                    anchor("center"),
                    scale(2),
                    "bars"
                ])
            );
        }

        events.listen("box_pressed", (boxKey) => {
            if(openWithBox){
                if (!this.open) {
                    this.boxesPressed++;
                    if (this.boxesPressed >= this.boxesRequired) {
                        events.emit("open_bars_"+this.key)
                    }
                } 
            }    
        });
    
        events.listen("close_bars_" + this.key, () => {
            this.open = false;
            for (const bar of this.bars) {
                bar.play("closeUp");
                setTimeout(() => {
                    bar.use(body({ isStatic: true }));
                }, 2000);
            }
            
        });

        events.listen("open_bars_" + this.key, () => {
            if (!this.open) {
                this.open = true;
                for (const bar of this.bars) {
                    bar.play("open");
                    setTimeout(() => {
                        bar.unuse("body");
                    }, 2000);
                }
            }
        });
    }
}