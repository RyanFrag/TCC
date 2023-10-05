export const load = {
    fonts: () => {
        loadFont("Round", "static/game/assets/Round9x13.ttf")
    },
    assets: () => {
        loadSprite("castle-background", "static/game/assets/castle_background.png" )
        loadSprite("logo", "static/game/assets/logo.png" )
    

        loadSprite("stoneWall", "static/game/assets/brick/stoneWall.png")
        loadSprite("stoneWall-bottom", "static/game/assets/brick/stoneWall_bottom.png")
        loadSprite("stoneWall-b", "static/game/assets/brick/stoneWall_B.png")
        loadSprite("stoneWall-t", "static/game/assets/brick/stoneWall_T.png")
        loadSprite("stoneWall-lt", "static/game/assets/brick/stoneWall_LT.png")
        loadSprite("stoneWall-lb", "static/game/assets/brick/stoneWall_LB.png")
        loadSprite("stoneWall-rb", "static/game/assets/brick/stoneWall_RB.png")
        loadSprite("stoneWall-rt", "static/game/assets/brick/stoneWall_RT.png")
        loadSprite("stoneWall-r", "static/game/assets/brick/stoneWall_R.png")
        loadSprite("stoneWall-l", "static/game/assets/brick/stoneWall_L.png")
        loadSprite("stoneWall-rbt", "static/game/assets/brick/stoneWall_RBT.png")
        loadSprite("stoneWall-lbt", "static/game/assets/brick/stoneWall_LBT.png")
        loadSprite("stoneWall-full", "static/game/assets/brick/stoneWall_full.png")
   
        loadSprite("hero-profile", "static/game/assets/hero-profile.png")
        loadSprite("priestness-profile", "static/game/assets/priestness-profile.png")
        loadSprite("heart", "static/game/assets/heart.png")

        loadSprite("ladder-down", "static/game/assets/brick/brick_down_stairs.png")
        loadSprite("ladder-up", "static/game/assets/brick/brick_up_stairs.png")



        loadSprite("lava-right", "static/game/assets/brick/lava_R.png")
        loadSprite("lava-left", "static/game/assets/brick/lava_L.png")
        loadSprite("lava-bottom", "static/game/assets/brick/lava_B.png")
        loadSprite("lava-bottom-left", "static/game/assets/brick/lava_LB.png")
        loadSprite("lava-bottom-right", "static/game/assets/brick/lava_RB.png")
        loadSprite("lava-top", "static/game/assets/brick/lava_T.png")
        loadSprite("lava-left-top", "static/game/assets/brick/lava_LT.png")
        loadSprite("lava-right-top", "static/game/assets/brick/lava_TR.png")
        loadSprite("lava", "static/game/assets/brick/lava.png", {
            sliceX: 6,
            sliceY: 1,
            anims: {
                lava: {
                    from: 0,
                    to: 5,
                    loop: true
                }
            }
        })
        loadSprite("brick-button", "static/game/assets/brick/brick_button.png", {
            sliceX: 3,
            sliceY: 6,
            anims: {
                
                happy: {
                    from: 9,
                    to: 9,
                },
                sad: {
                    from : 12,
                    to: 12,
                },
                normal: {
                    from: 15,
                    to: 15,
                },
                pressedhappy: {
                    from: 10,
                    to: 11,
                },
                pressedsad: {
                    from: 13,
                    to: 14,
                },
                pressednormal: {
                    from: 16,
                    to: 17,
                }
            }
        })
        
        loadSprite("iron-bars", "static/game/assets/others/iron_bars.png", {
            sliceX : 7,
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
                    from: 3,
                    to: 6,
                }
            }

        })
        loadSprite("lever", "static/game/assets/others/lever.png", {
            sliceX: 5,
            sliceY: 1,
            anims: {
                right: {
                    from: 0,
                    to: 0,
                },
                midleLeft: {
                    from: 1,
                    to: 2,
                },
                midleRight: {
                    from: 3,
                    to: 2,
                },
                left: {
                    from: 4,
                    to: 4,
                }
            }
        })
        loadSprite("wood-box", "static/game/assets/crates/wooden_crates.png", {
            sliceX: 6,
            sliceY: 1,
            anims: {
                box0: {
                    from: 0,
                    to: 0,
                },
                box1: {
                    from: 1,
                    to: 1,
                },
                box2: {
                    from: 2,
                    to: 2,
                },
                sad: {
                    from: 3,
                    to: 3,
                },
                happy: {
                    from: 4,
                    to: 4,
                },
                normal: {
                    from: 5,
                    to: 5,
                }
            }
        })



        
        loadSprite("t1", "static/game/assets/brick/brick_tile.png", {
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
        loadSprite("t2", "static/game/assets/brick/brick2_tile.png", {
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
        loadSprite("t3", "static/game/assets/brick/brick3_tile.png", {
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
        loadSprite("t4", "static/game/assets/brick/brick4_tile.png", {
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

        loadSprite("question-tile", "static/game/assets/brick/stoneQuestion.png")
        loadSprite("alert-tile", "static/game/assets/brick/stoneAlert.png")
        loadSprite("mark-tile", "static/game/assets/brick/stoneMark.png")
        loadSprite("heart-tile", "static/game/assets/brick/stoneHeart.png")


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
            sliceX: 8,
            sliceY: 1,
            anims: {
                run: {
                    from: 0,
                    to: 7,
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
            
    },
    sounds: () => {
        loadSound("confirm-ui", "static/game/sounds/confirm-ui.wav")
        loadSound("lava", "static/game/sounds/lava.wav")
    }

} 