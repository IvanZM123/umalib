<template>
    <form @submit.prevent="editBook">
        <v-layout wrap>
            <!-- Field Book -->
            <v-flex xs12 md6 class="pa-3">
                <h1 style="font-family: Oswald" class="pb-4">Datos del libro</h1>
                <v-layout wrap>
                    <v-flex xs12 sm6 class="px-2">
                        <v-text-field
                        label="Titulo del libro"
                        v-model="book.title"
                        prepend-inner-icon="mdi-book"
                        autofocus />
                    </v-flex>
                    <v-flex xs12 sm6 class="px-2">
                        <v-text-field
                        label="Subtitulo del libro"
                        v-model="book.subtitle"
                        prepend-inner-icon="mdi-book-variant" />
                    </v-flex>
                </v-layout>

                <v-layout wrap>
                    <v-flex xs12 class="px-2">
                        <v-textarea
                        label="Descripcion del libro"
                        v-model="book.description"
                        rows="4"
                        auto-grow="" />
                    </v-flex>
                    <v-flex xs12 class="px-2">
                        <v-textarea
                        label="Descripcion del libro"
                        v-model="book.sinopsis"
                        rows="4"
                        auto-grow="" />
                    </v-flex>
                </v-layout>
                
                <v-layout wrap>
                    <v-flex xs12 md6 class="px-2">
                        <v-file-input
                        label="Elija su libro"
                        prepend-icon
                        prepend-inner-icon="mdi-book"
                        @change="getBook" />
                    </v-flex>
                    <v-flex xs12 md6 class="px-2">
                        <v-file-input
                        label="Portada del libro"
                        prepend-icon
                        prepend-inner-icon="mdi-image"
                        @change="getCoverPhoto" />
                    </v-flex>
                    <v-flex xs12 class="px-2">
                        <v-select
                        label="Categoria"
                        v-model="book.category"
                        item-text="text"
                        :items="categories"
                        prepend-inner-icon="mdi-clipboard-list" />
                    </v-flex>
                </v-layout>
            </v-flex>

            <!-- Field Author -->
            <v-flex xs12 md6 class="pa-3">
                <h1 style="font-family: Oswald" class="pb-4">Datos del autor</h1>
                <v-layout wrap>
                    <v-flex xs12 sm6 class="px-2">
                        <v-text-field
                        label="Nombre del autor"
                        v-model="author.fullname"
                        prepend-inner-icon="mdi-account" />
                    </v-flex>
                    <v-flex xs12 sm6 class="px-2">
                        <v-file-input
                        label="Fotografia del autor"
                        prepend-icon
                        prepend-inner-icon="mdi-image"
                        @change="getAvatar" />
                    </v-flex>
                </v-layout>

                <v-layout wrap>
                    <v-flex xs12 class="px-2">
                        <v-textarea
                        label="Biografia del autor"
                        v-model="author.biography"
                        rows="4"
                        auto-grow />
                    </v-flex>
                    <v-flex xs12 md6 class="px-2">
                        <v-select
                        label="Pais de nacimiento"
                        :items="countries"
                        v-model="author.country"
                        prepend-inner-icon="mdi-map" />
                    </v-flex>
                    <v-flex xs12 md6 class="px-2">
                        <v-text-field
                        label="Lugar de nacimiento"
                        v-model="author.placeOfBirth"
                        prepend-inner-icon="mdi-home" />
                    </v-flex>
                </v-layout>

                <v-layout wrap>
                    <v-flex xs12 md6 class="px-2">
                        <v-text-field
                        label="Fecha de nacimiento"
                        v-model="author.birthday"
                        prepend-inner-icon="mdi-calendar" />
                    </v-flex>
                    <v-flex xs12 md6 class="px-2">
                        <v-select
                        label="Sexo del autor"
                        :items="genders"
                        v-model="author.gender"
                        prepend-inner-icon="mdi-gender-male-female" />
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-btn type="submit" class="mx-2" color="primary" dark>
            <v-icon>mdi-floppy</v-icon>
            Guardar cambios
        </v-btn>
    </form>
</template>

<script>
import { BookTemplate } from '@/class/Book.template';
import { AuthorTemplate } from '@/class/Author.class';

import { countries, genders } from '@/resources/items.resource';
import { categories } from '@/resources/categories.resource';
import { sortBook } from '@/helpers/sortBook.helper';

export default {
    props: {
        data: Object
    },

    data: () => ({ categories, countries, genders }),

    computed: {
        book () {
            let {
                title, subtitle, description, sinopsis, content_book,
                cover_photo, category, publication_date, editorial
            } = this.data.book;

            return new BookTemplate(
                title, subtitle, cover_photo, 
                description, sinopsis, content_book,
                publication_date, editorial, category
            );
        },

        author () {
            let {
                fullname, country, gender,
                placeOfBirth, birthday, biography,
                avatar
            } = this.data.author;

            return new AuthorTemplate(
                fullname, biography, avatar,
                birthday, country, placeOfBirth, gender
            );
        }
    },

    methods: {
        getAvatar (avatar) { this.author.avatar = avatar },
        getCoverPhoto (cover_photo) { this.book.cover_photo = cover_photo },
        getBook (book) { this.book.book = book },

        editBook () {
            let book = sortBook(this.book, this.author);
            let { params } = this.$route;
            
            this.$store.dispatch('book/updateBook', { book, id: params.id });
        }
    }
}
</script>
