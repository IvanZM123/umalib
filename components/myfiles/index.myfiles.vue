<template>
    <div>
        <div
        style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; height: 0%; width: 100%"
        v-if="(folders.length < 1) && (filesState.length < 1)"
        class="text-center">
            <p>
                <v-icon left>mdi-package-variant</v-icon>
                Esta seccion se encuentra vacia
            </p>
        </div>
        
        <!-- Section folders -->
        <div v-if="folders.length > 0">
            <v-subheader>
                <v-icon color="amber lighten-4" left>mdi-folder</v-icon>
                Carpetas
            </v-subheader>
            <v-layout wrap>
                <v-flex xs12 sm4 md3
                id="container"
                class="pa-2"
                v-for="(folder, index) in folders"
                :key="index">
                    <CardFolderComponent v-bind:folder="folder" />
                </v-flex>
            </v-layout>
        </div>

        <SectionFilesComponent v-bind:dataFiles="filesState" />
    </div>
</template>

<script>
import CardFolderComponent from '@/components/cards/folder.card';
import SectionFilesComponent from '@/components/sections/files.sections';

export default {
    components: { CardFolderComponent, SectionFilesComponent },

    computed: {
        folders () { return this.$store.state.folder.folders },
        filesState () { return this.$store.state.file.files },
    }
}
</script>