var canvas = document.getElementById("CanvasArea");
var context = canvas.getContext("2d");
canvas = document.getElementById("CanvasArea").style.pointerEvents = "auto";
var AllowAdd = false;
var AllowConnect = true;

Add = () => {       
    if (AllowAdd == false && AllowConnect == true)
            {   AllowAdd = true;
                AllowConnect = false;
                AddVertex();
            }
    
        console.log('ADD: ' + AllowAdd);
        console.log('CONNECT: ' + AllowConnect);
}

Con = () =>{
                { AllowAdd = false;
                  AllowConnect = true;
                  Connect();
                }
    
        console.log('ADD: ' + AllowAdd);
        console.log('CONNECT: ' + AllowConnect);
}


var position = [0,0];
var XVertex = [];
var YVertex = [];
var Vertex = [0,0];
var Line = [0,0,0,0];

var i = 0; //For Connect
var j = 0;
var k = 0; //For Add Vertex
var l = 0;  //GetVertex
var m = 0;
var n = 0; //GetLine
var ctr = 0;
var ctr2 = 0;

var clicks = 0;
var count = 0;
var LastClick = [0,0];
var FirstClick = [0,0];

var Xres = 0;
var Yres = 0;
var Xres2 = 0;
var Yres2 = 0;


var NearestLeft = [900,700];
var NearestRight = [0,0];
var NearestTop = [900, 700];
var NearestBottom = [0, 0];
var center = [0,0];
var boolcenter = false;
var PlusLeft = 0;
var MinusRight = 0;
var PlusTop = 0;
var MinusBottom = 0;
var Radius = 0;
var Height = 0;


AddVertex = () =>{
        if (AllowAdd == true && AllowConnect == false){
            document.getElementById("CanvasArea").style.pointerEvents = "auto";
            canvas = document.getElementById("CanvasArea");
            context = canvas.getContext('2d');
    
            canvas.addEventListener('mouseup', DrawArc, false);
        }   
}   

            GetXYPosition = event =>{   
                    if (AllowAdd == true && AllowConnect == false){    
                        var x;
                        var y;
                    
                        x = event.pageX;
                        y = event.pageY;
                    
                        return [x,y];
                    }

            }
    
            function DrawArc(event) {
                        if (AllowAdd == true && AllowConnect == false) {
                                context = this.getContext('2d');
                    
                                x = GetXYPosition(event)[0] - this.offsetLeft;
                                y = GetXYPosition(event)[1] - this.offsetTop;
                    
                                context.beginPath();
                                context.lineWidth = 1;
                                context.arc(x, y, 10, 0, Math.PI/360, true);
                                context.strokeStyle = "#000000";
                                context.fillStyle = "#3370d4";
                                context.stroke();
                                context.fill();
                        
                                position[k] = [x,y];
                                //console.log('POSITION ' + (k+1) + ': ' + position[k]);
                                k++;    

                                GetVertex();
                }
            }

GetVertex = () => {
        XVertex[l] = position[l][0];

        YVertex[l] = position[l][1];

        Vertex[l] = [XVertex[l], YVertex[l]];
        console.log('VERTEX ' + (l+1) + ': ' + Vertex[l]);

        l++;
}

