function Force(startX, startY, stopX, stopY, constant)
{
    this.constant = constant;
    this.startX = startX;
    this.startY = startY;
    this.signX = startX < stopX ? 1 : -1;
    this.signY = startY < stopY ? 1 : -1;
}
