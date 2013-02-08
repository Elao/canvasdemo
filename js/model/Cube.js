function Cube(plan)
{
    this.setPosition = function (x, y)
    {
        this.currentX = x;
        this.currentY = y;
    }

    this.setColor = function (color)
    {
        this.color = color;
    }

    this.draw = function ()
    {
        this.canvas.context.beginPath();
        this.canvas.context.rect(this.currentX, this.currentY, this.width, this.width);
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fill();
    }

    this.update = function ()
    {
        var newPosX = this.currentX;
        var newPosY = this.currentY;

        newPosX = newPosX + this.gravity.X + this.wind.X;
        newPosY = newPosY + this.gravity.Y + this.wind.Y;

        if(newPosX > this.canvas.canvas.width)
        {
            newPosX = this.canvas.canvas.width - newPosX;
        }
        else if(newPosX < - this.width)
        {
            newPosX = this.canvas.canvas.width + newPosX + this.width;
        }

        if(newPosY > this.canvas.canvas.height)
        {
            newPosY = this.canvas.canvas.height - newPosY;
        }

        this.setPosition (newPosX, newPosY);

        return true;
    }

    this.plan = plan;
    this.width = 20 + Math.floor(plan);

    var X = Math.floor(Math.random() * this.canvas.canvas.width);
    var Y = Math.floor(Math.random() * this.canvas.canvas.height);

    this.setPosition(X, Y);

    var r = 255 - Math.floor(Math.random() * 100);
    var v = 0;
    var b = Math.floor(Math.random() * 50);

    this.setColor('rgb(' + r + ',' + v + ',' + b + ')');

    var gravity_force = (Math.random() * (this.plan + 5)) + 5;

    this.gravity = new Force(0, gravity_force, true);
}
