<template>
    <form @submit.prevent="createFile">
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Titulo del archivo"
                v-model="file.title"
                :rules="rules.title"
                autofocus />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Subtitulo del archivo"
                v-model="file.subtitle"
                :rules="rules.subtitle" />
            </v-flex>
            <v-flex xs12 class="px-2">
                <v-textarea
                label="Descripcion del archivo"
                rows="4"
                v-model="file.description"
                auto-grow />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-file-input
                label="Elija su archivo"
                :rules="rules.archive"
                prepend-icon=""
                prepend-inner-icon="mdi-file"
                accept=".jpg, .png, .gif, .jpeg, .docx, .xlsx, .pptx, .mp4, .mp3, .rar, .pdf, .zip"
                @change="getArchive" />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
                <v-file-input
                label="Fondo del archivo"
                prepend-icon=""
                prepend-inner-icon="mdi-image"
                accept=".jpg, .png, .jpeg, .gif"
                @change="getBackground" />
            </v-flex>
        </v-layout>

        <v-btn
        :disabled="!formIsValid"
        type="submit"
        class="mx-2"
        color="primary">
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
import { FileTemplate } from '@/class/File.class';
import { rules } from '@/library/rules.lib';
import { FormPacker } from '@/helpers/FormPacker';

export default {
    data: () => ({
        file: new FileTemplate(),
        rules,
    }),

    computed: {
        formIsValid () {
            return (
                this.file.title && this.file.subtitle &&
                this.file.archive
            );
        }
    },

    methods: {
        closeDialog () { this.$store.commit('dialog/closeDialog') },

        getArchive (archive) { this.file.archive = archive },

        getBackground (background) { this.file.background = background },

        createFile () {
            const { params } = this.$route;
            const { username } = this.$store.state.user.fieldsUser;
            const { addCategory } = new FormPacker();
            
            this.file.folder = params.id;
            this.file.username = username;
            this.file.category = addCategory(this.file.archive);

            this.$store.dispatch('file/createFile', this.file);
            this.closeDialog();
            this.file = new FileTemplate();
        }
    }
}
</script>
