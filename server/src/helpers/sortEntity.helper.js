class SortEntity {
    sortLink (body, background) {
        var image = '';

        background != undefined ? image = background[0].filename : image = body.background;

        return {
            title: body.title,
            subtitle: body.subtitle,
            description: body.description,
            url: body.url,
            background: image,
            username: body.username,
            id: body.id,
            created_at: body.created_at
        }
    }

    sortBook (body, avatar, cover_photo, book) {
        var img_avatar;
        var img_cover_photo;
        var file_book;

        avatar != undefined
            ? img_avatar = avatar[0].filename
            : img_avatar = body.avatar;

        cover_photo != undefined
            ? img_cover_photo = cover_photo[0].filename
            : img_cover_photo = body.cover_photo

        cover_photo != undefined
            ? file_book = book[0].filename
            : file_book = body.book;

        return {
            book: {
                title: body.title,
                subtitle: body.subtitle,
                cover_photo: img_cover_photo,
                description: body.description,
                sinopsis: body.sinopsis,
                content_book: file_book,
                publication_date: body.publication_date,
                editorial: body.editorial,
                category: body.category,
                created_at: body.created_at
            },
        
            author: {
                fullname: body.fullname,
                biography: body.biography,
                avatar: img_avatar,
                birthday: body.birthday,
                country: body.country,
                placeOfBirth: body.placeOfBirth,
                gender: body.gender
            }
        }
    }

    sortMyBook (book) {
        return {
            author: { fullname: book.author.fullname },
            book: {
                title: book.book.title,
                subtitle: book.book.subtitle,
                cover_photo: book.book.cover_photo,
                description: book.book.description,
                content_book: book.book.content_book,
                category: book.book.category,
                publication_date: book.book.publication_date,
                id: book._id
            }
        }
    }
}

module.exports = new SortEntity();
