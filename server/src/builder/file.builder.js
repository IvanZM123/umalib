// Requerimientos el modelo del archivo
const MODELFILE = require('../models/file.model');

// Requerimos modulos para agregar una vista previa a un archivo
const PREVIEW = require('../helpers/addPreviewFile.helper');

// Modulo encargado de ordenar los datos del un archivo
let sortFile = require('../helpers/sortFile.helper');

// Create class
class FileBuilder {
    // Funcion encargada de la insercion de un nuevo archivo a la BD.
    async createFile (body, archive, background) {
        let newFile = sortFile(body, archive, background);
        
        const FILE =  await new MODELFILE(newFile).save();
        PREVIEW(FILE.archive, FILE._id);
        
        return FILE;
    }

    // Funcion encargada de la edicion de un archivo ya exisitente en la BD
    async updateFile (id, body, archive, background) {
        let newFile = sortFile(body, archive, background);
        await MODELFILE.updateOne({ _id: id }, newFile);

        // Actualizara la vista previa cuando el usuario ingrese un nuevo archivo.
        if (archive != undefined) { PREVIEW(newFile.archive, id) }
    }

    // Funcion encargada de la eliminacion de un archivo en la BD.
    async deleteFile (id) {
        await MODELFILE.deleteOne({ _id: id });
    }
}

module.exports = new FileBuilder();
