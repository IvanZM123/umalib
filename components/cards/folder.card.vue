<template>
    <v-card
    dark
    @dblclick="openFolder"
    :color="folder.color"
    elevation="3">
        <v-list-item>
            <v-list-item-avatar color="white">
                <v-icon :color="folder.color">mdi-folder</v-icon>
            </v-list-item-avatar>
            <v-list-item-title id="word-title" v-text="folder.name" />
            <v-list-item-action>
                <v-speed-dial
                v-model="fab"
                direction="left"
                :transition="transition">
                    <template v-slot:activator>
                        <v-btn v-model="fab" icon>
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>
                <v-btn fab x-small color="white" @click="editFolder(folder)">
                    <v-icon :color="folder.color">mdi-pencil</v-icon>
                </v-btn>
                <v-btn fab x-small color="white" @click="deleteFolder(folder._id)">
                    <v-icon :color="folder.color">mdi-delete</v-icon>
                </v-btn>
                </v-speed-dial>
            </v-list-item-action>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        fab: null,
        transition: 'scale-transition'
    }),

    props: {
        folder: Object
    },

    methods: {
        deleteFolder (id) {
            confirm('Todos tus archivos dentro de la carpeta seran removidos ¿deseas continuar?')
            ? this.$store.dispatch('folder/deleteFolder', id)
            : null;
        },

        openFolder () {
            const { _id, name } = this.folder;
            this.$router.push(`/profile/myFiles/${ _id }`);
        },

        editFolder (folder) {
            const data = { dataForm: folder, dialog: 'folder-edit' }
            this.$store.commit('dialog/showDialogEdit', data);
        }
    }
}
</script>