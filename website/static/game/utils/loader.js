export const load = {
    fonts: () => {
        loadFont("Round", "static/game/assets/Round9x13.ttf")
    },
    assets: () => {
        loadSprite("altar", "static/game/assets/altar.png", {
            sliceX: 4,
            sliceY: 1,
            anims: {
                animAltar:{
                    from: 0,
                    to: 3,
                    loop: true
                }
            }

        } )
        loadSprite("cutsceneStart", "static/game/assets/cutsceneStart.png" )
        loadSprite("cutsceneEnd", "static/game/assets/cutsceneEnd.png" )
        loadSprite("gameOver", "static/game/assets/gameover.png" )
        loadSprite("castle-background", "static/game/assets/castle_background.png" )
        loadSprite("logo", "static/game/assets/logo.png" )
        loadSprite("z", "static/game/assets/others/z.png" )

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
        loadSprite("stoneWall-rtb", "static/game/assets/brick/stoneWall_RTB.png")
        loadSprite("stoneWall-lbt", "static/game/assets/brick/stoneWall_LBT.png")
        loadSprite("stoneWall-full", "static/game/assets/brick/stoneWall_full.png")
   
        loadSprite("woodWall", "static/game/assets/wood/woodWall.png")
        loadSprite("woodWall-bottom", "static/game/assets/wood/woodWall_bottom.png")
        loadSprite("woodWall-b", "static/game/assets/wood/woodWall_B.png")
        loadSprite("woodWall-t", "static/game/assets/wood/woodWall_T.png")
        loadSprite("woodWall-lt", "static/game/assets/wood/woodWall_LT.png")
        loadSprite("woodWall-lb", "static/game/assets/wood/woodWall_LB.png")
        loadSprite("woodWall-rb", "static/game/assets/wood/woodWall_RB.png")
        loadSprite("woodWall-rt", "static/game/assets/wood/woodWall_RT.png")
        loadSprite("woodWall-r", "static/game/assets/wood/woodWall_R.png")
        loadSprite("woodWall-l", "static/game/assets/wood/woodWall_L.png")
        loadSprite("woodWall-full", "static/game/assets/wood/woodWall_full.png")

        loadSprite("hero-profile", "static/game/assets/hero-profile.png")
        loadSprite("priestness-profile", "static/game/assets/priestness-profile.png")
        loadSprite("heart", "static/game/assets/pickup/heart.png")

        loadSprite("ladder-down", "static/game/assets/brick/brick_down_stairs.png")
        loadSprite("ladder-up", "static/game/assets/brick/brick_up_stairs.png")


        loadSprite("ladder-down-wood", "static/game/assets/wood/wooden_down_stairs.png")
        loadSprite("ladder-up-wood", "static/game/assets/wood/wooden_up_stairs.png")

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
        loadSprite("collum", "static/game/assets/brick/collums.png", {
            sliceX: 9,
            sliceY: 1,
            anims: {
                upcollum: {
                    from: 0,
                    to: 0,
                },
                basecollum: {
                    from: 1,
                    to: 1,
                },
                bosscollum: {
                    from: 7,
                    to: 7,
                },
                simbolcollum: {
                    from: 8,
                    to: 8,
                },
                midle1: {
                    from: 2,
                    to: 2,
                },
                midle2: {
                    from: 3,
                    to: 3,
                },
                midle3: {
                    from: 4,
                    to: 4,
                },
                midle4: {
                    from: 5,
                    to: 5,
                },
                midle5: {
                    from: 6,
                    to: 6,
                }
            }
        })


        loadSprite("blacktar", "static/game/assets/wood/blacktar.png", {
            sliceX: 5,
            sliceY: 1,
            anims: {
                blacktar: {
                    from: 0,
                    to: 4,
                    loop: true
                }
            }
        })
        loadSprite("blacktar-left", "static/game/assets/wood/blacktar_L.png")
        loadSprite("blacktar-right", "static/game/assets/wood/blacktar_R.png")
        loadSprite("blacktar-bottom", "static/game/assets/wood/blacktar_B.png")
        loadSprite("blacktar-top", "static/game/assets/wood/blacktar_T.png")
        
        loadSprite("fire", "static/game/assets/fire.png", {
            sliceX: 8,
            sliceY: 2,
            anims: {
                idle:{
                    from: 0,
                    to: 7,
                    loop: true,
                    speed: 10
                },
                vanish: {
                    from: 8,
                    to: 15,
                },
                appear: {
                    from: 15,
                    to: 8
                }
            }
        })
        loadSprite("brickNumbers-button", "static/game/assets/brick/brick_button_numbers.png", {
            sliceX: 3,
            sliceY: 14,
            anims: {
                heart: {
                    from : 0,
                    to: 0,
                },
                skull:{
                    from: 3,
                    to: 3,
                },
                one : {
                    from: 12,
                    to: 12,
                },
                two : {
                    from : 15,
                    to: 15,
                },
                three : {
                    from : 18,
                    to: 18,  
                },
                four : {
                    from : 21,
                    to: 21,
                },
                five : {
                    from : 24,
                    to: 24,
                },
                six : {
                    from : 27,
                    to: 27,
                }, 
                seven : {
                    from : 30,
                    to: 30,
                },
                eight : {
                    from : 33,
                    to: 33,
                },
                nine : {
                    from : 36,
                    to: 36,
                },
                zero : {
                    from : 39,
                    to: 39,
                },
                pressedheart:{
                    from : 1,
                    to: 2,
                },
                pressedskull:{
                    from : 4,
                    to: 5,
                },
                pressedone : {
                    from : 13,
                    to: 14,
                },
                pressedtwo : {
                    from : 16,
                    to: 17,
                },
                pressedthree : {
                    from : 19,
                    to: 20,
                },
                pressedfour : {
                    from : 22,
                    to: 23,
                },
                pressedfive : {
                    from : 25,
                    to: 26,
                },
                pressedsix : {
                    from : 28,
                    to: 29,
                },
                pressedseven : {
                    from : 31,
                    to: 32,
                },
                pressedeight : {
                    from : 34,
                    to: 35,
                },
                pressednine : {
                    from : 37,
                    to: 38,
                },
                pressedzero : {
                    from : 40,
                    to: 41,
                },                
                unpressedheart:{
                    from : 2,
                    to: 0,
                },
                unpressedskull:{
                    from : 5,
                    to: 3,
                },
                unpressedone : {
                    from : 14,
                    to: 12,
                },
                unpressedtwo : {
                    from : 17,
                    to: 15,
                },
                unpressedthree : {
                    from : 20,
                    to: 18,
                },
                unpressedfour : {
                    from : 23,
                    to: 21,
                },
                unpressedfive : {
                    from : 26,
                    to: 24,
                },
                unpressedsix : {
                    from : 29,
                    to: 27,
                },
                unpressedseven : {
                    from : 32,
                    to: 30,
                },
                unpressedeight : {
                    from : 35,
                    to: 33,
                },
                unpressednine : {
                    from : 38,
                    to: 36,
                },
                unpressedzero : {
                    from : 41,
                    to: 39,
                },
            }        
        })

        loadSprite("brick-button", "static/game/assets/brick/brick_button.png", {
            sliceX: 3,
            sliceY: 9,
            anims: {
                blank: {
                    from: 0,
                    to: 0,
                },
                right: {
                    from: 3,
                    to: 3,
                },
                left: {
                    from: 6,
                    to: 6,
                },
                up: {
                    from: 9,
                    to: 9,
                },
                down: {
                    from: 12,
                    to: 12,
                },
                happy: {
                    from: 15,
                    to: 15,
                },
                sad: {
                    from : 18,
                    to: 18,
                },
                normal: {
                    from: 21,
                    to: 21,
                },
                restart: {
                    from: 24,
                    to: 24,
                },
                pressedright: {
                    from: 4,
                    to: 5,
                },
                pressedleft: {
                    from: 7,
                    to: 8,
                },
                pressedup: {
                    from: 10,
                    to: 11,
                },
                presseddown: {
                    from: 13,
                    to: 14,
                },
                pressedrestart: {
                    from : 25,
                    to: 26,
                },
                pressedblank: {
                    from: 1,
                    to: 2,
                },
                pressedhappy: {
                    from: 16,
                    to: 17,
                },
                pressedsad: {
                    from: 19,
                    to: 20,
                },
                pressednormal: {
                    from: 22,
                    to: 23,
                },
                unpressedblank: {
                    from: 2,
                    to: 0,
                },
                unpressedright: {
                    from: 5,
                    to: 3,
                },
                unpressedleft: {
                    from : 8,
                    to: 6,
                },
                unpressedup: {
                    from: 11,
                    to: 9,
                },
                unpresseddown: {
                    from: 14,
                    to: 12,
                },
                unpressedrestart: {
                    from: 26,
                    to: 24,
                }
            }
        })
        loadSprite("wood-simbols", "static/game/assets/wood/woodSimbols.png", {
            sliceX: 9,
            sliceY: 1,
            anims: {
                question: {
                    from: 0,
                    to: 0,
                },
                exclamation: {
                    from: 1,
                    to: 1,
                },
                igual: {
                    from: 2,
                    to: 2,
                },
                multiplication: {
                    from: 3,
                    to: 3,
                },
                division: {
                    from: 4,
                    to: 4,
                },
                up: {
                    from: 5,
                    to: 5,
                },
                right: {
                    from: 6,
                    to: 6,
                },
                down: {
                    from: 7,
                    to: 7,
                },
                left: {
                    from: 8,
                    to: 8,
                }
            }
        })
        loadSprite("wood-numbers", "static/game/assets/wood/woodNumbers.png", {
            sliceX: 10,
            sliceY: 1,
            anims: {
                one: {
                    from: 0,
                    to: 0,
                },
                two: {
                    from: 1,
                    to: 1,
                },
                three: {
                    from: 2,
                    to: 2,
                },
                four: {
                    from: 3,
                    to: 3,
                },
                five: {
                    from: 4,
                    to: 4,
                },
                six: {
                    from: 5,
                    to: 5,
                },
                seven: {
                    from: 6,
                    to: 6,
                },
                eight: {
                    from: 7,
                    to: 7,
                },
                nine: {
                    from: 8,
                    to: 8,
                },
                zero: {
                  from : 9,
                  to: 9,  
                }
            }
        })

        loadSprite("wood-button", "static/game/assets/wood/wood_button.png", {
            sliceX: 3,
            sliceY: 9,
            anims: {
                blank: {
                    from: 0,
                    to: 0,
                },
                right: {
                    from: 3,
                    to: 3,
                },
                left: {
                    from: 6,
                    to: 6,
                },
                up: {
                    from: 9,
                    to: 9,
                },
                down: {
                    from: 12,
                    to: 12,
                },
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
                restart: {
                    from: 24,
                    to: 24,
                },
                pressedright: {
                    from: 4,
                    to: 5,
                },
                pressedleft: {
                    from: 7,
                    to: 8,
                },
                pressedup: {
                    from: 10,
                    to: 11,
                },
                presseddown: {
                    from: 13,
                    to: 14,
                },
                pressedrestart: {
                    from : 25,
                    to: 26,
                },
                pressedblank: {
                    from: 1,
                    to: 2,
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
                },
                unpressedblank: {
                    from: 2,
                    to: 0,
                },
                unpressedright: {
                    from: 5,
                    to: 3,
                },
                unpressedleft: {
                    from : 8,
                    to: 6,
                },
                unpressedup: {
                    from: 11,
                    to: 9,
                },
                unpresseddown: {
                    from: 14,
                    to: 12,
                },
                unpressedrestart: {
                    from: 26,
                    to: 24,
                }
            }
        })

        loadSprite("woodNumbers-button", "static/game/assets/wood/wood_button_numbers.png", {
            sliceX: 3,
            sliceY: 14,
            anims: {
                heart: {
                    from : 0,
                    to: 0,
                },
                skull:{
                    from: 3,
                    to: 3,
                },
                one : {
                    from: 12,
                    to: 12,
                },
                two : {
                    from : 15,
                    to: 15,
                },
                three : {
                    from : 18,
                    to: 18,  
                },
                four : {
                    from : 21,
                    to: 21,
                },
                five : {
                    from : 24,
                    to: 24,
                },
                six : {
                    from : 27,
                    to: 27,
                }, 
                seven : {
                    from : 30,
                    to: 30,
                },
                eight : {
                    from : 33,
                    to: 33,
                },
                nine : {
                    from : 36,
                    to: 36,
                },
                zero : {
                    from : 39,
                    to: 39,
                },
                pressedheart:{
                    from : 1,
                    to: 2,
                },
                pressedskull:{
                    from : 4,
                    to: 5,
                },
                pressedone : {
                    from : 13,
                    to: 14,
                },
                pressedtwo : {
                    from : 16,
                    to: 17,
                },
                pressedthree : {
                    from : 19,
                    to: 20,
                },
                pressedfour : {
                    from : 22,
                    to: 23,
                },
                pressedfive : {
                    from : 25,
                    to: 26,
                },
                pressedsix : {
                    from : 28,
                    to: 29,
                },
                pressedseven : {
                    from : 31,
                    to: 32,
                },
                pressedeight : {
                    from : 34,
                    to: 35,
                },
                pressednine : {
                    from : 37,
                    to: 38,
                },
                pressedzero : {
                    from : 40,
                    to: 41,
                },                
                unpressedheart:{
                    from : 2,
                    to: 0,
                },
                unpressedskull:{
                    from : 5,
                    to: 3,
                },
                unpressedone : {
                    from : 14,
                    to: 12,
                },
                unpressedtwo : {
                    from : 17,
                    to: 15,
                },
                unpressedthree : {
                    from : 20,
                    to: 18,
                },
                unpressedfour : {
                    from : 23,
                    to: 21,
                },
                unpressedfive : {
                    from : 26,
                    to: 24,
                },
                unpressedsix : {
                    from : 29,
                    to: 27,
                },
                unpressedseven : {
                    from : 32,
                    to: 30,
                },
                unpressedeight : {
                    from : 35,
                    to: 33,
                },
                unpressednine : {
                    from : 38,
                    to: 36,
                },
                unpressedzero : {
                    from : 41,
                    to: 39,
                },
            }        
        })

        loadSprite("iron-bars-horizontal", "static/game/assets/others/iron_bars.png", {
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
        loadSprite("iron-bars-vertical", "static/game/assets/others/iron_bars_vertical.png", {
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
        loadSprite("wood-box-normal", "static/game/assets/crates/wooden_crates.png", {
            sliceX: 6,
            sliceY: 1,
            anims: {
                box0: {
                    from: 0,
                    to: 0,
                },
                maior: {
                    from: 1,
                    to: 1,
                },
                menor: {
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

        loadSprite("wood-box-numbers", "static/game/assets/crates/wooden_crates_numbers.png", {
            sliceX: 10,
            sliceY: 1,
            anims: {
                one: {
                    from: 0,
                    to: 0,
                },
                two: {
                    from: 1,
                    to: 1,
                },
                three: {
                    from: 2,
                    to: 2,
                },
                four: {
                    from: 3,
                    to: 3,
                },
                five: {
                    from: 4,
                    to: 4,
                },
                six: {
                    from: 5,
                    to: 5,
                },
                seven: {
                    from: 6,
                    to: 6,
                },
                eight: {
                    from: 7,
                    to: 7,
                },
                nine: {
                    from: 8,
                    to: 8,
                },
                zero: {
                  from : 9,
                  to: 9,  
                }
            }
        })


        loadSprite("t1-wood", "static/game/assets/wood/wood_tile.png", {
            sliceX: 12,
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
                },
                tile8: {
                    from: 8,
                    to: 8,
                },
                tile9: {
                    from: 9,
                    to: 9,  
                },
                tile10: {
                    from: 10,
                    to: 10,
                },
                tile11: {
                    from : 11,
                    to: 11,
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

        loadSprite("question-brick", "static/game/assets/brick/stoneQuestion.png")
        loadSprite("question-wood", "static/game/assets/wood/woodQuestion.png")
        loadSprite("alert-tile", "static/game/assets/brick/stoneAlert.png")
        loadSprite("mark-tile", "static/game/assets/brick/stoneMark.png")
        loadSprite("heart-tile", "static/game/assets/brick/stoneHeart.png")

 
        loadSprite("idle-hero", "static/game/assets/player-hero-idle.png",{
            sliceX: 11,
            sliceY: 1,
            anims: {
                static: {
                    from: 0,
                    to: 0,
                },
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

        loadSprite("attack-hero", "static/game/assets/male-attack.png",{
            sliceX: 6,
            sliceY: 1,
            anims: {
                attack: {
                    from: 0,
                    to: 5,
                },
                
            }
        })
        loadSprite("attack-sacerdotisa", "static/game/assets/female-attack.png",{
            sliceX: 7,
            sliceY: 1,
            anims: {
                attack: {
                    from: 0,
                    to: 6,
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
                static: {
                    from: 0,
                    to: 0,
                },
                idle: {
                    from: 0,
                    to: 9,
                    loop: true
                },
            }
        })
        loadSprite("enemy-1", "static/game/assets/skeleton.png", {
            sliceX: 15,
            sliceY: 1,
            anims: {
                idle: {
                    from: 0,
                    to: 0,
                },
                walk: {
                    from: 0,
                    to: 9,
                    loop: true
                },
                death: {
                    from: 10,
                    to: 14,
                },
                birth: {
                    from: 14,
                    to: 9,
                }
            }
        })
            
    },
    sounds: () => {
        loadSound("confirm-ui", "static/game/sounds/confirm-ui.wav")
        loadSound("lost-heart", "static/game/sounds/lost-heart.wav")
        loadSound("player-hit-sacerdotisa", "static/game/sounds/player-hit-girl.wav")
        loadSound("player-hit-hero", "static/game/sounds/player-hit-man.wav")
        loadSound("lava", "static/game/sounds/lava.wav")
        loadSound("blacktar", "static/game/sounds/blacktar.mp3")
        loadSound("lever", "static/game/sounds/lever.mp3")
        loadSound("wood-box", "static/game/sounds/wood-box.wav")
        loadSound("button", "static/game/sounds/button.wav")
        loadSound("skeleton-walk", "static/game/sounds/skeleton.mp3")
        loadSound("hit", "static/game/sounds/hit.wav")
        loadSound("attack", "static/game/sounds/attack.mp3")
        loadSound("menu", "static/game/sounds/menu.mp3")
        loadSound("level1", "static/game/sounds/level1.mp3")
        loadSound("level2", "static/game/sounds/level2.mp3")
        loadSound("ending", "static/game/sounds/ending.wav")
        loadSound("game-over", "static/game/sounds/game-over.wav")

        loadSound("start", "static/game/sounds/start.wav")
    }

} 