const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;

(function setup() {

    snake = new Snake("#FF00FF");
    fruit = new Fruit('#FF0000');
    fruit.pickLocation();

    
  
    window.setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fruit.draw();
      snake.update();
      snake.draw();

      if (snake.eat(fruit)) {
          fruit.pickLocation();
      }

    snake.checkCollision();
        document.querySelector('.score')
        .innerText = 'Score: ' + snake.total;

    }, 150);
  }());

window.addEventListener('keydown', ((evt) => {
    if (evt.key.includes('Arrow')) {
        const direction = evt.key.replace('Arrow','');
        snake.changeDirection(direction);
    }
    if (evt.key == ' ') {
        snake.start();
    }
    
  }));