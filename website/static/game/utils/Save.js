import { uiManager } from "./UIManager";

export class Save {

    async saveGame(level, positionX, positionY){
        const dataToSend = { level: level, startX: positionX, startY: positionY };
        uiManager.displayBlinkingUiMessage("Salvando...", vec2(center().x, center().y + 200))

        await fetch('/save-game', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })    
    }

}