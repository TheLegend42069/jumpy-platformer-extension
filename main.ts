enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    IdleLeft,
    IdleRight,
    JumpingLeft,
    JumpingRight,
    CrouchLeft,
    CrouchRight,
    Flying,
    Walking,
    Jumping
}
namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flier = SpriteKind.create()
    export const heal = SpriteKind.create()
    export const fakeheal = SpriteKind.create()
    export const poison = SpriteKind.create()
}
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    hero.y += 50
})
function initializeAnimations () {
    initializeHeroAnimations()
    initializeCoinAnimation()
    initializeFlierAnimations()
}
function giveIntroduction () {
    game.setDialogFrame(img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
`)
    game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    showInstruction("Move with the left and right buttons.")
    showInstruction("Jump with the up or A button.")
    showInstruction("Double jump by pressing jump again.")
    showInstruction("Slightly Teleport with B with the cost of one heart")
}
scene.onHitTile(SpriteKind.Player, 13, function (sprite) {
    if (info.life() < 5) {
        game.over(false, effects.splatter)
    } else {
        Spikes()
    }
})
function initializeCoinAnimation () {
    coinAnimation = animation.createAnimation(ActionKind.Idle, 200)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f f 5 f 5 5 5 f . . . . . 
. . . f 5 f 5 5 5 5 5 f . . . . 
. . f 5 f 5 5 5 4 5 5 f . . . . 
. . f 5 f 5 5 5 4 4 5 5 f . . . 
. . f 5 f 5 5 5 4 4 5 5 f . . . 
. . f 5 f 5 5 5 4 5 5 f . . . . 
. . . f 5 f 5 5 5 5 5 f . . . . 
. . . . f 5 f 5 5 5 f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . f f 5 f 5 f f . . . . . 
. . . f f 5 f 5 5 5 f . . . . . 
. . . f 5 f 5 5 5 5 f f . . . . 
. . . f 5 f 5 5 4 5 5 f . . . . 
. . . f 5 f 5 5 4 5 5 f . . . . 
. . . f 5 f 5 5 5 5 f f . . . . 
. . . f f 5 f 5 5 5 f . . . . . 
. . . . f f 5 f 5 f f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . f 5 f 5 f f . . . . . 
. . . . . f 5 f 5 5 f . . . . . 
. . . . . f 5 f 5 5 f . . . . . 
. . . . . f 5 f 5 5 f . . . . . 
. . . . . f 5 f 5 5 f . . . . . 
. . . . . f 5 f 5 f f . . . . . 
. . . . . f f f f f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f f 5 f 5 f . . . . . 
. . . . . f 5 5 f 5 f . . . . . 
. . . . . f 5 5 f 5 f . . . . . 
. . . . . f 5 5 f 5 f . . . . . 
. . . . . f 5 5 f 5 f . . . . . 
. . . . . f f 5 f 5 f . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f . . . . . 
. . . . . f f 5 f 5 f f . . . . 
. . . . . f 5 5 5 f 5 f f . . . 
. . . . f f 5 5 5 5 f 5 f . . . 
. . . . f 5 5 4 5 5 f 5 f . . . 
. . . . f 5 5 4 5 5 f 5 f . . . 
. . . . f f 5 5 5 5 f 5 f . . . 
. . . . . f 5 5 5 f 5 f f . . . 
. . . . . f f 5 f 5 f f . . . . 
. . . . . . f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    coinAnimation.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . . f 5 5 5 f 5 f f . . . 
. . . . f 5 5 5 5 5 f 5 f . . . 
. . . . f 5 5 4 5 5 5 f 5 f . . 
. . . f 5 5 4 4 5 5 5 f 5 f . . 
. . . f 5 5 4 4 5 5 5 f 5 f . . 
. . . . f 5 5 4 5 5 5 f 5 f . . 
. . . . f 5 5 5 5 5 f 5 f . . . 
. . . . . f 5 5 5 f 5 f . . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
}
function attemptJump () {
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * pixelsToMeters
    } else if (canDoubleJump) {
        doubleJumpSpeed = -3 * pixelsToMeters
        // Good double jump
        if (hero.vy >= -40) {
            doubleJumpSpeed = -4.5 * pixelsToMeters
            hero.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        hero.vy = doubleJumpSpeed
        canDoubleJump = false
    }
}
function shift () {
    hero.x += Math.randomRange(10, 40)
    info.changeLifeBy(-1)
}
function animateIdle () {
    mainIdleLeft = animation.createAnimation(ActionKind.IdleLeft, 100)
    animation.attachAnimation(hero, mainIdleLeft)
    mainIdleLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d d d d d d d d d e e d f . 
. f d d f d d d d f d d e d f . 
. f d d f d d d d f d d d e f . 
. f d d f d d d d f d d d f . . 
. f d d d d d d d d d d d f . . 
. f a c c c c c c c c a b f . . 
. f d d c c c c c c d d d f . . 
. f d f f f b b f f f d d f . . 
. . f a a a a a a a a a b f . . 
. . . f a a b f f a a b f . . . 
. . . f a a b f f a a b f . . . 
. . . . f f f . . f f f . . . . 
`)
    mainIdleRight = animation.createAnimation(ActionKind.IdleRight, 100)
    animation.attachAnimation(hero, mainIdleRight)
    mainIdleRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d e e d d d d d d d d d f . 
. f d e d d f d d d d f d d f . 
. f e d d d f d d d d f d d f . 
. . f d d d f d d d d f d d f . 
. . f d d d d d d d d d d d f . 
. . f b a c c c c c c c c a f . 
. . f d d d c c c c c c d d f . 
. . f d d f f f b b f f f d f . 
. . f b a a a a a a a a a f . . 
. . . f b a a f f b a a f . . . 
. . . f b a a f f b a a f . . . 
. . . . f f f . . f f f . . . . 
`)
}
scene.onHitTile(SpriteKind.Player, 11, function (sprite) {
    hero.setVelocity(1000, -20)
    hero.y += -1
})
function initializeFlierAnimations () {
    flierFlying = animation.createAnimation(ActionKind.Flying, 100)
    flierFlying.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 f f f f f f f 8 . . . 
. . . 8 f 8 8 f f f 8 8 f 8 . . 
. 8 . 8 f f f 8 f 8 f f f 8 . 8 
. 8 8 f f f f f f f f f f f 8 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 8 f f f f f f f f f f f 8 8 
. . . 8 f f 8 8 8 8 8 f f 8 . . 
. . . . 8 f 8 f f f 8 f 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    flierFlying.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 f f f f f f f 8 . . . 
. . . 8 f 8 8 f f f 8 8 f 8 . . 
. . . 8 f f f 8 f 8 f f f 8 . . 
. . 8 f f f f f f f f f f f 8 . 
. . 8 f f f f 8 f 8 f f f f 8 . 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f 8 f f 8 8 8 8 8 f f 8 f 8 
. 8 8 . 8 f 8 f f f 8 f 8 . 8 8 
. 8 . . . 8 8 8 8 8 8 8 . . . 8 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    flierFlying.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 f f f f f f f 8 . . . 
. . . 8 f 8 8 f f f 8 8 f 8 . . 
. 8 . 8 f f f 8 f 8 f f f 8 . 8 
. 8 8 f f f f f f f f f f f 8 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 8 f f f f f f f f f f f 8 8 
. . . 8 f f 8 8 8 8 8 f f 8 . . 
. . . . 8 f 8 f f f 8 f 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    flierIdle = animation.createAnimation(ActionKind.Idle, 100)
    flierIdle.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 f f f f f f f 8 . . . 
. . . 8 f 8 8 f f f 8 8 f 8 . . 
. 8 . 8 f f f 8 f 8 f f f 8 . 8 
. 8 8 f f f f f f f f f f f 8 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 8 f f f f f f f f f f f 8 8 
. . . 8 f f 8 8 8 8 8 f f 8 . . 
. . . . 8 f 8 f f f 8 f 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(hero.isHittingTile(CollisionDirection.Bottom))) {
        hero.vy += 120
    }
})
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.RunningLeft, 100)
    animation.attachAnimation(hero, mainRunLeft)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f e e e e e e e f . . . . . 
. f e e e e e e e e e f . . . . 
. f d d d d e d d e e f . . . . 
. f d d f d d e d e e f . . . . 
. f d d f d d d e e e f . . . . 
. f d d f d d d d d d f . . . . 
. f d d d d d d d d d f . . . . 
. . f c c c a a c c b f . . . . 
. . f c c d d d c c b f . . . . 
. . f b f f d d f f f f . . . . 
. . f a a a a a a a b f . . . . 
. . . f a a a a b f f . . . . . 
. . . f a a a a b f . . . . . . 
. . . . f f f f f . . . . . . . 
`)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f e e e e e e e f . . . . . 
. f e e e e e e e e e f . . . . 
. f d d d d e d d e e f . . . . 
. f d d f d d e d e e f . . . . 
. f d d f d d d e e e f . . . . 
. f d d f d d d d d d f . . . . 
. f d d d d d d d d d f . . . . 
. . f c c c c a a c b f . . . . 
. . f c c c c d d c b f . . . . 
. . f b f f d d d f f f f . . . 
. . f a a a a a a a a b f f . . 
. . . f a a b f f a a a f f . . 
. . . . f f f . f f f f f . . . 
`)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f e e e e e e e f . . . . . 
. f e e e e e e e e e f . . . . 
. f d d d d e d d e e f . . . . 
. f d d f d d e d e e f . . . . 
. f d d f d d d e e e f . . . . 
. f d d f d d d d d d f . . . . 
. f d d d d d d d d d f . . . . 
. . f c c c a a c c b f . . . . 
. . f c c d d d c c b f . . . . 
. . f b f f d d f f f f . . . . 
. . f a a a a a a a b f . . . . 
. . . f a a a a b f f . . . . . 
. . . f a a a a b f . . . . . . 
. . . . f f f f f . . . . . . . 
`)
    mainRunLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f . . . . . . 
