

function User(fullname) {
    this.fullname = fullname;
}
User.prototype.getFullName = function() {
    return this.fullname;
}

const u = new User("doyori");
console.log(u.getFullName());


class User2 { 
    constructor(fullname) {
        this.fullname = fullname;
    }
    getFullName() {
        return this.fullname;
    }
}

const u2 = new User2("iitayori");
console.log(u2.getFullName());