let item = game.createSprite(2, 2)

item.turn(Direction.Right, 45)
item.move(2)

let ball = game.createSprite(0, 2)
basic.showNumber(ball.get(LedSpriteProperty.Brightness));

let light = game.createSprite(2, 2);
item.turn(Direction.Right, 45);

let bot = game.createSprite(4, 2);
basic.showNumber(bot.get(LedSpriteProperty.Direction));

input.onButtonPressed(Button.B, () => {
   ball.ifOnEdgeBounce();
   basic.showNumber
  }


  basic.forever(function() {

  })
