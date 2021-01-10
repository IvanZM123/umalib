<template>
    <div>
        <NavBarComponent v-bind:titleNav="nameFolder" />
        
        <DialogFile
        v-bind:name="nameDialog"
        v-bind:dialog="dialogCreate"
        v-bind:dialogEdit="dialogEdit"
        v-bind:nameDialogEdit="nameDialogEdit"
        v-bind:dataForm="dataFile" />

        <SectionFileComponent v-bind:dataFiles="files" />
        
        <div
        v-if="files.length < 1"
        class="text-center"
        style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; height: 0%; width: 100%">
            <p>
                <v-icon left>mdi-folder-open</v-icon>
                Esta carpeta se encuentra vacia
            </p>
        </div>
    </div>
</template>

<script>
import NavBarComponent from "@/components/navbar/navbar.files";
import DialogFile from '@/components/dialog/file.dialog';
import SectionFileComponent from "@/components/sections/files.sections";

export default {
    layout: 'user',

    components: { NavBarComponent, DialogFile, SectionFileComponent },

    computed: {
        dialogCreate () { return this.$store.state.dialog.dialog },
        nameDialog () { return this.$store.state.dialog.modalComponent },

        files () {
            const { files } = this.$store.state.file;
            const { params } = this.$route;
            return files.filter(value => value.folder == params.id);
        },

        nameFolder () {
            const { params } = this.$route;
            const { folders } = this.$store.state.folder;
            const { name, color } = folders.find(value => value._id == params.id);
            return { name, color, icon: 'mdi-folder' };
        },

        dialogEdit () { return this.$store.state.dialog.dialogEdit },
        nameDialogEdit () { return this.$store.state.dialog.modalEditComponent },
        dataFile () {
            const { dataFormDialog } = this.$store.state.dialog;
            return dataFormDialog;
        }
    }
}
</script>