export class SoundTile{
    soundMap = {}
    addSoundTile(tile, sound, position, areaLocation) {
        return add([
            sprite(`${tile}`, { anim: 'tile0'} ),
            pos(position),
            area({
                shape: new Rect(vec2(0, 0), areaLocation, 200),
            }),
            scale(4),
            `${sound}`,
        ]) 
    }
    
    addSound(sound, options){
        this.soundMap[sound] = play(sound, options)

    }
    playSound(sound) {
        this.soundMap[sound].seek = 0
        this.soundMap[sound].paused = false
      }

    pause(sound) {
        this.soundMap[sound].paused = true
        this.soundMap[sound].seek = 0
      }

      pauseAllSounds() {
        for (const sound in this.soundMap) {
          this.soundMap[sound].paused = true
          this.soundMap[sound].seek = 0
        }
      }
}


