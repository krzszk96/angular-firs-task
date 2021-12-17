import { Likes } from './likes';

//when user clicks "Like", button is highlighted and the number of likes icreases
//then if user clicks "Like button again, number of likes decreases"
// if like pressed => highlight (boolean) and increment like++

let likes = new Likes(0,false);

//no click first state
console.log(likes.showLikes());

//first click
likes.userClick();
console.log(likes.showLikes());

//second click
likes.userClick();
console.log(likes.showLikes());
