export class Camera {
    attachedObj = null

    attach(
        gameObj,offsetX = 0, 
        offsetY = 0, 
        cameraLeftBound, 
        cameraRightBound, 
        cameraTopBound, 
        cameraBottomBound
        ) {
        this.attachedObj = gameObj
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