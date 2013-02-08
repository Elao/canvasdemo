function Force(x, y, constant)
{
    this.setX = function(x)
    {
        this.X = x;
    }

    this.setY = function(y)
    {
        this.Y = y;
    }

    this.constant = constant;
    this.X = x;
    this.Y = y;
}
