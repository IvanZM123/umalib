<template>
    <div>
        <v-card dark>
            <v-img
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :src="`/archive/${ image.archive }`"
            height="200"
            position="relative">
                <v-card-title v-text="image.title" />
                <v-card-subtitle v-text="image.subtitle" />

                <!-- Action image -->
                <v-subheader class="pa-0 px-3" style="position: absolute; bottom: 0">
                    <v-btn icon @click="dialog = true">
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn icon @click="editFile(image)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn icon @click="deleteFile(image._id)">
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon :href="`/api/microservice/download/file/${image.archive}?category=${image.category}&filename=${image.subtitle}`">
                        <v-icon>mdi-cloud-download</v-icon>
                    </v-btn>
                </v-subheader>
            </v-img>
        </v-card>

        <v-dialog v-model="dialog" max-width="600">
            <v-sheet elevation="3">
                <v-img :src="`/archive/${ image.archive }`" />
            </v-sheet>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        image: Object
    },

    data: function () {
        return {
            dialog: false
        }
    },

    methods: {
        editFile (image) {
            const data = { dataForm: image, dialog: 'file-edit' }
            this.$store.commit('dialog/showDialogEdit', data);
        },

        deleteFile (id) {
            confirm('El archivo sera eliminado ¿deseas continuar?')
            ? this.$store.dispatch('file/deleteFile', id)
            : null;
        }
    }
}
</script>