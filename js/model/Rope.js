function Rope()
{
    this.setBall = function (ball)
    {
        this.ball = ball;
        this.X = this.ball.currentX;
        this.Y = this.ball.currentY - this.length;
    }

    this.draw = function ()
    {
        this.canvas.context.beginPath();

        this.canvas.context.moveTo( this.X, this.Y );
        this.canvas.context.lineTo( this.ball.currentX, this.ball.currentY );

        this.canvas.context.lineWidth = 1;
        this.canvas.context.strokeStyle = "#000000";

        this.canvas.context.stroke();
    }
}
