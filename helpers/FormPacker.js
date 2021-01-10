import path from 'path';

export class FormPacker {
    packer (entity) {
        const form = new FormData();
        const dismemberEntity = Object.entries(entity);
        
        for(var i=0; i<dismemberEntity.length; i++){
            form.append(`${ dismemberEntity[i][0] }`, dismemberEntity[i][1]);
        }

        return form;
    }

    addCategory (file) {
        var category = '';
        var filename;
        
        file.name != undefined
        ? filename = file.name
        : filename = file;

        //Verify extension
        const extfile = path.extname(filename);

        switch(extfile){
            case '.docx': category = 'Documentos'; break;
            case '.pdf':  category = 'Documentos'; break;
            case '.pptx': category = 'Presentaciones'; break;
            case '.jpg':  category = 'Imagenes'; break;
            case '.png':  category = 'Imagenes'; break;
            case '.jpeg': category = 'Imagenes'; break;
            case '.gif':  category = 'Imagenes'; break;
            case '.mp4':  category = 'Videos'; break;
            case '.3gp':  category = 'Videos'; break;
            case '.mp3':  category = 'Audios'; break;
            case '.rar':  category = 'Archivos comprimidos'; break;
            case '.zip':  category = 'Archivos comprimidos'; break;
        }

        return category;
    }
}
