<template>
    <div>
        <v-card flat style="font-size: 14px" class="pa-3" tile>
            <v-layout wrap align-center>
                <v-flex xs3>
                    {{ showDate(download.created_at) }}
                </v-flex>
                <v-flex xs8>
                    <v-icon :color="header(download.category).color" left>
                        {{ header(download.category).icon }}
                    </v-icon>
                    <span id="word-title" v-text="download.filename" /> - <span v-text="download.category" />
                </v-flex>
                <v-flex xs1 @click="deleteDownload(download._id)" class="text-center">
                    <v-btn icon small>
                        <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-card>
        <v-divider />
    </div>
</template>

<script>
import { parseDate } from '@/helpers/created.helper';
import { addCategoryFile } from '@/helpers/category.helper';

export default {
    props: {
        download: Object
    },

    methods: {
        header (category) { return addCategoryFile(category) },

        deleteDownload (id) {
            this.$store.dispatch('microservice/deleteDownload', id);
        },

        showDate (date) { return parseDate(date) }
    }
}
</script>