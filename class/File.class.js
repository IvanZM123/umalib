function created () { return Date.now() }

export class FileTemplate {
    constructor (title, subtitle, description, archive, background, username, id, folder, category) {
        this.title = title;
        this.subtitle = subtitle;
        this.description = description || '';
        this.archive = archive;
        this.background = background;
        this.username = username;
        this.id = id;
        this.folder = folder;
        this.category = category;
        this.created_at = created()
    }
}
