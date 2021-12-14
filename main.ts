namespace SpriteKind {
    export const Test = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStage == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`FireFighterAnimUp`,
        150,
        true
        )
        CurrentAnim = 1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(7)
    PlayerStage = 1
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`ClimatianFireFighter0`)
    controller.moveSprite(mySprite, 20, 20)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    if (CurrentAnim == 0) {
        mySprite.setImage(assets.image`FireFighterSpecialActionDown`)
        projectile = sprites.createProjectileFromSprite(assets.image`WaterBlastDown`, mySprite, 0, 100)
    } else if (CurrentAnim == 1) {
        mySprite.setImage(assets.image`FireFighterSpecialActionUp`)
        projectile = sprites.createProjectileFromSprite(assets.image`WaterBlastUp`, mySprite, 0, -100)
    } else if (CurrentAnim == 2) {
        mySprite.setImage(assets.image`FireFighterSpecialActionRight`)
        projectile = sprites.createProjectileFromSprite(assets.image`WaterBlastRight`, mySprite, 100, 0)
    } else if (CurrentAnim == 3) {
        mySprite.setImage(assets.image`FireFighterSpecialActionLeft`)
        projectile = sprites.createProjectileFromSprite(assets.image`WaterBlastLeft`, mySprite, -100, 0)
    } else {
        mySprite.sayText("Illegal dousing attempt")
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStage == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`ClimarineAnimL`,
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`FireFighterLeftAnim`,
        150,
        true
        )
        CurrentAnim = 3
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStage == 0) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`ClimarineAnimR`,
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        mySprite,
        assets.animation`FireFighterRightAnim`,
        150,
        true
        )
        CurrentAnim = 2
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerStage == 1) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`FireFighterAnimDown`,
        150,
        true
        )
        CurrentAnim = 0
    }
})
function snap () {
    mySprite.destroy()
    game.setDialogFrame(assets.image`Textbox`)
    game.showLongText("why would you think it's a good idea to ram a rock with a boat don't you remember what happened to the titanic?", DialogLayout.Center)
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(9)
    PlayerStage = 0
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`ClimarineR`)
    controller.moveSprite(mySprite, 20, 20)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Testoceanrocks`, function (sprite, location) {
    snap()
})
let projectile: Sprite = null
let CurrentAnim = 0
let PlayerStage = 0
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(9)
let CollisionTest = sprites.create(assets.image`TestGraphic`, SpriteKind.Test)
CollisionTest.setPosition(25, 25)
mySprite = sprites.create(assets.image`ClimarineR`, SpriteKind.Player)
controller.moveSprite(mySprite, 20, 20)
mySprite.setStayInScreen(false)
scene.cameraFollowSprite(mySprite)
PlayerStage = 0
