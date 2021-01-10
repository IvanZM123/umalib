function created () { return Date.now() }

export class BookTemplate {
    constructor (
        title, subtitle, cover_photo, description, sinopsis,
        content_book,  publication_date, editorial, category) {
            this.title = title;
            this.subtitle = subtitle || '';
            this.cover_photo = cover_photo;
            this.description = description;
            this.sinopsis = sinopsis || '';
            this.book = content_book;
            this.publication_date = publication_date || 'Desconocida';
            this.editorial = editorial || 'Desconocida';
            this.category = category;
            this.created_at = created();
        }
}
