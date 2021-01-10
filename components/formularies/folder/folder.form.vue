<template>
    <form @submit.prevent="send(folder)">
        <v-layout wrap>
            <v-flex xs12 class="px-2">
                <v-text-field
                label="Nombre de la carpeta"
                v-model="folder.name"
                autofocus />
            </v-flex>
            <v-flex xs12 class="px-2">
                <v-select
                label="Color de la carpeta"
                :items="colors"
                item-text="text"
                item-value="value"
                v-model="folder.color"
                prepend-inner-icon="mdi-palette" />
            </v-flex>
        </v-layout>
        <v-btn
        type="submit"
        color="primary"
        class="mx-2">
            <v-icon left>mdi-floppy</v-icon>
            Guardar
        </v-btn>
        <v-btn
        @click="closeDialog"
        color="primary"
        text>Cerrar</v-btn>
    </form>
</template>

<script>
import { FolderTemplate } from '@/class/Folder.class';
import { colors } from '@/resources/items.resource';
import { rules } from '@/library/rules.lib';

export default {
    data: () => ({
        folder: new FolderTemplate(),
        rules,
        colors
    }),

    methods: {
        closeDialog () {
            this.$store.commit('dialog/closeDialog');
        },

        send (folder) {
            const { username } = this.$store.state.user.fieldsUser;
            folder.username = username;
            
            this.$store.dispatch('folder/createFolder', folder);
            this.$store.commit('dialog/closeDialog');
            this.folder = new FolderTemplate();
        }
    }
}
</script>