function Canvas(id)
{
    Ball.prototype.canvas = this;
    Rope.prototype.canvas = this;

    Ball.prototype.radius = 30;
    Ball.prototype.forces = [ new Force(0, 0, 0, Ball.prototype.radius, true) ]; //Gravity
    Rope.prototype.length = 200;

    this.draw = function()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = this.balls.length - 1; i >= 0; i--)
        {
            this.balls[i].draw();
        }
    }

    this.update = function ()
    {
        var change = false;

        for (var i = this.balls.length - 1; i >= 0; i--)
        {
            change = this.balls[i].update() || change;
        }

        if(change)
        {
            this.draw();
        }
    }

    this.resizeHandler = function(x, y)
    {
        this.canvas.width = x;
        this.canvas.height = y;
        this.placeBalls();
    }

    this.mouseHandler = function(e)
    {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
    }

    this.addBall = function (total)
    {
        this.balls = [];

        for (var i = 0; i < total; i++) {
            this.balls[i] = new Ball(0, 0);
        }

        this.placeBalls();
    }

    this.placeBalls = function()
    {
        var total = this.balls.length;

        if(total == 0){ return false; }

        var pendulumWidth = Ball.prototype.radius * 2 * total;
        var startLeft = (this.canvas.width - pendulumWidth) / 2;
        var y = this.canvas.height / 2;

        for (var i = total - 1; i >= 0; i--) {
            var x = startLeft + i * (Ball.prototype.radius * 2);
            this.balls[i].setPosition(x, y);
        }
    }

    this.balls = [];
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');

    var canvas = this;
    addEvent(this.canvas, 'mousemove', function(e){ canvas.mouseHandler(e); });
}
