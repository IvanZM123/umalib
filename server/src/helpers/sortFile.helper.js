module.exports = 
function (body, archive, background) {
    var file;
    var font;

    if(archive != undefined){
        file = archive[0].filename;
    }else{ file = body.archive }

    background != undefined ? font = background[0].filename : font = body.background;

    return {
        title: body.title,
        subtitle: body.subtitle,
        description: body.description,
        archive: file,
        background: font,
        username: body.username,
        folder: body.folder,
        category: body.category,
        created_at: body.created_at
    }
}
