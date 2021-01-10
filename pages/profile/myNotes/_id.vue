<template>
    <v-sheet
    dark
    id="note"
    :color="note.color"
    style="margin: auto"
    elevation="3"
    class="pa-5">
    <v-subheader>
        <v-icon small left>mdi-calendar</v-icon>
        {{ showDate(note.created_at) }}
        <v-spacer/>
        <v-btn @click="deleteNote(note._id)" icon>
            <v-icon>mdi-delete</v-icon>
        </v-btn>
    </v-subheader>
        <form @submit.prevent="saveChange">
            <v-layout wrap>
                <v-flex xs12 class="px-3">
                    <v-text-field v-model="note.title" />
                </v-flex>
                <v-flex xs12 class="px-3">
                    <v-text-field v-model="note.subtitle" />
                </v-flex>
                <v-flex xs12 class="px-3">
                    <v-textarea
                    v-model="note.description"
                    rows="5"
                    auto-grow />
                </v-flex>
            </v-layout>
            <v-btn type="submit" color="transparent" class="mx-3">
                <v-icon>mdi-floppy</v-icon>
                Guardar
            </v-btn>
        </form>
    </v-sheet>
</template>

<script>
import { NoteTemplate } from '@/class/Note.class';

export default {
    layout: 'user',

    data: function () {
        return {
            monthsArray: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov',  'Dic']
        }
    },

    computed: {
        note () {
            const { params } = this.$route;
            const { notes } = this.$store.state.note;
            const noteFind = notes.find(value => value._id == params.id);
            
            return {
                title: noteFind.title,
                subtitle: noteFind.subtitle,
                description: noteFind.description,
                username: noteFind.username,
                _id: noteFind._id,
                created_at: noteFind.created_at,
                color: noteFind.color
            }
        }
    },

    methods: {
        saveChange () {
            this.$store.dispatch('note/updateNote', this.note);
        },

        deleteNote (id) {
            confirm('La nota sera eliminada ¿deseas continuar?')
            ? this.$store.dispatch('note/deleteNote', id)
            : null;
            this.$router.replace('/profile/myNotes');
        },

        showDate (date) {
            let currentCreated = new Date(date);
            let currentDate = currentCreated.getDate();
            let currentMonth = currentCreated.getMonth();
            let currentYear = currentCreated.getFullYear();

            return `${ currentDate } ${ this.monthsArray[currentMonth] } ${ currentYear }`;
        }
    }
}
</script>

<style scoped>
    #note { width: 100%; }

    @media screen and (min-width: 620px) {
        #note { width: 60%; }
    }

    @media screen and (min-width: 1020px) {
        #note{ width: 40%; }
    }
</style>