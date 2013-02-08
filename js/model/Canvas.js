function Canvas(id)
{
    Logo.prototype.canvas = this;
    Cube.prototype.canvas = this;

    Cube.prototype.wind = new Force(0, 0, true);

    this.draw = function()
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var p = 0; p < this.cubes.length; p++)
        {
            for (var i = this.cubes[p].length - 1; i >= 0; i--)
            {
                this.cubes[p][i].draw();
            }

            if(p == 4)
            {
                this.logo.draw();
            }
        }
    }

    this.update = function ()
    {
        if(this.total != this.amount)
        {
            this.addCube(this.amount);
        }

        for (var p = 0; p < this.cubes.length; p++)
        {
            for (var i = this.cubes[p].length - 1; i >= 0; i--)
            {
                this.cubes[p][i].update();
            }
        }

        this.draw();
    }

    this.resizeHandler = function(x, y)
    {
        this.canvas.width = x;
        this.canvas.height = y;
        this.logo.resizeHandler();
        this.draw();
    }

    this.mouseHandler = function(e)
    {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;

        switch (e.type)
        {

            case 'mousemove':
                var middle = (this.canvas.width / 2);
                var X = ((this.mouseX - middle) / middle) * 10;

                Cube.prototype.wind.setX(X);
            break;
            /*case 'mousedown':

            break;
            case 'mouseup':

            break;*/
        }
    }

    this.addCube = function (total)
    {
        this.cubes = [];
        this.total = total;

        for (var p = 9; p >= 0; p--) {
            this.cubes[p] = [];
        }

        for (var i = 0; i < this.total; i++) {
            var plan = Math.floor( Math.random() * 10 );
            var length = this.cubes[plan].length;
            this.cubes[plan][length] = new Cube(plan);
        }
    }

    this.amount = 50;
    this.total = 0;
    this.cubes = [];
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
    this.logo = new Logo();

    var canvas = this;
    addEvent(this.canvas, 'mousemove', function(e){ canvas.mouseHandler(e); });
    //addEvent(this.canvas, 'mousedown', function(e){ canvas.mouseHandler(e); });
    //addEvent(this.canvas, 'mouseup', function(e){ canvas.mouseHandler(e); });
}
