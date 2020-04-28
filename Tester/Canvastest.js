var clicks = 0;
var lastClick = [0, 0];

document.getElementById('canvas').addEventListener('click', drawLine, false);

function getCursorPosition(e) {
    var x;
    var y;

   // if (e.pageX != undefined && e.pageY != undefined) {
        var x;
        var y;
     
      
        x = e.pageX;
        y = e.pageY;
   /* } else {
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    
    */  
    console.log(x,y);
    return [x, y];
}

function drawLine(e) {
    context = this.getContext('2d');

    x = getCursorPosition(e)[0] - this.offsetLeft;
    y = getCursorPosition(e)[1] - this.offsetTop;
    
    console.log('CLICKS: '+clicks);
    
    if (clicks != 1) {
        clicks++;
    } else {
        context.beginPath();
        context.moveTo(lastClick[0], lastClick[1]);
        context.lineTo(x, y, 6);
        
        context.strokeStyle = '#000000';
        context.stroke();
        
        clicks = 0;
    }
    

    lastClick = [x, y];
    console.log('Last Click: ' + lastClick);
}