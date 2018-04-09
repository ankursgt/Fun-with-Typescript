var YouTubeVideo = /** @class */ (function () {
    function YouTubeVideo(title, publisher, views, likes, dislikes, publishedon, comments, description) {
        this.title = title;
        this.publisher = publisher;
        this.description = description;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.published_on = publishedon;
        this.comments = comments;
    }
    YouTubeVideo.prototype.getTitle = function () {
        return "Title: " + this.title;
    };
    YouTubeVideo.prototype.getPublisher = function () {
        return this.publisher;
    };
    YouTubeVideo.prototype.getDescription = function () {
        if (this.description) {
            return "Description: " + this.description;
        }
        else
            return "No Description";
    };
    YouTubeVideo.prototype.getViews = function () {
        return this.views + " views";
    };
    YouTubeVideo.prototype.getLikes = function () {
        return this.likes;
    };
    YouTubeVideo.prototype.getDislikes = function () {
        return this.dislikes;
    };
    YouTubeVideo.prototype.getPublishedOn = function () {
        return "Published on: " + this.published_on;
    };
    YouTubeVideo.prototype.getComments = function () {
        var _this = this;
        var _loop_1 = function (i) {
            setTimeout(function () {
                return console.log(_this.comments[i]);
            }, 3000 * i);
        };
        //    return function(){
        //         setInterval(function(){
        //             return this.comments;
        //        },1000);
        //    }
        for (var i = 0; i < this.comments.length; i++) {
            _loop_1(i);
        }
    };
    return YouTubeVideo;
}());
var obj1 = new YouTubeVideo("Typescript Tutorial", "Tutorials Point", 100221, 2548, 25, "12-OCT-2017", ["Informative", "Nice Video", "Thanks for this tutorial"]);
console.log(obj1.getTitle());
console.log(obj1.getPublisher());
console.log(obj1.getDescription());
console.log(obj1.getViews());
console.log(obj1.getLikes());
console.log(obj1.getDislikes());
console.log(obj1.getPublishedOn());
console.log("Comments: ");
obj1.getComments();
