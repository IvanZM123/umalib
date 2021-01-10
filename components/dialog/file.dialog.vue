<template>
    <div>
        <v-dialog
        v-if="name == 'file'"
        max-width="600px"
        v-model="dialog"
        persistent >
            <v-sheet elevation="3">
                <div class="pa-5">
                    <v-alert type="info" outlined dismissible dense>
                        Si deseas subir una imagen, no es necesario que elijas el fondo del archivo
                    </v-alert>
                    <FormFile />
                </div>
            </v-sheet>
        </v-dialog>

        <v-dialog
        v-if="nameDialogEdit == 'file-edit'"
        max-width="600px"
        v-model="dialogEdit"
        persistent>
            <v-sheet class="pa-5" elevation="3">
                <FormFileEdit v-bind:fileProp="dataFile" />
            </v-sheet>
        </v-dialog>
    </div>
</template>

<script>
import FormFile from '@/components/formularies/files/file.form';
import FormFileEdit from "@/components/formularies/files/file.form.edit";
import { FormDataEdit } from '@/helpers/FormEdit.helper';

export default {
    components: { FormFile, FormFileEdit },

    props: {
        dialog: Boolean,
        name: String,

        dialogEdit: Boolean,
        nameDialogEdit: String,
        dataForm: Object
    },

    computed: {
        dataFile () {
            const { setDataFile } = new FormDataEdit();
            return setDataFile(this.dataForm);
        }
    }
}
</script>