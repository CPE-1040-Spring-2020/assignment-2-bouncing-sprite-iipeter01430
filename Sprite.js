let ball = game.createSprite(2, 2);

basic.forever(function () {
    ball.ifOnEdgeBounce();
    ball.move(1);

})

    
