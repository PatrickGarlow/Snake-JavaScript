function Fruit(color) {
    this.x = 0;
    this.y =0;
    this.color = color

    this.pickLocation = function() {
        this.x = (Math.floor(Math.random() * rows -1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns -1) + 1) * scale;
    }
    this.draw = function() {
        ctx.fillStyle = color;
        ctx.fillRect(this.x+1,this.y+1,scale-1,scale-1);
    }
}