. . f e e e e e e e f . . . . . 
. f e e e e e e e e e f . . . . 
. f d d d d e d d e e f . . . . 
. f d d f d d e d e e f . . . . 
. f d d f d d d e e e f . . . . 
. f d d f d d d d d d f . . . . 
. f d d d d d d d d d f . . . . 
. . f c a a c c c c b f . . . . 
. f d d d b c c c c b f . . . . 
f f f d d f f f f f f f . . . . 
f f f a a a a a a a b f . . . . 
. f a a b f a a b f f . . . . . 
. f f f f . f f f . . . . . . . 
`)
    mainRunRight = animation.createAnimation(ActionKind.RunningRight, 100)
    animation.attachAnimation(hero, mainRunRight)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f e e e e e e e f . . 
. . . . f e e e e e e e e e f . 
. . . . f e e d d e d d d d f . 
. . . . f e e d e d d f d d f . 
. . . . f e e e d d d f d d f . 
. . . . f d d d d d d f d d f . 
. . . . f d d d d d d d d d f . 
. . . . f b c c a a c c c f . . 
. . . . f b c c d d d c c f . . 
. . . . f f f f d d f f b f . . 
. . . . f b a a a a a a a f . . 
. . . . . f f b a a a a f . . . 
. . . . . . f b a a a a f . . . 
. . . . . . . f f f f f . . . . 
`)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f e e e e e e e f . . 
. . . . f e e e e e e e e e f . 
. . . . f e e d d e d d d d f . 
. . . . f e e d e d d f d d f . 
. . . . f e e e d d d f d d f . 
. . . . f d d d d d d f d d f . 
. . . . f d d d d d d d d d f . 
. . . . f b c a a c c c c f . . 
. . . . f b c d d c c c c f . . 
. . . f f f f d d d f f b f . . 
. . f f b a a a a a a a a f . . 
. . f f a a a f f b a a f . . . 
. . . f f f f . . f f f . . . . 
`)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f e e e e e e e f . . 
. . . . f e e e e e e e e e f . 
. . . . f e e d d e d d d d f . 
. . . . f e e d e d d f d d f . 
. . . . f e e e d d d f d d f . 
. . . . f d d d d d d f d d f . 
. . . . f d d d d d d d d d f . 
. . . . f b c c a a c c c f . . 
. . . . f b c c d d d c c f . . 
. . . . f f f f d d f f b f . . 
. . . . f b a a a a a a a f . . 
. . . . . f f b a a a a f . . . 
. . . . . . f b a a a a f . . . 
. . . . . . . f f f f f . . . . 
`)
    mainRunRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f f . . . 
