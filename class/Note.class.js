function created () { return Date.now() }

export class NoteTemplate {
    constructor (title, subtitle, color, description, username, id) {
        this.title = title;
        this.subtitle = subtitle;
        this.color = color;
        this.description = description || '';
        this.username = username || '';
        this.id = id || '';
        this.created_at = created();
    }
}
