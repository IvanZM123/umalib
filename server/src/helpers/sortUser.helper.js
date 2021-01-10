module.exports = 
function sortUser (body, avatar) {
    var image;

    avatar != undefined ? image = avatar[0].filename : image = body.avatar;

    return {
        name: body.name,
        surname: body.surname,
        country: body.country,
        gender: body.gender,
        age: body.age,
        username: body.username,
        password: body.password,
        type: body.type,
        avatar: image
    }
}
