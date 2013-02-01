function animloop(){
    stats.begin();

    window.requestAnimationFrame(animloop);

    canvas.update();

    stats.end();
}

function resizeHandler()
{
    var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
    canvas.resizeHandler(x, y);
}

var stats, gui, canvas, balls;

window.onload = function() {
    stats = new Stats();
    gui = new dat.GUI();

    // Align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild( stats.domElement );

    /*gui.add(text, 'message');
    gui.add(text, 'speed', -5, 5);
    gui.add(text, 'displayOutline');
    gui.add(text, 'explode');*/

    canvas = new Canvas('newtonpendulum');

    resizeHandler();

    canvas.addBall(5);

    animloop();
}
