<template>
    <form @submit.prevent="sendDataBook">
        <!-- title,subtitle -->
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-3">
                <v-text-field
                label="Titulo del libro"
                v-model="book.title"
                :rules="rules.title"
                prepend-icon="mdi-book-variant"
                autofocus />
            </v-flex>
            <v-flex xs12 sm6 class="px-3">
                <v-text-field
                label="Subtitulo del libro"
                v-model="book.subtitle"
                prepend-icon="mdi-book-variant" />
            </v-flex>
        </v-layout>

        <!-- description, sinopsis -->
        <v-layout wrap>
            <v-flex xs12 class="px-3">
                <v-textarea
                label="Descripcion del libro"
                prepend-icon="mdi-card-text"
                v-model="book.description"
                :rules="rules.description"
                counter="185"
                rows="4"
                auto-grow />
            </v-flex>
            <v-flex xs12 class="px-3">
                <v-textarea
                label="Sinopsis del libro"
                prepend-icon="mdi-book-open"
                v-model="book.sinopsis"
                rows="4"
                auto-grow />
            </v-flex>
        </v-layout>

        <!-- date, editoria -->
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-3">
                <v-text-field
                label="Fecha de publicacion"
                prepend-icon="mdi-calendar"
                v-model="book.publication_date"
                messages="Ejemplo: 22 Ago 1978" />
            </v-flex>
            <v-flex xs12 sm6 class="px-3">
                <v-text-field
                label="Editorial"
                prepend-icon="mdi-book"
                v-model="book.editorial"
                messages="Ejemplo: Santillana" />
            </v-flex>
        </v-layout>

        <!-- book, image, category -->
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-3">
                <v-file-input
                label="Seleccione su libro"
                :rules="rules.archive"
                prepend-icon="mdi-book"
                @change="getBook"
                accept=".pdf" />
            </v-flex>
            <v-flex xs12 sm6 class="px-3">
                <v-file-input
                label="Imagen de portada"
                :rules="rules.image"
                prepend-icon="mdi-image"
                @change="getCoverPhoto" />
            </v-flex>
            <v-flex xs12 sm12 class="px-3">
                <v-select
                label="Categoria del libro"
                :items="categories"
                v-model="book.category"
                :rules="rules.category"
                item-text="text"
                prepend-icon="mdi-clipboard-list" />
            </v-flex>
        </v-layout>

        <v-btn type="submit"
        :disabled="!formIsValid"
        color="primary" dark
        class="mx-3">Siguiente</v-btn>
    </form>
</template>

<script>
import { BookTemplate } from '@/class/Book.template';
import { categories } from '@/resources/categories.resource';
import { rules } from '@/library/rules.lib';

export default {
    data: () => ({
        book: new BookTemplate(),
        categories,
        rules
    }),

    computed: {
        formIsValid () {
            let word = this.book.description;

            return (
                this.book.title && this.book.book &&
                ((word || '').length > 0 && (word || '').length <= 185) &&
                this.book.cover_photo && this.book.category
            );
        }
    },

    methods: {
        getBook (book) { this.book.book = book },
        getCoverPhoto (cover_photo) { this.book.cover_photo = cover_photo },

        sendDataBook () {
            this.$store.dispatch('book/getDataStep', this.book);
            this.$store.dispatch('book/nextStep', 2);
        }
    }
}
</script>
