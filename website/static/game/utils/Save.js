export class Save {

    async saveGame(level, positionX, positionY){
        const dataToSend = { level: level, startX: positionX, startY: positionY };
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