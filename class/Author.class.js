export class AuthorTemplate {
    constructor (fullname, biography, avatar, birthday, country, placeOfBirth, gender) {
        this.fullname = fullname || '';
        this.biography = biography || '',
        this.avatar = avatar || '';
        this.birthday = birthday || '';
        this.country = country || '';
        this.placeOfBirth = placeOfBirth || '';
        this.gender = gender || '';
    }
}