Connect = () =>{
       if (AllowAdd == false && AllowConnect == true){ 
                canvas = document.getElementById("CanvasArea");
                context = canvas.getContext("2d");
    
                canvas.addEventListener('click', DrawLine, false);
    
                GetCursorPosition(event);
       }
} 
                

                GetCursorPosition = event =>{   
                    
                    if (AllowAdd == false && AllowConnect == true)
                        {
                            var x;
                            var y;
                    
                            x = event.pageX;
                            y = event.pageY;

                            return [x,y];
                        }
                    
                }
    
            
                function DrawLine(event) {                       
                    
                    if (AllowAdd == false && AllowConnect == true)
                        {
                            context = this.getContext('2d');
                    
                            x = GetCursorPosition(event)[0] - this.offsetLeft;
                            y = GetCursorPosition(event)[1] - this.offsetTop;
                            
    
                                    if (clicks != 1) {
                                        clicks++;
                                        FirstClick[i] = [x, y];
                                    } 
                                    
                                    else {      
                                        LastClick[i] = [x, y];
                                        //console.log('Last Click ' + (i+1) + ': ' + LastClick[i]);
                                            for(m=0; m < (XVertex.length * 2); m++)
                                             {   
                                                 for(j=0; j < (XVertex.length * 2); j++)
                                                    {

                                                        Xres = FirstClick[i][0] - XVertex[j];
                                                        Yres = FirstClick[i][1] - YVertex[j];
                                                        
                                                        Xres2 = LastClick[i][0] - XVertex[m];
                                                        Yres2 = LastClick[i][1] - YVertex[m];
                                                        
                                                        //console.log('J: ' + j);
                                                        //console.log('M: ' + m);
                                            
                                                        if((Xres <= 15 && Xres >= -15) && (Yres <= 15 && Yres >= -15) && (Xres2 <= 15 && Xres2 >= -15) && (Yres2 <= 15 && Yres2 >= -15))
                                                            {                                                                     
                                                                FirstClick[i][0] = XVertex[j];
                                                                FirstClick[i][1] = YVertex[j];
                                                                
                                                                LastClick[i][0] = XVertex[m];
                                                                LastClick[i][1] = YVertex[m];
                                                                
                                                                console.log('First Click ' + (i+1) + ': ' +FirstClick[i]);
                                                                console.log('Last Click ' + (i+1) + ': ' +LastClick[i]);
                                                    
                                                                context.beginPath();
                                                                context.moveTo(FirstClick[i][0], FirstClick[i][1]);
                                                                context.lineTo(LastClick[i][0], LastClick[i][1], 6);
                                                                context.lineWidth = 4;
        
                                                                context.strokeStyle = '#000000';
                                                                context.stroke();
        
                                                                clicks = 0;
                                                                break;
                                                            }

                                                    }
                                                
                                             }
                                        
                                        i++;
                                        
                                    }
                        GetLine();
                     } 
 
                }


function GetLine() {
       
        if(count !=1){
        count ++;   
        } else {
                Line[n] = [FirstClick[n][0],FirstClick[n][1],LastClick[n][0],LastClick[n][1]];
                console.log('LINE ' + (n+1) + ': ' + Line[n]);
                n++;
                count = 0;
        }     
}


