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
                v-model="folder.color" />
            </v-flex>
        </v-layout>
        <v-btn type="submit" color="primary" class="px-2">
            <v-icon>mdi-folder-edit</v-icon>
            Editar folder
        </v-btn>
        <v-btn
        text
        color="primary"
        @click="closeDialog">Cerrar</v-btn>
    </form>
</template>

<script>
import { colors } from '@/resources/items.resource';

export default {
    data: () => ({
        colors
    }),

    props: {
        folder: Object
    },

    methods: {
        closeDialog () { this.$store.commit('dialog/closeDialogEdit') },

        send (folder) {
            this.$store.dispatch('folder/updateFolder', folder);
            this.closeDialog();
        }
    }
}
</script>