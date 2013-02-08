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
    }

    this.draw = function ()
    {
        this.canvas.context.drawImage(this.image, this.X, this.Y);
    }

    var logo = this;
    this.image = new Image();
    this.image.onload = function() { logo.init(this); };

    this.image.src = 'img/elao.png';
}
