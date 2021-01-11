<template>
    <v-card>
        <v-toolbar flat>
            <v-subheader>
                <!-- show date link -->
                <v-icon left small color="white">mdi-calendar</v-icon>
                {{ parseDate(link.created_at) }}
            </v-subheader>
            
            <v-spacer />

            <!-- actions link -->
            <v-speed-dial v-model="fab" direction="bottom" transition="scale-transition">
                <template v-slot:activator>
                    <v-btn v-model="fab" dark icon >
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-btn fab x-small @click="editLink(link)" color="green darken-1" dark>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn fab x-small color="primary" dark :href="link.url" target="_blank">
                    <v-icon>mdi-send</v-icon>
                </v-btn>
                <v-btn fab x-small @click="deleteLink(link._id)" color="red darken-2" dark>
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </v-speed-dial>
        </v-toolbar>

        <v-img
            width="100%"
            height="200px"
            :src="`/background/${ link.background }`"
        />
        
        <v-card-title id="word-title" v-text="link.title" />
        <v-card-subtitle v-text="link.subtitle" />
        <v-card-text v-text="link.description" />
    </v-card>
</template>

<script>
import { parseDate } from '@/helpers/created.helper';

export default {
    data: () => ({
        show: false,
        fab: null
    }),

    props: {
        link: Object
    },

    methods: {
        deleteLink (id) {
            confirm('El enlace sera eliminado ¿deseas continuar?')
            ? this.$store.dispatch('link/deleteLink', id)
            : null;
        },

        editLink (link) {
            const data = { dataForm: link, dialog: 'link-edit' }
            this.$store.commit('dialog/showDialogEdit', data);
        },

        parseDate (created_at) { return parseDate(created_at) }
    }
}
</script>