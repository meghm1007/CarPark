class Road
{
    constructor(x,width, laneCount=3)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x-width/2;
        this.right = x+width/2;

        const infinity = 100000000;
        this.top = infinity;
        this.bottom = infinity;
    }
    draw(ctx)
    {
        ctx.lineWidth = 5;
        ctx.keyStrokeStyle = "white";
        ctx.beginPath();
        ctx.moveTo(this.left, this.top)
    }
}