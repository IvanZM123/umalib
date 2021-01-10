// Import class
import { FolderTemplate } from '@/class/Folder.class';
import { FileTemplate } from '@/class/File.class';
import { LinkTemplate } from '@/class/Link.class';

export class FormDataEdit {
    setDataFolder (data) {
        return new FolderTemplate(
            data.name, data.color,
            data._id, data.username
        );
    }

    setDataFile (data) {
        return new FileTemplate(
            data.title, data.subtitle, data.description,
            data.archive, data.background, data.username,
            data._id, data.folder, data.category
        );
    }

    setDataLink (data) {
        return new LinkTemplate(
            data.title, data.subtitle, 
            data.description, data.url, 
            data.background, data.username,
            data._id
        );
    }
}
