controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`ClimarineAnimL`,
    500,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`ClimarineAnimR`,
    500,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`ClimarineR`, SpriteKind.Player)
controller.moveSprite(mySprite, 20, 20)
