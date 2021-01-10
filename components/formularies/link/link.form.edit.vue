<template>
    <form @submit.prevent="editLink">
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Titulo del link"
                v-model="link.title"
                autofocus />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Subtitulo del link"
                v-model="link.subtitle" />
            </v-flex>
            <v-flex xs12 class="px-2">
                <v-textarea
                label="Descripcion del link"
                v-model="link.description" />
            </v-flex>
            <v-flex xs12 class="px-2">
                <v-file-input
                label="Imagen del link"
                prepend-icon
                prepend-inner-icon="mdi-image"
                @change="getBackground" />
            </v-flex>
        </v-layout>
        <v-btn type="submit" color="primary" dark class="mx-2">
            <v-icon>mdi-pencil</v-icon>
            Editar
        </v-btn>
        <v-btn @click="closeDialogEdit" color="primary" text>Cerrar</v-btn>
    </form>
</template>

<script>
import { rules } from '@/library/rules.lib';

export default {
    props: {
        linkProp: Object
    },

    data: function () {
        return {
            link: this.linkProp,
            rules
        }
    },

    methods: {
        closeDialogEdit () { this.$store.commit('dialog/closeDialogEdit') },

        getBackground (background) { this.link.background = background },

        editLink () {
            this.$store.dispatch('link/updateLink', this.link);
            this.closeDialogEdit();
        }
    }
}
</script>
