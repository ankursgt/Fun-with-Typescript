var SocialProfile = /** @class */ (function () {
    function SocialProfile(work, study, city, email, hometown, about, quotes, birthday, contact) {
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
    SocialProfile.prototype.getWork = function () {
        return "Works at " + this.work;
    };
    SocialProfile.prototype.getStudy = function () {
        return "Studied at " + this.study;
    };
    SocialProfile.prototype.getAge = function () {
        if (this.birthday) {
            var timeDiff = Math.abs(Date.now() - this.birthday.getTime());
            var ageDate = new Date(timeDiff);
            return "Age: " + Math.abs(ageDate.getUTCFullYear() - 1970);
        }
        else
            return "Some error occured";
    };
    SocialProfile.prototype.getCity = function () {
        return "Current city " + this.city;
    };
    SocialProfile.prototype.getHometown = function () {
        return "Hometown " + this.hometown;
    };
    SocialProfile.prototype.getContact = function () {
        if (this.contact) {
            return "Contact: " + this.contact;
        }
        else {
            return "Contact not available";
        }
    };
    SocialProfile.prototype.getEmail = function () {
        return "Email: " + this.email;
    };
    SocialProfile.prototype.getAbout = function () {
        return "About: " + this.about;
    };
    SocialProfile.prototype.getQuotes = function () {
        var _this = this;
        setTimeout(function () {
            return console.log("Quotes " + _this.quotes);
        }, 4000);
    };
    return SocialProfile;
}());
var d = new Date("1992-10-12");
var obj1 = new SocialProfile("Infosys Limited", "SRM University", "Bangalore", "ankur_tamrakar@yahoo.in", "Shahdol", "Simple guy having big dreams", "Do your Duties and he will take care of the rest", d);
console.log(obj1.getWork());
console.log(obj1.getStudy());
console.log(obj1.getAge());
console.log(obj1.getCity());
console.log(obj1.getHometown());
console.log(obj1.getEmail());
console.log(obj1.getAbout());
obj1.getQuotes();
console.log(obj1.getContact());
