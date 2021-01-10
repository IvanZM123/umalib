const messages = {}

messages.userExistence = {
    status: true,
    type: 'error',
    text: 'El nombre de usuario ya existe'
}

messages.errorCode = {
    status: true,
    type: 'error',
    text: 'El codigo es incorrecto'
}

messages.needAuth = {
    status: true,
    type: 'error',
    text: 'Para poder acceder al portal necesitas autenticarte'
}

messages.incorrectCredentials = {
    status: true,
    type: 'error',
    text: 'Nombre de usuario o contraseña incorrecta'
}

messages.needAdmin = {
    status: true,
    type: 'error',
    text: 'No estas autorizado para esta accion'
}

module.exports = messages;
