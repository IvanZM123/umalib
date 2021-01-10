<template>
    <form @submit.prevent="saveNote">
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Titulo de la nota"
                v-model="note.title"
                autofocus />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Subtitulo de la nota"
                v-model="note.subtitle" />
            </v-flex>
            <v-flex xs12 sm12 class="px-2">
                <v-select
                label="Color de la nota"
                :items="colors"
                item-text="text"
                item-value="value"
                v-model="note.color"
                prepend-inner-icon="mdi-palette" />
            </v-flex>
            <v-flex xs12 class="px-2">
                <v-textarea
                label="Descripcion de la nota"
                v-model="note.description"
                rows="4"
                auto-grow />
            </v-flex>
        </v-layout>
        <v-btn type="submit" :disabled="!formIsValid" color="primary" dark>
            <v-icon>mdi-floppy</v-icon>
            Guardar
        </v-btn>
        <v-btn @click="closeDialog" color="primary" text dark>Cerrar</v-btn>
    </form>
</template>

<script>
import { NoteTemplate } from '@/class/Note.class';
import { colors } from '@/resources/items.resource';
import { rules } from '@/library/rules.lib';

export default {
    data: () => ({
        note: new NoteTemplate(),
        colors, rules
    }),

    computed: {
        formIsValid () {
            return (this.note.title && this.note.subtitle);
        }
    },

    methods: {
        closeDialog () { this.$store.commit('dialog/closeDialog') },

        saveNote () {
            const { username } = this.$store.state.user.fieldsUser;
            this.note.username = username;

            this.$store.dispatch('note/createNote', this.note);
            this.closeDialog();
            this.note = new NoteTemplate();
        }
    }
}
</script>
