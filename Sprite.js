let ball = game.createSprite(2, 2);
input.onButtonPressed(Button.B, function () {
    ball.setX(Math.randomRange(0, 4))
    ball.setY(Math.randomRange(0, 4))
})

input.onButtonPressed(Button.A, function () {
    ball.turn(Direction.Left, 45)
})
basic.forever(function () {
    ball.ifOnEdgeBounce();
    ball.move(1);

})


    
