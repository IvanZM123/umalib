export function sortBook (book, author) {
    return {
        title: book.title,
        subtitle: book.subtitle,
        cover_photo: book.cover_photo,
        description: book.description,
        sinopsis: book.sinopsis,
        book: book.book,
        publication_date: book.publication_date,
        editorial: book.editorial,
        category: book.category,
        fullname: author.fullname,
        biography: author.biography,
        avatar: author.avatar,
        country: author.country,
        birthday: author.birthday,
        placeOfBirth: author.placeOfBirth,
        gender: author.gender,
        created_at: book.created_at
    }
}
