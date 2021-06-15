function Snake(color) {
    this.x = 150;
    this.y = 150;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.color = color;

    this.draw = function() {
        ctx.fillStyle = this.color;
        for (let i = 0; i <this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x+1,this.tail[i].y+1,scale-1,scale-1);
        }
        ctx.fillRect(this.x+1,this.y+1,scale-1,scale-1);
    }
    this.update = function() {

        for (let x = 0; x<this.tail.length-1; x++) {
            this.tail[x] = this.tail[x+1];

        }
        this.tail[this.total-1] = {x:this.x, y:this.y};
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        //loops the snake back around
        if(this.x > canvas.width) {
            this.x = 0;
        }
        if(this.y > canvas.height) {
            this.y = 0;
        }
        if(this.x < 0) {
            this.x = canvas.width;
        }
        if(this.y < 0) {
            this.y = canvas.height;
        }



    }
    this.start = function() {
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
    }
    this.changeDirection = function(direction) {
        switch(direction) {
          case 'Up':
            this.xSpeed = 0;
            this.ySpeed = -scale * 1;
            break;
          case 'Down':
            this.xSpeed = 0;
            this.ySpeed = scale * 1;
            break;
          case 'Left':
            this.xSpeed = -scale * 1;
            this.ySpeed = 0;
            break;
          case 'Right':
            this.xSpeed = scale * 1;
            this.ySpeed = 0;
            break;
        }
    }
    this.eat = function(fruit) {
        if(this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }
        return false;
    }
    this.checkCollision = function() {
        for (var i=0; i<this.tail.length; i++) {
          if (this.x === this.tail[i].x &&
            this.y === this.tail[i].y) {
            this.total = 0;
            this.tail = [];
          }
        }
    }
}