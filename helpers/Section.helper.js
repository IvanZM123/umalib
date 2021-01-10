export class Section {
    addCategory (files) {
        const category = {};

        files.forEach((value) => {
            category[`${ value.category }`] = [];
        });

        files.filter((value) => {
            category[`${ value.category }`].push(value);
        });

        return category;
    }

    addCategoryBook (books) {
        const category = {};

        books.forEach((value) => {
            category[`${ value.book.category }`] = [];
        });

        books.filter((value) => {
            category[`${ value.book.category }`].push(value);;
        });
        
        return category;
    }
}
