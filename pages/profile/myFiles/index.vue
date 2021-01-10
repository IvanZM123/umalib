<template>
    <div>
        <NavBar
        v-bind:folder="true"
        v-bind:titleNav="{name: 'Mis archivos', color: '', icon: 'mdi-archive'}" />
        <MyFilesComponents />

        <FileDialog
        v-bind:name="nameDialog"
        v-bind:dialog="dialog"
        v-bind:dialogEdit="dialogEdit"
        v-bind:nameDialogEdit="nameDialogEdit"
        v-bind:dataForm="dataForm"/>

        <FolderDialog
        v-bind:name="nameDialog"
        v-bind:dialog="dialog"
        v-bind:dialogEdit="dialogEdit"
        v-bind:nameDialogEdit="nameDialogEdit"
        v-bind:dataForm="dataForm" />
    </div>
</template>

<script>
import NavBar from '@/components/navbar/navbar.files';
import MyFilesComponents from '@/components/myfiles/index.myfiles';

//Import dialogs
import FolderDialog from '@/components/dialog/folder.dialog';
import FileDialog from '@/components/dialog/file.dialog';

export default {
    layout: 'user',

    components: { NavBar, MyFilesComponents, FolderDialog, FileDialog },

    data: () => ({
        fullScreen: false
    }),

    computed: {
        dialog () { return this.$store.state.dialog.dialog },
        nameDialog () { return this.$store.state.dialog.modalComponent },

        dialogEdit () { return this.$store.state.dialog.dialogEdit },
        nameDialogEdit () { return this.$store.state.dialog.modalEditComponent },
        dataForm () {
            const { dataFormDialog } = this.$store.state.dialog;
            return dataFormDialog;
        }
    },

    methods: {
        fullScreenDialog () {
            innerWidth > 500 ? this.fullScreen = false : this.fullScreen = true;
        }
    },

    beforeCreate () {
        this.$store.dispatch('folder/getAllFolders');
        this.$store.dispatch('file/getAllFiles');
    },

    beforeMount () {
        this.fullScreenDialog();
        window.addEventListener('resize', this.fullScreenDialog, { passive: true });
    }

}
</script>