. . . . . f e e e e e e e f . . 
. . . . f e e e e e e e e e f . 
. . . . f e e d d e d d d d f . 
. . . . f e e d e d d f d d f . 
. . . . f e e e d d d f d d f . 
. . . . f d d d d d d f d d f . 
. . . . f d d d d d d d d d f . 
. . . . f b c c c c a a c f . . 
. . . . f b c c c c b d d d f . 
. . . . f f f f f f f d d f f f 
. . . . f b a a a a a a a f f f 
. . . . . f f b a a f b a a f . 
. . . . . . . f f f . f f f . . 
`)
}
// Uncommented tiles are unused
function initializeScene () {
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f 
f f f f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 f f f f f f f f f f f f f f f 
f f 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f 
8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 8 f f f 8 f f f 8 f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f f f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f 8 f 8 f f f 8 f f f 8 f f f 8 f f f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
9 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f 8 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 8 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    // player spawn point
    scene.setTile(1, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // bumper spawn point
    scene.setTile(2, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // flier spawn point
    scene.setTile(3, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(4, img`
. . . . . . . . . . . . . . . . 
. . . . . . b b b b . . . . . . 
. . . . b b b 1 1 b b b . . . . 
. . . b b b b b b b b b b . . . 
. . b b b b b f f f 1 1 b b . . 
. . b b b b b f f f 1 1 f b . . 
. b b b b b f f f f f f f b b . 
. b b b b f f f b b b b f b b . 
. b b b b f f b b b b b b b b . 
. b f b b f f b b b b b b b b . 
. . b f b b f b b b b b f b . . 
. . b f f b f f b b b f b b . . 
. . . b f f f f f f f f b . . . 
. . . . b b f f f f b b . . . . 
. . . . . . b b b b . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    // coin spawn point
    scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(6, img`
. . . . . . . . . . . . . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . 6 6 6 5 5 6 6 6 . . . . 
. . . 7 7 7 7 6 6 6 6 6 6 . . . 
. . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
. . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
. 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
. 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
. 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
. 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
. . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
. . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
. . . 6 8 8 8 8 8 8 8 8 6 . . . 
. . . . 6 6 8 8 8 8 6 6 . . . . 
. . . . . . 6 6 6 6 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    // rock
    scene.setTile(7, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 9 9 9 9 9 9 9 9 9 9 9 9 9 9 8 
8 9 6 6 6 6 6 6 6 6 6 6 6 6 6 8 
8 9 6 8 8 8 8 8 8 8 8 8 8 9 9 8 
8 9 6 8 9 9 9 9 9 9 9 9 8 9 9 8 
8 9 6 8 9 9 9 9 9 9 9 9 8 9 9 8 
8 9 6 8 9 9 9 9 9 9 9 9 8 9 9 8 
8 9 6 8 9 9 9 f f 9 9 9 8 9 9 8 
8 9 6 8 9 9 9 f f 9 9 9 8 9 9 8 
8 9 6 8 9 9 9 9 9 9 9 9 8 9 9 8 
8 9 6 8 9 9 9 9 9 9 9 9 8 9 9 8 
8 9 6 8 9 9 9 9 9 9 9 9 8 9 9 8 
8 9 6 8 8 8 8 8 8 8 8 8 8 9 9 8 
8 9 6 9 9 9 9 9 9 9 9 9 9 9 9 8 
8 9 6 9 9 9 9 9 9 9 9 9 9 9 9 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, true)
    scene.setTile(8, img`
. . . . . . . . . . . . . . . . 
. . . . . . b b b b . . . . . . 
. . . . b b b 1 1 b b b . . . . 
. . . b b b b b b b b b b . . . 
. . b b b b b f f f 1 1 b b . . 
. . b b b b b f f f 1 1 f b . . 
. b b b b b f f f f f f f b b . 
. b b b b f f f b b b b f b b . 
. b b b b f f b b b b b b b b . 
. b f b b f f b b b b b b b b . 
. . b f b b f b b b b b f b . . 
. . b f f b f f b b b f b b . . 
. . . b f f f f f f f f b . . . 
. . . . b b f f f f b b . . . . 
. . . . . . b b b b . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    scene.setTile(9, img`
. . . . . . . . . . . . . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . 4 4 4 5 5 4 4 4 . . . . 
. . . 3 3 3 3 4 4 4 4 4 4 . . . 
. . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
. . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
. 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
. 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
. 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
. 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
. . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
. . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
. . . 4 2 2 2 2 2 2 2 2 4 . . . 
. . . . 4 4 2 2 2 2 4 4 . . . . 
. . . . . . 4 4 4 4 . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
    scene.setTile(10, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    scene.setTile(11, img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, true)
    scene.setTile(12, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
    // goal / flag spawn point
    scene.setTile(14, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, false)
    // ground1
    scene.setTile(15, img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 f f f f f f f f 9 9 8 8 
8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
8 8 9 9 9 9 9 9 9 9 9 9 9 9 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, false)
    scene.setTile(13, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . . d d d d . . . . . . 
. . . . . 1 d 1 1 d 1 . . . . . 
. . . . . d 1 1 1 1 d . . . . . 
. . . . 1 d 1 1 1 1 d 1 . . . . 
. . . . 1 d 1 1 1 1 d 1 . . . . 
. . . 1 d 1 1 d d 1 1 d 1 . . . 
. . . 1 d 1 d d d d 1 d 1 . . . 
. . . 1 d 1 d d d d 1 d 1 . . . 
. . 1 d 1 1 d d d d 1 1 d 1 . . 
. . 1 d 1 d d d d d d 1 d 1 . . 
. . 1 d 1 d d d d d d 1 d 1 . . 
`, true)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f f f f f f f f f f f f . . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f . 
. . f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f . 
. f f f f f f f f f f f f f f f 
. . f f f f f f f f f f f f f . 
. . . f f f f f . f f f f . . . 
`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    false
    )
    music.playTone(262, music.beat(BeatFraction.Half))
    shift()
})
function animateJumps () {
    // Because there isn't currently an easy way to say
    // "play this animation a single time and stop at the
    // end", this just adds a bunch of the same frame at
    // the end to accomplish the same behavior
    mainJumpLeft = animation.createAnimation(ActionKind.JumpingLeft, 100)
    animation.attachAnimation(hero, mainJumpLeft)
    mainJumpLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d d d d d d d d d e e d f . 
. f d d f d d d d f d d e d f . 
. f d d f d d d d f d d d e f . 
. f d d f d d d d f d d d f . . 
. f d d d d d d d d d d d f . . 
. f a c c c c c c c c a b f . . 
. f d d c c c c c c d d d f . . 
. f d f f f b b f f f d d f . . 
. . f a a a a a a a a a b f . . 
. . . f a a b f f a a b f . . . 
. . . f a a b f f a a b f . . . 
. . . . f f f . . f f f . . . . 
`)
    mainJumpLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d d d d d d d d d e e d f . 
