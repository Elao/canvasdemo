function Ball(x, y)
{
    this.rope = new Rope();

    this.setPosition = function (x, y)
    {
        this.currentX = x;
        this.currentY = y;
        this.rope.setBall(this);
    }

    this.setColor = function (color)
    {
        this.color = color;
    }

    this.draw = function ()
    {
        this.rope.draw();

        this.canvas.context.beginPath();
        this.canvas.context.arc(this.currentX, this.currentY, this.radius, 0, 2 * Math.PI, false);
        this.canvas.context.fillStyle = this.color;
        this.canvas.context.fill();
    }

    this.update = function ()
    {
        for (var i = this.forces.length - 1; i >= 0; i--) {
            this.forces[i]
        };
        /*var newPosX = this.currentX > this.canvas.canvas.width ? 0 : this.currentX + 10;
        var newPosY = this.currentY > this.canvas.canvas.height ? 0 : this.currentY + 10;

        this.setPosition ( newPosX, newPosY);*/

        return true;
    }

    this.setPosition(x, y);
    this.setColor('#999999');
}
