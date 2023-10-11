export class Question {
    constructor(positions, questionNumber, type) {
        this.questionNumber = questionNumber
        this.questions = []
        for(const position of positions){
            this.questions.push(
                add([
                    sprite(`question-${type}`),
                    pos(position),
                    area({
                        shape: new Rect(vec2(1, 3), 8, 8),
                    }),
                    anchor("center"),
                    scale(4),
                    `question-${questionNumber}`
                ])
                )
        }
    }

}