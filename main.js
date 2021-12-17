"use strict";
exports.__esModule = true;
var likes_1 = require("./likes");
//when user clicks "Like", button is highlighted and the number of likes icreases
// if like pressed => highlight (boolean) and increment like++
var likes = new likes_1.Likes(0, false);
//no click first state
console.log(likes.showLikes());
//first click
likes.userClick();
console.log(likes.showLikes());
//second click
likes.userClick();
console.log(likes.showLikes());
