export const level3Config = {
    playerPositionX: 200,
    playerPositionY: 690,
    nbLives: 3,
    playerSpeed: 400,
    enemysPositions: [
        () => vec2(920,480),
        () => vec2(440,250),
        () => vec2(2120, 740),
        () => vec2(2920,250),
        () => vec2(2620,500),
      ],
    enemysRangeX: [100, 200, 100, 200, 300],
    enemysRangeY: [50, 50, 50, 50, 50],    
    enemysSpeeds: [1, 2, 2, 1, 1],
    enemysType: 1,
    cameraLeftBound : 625,
    cameraRightBound : 3080,
    cameraTopBound : 350,
    cameraBottomBound : 520,
}

