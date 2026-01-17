
class User3 {
    constructor(fullname) {
        this.fullname = fullname;
    }   
    getFullName() {
        return this.fullname;
    }
}

const u3 = new User3("iitayori");
console.log(u3.getFullName());
// console.log(u3.#password);