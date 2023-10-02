export class Question {
    constructor(positions, questionNumber) {
        this.questionNumber = questionNumber
        this.questions = []
        for(const position of positions){
            this.questions.push(
                add([
                    sprite("t5", {anim: "heart"}),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 32, 32),
                    }),
                    anchor("center"),
                    scale(4),
                    `question-${questionNumber}`
                ])
                )
        }
    }

}