<template>
    <div>
        <v-dialog
        v-if="name == 'folder'"
        max-width="400px"
        v-model="dialog"
        persistent>
            <v-sheet elevation="3" class="pa-5">
                <FormFolder />
            </v-sheet>
        </v-dialog>

        <v-dialog
        v-if="nameDialogEdit == 'folder-edit'"
        v-model="dialogEdit"
        max-width="400px"
        persistent>
            <v-sheet elevation="3" class="pa-5">
                <FormFolderEdit v-bind:folder="dataFolder" />
            </v-sheet>
        </v-dialog>
    </div>
</template>

<script>
import FormFolder from "@/components/formularies/folder/folder.form";
import FormFolderEdit from "@/components/formularies/folder/folder.edit.form";

// Import class
import { FormDataEdit } from '@/helpers/FormEdit.helper';

export default {
    components: { FormFolder, FormFolderEdit },

    props: {
        dialog: Boolean,
        name: String,
        
        dialogEdit: Boolean,
        nameDialogEdit: String,
        dataForm: Object
    },

    computed: {
        dataFolder () {
            const { setDataFolder } = new FormDataEdit();
            return setDataFolder(this.dataForm);
        }
    }
}
</script>