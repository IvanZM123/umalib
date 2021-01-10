function created () { return Date.now() }

export class LinkTemplate {
    constructor (title, subtitle, description, url, background, username, id) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description || '';
        this.url = url;
        this.background = background || '';
        this.username = username;
        this.id = id || '';
        this.created_at = created()
    }
}
