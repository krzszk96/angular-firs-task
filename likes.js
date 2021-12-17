"use strict";
exports.__esModule = true;
exports.Likes = void 0;
var Likes = /** @class */ (function () {
    function Likes(counter, highlight) {
        this.counter = counter;
        this.highlight = highlight;
    }
    Likes.prototype.userClick = function () {
        if (this.highlight == false) {
            this.highlight = true;
            this.counter++;
        }
        else {
            this.highlight = false;
            this.counter--;
        }
    };
    Likes.prototype.showLikes = function () {
        console.log("Likes count: " + this.counter + " if highlighted: " + this.highlight);
    };
    return Likes;
}());
exports.Likes = Likes;
