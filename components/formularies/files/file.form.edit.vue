<template>
    <form @submit.prevent="editFile(file)">
        <!-- title, subtitle, description -->
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Titulo del archivo"
                v-model="file.title"
                autofocus />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Subtitulo del archivo"
                v-model="file.subtitle" />
            </v-flex>
            <v-flex xs12 class="px-2">
                <v-textarea
                label="Descripcion del archivo"
                v-model="file.description"
                rows="4"
                auto-grow />
            </v-flex>
        </v-layout>

        <!-- archives -->
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-file-input
                label="Elija su archivo"
                prepend-icon
                prepend-inner-icon="mdi-file"
                accept=".jpg, .png, .gif, .jpeg, .docx, .xlsx, .pptx, .mp4, .mp3, .rar, .pdf, .zip"
                @change="getArchive" />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
                <v-file-input
                label="Fondo del archivo"
                prepend-icon
                prepend-inner-icon="mdi-image"
                @change="getBackground" />
            </v-flex>
        </v-layout>
        <v-btn
        :disabled="!formIsValid"
        type="submit" color="primary" class="mx-2" dark>
            <v-icon>mdi-file-edit</v-icon>
            Editar
        </v-btn>
        <v-btn
        @click="closeDialogEdit"
        color="primary"
        text>Cerrar</v-btn>
    </form>
</template>

<script>
import { colors } from '@/resources/items.resource';
import { rules } from '@/library/rules.lib';
import { FormPacker } from '@/helpers/FormPacker';

export default {
    props: {
        fileProp: Object
    },

    data: function () {
        return {
            colors, rules,
            file: this.fileProp
        }
    },

    computed: {
        formIsValid () {
            return (
                this.file.title &&
                this.file.subtitle &&
                this.file.archive
            );
        }
    },

    methods: {
        getArchive (archive) { this.file.archive = archive },
        getBackground (background) { this.file.background = background },

        closeDialogEdit () { this.$store.commit('dialog/closeDialogEdit') },

        editFile (file) {
            const { addCategory } = new FormPacker();
            file.category = addCategory(file.archive);

            this.$store.dispatch('file/updateFile', file);
            this.$store.commit('dialog/closeDialogEdit');
        }
    }
}
</script>