class SocialProfile {
    private work: string;
    private study: string;
    private birthday: Date;
    private age: number;
    private email: string;
    private city: string;
    private hometown: string;
    private about: string;
    private quotes: string;
    private contact: number;

    constructor(work: string, study: string,  city: string, email: string, hometown: string, about: string, quotes: string, birthday?: Date, contact?: number){
        this.work = work;
        this.study = study;
        this.birthday = birthday;
        this.city = city;
        this.hometown = hometown;
        this.contact = contact;
        this.email = email;
        this.about = about;
        this.quotes = quotes;
    }

    getWork(){
        return "Works at "+this.work;
    }

    getStudy(){
        return "Studied at "+this.study;
    }

    getAge(){
        if(this.birthday){
            var timeDiff = Math.abs(Date.now() - this.birthday.getTime());
            var ageDate = new Date(timeDiff);
            return "Age: "+Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        else
        return "Some error occured";
    }

    getCity(){
        return "Current city "+this.city;
    }

    getHometown(){
        return "Hometown "+this.hometown;
    }

    getContact(){  
        if(this.contact){
                return "Contact: "+this.contact;
        }
        else {
            return "Contact not available";
        }
    }

    getEmail(){
        return "Email: "+this.email;
    }

    getAbout(){
        return "About: "+this.about;
    }

    getQuotes(){
        setTimeout(() => {
            return console.log("Quotes "+this.quotes);
        },4000);
    }
}

    var d = new Date("1992-10-12");
    var obj1 = new SocialProfile("Infosys Limited", "SRM University", "Bangalore", "ankur_tamrakar@yahoo.in", "Shahdol", "Simple guy having big dreams", "Do your Duties and he will take care of the rest", d)

    console.log(obj1.getWork());
    console.log(obj1.getStudy());
    console.log(obj1.getAge());
    console.log(obj1.getCity());
    console.log(obj1.getHometown());
    console.log(obj1.getEmail());
    console.log(obj1.getAbout());
    obj1.getQuotes();
    console.log(obj1.getContact());
    
    


    

    


