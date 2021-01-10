<template>
    <v-card>
        <v-list-item two-line dense class="pb-0 mb-0">
            <v-list-item-avatar>
                <v-img :src="`/background/${ video.background }`" />
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title id="word-title" v-text="video.title" />
                <v-list-item-subtitle v-text="video.subtitle" />
            </v-list-item-content>
        </v-list-item>
        
        <video
        width="100%"
        height="200px"
        style="outline: none; background: black"
        :src="`/archive/${ video.archive }`"
        controls />

        <v-card-actions class="pt-0">
            <v-btn @click="deleteVideo(video._id)" icon>
                <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn @click="editVideo(video)" icon>
                <v-icon>mdi-file-edit</v-icon>
            </v-btn>
            <v-btn icon
            :href="`/api/microservice/download/file/${video.archive}?category=${video.category}&filename=${video.subtitle}`">
                <v-icon>mdi-cloud-download</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn icon @click="show = !show">
                <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
        </v-card-actions>
        
        <v-expand-transition
        v-if="video.description != 'undefined'">
            <div v-show="show">
                <v-divider class="mx-2" />
                <v-card-text
                class="text-justify"
                v-text="video.description" />
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        show: false
    }),

    props: {
        video: Object
    },

    methods: {
        deleteVideo (id) {
            confirm('El archivo sera eliminado ¿deseas continuar?')
            ? this.$store.dispatch('file/deleteFile', id)
            : null;
        },

        editVideo (video) {
            const data = { dataForm: video, dialog: 'file-edit' }
            this.$store.commit('dialog/showDialogEdit', data);
        }
    }
}
</script>
