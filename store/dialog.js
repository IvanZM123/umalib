//Import form folder
import { FolderTemplate } from '@/class/Folder.class';

export const state = () => ({
    dialog: false,
    modalComponent: '',
    
    dialogEdit: false,
    modalEditComponent: '',
    dataFormDialog: null
});

export const mutations = {
    showDialog (state, dialogComponent) {
        state.dialog = true;
        state.modalComponent = dialogComponent;
    },

    closeDialog (state) {
        state.dialog = false;
        state.modalComponent = '';
    },

    showDialogEdit (state, dialogEditComponent) {
        const { dataForm, dialog } = dialogEditComponent;
        state.dialogEdit = true;
        state.modalEditComponent = dialog;
        state.dataFormDialog = dataForm;
    },

    closeDialogEdit (state) {
        state.dialogEdit = false;
        state.modalEditComponent = '';
        state.dataFormDialog = null;
    }
}

function conditionInstantiate (dialog, dataForm) {
    switch (dialog) {
        case 'folder-edit':
            return new FolderTemplate(
                dataForm.name,
                dataForm.color,
                dataForm._id,
                dataForm.username
            );
        break;
    }
}
