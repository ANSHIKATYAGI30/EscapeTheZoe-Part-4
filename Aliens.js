class Aliens{
    constructor(x,y){
        // alien= createSprite( i+450 , i*200 , 30, 30);
        // alien.addImage(alienImg);
        // alien.scale= 0.2;
      
        this.x=x;
        this.y=y;
        
        this.image= loadImage("spaceship.png");
    }
     
    display(){
      // rect(this.x, this.y, this.w, this.h);
       image(this.image, this.x, this.y, 150,80)
    }
}