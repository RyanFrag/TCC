export class Camera {
    attachedObj = null

    attach(
        gameObj,
        offsetX = 0,
        offsetY = 0,
   
    ){
        this.attachedObj = gameObj
        const cameraLeftBound = 625;
        const cameraRightBound = 1930;
        const cameraTopBound = 350;
        const cameraBottomBound = 530;

        onUpdate(() => {
            const targetX = this.attachedObj.pos.x + offsetX;
            const targetY = this.attachedObj.pos.y + offsetY;
    
            let newCameraX = clamp(targetX, cameraLeftBound, cameraRightBound);
            let newCameraY = clamp(targetY, cameraTopBound, cameraBottomBound);
    
            camPos(newCameraX, newCameraY);
        });

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }
        
        
    }
}