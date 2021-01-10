<template>
    <div>
        <v-layout wrap align-center>
            <v-flex xs12 sm4 md3 class="pa-1">
                <v-sheet class="text-center" color="transparent">
                    <v-btn fab @click="openDialog">
                        <v-icon>mdi-note-plus</v-icon>
                    </v-btn>
                </v-sheet>
            </v-flex>
            
            <v-flex xs12 sm4 md3
            id="container"
            class="pa-1"
            v-for="(note, index) in notes"
            :key="index">
                <NoteComponent v-bind:note="note" />
            </v-flex>

            <v-dialog
            v-if="modalComponent == 'note-create'"
            v-model="dialog"
            max-width="450px"
            persistent>
                <v-sheet elevation="3" class="pa-5">
                    <FormNote />
                </v-sheet>
            </v-dialog>
        </v-layout>
    </div>
</template>

<script>
import NoteComponent from '@/components/cards/note.card';
import FormNote from '@/components/formularies/note/note.form';

export default {
    layout: 'user',

    components: { NoteComponent, FormNote },

    computed: {
        notes () { return this.$store.state.note.notes },
        dialog () { return this.$store.state.dialog.dialog },
        modalComponent () { return this.$store.state.dialog.modalComponent }
    },

    methods: {
        openDialog () {
            this.$store.commit('dialog/showDialog', 'note-create');
        }
    },

    beforeCreate () {
        this.$store.dispatch('note/getAllNotes');
    }
}
</script>