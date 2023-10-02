export const load = {
    fonts: () => {
        loadFont("Round", "static/game/assets/Round9x13.ttf")
    },
    assets: () => {
        loadSprite("castle-background", "static/game/assets/castle_background.png" )
        loadSprite("logo", "static/game/assets/logo.png" )
    
        loadSprite('bg', 'static/game/assets/grey-background.png')
        loadSprite("floor-tile", "static/game/assets/floor-tile-1.png")
        loadSprite("wall-tile", "static/game/assets/wall-tile.png")
        loadSprite("wall-tile-torch", "static/game/assets/wall-tile-torch.png")
        loadSprite("wall-collum", "static/game/assets/wall-collum.png")
        loadSprite("wall-collum-base", "static/game/assets/wall-collum-base.png")
        loadSprite("wall-collum-upbase", "static/game/assets/wall-collum-upbase.png")
        loadSprite("hero-profile", "static/game/assets/hero-profile.png")
        loadSprite("priestness-profile", "static/game/assets/priestness-profile.png")
        loadSprite("heart", "static/game/assets/heart.png")
        loadSprite("ladder-down", "static/game/assets/ladder-down.png")
        loadSprite("ladder-up", "static/game/assets/ladder-up.png")
        loadSprite("wood-box-x", "static/game/assets/wood-box-x.png")
        loadSprite("wood-box-smile", "static/game/assets/wood-box-smile.png")
        loadSprite("wood-box-devil", "static/game/assets/wood-box-devil.png")
        loadSprite("floor-tile-pressure", "static/game/assets/floor-tile-pressure.png")
        loadSprite("floor-tile-pressure-x", "static/game/assets/floor-tile-pressure-x.png")
        loadSprite("floor-tile-pressure-smile", "static/game/assets/floor-tile-pressure-smile.png")
        loadSprite("floor-tile-pressure-devil", "static/game/assets/floor-tile-pressure-devil.png")
        loadSprite("lava", "static/game/assets/tile-lava.png")
        loadSprite("lava-right", "static/game/assets/tile-lava-right.png")
        loadSprite("lava-left", "static/game/assets/tile-lava-left.png")
        
        loadSprite("t1", "static/game/assets/tile1.png", {
            sliceX: 7,
            sliceY: 1,
            anims: {
                tile0: {
                    from: 0,
                    to: 0,
                },
                tile1: {
                    from: 1,
                    to: 1,
                },
                tile2: {
                    from: 2,
                    to: 2,
                },
                tile3: {
                    from: 3,
                    to: 3,
                },
                tile4: {
                    from: 4,
                    to: 4,
                },
                tile5: {
                    from: 5,
                    to: 5,
                },
                tile6: {
                  from: 6,
                  to: 6,  
                }
            }
        })
        loadSprite("t2", "static/game/assets/tile2.png", {
            sliceX: 7,
            sliceY: 1,
            anims: {
                tile0: {
                    from: 0,
                    to: 0,
                },
                tile1: {
                    from: 1,
                    to: 1,
                },
                tile2: {
                    from: 2,
                    to: 2,
                },
                tile3: {
                    from: 3,
                    to: 3,
                },
                tile4: {
                    from: 4,
                    to: 4,
                },
                tile5: {
                    from: 5,
                    to: 5,
                },
                tile6: {
                  from: 6,
                  to: 6,  
                }
            }
        })
        loadSprite("t3", "static/game/assets/t3.png", {
            sliceX: 4,
            sliceY: 1,
            anims: {
                tile0: {
                    from: 0,
                    to: 0,
                },
                tile1: {
                    from: 1,
                    to: 1,
                },
                tile2: {
                    from: 2,
                    to: 2,
                },
                tile3: {
                    from: 3,
                    to: 3,
                },
            }
        })
        loadSprite("t4", "static/game/assets/t4.png", {
            sliceX: 8,
            sliceY: 1,
            anims: {
                tile0: {
                    from: 0,
                    to: 0,
                },
                tile1: {
                    from: 1,
                    to: 1,
                },
                tile2: {
                    from: 2,
                    to: 2,
                },
                tile3: {
                    from: 3,
                    to: 3,
                },
                tile4: {
                    from: 4,
                    to: 4,
                },
                tile5: {
                    from: 5,
                    to: 5,
                },
                tile6: {
                  from: 6,
                  to: 6,  
                },
                tile7: {
                    from: 7,
                    to: 7,
                }
            }
        })
        loadSprite("t5", "static/game/assets/t5.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
                tile0: {
                    from: 0,
                    to: 0,
                },
                tile1: {
                    from: 1,
                    to: 1,
                },
                heart: {
                    from: 2,
                    to: 2,
                }
            }
        })
        
        loadSprite("iron-bars", "static/game/assets/iron-bars.png", {
            sliceX : 8,
            sliceY : 1,
            anims: {
                closed: {
                    from: 0,
                    to: 0,
                },
                open: {
                    from: 0,
                    to: 3,
                },
                closeUp: {
                    from: 4,
                    to: 7,
                }
            }

        })
        loadSprite("lever", "static/game/assets/lever.png", {
            sliceX: 3,
            sliceY: 1,
            anims: {
                right: {
                    from: 0,
                    to: 0,
                },
                midle: {
                    from: 1,
                    to: 1,
                },
                left: {
                    from: 2,
                    to: 2,
                }
            }
        })
        loadSprite("idle-hero", "static/game/assets/player-hero-idle.png",{
            sliceX: 11,
            sliceY: 1,
            anims: {
                idle: {
                    from: 0,
                    to: 10,
                    loop: true
                },
            }
        })
        

        loadSprite("run-hero", "static/game/assets/player-run.png",{
            sliceX: 8,
            sliceY: 1,
            anims: {
                run: {
                    from: 0,
                    to: 7,
                    loop: true
                },
                
            }
        })

        loadSprite("run-sacerdotisa", "static/game/assets/player-sacerdotisa.png",{
            sliceX: 4,
            sliceY: 1,
            anims: {
                run: {
                    from: 1,
                    to: 3,
                    loop: true
                }
            }
        })
        loadSprite("idle-sacerdotisa", "static/game/assets/player-priest-idle.png",{
            sliceX: 10,
            sliceY: 1,
            anims: {
                idle: {
                    from: 0,
                    to: 9,
                    loop: true
                },
            }
        })
        loadSprite("enemy-1", "static/game/assets/skeleton.png", {
            sliceX: 4,
            sliceY: 1,
            anims: {
                idle: {
                    from: 0,
                    to: 0,
                },
                walk: {
                    from: 0,
                    to: 3,
                    loop: true
                }
            }
        })
        loadSprite("emotions", "static/game/assets/emotions.png", {
            sliceX: 4,
            sliceY: 1,
            anims: {
                1: {
                    from: 0,
                    to: 0,
                },
                2: {
                    from: 1,
                    to: 1,
                },
                3: {
                    from: 2,
                    to: 2,                    
                },
                4: {
                    from: 3,
                    to: 3,
                }
            }
        })
            
        loadSprite("modal", "static/game/assets/modal.png")
    },
    sounds: () => {
        loadSound("confirm-ui", "static/game/sounds/confirm-ui.wav")

    }

} 