function ScanAlgo() {
    var a = document.getElementById("algo");
    var result = a.options[a.selectedIndex].value;
    
    console.log(result);
    
    if(result == "Null"){
            AlgoNull();
    }   else if (result == "Trivial") {
                AlgoTrivial();
        }   else if (result == "Simple") {
                    AlgoSimple();
            }   else if (result == "Connected") {
                        AlgoConnected();
                }   else if(result == "Complete") {
                            AlgoComplete();
                    }   else if(result == "Cycle") {
                                AlgoCycle();
                        }   else if(result == "Wheel") {
                                    AlgoWheel();
                                } else if(result == "Star") {
                                        AlgoStar();
                                    }    
}


        function AlgoNull() {
                if(Line[0] == 0) {
                    alert('The graph is a NULL GRAPH!');
                } else {
                    console.log(Line[0]);
                    alert('Sorry, the graph is a NOT a null graph.');
                }
        }

        function AlgoTrivial() {
                if(l <= 1) {
                    alert('The graph is a TRIVIAL GRAPH!');
                } else {
                    console.log(l);
                    alert('Sorry, the graph is a NOT a trivial graph.');
                }
        }

        function AlgoSimple() {
                if((Line[0] != 0) || (l >= 1)) {
                    alert('The graph is a SIMPLE GRAPH!');
                } else {
                    alert('Sorry, the graph is a NOT a simple graph.');
                }
        }

        function AlgoConnected() {
                if((Line[n-1][3] === Line[0][1]) || (n==l)) {
                    console.log(n, l);
                    alert('The graph is a CONNECTED GRAPH!');
                } else {
                    console.log(n, l);
                    alert('Sorry, the graph is a NOT a connected graph.');
                }
        }

        function AlgoComplete() {
                if( n == (l+(l/2)) || ( l== 3 && n == 3) ) {
                    console.log(n, (l+(l/2)));
                    alert('The graph is a COMPLETE GRAPH!');
                } else {
                    console.log(n, (l+(l/2)));
                    alert('Sorry, the graph is a NOT a complete graph.');
                }
        }

        function AlgoCycle() {
                if(n == l) {
                    console.log(n, l);
                    alert('The graph is a CYCLE GRAPH!');
                } else {
                    console.log(n, l);
                    alert('Sorry, the graph is a NOT a cycle graph.');
                }
        }

        function AlgoWheel() {
                for(ctr = 0; ctr < l; ctr++) {
                        if(Vertex[ctr][0] < NearestLeft[0]){
                            NearestLeft = Vertex[ctr];
                        }  if (Vertex[ctr][0] > NearestRight[0]) {
                                NearestRight = Vertex[ctr];
                            } if(Vertex[ctr][1] < NearestTop[1]) {
                                    NearestTop = Vertex[ctr];
                                } if(Vertex[ctr][1] > NearestBottom[1]){
                                    NearestBottom = Vertex[ctr];
                                  }
                }
                
                console.log('NEAREST LEFT: ' + NearestLeft);
                console.log('NEAREST RIGHT: ' + NearestRight);
                console.log('NEAREST TOP: ' + NearestTop);
                console.log('NEAREST BOTTOM: ' + NearestBottom);
                
                
                        Radius = NearestRight[0] - NearestLeft[0];
                        Radius = Math.floor(Radius/4);
                        
                        Height = NearestBottom[1] - NearestTop[1];
                        Height = Math.floor(Height/4);
                        
                        PlusLeft = NearestLeft[0] + Radius;
                        MinusRight = NearestRight[0] - Radius;
                        
                        PlusTop = NearestTop[1] + Height;
                        MinusBottom = NearestBottom[1] - Height;
                        
                        console.log('RADIUS: ' + Radius);
                        console.log('HEIGHT: ' + Height);
                        
                        
                        console.log('LEFT: ' + PlusLeft);
                        console.log('RIGHT: ' + MinusRight);
                        console.log('TOP: ' + PlusTop);
                        console.log('BOTTOM: ' + MinusBottom);
                
                for(ctr2 = 0; ctr2 < l; ctr2++) {
                            if((Vertex[ctr2][0] > PlusLeft) && (Vertex[ctr2][0] < MinusRight) && (Vertex[ctr2][1] > PlusTop) && (Vertex[ctr2][1] < MinusBottom)) {
                                    center = Vertex[ctr2];
                                    boolcenter = true;
                            
                                    console.log('CENTER: ' + center);
                                    console.log('BOOL CENTER: ' + boolcenter);
                            } else {         
                                    console.log('VERTEX: ' + Vertex[ctr2])
                                    boolcenter = false;
                        }
                }
                
                if(n == (2 * (l-1)) && boolcenter == true) { 
                        console.log(n, (2 * (l-1)));
                        alert('The graph is a WHEEL GRAPH!');
                } else {
                        console.log(n, (2 * (l-1)));
                        alert('Sorry, the graph is a NOT a wheel graph.');
                }
            }

        function AlgoStar() {
                if(n == (l-1)) {
                    console.log(n, l-1);
                    alert('The graph is a STAR GRAPH!');
                } else {
                    console.log(n, (l-1));
                    alert('Sorry, the graph is a NOT a star graph.');
                }
        }

function Remove()
{
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    position = [0,0];
    XVertex = [];
    YVertex = [];
    Vertex = [0,0];
    Line = [0,0,0,0];

    i = 0; //For Connect
    j = 0;
    k = 0; //For Add Vertex
    l = 0;  //GetVertex
    m = 0;
    n = 0; //GetLine
    ctr = 0;
    ctr2 = 0;

    clicks = 0;
    count = 0;
    LastClick = [0,0];
    FirstClick = [0,0];

    Xres = 0;
    Yres = 0;
    Xres2 = 0;
    Yres2 = 0;

    NearestLeft = [900,700];
    NearestRight = [0,0];
    NearestTop = [900, 700];
    NearestBottom = [0, 0];
    center = [0,0];
    boolcenter = false;
    PlusLeft = 0;
    MinusRight = 0;
    PlusTop = 0;
    MinusBottom = 0;
    Radius = 0;
    Height = 0;
}
