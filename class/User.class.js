export class UserTemplate {
    constructor (name, surname, country, gender, age, username, password, avatar, type, code) {
        this.name = name;
        this.surname = surname;
        this.country = country;
        this.gender = gender;
        this.age = age;
        this.username = username;
        this.password = password;
        this.type = type;
        this.code = code || '';
        this.avatar = avatar || '';
    }
}
