const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
var snake;

(function setup() {

    snake = new Snake("#FF00FF");
    fruit = new Fruit('#FF0000');
    superFruit = new Fruit("#00a2ff");
    
    fruit.pickLocation();
    superFruit.pickLocation();
    var superFruitSpawned = false;
    
  
    window.setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var randomNum = Math.floor(Math.random() * 500)+1;
      
      if(randomNum===444) {
        console.log("randomNum");
        superFruitSpawned = true;
      }
      if(superFruitSpawned){
        superFruit.draw()
      }
      fruit.draw();
      snake.update();
      snake.draw();

      if (snake.eat(fruit,1)) {
          fruit.pickLocation();
      }
      if (superFruitSpawned && snake.eat(superFruit,2)) {
        superFruit.pickLocation();
        superFruitSpawned = false;
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