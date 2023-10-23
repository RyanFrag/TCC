
export class Collums {
    createCollums(positions, types){
        this.collums = []
        let i = 0
        for(const position of positions){
            this.collums.push(
                this.gameObj = add([
                    sprite(`collum`, {anim: types[i]}),
                    pos(position),
                    scale(5),
                    `collum-${types[i]}`,
                ])
            )
            i += 1
        }
    }
}