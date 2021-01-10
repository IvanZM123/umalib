<template>
    <div>
        <v-layout wrap>
            <v-flex xs12>
                <h1>¡Bienvenido {{ user.name }}!</h1>
            </v-flex>

            <v-flex xs12 sm6 md3 class="pa-2"
            v-for="(item, index) in items"
            :key="index">
                <CardInformationComponent v-bind:data="item" />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex xs12 md6 class="pa-2">
                <CardListComponent
                v-bind:header="{text: 'Ultimos libros subidos', icon: 'mdi-book-variant'}"
                v-bind:root="'cover_photo'"
                v-bind:data="books" />
            </v-flex>
            <v-flex xs12 md6 class="pa-2">
                <CardListComponent
                v-bind:header="{text: 'Ultimos archivos subidos', icon: 'mdi-cloud-upload'}"
                v-bind:root="'background'"
                v-bind:data="files" />
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import CardInformationComponent from '@/components/cards/information.card';
import CardListComponent from '@/components/cards/list.card';

export default {
    layout: 'user',

    data: function () {
        return {
            dialog: true
        }
    },

    components: { CardInformationComponent, CardListComponent },

    computed: {
        user () { return this.$store.state.user.fieldsUser },

        items () {
            let { booksLibrary } = this.$store.state.book;
            let { myBooks } = this.$store.state.book;
            let { files } = this.$store.state.file;
            let { downloadsFiles } = this.$store.state.microservice;

            return [
                {text: 'Libros de la biblioteca', number: booksLibrary.length, color: 'orange darken-4', icon: 'mdi-library', url: '/profile/library'},
                {text: 'Mi coleccion', number: myBooks.length, color: 'green darken-3', icon: 'mdi-book', url: '/profile/myBooks'},
                {text: 'Archivos subidos', number: files.length, color: 'primary', icon: 'mdi-archive', url: '/profile/myFiles'},
                {text: 'Archivos descargados', number: downloadsFiles.length, color: 'red darken-2', icon: 'mdi-cloud-download', url: '/profile/myDownloads'}
            ]
        },

        files () {
            var filesArray = [];
            let { files } = this.$store.state.file;
            
            files.forEach((value) => {
                filesArray.push({
                    img: value.background,
                    title: value.title,
                    category: value.category
                });
            });

            return filesArray;
        },

        books () {
            var booksArray = [];
            let { booksLibrary } = this.$store.state.book;
            
            booksLibrary.forEach(value => {
                booksArray.push({
                    img: value.book.cover_photo,
                    title: value.book.title,
                    category: value.book.category,
                    url: `/profile/library/${ value._id }`
                });
            });

            return booksArray;
        }
    }
}
</script>
