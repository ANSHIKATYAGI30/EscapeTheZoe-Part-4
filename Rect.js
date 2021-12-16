class Rect {
    constructor(x,y,w,h){
       //  var options= {
       //      isStatic: true
       //  }
       //  this.body = Bodies.rectangle(x,y,w,h, options);
        this.x = x;
       this.y= y;
         this.w= w;
        this.h= h;
   
        } 
   
        display(){
       //     var pos= this.body.position;
       //     push();
       //     rectMode(CENTER);
       //     stroke(2);
           fill("lightblue");
         rect(this.x,this.y, this.w, this.h);
       //     pop();
   
        }
   }