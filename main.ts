input.onButtonPressed(Button.A, function () {
    if (raqueteA.get(LedSpriteProperty.X) > 0) {
        raqueteA.change(LedSpriteProperty.X, -1)
        raqueteB.change(LedSpriteProperty.X, -1)
    }
})
input.onButtonPressed(Button.B, function () {
    if (raqueteA.get(LedSpriteProperty.X) < 3) {
        raqueteA.change(LedSpriteProperty.X, 1)
        raqueteB.change(LedSpriteProperty.X, 1)
    }
})
let raqueteB: game.LedSprite = null
let raqueteA: game.LedSprite = null
let bola = game.createSprite(randint(0, 4), 0)
raqueteA = game.createSprite(0, 4)
raqueteB = game.createSprite(1, 4)
let direcaoX = randint(-1, 1)
let direcaoY = 1
let intervalo = 500
let redução = -20
basic.pause(intervalo)
basic.forever(function () {
    bola.change(LedSpriteProperty.X, direcaoX)
    bola.change(LedSpriteProperty.Y, direcaoY)
    if (bola.isTouching(raqueteA) || bola.isTouching(raqueteB)) {
        bola.change(LedSpriteProperty.X, direcaoX * -1)
        bola.change(LedSpriteProperty.Y, -1)
        direcaoX = randint(-1, 1)
        direcaoY = -1
        if (intervalo > 100) {
            intervalo += redução
        }
        game.addScore(1)
    } else {
        if (bola.get(LedSpriteProperty.Y) <= 0) {
            direcaoX = randint(-1, 1)
            direcaoY = 1
        } else if (bola.get(LedSpriteProperty.Y) >= 4) {
            game.gameOver()
        }
        if (bola.get(LedSpriteProperty.X) <= 0) {
            direcaoX = 1
        } else if (bola.get(LedSpriteProperty.X) >= 4) {
            direcaoX = -1
        }
        basic.pause(intervalo)
    }
})
