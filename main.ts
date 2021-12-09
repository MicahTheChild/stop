input.onButtonPressed(Button.A, function () {
    stop.move(1)
})
let poko: game.LedSprite = null
let stop: game.LedSprite = null
stop = game.createSprite(2, 2)
basic.forever(function () {
    if (stop.isTouching(poko)) {
        game.addScore(1)
    } else {
    	
    }
    poko = game.createSprite(randint(0, 4), 0)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    poko.delete()
    basic.pause(500)
})
