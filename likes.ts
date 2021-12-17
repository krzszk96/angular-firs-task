export class Likes {

  constructor (private counter?: number, private highlight?: boolean){}

  userClick(){
    
    
    if(this.highlight == false)
    {
      this.highlight = true;
      this.counter++;
    }
    else
    {
      this.highlight = false;
      this.counter--;
    }    
  }

  showLikes(){
    console.log("Likes count: " + this.counter + " if highlighted: " + this.highlight);
  }

}