. f d d f d d d d f d d e d f . 
. f d d f d d d d f d d d e f . 
. f d d f d d d d f d d d f . . 
. f d d d d d d d d d d d f . . 
. f a c c c c c c c c a b f . . 
. f d d c c c c c c d d d f . . 
. f d f f f b b f f f d d f . . 
. . f a a a a a a a a a b f . . 
. . . f a a b f f a a b f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    for (let index = 0; index < 30; index++) {
        mainJumpLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d d d d d d d d d e e d f . 
. f d d f d d d d f d d e d f . 
. f d d f d d d d f d d d e f . 
. f d d f d d d d f d d d f . . 
. f d d d d d d d d d d d f f . 
. d a b c c c c c c c c b a d . 
. d a c c c c c c c c c c a d . 
. f f f f f b b f f f f f f f . 
. . f a a a a a a a a a b f . . 
. . . f a a b f f a a b f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
    mainJumpRight = animation.createAnimation(ActionKind.JumpingRight, 100)
    animation.attachAnimation(hero, mainJumpRight)
    mainJumpRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d e e d d d d d d d d d f . 
. f d e d d f d d d d f d d f . 
. f e d d d f d d d d f d d f . 
. . f d d d f d d d d f d d f . 
. . f d d d d d d d d d d d f . 
. . f b a c c c c c c c c a f . 
. . f d d d c c c c c c d d f . 
. . f d d f f f b b f f f d f . 
. . f b a a a a a a a a a f . . 
. . . f b a a f f b a a f . . . 
. . . f b a a f f b a a f . . . 
. . . . f f f . . f f f . . . . 
`)
    mainJumpRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d e e d d d d d d d d d f . 
. f d e d d f d d d d f d d f . 
. f e d d d f d d d d f d d f . 
. . f d d d f d d d d f d d f . 
. . f d d d d d d d d d d d f . 
. . f b a c c c c c c c c a f . 
. . f d d d c c c c c c d d f . 
. . f d d f f f b b f f f d f . 
. . f b a a a a a a a a a f . . 
. . . f b a a f f b a a f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    for (let index = 0; index < 30; index++) {
        mainJumpRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d e e d d d d d d d d d f . 
. f d e d d f d d d d f d d f . 
. f e d d d f d d d d f d d f . 
. . f d d d f d d d d f d d f . 
. f f d d d d d d d d d d d f . 
. d a b c c c c c c c c b a d . 
. d a c c c c c c c c c c a d . 
. f f f f f f f b b f f f f f . 
. . f b a a a a a a a a a f . . 
. . . f b a a f f b a a f . . . 
. . . . f f f . . f f f . . . . 
. . . . . . . . . . . . . . . . 
`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.heal, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy(effects.disintegrate, 500)
})
scene.onHitTile(SpriteKind.Player, 6, function (sprite) {
    hero.y += -150
})
function animateCrouch () {
    mainCrouchLeft = animation.createAnimation(ActionKind.CrouchLeft, 100)
    animation.attachAnimation(hero, mainCrouchLeft)
    mainCrouchLeft.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d d d d d d d d d e e d f . 
. f d d f d d d d f d d e d f . 
. f d d f d d d d f d d d e f . 
. f d d f d d d d f d d d f . . 
. f d d d d d d d d d d d f . . 
. f a c c c c c c c c a b f . . 
. f d c c c c c c c c c d d f . 
f d d f f f b b f f f f d d f . 
. f f a a a a a a a a a b f . . 
. . . f f f f . f f f f f . . . 
`)
    mainCrouchRight = animation.createAnimation(ActionKind.CrouchRight, 100)
    animation.attachAnimation(hero, mainCrouchRight)
    mainCrouchRight.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d e e d d d d d d d d d f . 
. f d e d d f d d d d f d d f . 
. f e d d d f d d d d f d d f . 
. . f d d d f d d d d f d d f . 
. . f d d d d d d d d d d d f . 
. . f b a c c c c c c c c a f . 
. f d d c c c c c c c c c d f . 
. f d d f f f f b b f f f d d f 
. . f b a a a a a a a a a f f . 
. . . f f f f f . f f f f . . . 
`)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    currentLevel += 1
    if (currentLevel < levelMaps.length) {
        game.splash("Next level unlocked!")
        initializeLevel(currentLevel)
    } else {
        game.over(true, effects.confetti)
        music.playMelody("A - G - E - A E ", 120)
    }
})
function Spikes () {
    info.changeLifeBy(-5)
    info.changeScoreBy(150)
    hero.y += -15
    music.powerUp.play()
}
scene.onHitTile(SpriteKind.Player, 12, function (sprite) {
    hero.setVelocity(0, -1000)
})
function clearGame () {
    for (let value4 of sprites.allOfKind(SpriteKind.Bumper)) {
        value4.destroy()
    }
    for (let value5 of sprites.allOfKind(SpriteKind.Coin)) {
        value5.destroy()
    }
    for (let value6 of sprites.allOfKind(SpriteKind.Goal)) {
        value6.destroy()
    }
    for (let value7 of sprites.allOfKind(SpriteKind.Flier)) {
        value7.destroy()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
    } else {
        info.changeLifeBy(-1)
        sprite.say("Ow!", invincibilityPeriod)
        music.powerDown.play()
    }
    pause(invincibilityPeriod)
})
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    hero.x += 100
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function createEnemies () {
    // enemy that moves back and forth
    for (let value of scene.getTilesByType(2)) {
        bumper = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 8 8 . . 
. . . 8 8 f f f f f f f f f 8 . 
. . 8 f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. 8 f f f f f f f f f f f f f 8 
. . 8 f f f f f f f f f f f 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Bumper)
        value.place(bumper)
        bumper.ay = gravity
        if (Math.percentChance(50)) {
            bumper.vx = Math.randomRange(30, 60)
        } else {
            bumper.vx = Math.randomRange(-60, -30)
        }
    }
    // enemy that flies at player
    for (let value2 of scene.getTilesByType(3)) {
        flier = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 f f f f f f f 8 . . . 
. . . 8 f 8 8 f f f 8 8 f 8 . . 
. 8 . 8 f f f 8 f 8 f f f 8 . 8 
. 8 8 f f f f f f f f f f f 8 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 f f f f f 8 f 8 f f f f f 8 
. 8 8 f f f f f f f f f f f 8 8 
. . . 8 f f 8 8 8 8 8 f f 8 . . 
. . . . 8 f 8 f f f 8 f 8 . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Flier)
        value2.place(flier)
        animation.attachAnimation(flier, flierFlying)
        animation.attachAnimation(flier, flierIdle)
    }
}
function create_heal () {
    for (let heal_place of scene.getTilesByType(10)) {
        heal_place.place(heal2)
        heal2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 8 8 8 8 8 8 8 8 8 8 9 9 . 
. 9 8 8 1 f f f f f f f 8 8 9 . 
. 9 8 1 1 f f f f f f f f 8 9 . 
. 9 8 f f f f f f f f f f 8 9 . 
. 9 8 f f f f f f f f f f 8 9 . 
. 9 8 f f f f f f f f f f 8 9 . 
. 9 8 f f f f f f f f f f 8 9 . 
. 9 8 f f f f f f f f f f 8 9 . 
. 9 8 f f f f f f f f f f 8 9 . 
. 9 8 8 f f f f f f f f 8 8 9 . 
. 9 9 8 8 8 8 8 8 8 8 8 8 9 9 . 
. . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.heal)
    }
}
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
}
function initializeHeroAnimations () {
    animateRun()
    animateIdle()
    animateCrouch()
    animateJumps()
}
function createPlayer (player2: Sprite) {
    player2.ay = gravity
    scene.cameraFollowSprite(player2)
    controller.moveSprite(player2, 100, 0)
    player2.z = 5
    info.setLife(1)
    info.setScore(0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250)
    otherSprite.y += -3
    info.changeScoreBy(1)
    if (Math.percentChance(10)) {
        info.changeLifeBy(1)
    }
})
function initializeLevel (level: number) {
    clearGame()
    scene.setTileMap(levelMaps[level])
    effects.bubbles.startScreenEffect()
    scene.placeOnRandomTile(hero, 1)
    createEnemies()
    spawnGoals()
    create_heal()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function skip () {
    game.splash("Skip")
    info.setLife(10)
    game.over(true, effects.smiles)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flier, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.say("Ow!", invincibilityPeriod * 1.5)
    music.powerDown.play()
    pause(invincibilityPeriod * 1.5)
})
function spawnGoals () {
    scene.placeOnRandomTile(sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . f f f f . . . . . 
. . . . . . f 2 2 2 2 f f . . . 
. . . . . . f 2 3 3 2 2 2 f . . 
. . . . . . f 2 3 2 2 2 2 2 f . 
. . . . . . f 3 2 2 2 2 2 f . . 
. . . . . . f 2 2 2 2 f f . . . 
. . . . . . f b d f f . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f b d f . . . . . . 
. . . . . . f d d f . . . . . . 
. . . . . f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f f . . . 
`, SpriteKind.Goal), 14)
    for (let value3 of scene.getTilesByType(5)) {
        coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . f 5 5 5 4 4 5 5 5 f . . . 
. . . . f 5 5 5 5 5 5 f . . . . 
. . . . f f 5 5 5 5 f f . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Coin)
        value3.place(coin)
        animation.attachAnimation(coin, coinAnimation)
        animation.setAction(coin, ActionKind.Idle)
    }
}
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    hero.x += -80
})
let heroFacingLeft = false
let coin: Sprite = null
let heal2: Sprite = null
let flier: Sprite = null
let bumper: Sprite = null
let mainCrouchRight: animation.Animation = null
let mainCrouchLeft: animation.Animation = null
let mainJumpRight: animation.Animation = null
let mainJumpLeft: animation.Animation = null
let mainRunRight: animation.Animation = null
let mainRunLeft: animation.Animation = null
let flierIdle: animation.Animation = null
let flierFlying: animation.Animation = null
let mainIdleRight: animation.Animation = null
let mainIdleLeft: animation.Animation = null
let doubleJumpSpeed = 0
let canDoubleJump = false
let coinAnimation: animation.Animation = null
let currentLevel = 0
let levelMaps: Image[] = []
let gravity = 0
let pixelsToMeters = 0
let invincibilityPeriod = 0
let hero: Sprite = null
hero = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . f f f f f f f f f f . . . 
. . f e e e e e e e e e e f . . 
. f e e e e e e e e e e e e f . 
. f d e e d d d d d d d d d f . 
. f d e d d f d d d d f d d f . 
. f e d d d f d d d d f d d f . 
. . f d d d f d d d d f d d f . 
. . f d d d d d d d d d d d f . 
. . f b a c c c c c c c c a f . 
. . f d d d c c c c c c d d f . 
. . f d d f f f b b f f f d f . 
. . f b a a a a a a a a a f . . 
. . . f b a a f f b a a f . . . 
. . . f b a a f f b a a f . . . 
. . . . f f f . . f f f . . . . 
`, SpriteKind.Player)
// how long to pause between each contact with a
// single enemy
invincibilityPeriod = 1200
pixelsToMeters = 30
gravity = 9.81 * pixelsToMeters
levelMaps = [img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . . . . . . . . . . . . . . . . . . . . 
. . 1 . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 5 . 7 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . 7 . . . . . . . . . . . . . . . 5 . . . . . 
. . . . . a . . . . 7 . . . . . . . . . . . . . . . 5 . . . . . 
5 5 5 5 5 7 . . . . 7 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 . . . . e 
7 7 7 7 7 7 d d d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, img`
. . . . . . . . . . . . . . . . . . . 3 . . . . . . . . 3 3 3 3 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . 7 3 . 5 5 5 . . . . . . . . . . . . . 5 5 5 
. . . . . 7 . . 7 . 7 . . 5 5 5 . . . . . . . . . . . . . 5 5 5 
. 1 . 7 . 7 . 2 2 . 7 . . 5 5 5 . . . . . . . . e . . . . 5 5 5 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d 7 7 7 7 7 7 7 7 7 7 7 7 
`, img`
. . . . . . . . . . . 7 . . . 3 . . . 3 . . 3 . 3 . . . . . . . 
. . . . . . . 5 . . . 7 . . . . . . . . . . . . . . . 3 . . . . 
. . . . . 5 . 7 . . . 7 . . . . . . . . . . . . . . . . . . . 3 
. . . . . 7 . 7 . . . . . . . 5 . . . 5 . . 5 . 5 . . . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
. . . 7 a . 5 . . 5 . 5 . . 5 . 5 . . 5 . 5 . . . 5 . . . 5 . . 
. 1 7 7 e . . 2 . 2 . . . 2 . . . . . 2 . . . 2 . . . 2 . . . 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, img`
. 3 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 5 5 5 5 . 5 . 5 5 5 . . . . . 
. . . . . 5 . 5 . . . . . 5 5 . 5 7 7 7 7 . 5 . . . . . . . . . 
. . . 5 . . . . . 5 5 5 . . . 5 7 5 5 5 5 . 7 . . . . . . . . . 
. 1 . 7 2 2 2 2 2 2 7 2 2 2 2 2 7 2 2 2 2 2 7 . . . . . . e . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, img`
. 3 3 . . . . . . . . . . . . . . . . . 3 3 . . . . . . . . . . 
. . . . . . . . . . . . 5 5 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 7 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 5 5 . 7 7 . . . 5 5 5 5 . 5 5 5 . . . . . . 5 
. . . . . 5 . 5 . 7 7 . . . . . 5 7 7 7 7 . . . . . . . . . . 7 
7 . . . . 7 . 7 . . . . . . . . 7 . . . . . . . . . . . . 5 . 7 
7 1 . 7 . 7 5 7 2 . 7 2 . . . 7 7 . 2 . . 2 . . 2 . . . . e . 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, img`
. . . . . . . . . 3 . . 3 . . 5 . 3 . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 . . 5 . . . . . . . . . . . . . . . . 
. . . . 3 . 5 . . 5 . . 5 . . 7 . . . . . 3 . . . . . . . . . . 
. . . . . . 5 . . 5 . . 7 . . 7 . . . . . . . 3 . . . . . . . . 
. . . . 5 . 7 . . 7 . . 7 . . 7 . 5 5 5 5 5 . . . . . . 3 . . . 
. . . 5 . . 7 . . 7 . . 7 . . 7 . 7 7 7 7 7 . 5 5 5 . 5 . . . . 
1 . . 7 . . 7 . . 7 . . 7 . . 7 . . . . . . . 7 7 7 . e . . 3 . 
7 7 7 7 d d 7 d d 7 d d 7 d d 7 d 7 7 7 7 7 d 7 7 7 d 7 7 7 7 7 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . e . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 7 . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 d . . 7 . . . . 
. . . . . . . . . . 3 . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
7 7 7 7 7 7 . . . . . . . . . 3 . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . 7 . . . 7 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . 
. . . . . . . 7 7 d d d 7 7 7 7 7 7 b b . . . . . . . 7 . . . . 
. . . . . . . . . . . . . . 7 . . . . . . . . . . c . 7 . . . . 
. . . . . . . . . . . . . . 7 . . . . . . . . . . . 7 . . . . . 
7 7 7 7 7 7 . . . . . . 3 . 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . 3 . . . . 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . 
. . 1 . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 7 c . . . . . 7 d d d d d d d d d d d d d d d d d 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
7 . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 5 . . . . 5 5 . . . . . . . . . . . 
. . . . . . . . . 5 5 5 5 . . . . . . . . 5 5 5 . . . . . . . . 
. . . . . . . . . . . 3 . . . . . . . . . . 3 . . . . . . 5 . . 
. . 5 5 . . . . . . . . . . . . . . . . 5 . . . . . . 5 . . . . 
. . . . . . . . . 5 . . . . . . . . . . . . . . 7 . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . 7 . . . . 7 . . . . e . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 7 7 7 
. . . . . 5 . . . . . . . . . . . . . 7 7 7 7 . . . . . . . . . 
. . . . . 5 . . . . . . . . . . 3 . . . . 7 7 . . . . . . . . . 
. . . . . 5 . . . . . . . . . . . . . . . 7 . 2 2 2 2 2 2 2 2 2 
. . 1 . . 5 . . . . . . . . . . . . . . . 7 7 2 2 2 2 2 2 2 2 2 
. . . . . 5 . . . . . 5 . . . . . . . 5 5 . 7 2 2 2 2 2 2 2 2 2 
. . . . . 5 . . 6 . . . . . . . . . . . . . 7 2 2 2 2 2 2 2 2 2 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, img`
. . . . . . . . . . . . . . . . . . . . 3 . . . . 7 . . . . . . 
. . . . . . . . . . . 5 . . . 3 . . . . . . . . . 7 . . . . . . 
. . . . . . . . . . . 7 . . . . . . . . . . 5 8 . 7 . . . 5 . e 
. . . . . . . . . . . 7 . . . . . . 5 . . . 7 7 . 7 . . . 7 7 7 
. . 1 . . . . . . . . 7 . . 5 . . . 7 . . . 7 . . . . . . . . . 
. . . . . . 5 . 5 . . 7 . . 7 . . . 7 . . . 7 . . . . . . . . . 
. . . . . . 5 8 5 . . 7 5 5 7 5 5 5 7 5 5 5 7 . . . . . . . . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 d d d d d d d d d 
`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 3 . . . . . . . . . . . 3 . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 9 . . . . . . . . . . . . . . 
. . . . . . . . . . . . 5 . . . . . . . 9 9 . . . . . . . . . . 
. . . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 7 7 . 5 . . . . . . . . . . . . . . . . . 
. . 5 . . . . 5 . d d 7 7 . . . 5 . . 9 . e . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . 7 . . . . . . . . . d d d . . . . . . . . . . 
. . . . . . . . . 7 7 5 . . . . . . . 7 7 7 . . . . . 9 . . . . 
. . 5 . . . . . . 7 7 7 . . . . . . . . . . . . . . . . . . . 3 
. . 6 . . . . d d 7 7 . . 7 . . . . . . . . . . . . . . . . . . 
7 7 7 7 7 7 7 7 7 7 7 . . 7 . . . . 2 . 5 . . . . . . 5 . . . . 
. . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 
. . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 . 
. 1 . . . . . . . . . . . . . . . . . . . . . 2 . . . 5 6 7 7 . 
. . . . 5 . 5 . . . 2 . 5 . . . . 2 . 5 . . . 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, img`
d . . . . . . 7 d d 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . 7 . f . . . . . . . . . . . . . . . . . . . . . 7 
. . . . . 5 . 7 f . . . . . . 5 . . . . . . 5 . . . . . . . . 7 
d . . . . 7 . 7 . . . . . . . . . . . . . . . . . . . . . . . 7 
. . . . d 7 . 7 . . . . . 7 . 2 . . . 2 . . 2 . . 2 5 5 5 5 e 7 
. . . . . 7 . 7 . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . 7 . 7 . . 7 . . . . . . . . . . . . . . . . . . . 5 7 
. . 5 . d 7 . 7 . . 7 . . . . 5 . . . . . . . . . . . . . . . 7 
. . . . . 7 . 7 . . 7 . . . . . . . . . . . . . . . . . . . . 7 
d . . . . 7 . 7 . . 7 . . . . . . . . 5 . . . . . . . . 5 . . 7 
. . . . . 7 . 7 . . 7 . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . 7 
. . . . . 7 . 7 . . 7 . . . 7 . . . . . . . . . . . 7 . a . . 7 
. . . . . 7 . 7 . . 7 . . . 7 . . . . . . . . . . . 7 . . . . 7 
7 . . . d 7 . 7 . . 7 . . . 7 . 3 3 . . . . . 3 . . 7 . . . . 7 
5 . . . . 7 . 7 . . 7 . . . 7 . . . . . . . . . . . 7 7 . . 4 7 
. . . . . 7 . 7 . . 7 . . . 7 . . . . . . . . . . . 7 . . . . 7 
. . 5 . . 7 . 7 . . 7 . . . 7 . 3 . . . . . . . . . 7 . . . . 7 
. . 7 c . 7 . 7 . 3 7 . . . 7 . . . . . . 3 . . . . 7 . . . . 7 
5 . . . . 7 . 7 . . d . . . 7 . . . . . . . . . . . 7 . . . . 7 
. . . d . 7 . 7 . . d . . . 7 . . . . . . . . . . . 7 . . . . 7 
. . . . . 7 . 7 . . 7 . . . 7 . . . . . . . . . . . 7 4 . . . 7 
. . 5 . . 7 . 7 . . 7 . . . 7 . 3 . . . . . . . . . 7 . . . . 7 
. . . . . 7 . 7 . . 7 . . . 7 . . . . . . . . . . . 7 . . . . 7 
. . . . . 7 . 7 . . . . . . 7 . . . . . . . . . . . 7 . . . 4 7 
. . . . d 7 . 7 . . . . . . 7 . . . . . . . . . . . 7 . . . . 7 
. . . . . 7 . 7 c 5 5 5 5 5 7 . . . . . . . . . . . 7 . . . . 7 
d . . . . 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 . . . . 7 
. . . . . 7 . . . . . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . 7 
. . . . a 7 . a . . . . . . . . . . . . . . . . . . . . . . . 7 
1 . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . 7 
. . 5 . . 7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d 5 . . . . . . 7 
7 7 c 7 7 7 b b b b b b b b b b b b b b b b b b b 7 7 c c c c 7 
`, img`
. . . . . . . . . . . . . 3 . . . 3 . 3 3 . . 3 . . . . 3 3 3 3 
. . . . . . . . . . . 5 . . . . . . 5 . . . . . 5 . . . 3 2 2 2 
. . . . . . . a 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . 5 . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 2 . 5 . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . 5 . . . 2 . . . . . . . . . . . . . . . 
. . . . . . . . . 7 7 7 7 7 7 7 7 7 . . . 5 . 2 . 5 . . . . . . 
. . . . . . . . . 7 . . . . . . . 7 . . . 7 7 7 7 7 . . . . . . 
. . . . . . . . . 7 . . . . . . . 7 . . . . . . . 7 7 7 . . . . 
. . . . . . . . . 7 . . . 1 . . . 7 . . . . . . . . . . . . . . 
. . . . . . . . . 7 . . . . . . . f . . . . . . . . . . . . . 5 
. . . . . . . . . 7 . . . . . . . f . . . . . . . . . . . . . 7 
. . . . . . . . . 7 5 . . . . . 5 f . . . . . . . . . . . . . 7 
. . . . . . . . . 7 7 7 7 7 7 7 7 7 . . . . . . . . 5 . . . . 7 
. . . . . . . . . . . . . . . . . . . . . . . . . . 7 . . . . 7 
. . . . . . . . . . . . . . . . . . . . . . 5 . . . 7 . . . . 7 
9 . . 5 . . . . 5 . . . . 3 5 . . 2 . . . . 7 . . 2 7 . . 2 . 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . . . . . 3 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . 
. . . . . . . . . . 5 . . 5 5 5 5 . . . . . . . . . . . . . . . 
. . . . . . . . . . 7 . . 7 7 7 7 . . . . . . . . . . . . . . . 
. . . . . . . 5 . . . . . . . . . . 5 . . . . . 5 . . . . . . . 
. . a . . 2 2 7 . . . . . . . . . . 7 . . . . . 7 . . 5 . 5 . e 
7 7 7 7 7 7 7 7 d d d d d d d d d d d d d d d d d d d 7 7 7 7 7 
`, img`
. . . . . . . . 7 7 . . . . . . . . . . . 3 3 3 3 3 3 3 3 3 3 3 
. . . . . . 8 . 7 7 8 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 7 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . 
. 5 . . . . . . . . . 7 . . . . . . . . . 3 . . . . . . . . . . 
7 7 7 . . . . 5 . . . 7 . . 4 . . . . . . . . . . . . . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . 7 . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . 3 . . 
. . . . . . . . 7 . . 3 . . . . 7 7 7 7 7 . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 
. 1 . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . 7 . . . . . . . . . . . . 7 . . . . . . . . . . . 
. . . 5 . 8 . 7 . 5 . . . . . . . . . . 7 . . . . . . . . . . . 
. . . . . . . 7 . . . . . 9 . . . . . . 7 d d d d d d d d d d d 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . . . 
3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 . 5 5 5 5 . 5 5 5 5 . . . . . . . 3 . . . . . . 
. . . . 5 4 4 5 . 5 4 4 5 . 5 4 4 5 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . d d d d d d d d d d d d d d d d d d d d d d d d d d d 
. . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
. . . . . . . . 7 . . . . 9 . . 9 . . 9 . . . 9 . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 7 . . . . 5 . . 5 . . 5 . . . 5 . . . . . . . . 
. . . . . . . . 7 . . . . . . . . . . . . . . . . . . . . . . . 
. . 5 . 5 . 8 . 7 . . . . 6 . . 6 . . 6 . . . 6 . . . . 5 . . e 
7 7 7 7 7 7 7 7 7 7 7 7 7 d 7 7 7 7 7 7 d 7 7 7 d 7 7 7 7 7 7 7 
`, img`
. . . . . . . 1 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . d . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . d . 
. . . d . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
d . . . . . . . . . . d . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . d . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . d . . . . . . . . . d . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. d . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . d . . . . . . . . . . 
. . . . . . . . . . . . . d . . 
. . . . . . . . . . d . . . . . 
. . . . . . . . . . . . . . . . 
. . . d . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . d . . . . . . . 
. . . . . . . . . . . . . d . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . e . . . . . . . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`]
initializeAnimations()
initializeScene()
createPlayer(hero)
initializeLevel(currentLevel)
giveIntroduction()
// set up hero animations
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else if (hero.vx > 0) {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.CrouchLeft)
        } else {
            animation.setAction(hero, ActionKind.CrouchRight)
        }
    } else if (hero.vy < 20 && !(hero.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.JumpingLeft)
        } else {
            animation.setAction(hero, ActionKind.JumpingRight)
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.RunningLeft)
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.RunningRight)
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.IdleLeft)
        } else {
            animation.setAction(hero, ActionKind.IdleRight)
        }
    }
})
// bumper movement
game.onUpdate(function () {
    for (let value8 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value8.isHittingTile(CollisionDirection.Left)) {
            value8.vx = Math.randomRange(30, 60)
        } else if (value8.isHittingTile(CollisionDirection.Right)) {
            value8.vx = Math.randomRange(-60, -30)
        }
    }
})
// Flier movement
game.onUpdate(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Flier)) {
        if (Math.abs(value9.x - hero.x) < 60) {
            if (value9.x - hero.x < -5) {
                value9.vx = 40
            } else if (value9.x - hero.x > 5) {
                value9.vx = -40
            }
            if (value9.y - hero.y < -5) {
                value9.vy = 35
            } else if (value9.y - hero.y > 5) {
                value9.vy = -35
            }
            animation.setAction(value9, ActionKind.Flying)
        } else {
            value9.vy = -20
            value9.vx = 0
            animation.setAction(value9, ActionKind.Idle)
        }
    }
})
// Reset double jump when standing on wall
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
})
forever(function () {
    if (info.life() > 10) {
        info.setLife(10)
    }
})
forever(function () {
    music.playMelody("G A F - E F G C ", 200)
    music.playMelody("G A F - E F G C ", 200)
    music.playMelody("G A F - E F G C ", 200)
    music.playMelody("G A F - E F G C ", 200)
    music.playMelody("G A F - E F G C ", 200)
    music.playMelody("C E D F E G F A ", 200)
    music.playMelody("C E D F E G F A ", 150)
    music.playMelody("C E D F E G F A ", 120)
    music.playMelody("C5 A - F - D F G ", 100)
    music.playMelody("C5 A - F - D F G ", 120)
    music.playMelody("C5 A - F - D F G ", 100)
    music.playMelody("C5 A - F - D F G ", 120)
    music.playMelody("C5 A - F - D F G ", 100)
    music.playMelody("A B G F E G A E ", 100)
    music.playMelody("A B G F E G A E ", 100)
    music.playMelody("A B G F E G A E ", 100)
    music.playMelody("A B G F E G A E ", 150)
})
forever(function () {
    if (info.score() > 400) {
        skip()
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
        music.playMelody("- - - - - - - - ", 120)
    }
})
