export function addCategoryFile (category) {
    var header = {};

    switch(category){
        case 'Documentos': header = { icon: 'mdi-file-word', color: 'blue darken-3' }; break;
        case 'Presentaciones': header = { icon: 'mdi-file-powerpoint', color: 'orange darken-2' }; break;
        case 'Videos': header = { icon: 'mdi-video', color: 'red darken-2' }; break;
        case 'Audios': header = { icon: 'mdi-music', color: '' }; break;
        case 'Libros': header = { icon: 'mdi-book-variant', color: 'brown darken-2' }; break;
        case 'Imagenes': header = { icon: 'mdi-image', color: 'cyan darken-2' }; break;
        case 'Archivos comprimidos': header = { icon: 'mdi-zip-box', color: 'purple darken-3' }; break;
    }

    return header;
}

export function addCategoryBook (category) {
    var header = {};

    switch (category) {
        case 'Aventura': header = {icon: 'mdi-sword', color: 'brown darken-2'}; break;
        case 'Fantasia': header = {icon: 'mdi-castle', color: 'pink darken-2'}; break;
        case 'Comedia': header = {icon: 'mdi-star', color: 'yellow darken-1'}; break;
        case 'Entretenimiento': header = {icon: 'mdi-guitar-electric', color: 'purple darken-3'}; break;
        case 'Magia': header = {icon: 'mdi-auto-fix', color: 'brown darken-1'}; break;
        case 'Romance': header = {icon: 'mdi-heart', color: 'red darken-3'}; break;
        case 'Medicina': header = {icon: 'mdi-hospital', color: 'indigo darken-3'}; break;
        case 'Leyes': header = {icon: 'mdi-gavel', color: 'brown darken-3'}; break;
        case 'Accion': header = {icon: 'mdi-pistol', color: 'blue-grey darken-2'}; break;
        case 'Terror': header = {icon: 'mdi-skull', color: 'dark'}; break;
        case 'Religioso': header = {icon: 'mdi-church', color: 'cyan darken-2'}; break;
    }

    return header;
}
