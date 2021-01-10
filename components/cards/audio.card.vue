<template>
    <v-card class="px-2 pt-2 pa-0">
        <v-subheader>
            <v-btn icon @click="editAudio(audio)">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteAudio(audio._id)">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon :href="`/api/microservice/download/file/${audio.archive}?category=${audio.category}&filename=${audio.subtitle}`">
                <v-icon>mdi-cloud-download</v-icon>
            </v-btn>
        </v-subheader>
        <v-layout wrap align-center>
            <v-flex xs8>
                <v-card-title>{{ audio.title }}</v-card-title>
                <v-card-subtitle>{{ audio.subtitle }}</v-card-subtitle>
            </v-flex>
            <v-flex xs4 class="text-center px-1">
                <v-avatar color="" size="100%" height="90" tile>
                    <v-img :src="`/background/${ audio.background }`" />
                </v-avatar>
            </v-flex>
            <v-flex xs12 class="pa-2 d-flex align-center">
                <audio style="width: 100%; outline: none" :src="`/archive/${ audio.archive }`" controls />
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>

export default {
    props: {
        audio: Object
    },

    data: function () {
        return {
            fab: null
        }
    },

    methods: {
        deleteAudio (id) {
            confirm('El archivo sera eliminado ¿deseas continuar?')
            ? this.$store.dispatch('file/deleteFile', id)
            : null;
        },

        editAudio (audio) {
            const data = { dataForm: audio, dialog: 'file-edit' }
            this.$store.commit('dialog/showDialogEdit', data);
        }
    }
}
</script>
