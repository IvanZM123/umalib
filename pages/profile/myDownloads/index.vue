<template>
    <div>
        <v-layout wrap>
            <v-flex xs12
            class="pa-0"
            id="container"
            v-for="(item, index) in downloadsFiles"
            :key="index">
                <CardDownloadComponent v-bind:download="item" />
            </v-flex>
        </v-layout>

        <div
        style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; height: 0"
        v-if="downloadsFiles.length < 1"
        class="text-center">
            <p>
                <v-icon left>mdi-package-down</v-icon>
                No se han encontrado ninguna descarga
            </p>
        </div>
    </div>
</template>

<script>
import CardDownloadComponent from '@/components/cards/download.card';

export default {
    layout: 'user',

    components: { CardDownloadComponent },

    created () { this.$store.dispatch('microservice/getAllDownloadFile') },

    computed: {
        downloadsFiles () {
            return this.$store.state.microservice.downloadsFiles;
        }
    },

    beforeCreate () {
        this.$store.dispatch('microservice/getAllDownloadFile');
    }
}
</script>
