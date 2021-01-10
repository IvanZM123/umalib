<template>
    <div>
        <v-card dark elevation="3" class="pa-0">
            <v-img
            height="200px"
            width="100%"
            :src="`/background/${ document.background }`"
            gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.6)">
                <v-toolbar dense color="transparent" flat>
                    <v-subheader class="pa-0">
                        <v-icon small left>mdi-calendar</v-icon>
                        {{ showDate(document.created_at) }}
                    </v-subheader>
                    <v-spacer />
                    <v-btn icon
                    title="Vista previa"
                    @click="dialog = true"
                    v-if="document.preview != ''">
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn @click="deleteFile(document._id)" icon title="Eliminar">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn @click="editFile(document)" icon title="Editar">
                        <v-icon>mdi-file-edit</v-icon>
                    </v-btn>
                    <v-btn icon title="Descargar"
                    :href="`/api/microservice/download/file/${document.archive}?category=${document.category}&filename=${document.subtitle}`">
                        <v-icon>mdi-cloud-download</v-icon>
                    </v-btn>
                </v-toolbar>
                <v-card-title id="word-title" class="pt-0" v-text="document.title" />
                <v-card-subtitle v-text="document.subtitle" />
                <v-card-text class="text-justify" v-text="document.description" />
            </v-img>
        </v-card>

        <v-dialog v-model="dialog" max-width="90%">
            <v-sheet width="100%" height="90vh">
                <iframe
                :src="`/preview/${ document.preview }`"
                frameborder="0"
                width="100%"
                height="100%" />
            </v-sheet>
        </v-dialog>
    </div>
</template>

<script>
import { parseDate } from '@/helpers/created.helper';

export default {
    props: {
        document: Object
    },

    data: () => ({ dialog: false }),

    methods: {
        deleteFile (id) {
            confirm('El archivo sera eliminado ¿deseas continuar?')
            ? this.$store.dispatch('file/deleteFile', id)
            : null;
        },

        editFile (file) {
            const data = { dataForm: file, dialog: 'file-edit' }
            this.$store.commit('dialog/showDialogEdit', data);
        },

        showDate (date) { return parseDate(date) }
    }
}
</script>