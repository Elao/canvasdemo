function Logo()
{
    this.init = function (img)
    {
        this.width = img.width;
        this.height = img.height;
        this.resizeHandler();
        this.draw();
    }

    this.resizeHandler = function()
    {
        this.X = (this.canvas.canvas.width - this.width) / 2;
        this.Y = (this.canvas.canvas.height - this.height) / 2;
        this.centerX = this.X + (this.width / 2);
        this.centerY = this.Y + (this.height / 2);
    }

    this.draw = function ()
    {
        this.canvas.context.save();
        this.canvas.context.translate(this.centerX, this.centerY);
        this.canvas.context.rotate(- this.canvas.windX * (Math.PI / 360) );
        this.canvas.context.translate(-this.centerX, -this.centerY);
        this.canvas.context.drawImage(this.image, this.X, this.Y);
        this.canvas.context.restore();
    }

    var logo = this;
    this.image = new Image();
    this.image.onload = function() { logo.init(this); };

    this.image.src = 'img/elao.png';
}
