export class Camera {
    attachedObj = null

    attach(
        gameObj,
        offsetX = 0,
        offsetY = 0,
   
    ){
        this.attachedObj = gameObj
        const cameraLeftBound = 600;
        const cameraRightBound = 1770;
        const cameraTopBound = 350;
        const cameraBottomBound = 600;

        onUpdate(() => {
            const targetX = this.attachedObj.pos.x + offsetX;
            const targetY = this.attachedObj.pos.y + offsetY;
    
            // Certifique-se de que a câmera não ultrapasse os limites do jogo
            let newCameraX = clamp(targetX, cameraLeftBound, cameraRightBound);
            let newCameraY = clamp(targetY, cameraTopBound, cameraBottomBound);
    
            camPos(newCameraX, newCameraY);
        });

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }
        
        
    }
}