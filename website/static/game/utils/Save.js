import { uiManager } from "./UIManager.js";

export class Save {

    async saveGame(level, positionX, positionY, timer){
        const dataToSend = { level: level, startX: positionX, startY: positionY, timer };
        uiManager.displaySaveUiMessage()
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