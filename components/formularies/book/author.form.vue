<template>
    <form @submit.prevent="send">
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-3">
                <v-text-field
                label="Nombre del autor"
                prepend-icon="mdi-account"
                v-model="author.fullname"
                autofocus />
            </v-flex>
            <v-flex xs12 sm6 class="px-3">
                <v-file-input
                label="Fotografia del autor"
                prepend-icon="mdi-account-box"
                @change="getAvatar" />
            </v-flex>
            <v-flex xs12 class="px-3">
                <v-textarea
                label="Biografia del autor"
                prepend-icon="mdi-card-text"
                v-model="author.biography"
                rows="4"
                auto-grow />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex xs12 sm6 class="px-3">
                <v-select
                label="Pais de nacimiento"
                :items="countries"
                v-model="author.country"
                prepend-icon="mdi-map" />
            </v-flex>
            <v-flex xs12 sm6 class="px-3">
                <v-text-field
                label="Direccion"
                prepend-icon="mdi-map"
                v-model="author.placeOfBirth" />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex xs12 sm6 class="px-3">
                <v-text-field
                label="Fecha de nacimiento"
                prepend-icon="mdi-calendar"
                v-model="author.birthday" />
            </v-flex>
            <v-flex xs12 sm6 class="px-3">
                <v-select
                label="Sexo del autor"
                :items="genders"
                v-model="author.gender"
                prepend-icon="mdi-gender-male-female" />
            </v-flex>
        </v-layout>

        <v-btn class="mx-3" type="submit" color="primary" dark>
            <v-icon>mdi-upload</v-icon>
            Subir Libro
        </v-btn>
    </form>
</template>

<script>
import { AuthorTemplate } from '@/class/Author.class';
import { countries, genders } from '@/resources/items.resource';
import { sortBook } from '@/helpers/sortBook.helper';

export default {
    data: () => ({
        author: new AuthorTemplate(),
        countries, genders
    }),

    methods: {
        getAvatar (avatar) { this.author.avatar = avatar },

        send () {
            let { book } = this.$store.state.book;
            let data = sortBook(book, this.author);
            
            this.$store.dispatch('book/createBook', data);
        }
    }
}
</script>