<template>
    <div>
        <v-sheet color="transparent" v-for="(file, index) in files" :key="index">
            <!-- Cabecera de la seccion -->
            <v-subheader>
                <v-icon left
                :color="header(file[0].category).color">
                    {{ header(file[0].category).icon }}
                </v-icon>
                {{ file[0].category }}
                <v-spacer />
                <v-btn icon @click="deleteAllCategory(file[0])" title="Eliminar categoria">
                    <v-icon>mdi-close-circle</v-icon>
                </v-btn>
            </v-subheader>

            <v-layout wrap>
                <v-flex xs12 sm6 md4
                id="container"
                class="pa-2"
                v-for="(item, index) in file"
                :key="index">
                    <CardVideoComponent
                        v-if="file[0].category == 'Videos'"
                        v-bind:video="item" />
                    
                    <CardDocumentComponent
                    v-if="file[0].category != 'Videos' && file[0].category != 'Audios' && file[0].category != 'Imagenes'"
                    v-bind:document="item" />

                    <CardAudioComponent
                    v-if="file[0].category == 'Audios'"
                    v-bind:audio="item" />

                    <CardImageComponent
                    v-if="file[0].category == 'Imagenes'"
                    v-bind:image="item" />
                </v-flex>
            </v-layout>
        </v-sheet>
    </div>
</template>

<script>
import CardDocumentComponent from "@/components/cards/document.card";
import CardVideoComponent from "@/components/cards/video.card";
import CardAudioComponent from '@/components/cards/audio.card';
import CardImageComponent from '@/components/cards/image.card';

import { Section } from '@/helpers/Section.helper';
import { addCategoryFile } from '@/helpers/category.helper';

export default {
    components: { CardDocumentComponent, CardVideoComponent, CardAudioComponent, CardImageComponent },

    props: {
        dataFiles: Array
    },

    computed: {
        filesDashboard () {
            const { addCategory } = new Section();
            const files = this.dataFiles;

            const fileSection = files.filter((value) => value.folder == 'undefined');
            return addCategory(fileSection);
        },

        filesFolder () {
            const { addCategory } = new Section();
            const files = this.dataFiles;
            const { params } = this.$route;

            const fileSection = files.filter((value) => value.folder == params.id);
            return addCategory(fileSection);
        },

        files () {
            const { params } = this.$route;
            if(params.id == undefined){
                return this.filesDashboard;
            }else{
                return this.filesFolder
            }
        }
    },

    methods: {
        header (category) { return addCategoryFile(category) },

        deleteAllCategory (categoryOfFile) {
            let { category, folder } = categoryOfFile;
            let dataCategory = { category, folder };
            
            confirm(`Todos los ${ category } seran eliminados ¿deseas continuar?`)
            ? this.$store.dispatch('file/deleteAllCategory', dataCategory)
            : null;
        }
    }
}
</script>