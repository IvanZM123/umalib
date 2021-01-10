export class FolderTemplate {
    constructor (name, color, id, username) {
        this.name = name;
        this.color = color || 'primary';
        this.id = id || '';
        this.username = username;
    }
}
