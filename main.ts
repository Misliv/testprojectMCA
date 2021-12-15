namespace SpriteKind {
    export const Test = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStages == 1) {
        animation.runImageAnimation(
        PlayerSprite,
        assets.animation`FireFighterAnimUp`,
        150,
        true
        )
        CurrentPlayerAnim = 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(7)
    PlayerStages = 1
    animation.stopAnimation(animation.AnimationTypes.All, PlayerSprite)
    PlayerSprite.setImage(assets.image`ClimatianFireFighter0`)
    controller.moveSprite(PlayerSprite, 20, 20)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, PlayerSprite)
    if (CurrentPlayerAnim == 0 && PlayerStages == 1) {
        PlayerSprite.setImage(assets.image`FireFighterSpecialActionDown`)
        WaterBolt = sprites.createProjectileFromSprite(assets.image`WaterBlastDown`, PlayerSprite, 0, 100)
    } else if (CurrentPlayerAnim == 1) {
        PlayerSprite.setImage(assets.image`FireFighterSpecialActionUp`)
        WaterBolt = sprites.createProjectileFromSprite(assets.image`WaterBlastUp`, PlayerSprite, 0, -100)
    } else if (CurrentPlayerAnim == 2) {
        PlayerSprite.setImage(assets.image`FireFighterSpecialActionRight`)
        WaterBolt = sprites.createProjectileFromSprite(assets.image`WaterBlastRight`, PlayerSprite, 100, 0)
    } else if (CurrentPlayerAnim == 3) {
        PlayerSprite.setImage(assets.image`FireFighterSpecialActionLeft`)
        WaterBolt = sprites.createProjectileFromSprite(assets.image`WaterBlastLeft`, PlayerSprite, -100, 0)
    } else {
        PlayerSprite.sayText("Illegal dousing attempt", 500, false)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStages == 0) {
        animation.runImageAnimation(
        PlayerSprite,
        assets.animation`ClimarineAnimL`,
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        PlayerSprite,
        assets.animation`FireFighterLeftAnim`,
        150,
        true
        )
        CurrentPlayerAnim = 3
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStages == 0) {
        animation.runImageAnimation(
        PlayerSprite,
        assets.animation`ClimarineAnimR`,
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        PlayerSprite,
        assets.animation`FireFighterRightAnim`,
        150,
        true
        )
        CurrentPlayerAnim = 2
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStages == 1) {
        animation.runImageAnimation(
        PlayerSprite,
        assets.animation`FireFighterAnimDown`,
        150,
        true
        )
        CurrentPlayerAnim = 0
    }
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(9)
    PlayerStages = 0
    animation.stopAnimation(animation.AnimationTypes.All, PlayerSprite)
    PlayerSprite.setImage(assets.image`ClimarineR`)
    controller.moveSprite(PlayerSprite, 20, 20)
})
let WaterBolt: Sprite = null
let CurrentPlayerAnim = 0
let PlayerStages = 0
let PlayerSprite: Sprite = null
scene.setBackgroundColor(9)
PlayerSprite = sprites.create(assets.image`ClimarineR`, SpriteKind.Player)
controller.moveSprite(PlayerSprite, 20, 20)
PlayerSprite.setStayInScreen(false)
scene.cameraFollowSprite(PlayerSprite)
PlayerStages = 0
