class YouTubeVideo{
    private title: string;
    private publisher: string;
    private description: string;
    private views: number;
    private likes: number;
    private dislikes: number;
    private published_on: string;
    private comments: string[];

    constructor(title: string, publisher: string,  views: number, likes: number, dislikes: number, publishedon: string, comments: string[], description?: string){
        this.title = title;
        this.publisher = publisher;
        this.description = description;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.published_on = publishedon;
        this.comments = comments;
    }

    getTitle(){
        return "Title: "+this.title;
    }

    getPublisher(){
        return this.publisher;
    }
    getDescription(){
        if(this.description){
            return "Description: "+this.description;
        }
        else
        return "No Description";
        
    }
    getViews(){
        return this.views+" views";
    }
    getLikes(){
        return this.likes;
    }
    getDislikes(){
        return this.dislikes;
    }
    getPublishedOn(){
        return "Published on: "+this.published_on;
    }
    getComments(){  
        //    return function(){
        //         setInterval(function(){
        //             return this.comments;
        //        },1000);
        //    }
           for (let i = 0; i< this.comments.length; i++) {
               setTimeout(() => {
                   return console.log(this.comments[i]);
               },3000*i);
           }
    }
}

    var obj1 = new YouTubeVideo("Typescript Tutorial", "Tutorials Point", 100221, 2548, 25, "12-OCT-2017", ["Informative","Nice Video","Thanks for this tutorial"])

    console.log(obj1.getTitle());
    console.log(obj1.getPublisher());
    console.log(obj1.getDescription());
    console.log(obj1.getViews());
    console.log(obj1.getLikes());
    console.log(obj1.getDislikes());
    console.log(obj1.getPublishedOn());

    console.log("Comments: ")
    obj1.getComments();


    

    


