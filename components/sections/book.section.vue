<template>
    <div>
        <div v-for="(book, index) in books" :key="index">
            <v-subheader>
                <v-icon left
                :color="header(book[0].book.category).color">
                    {{ header(book[0].book.category).icon }}
                </v-icon>
                {{ book[0].book.category }}
            </v-subheader>

            <v-slide-group>
                <v-slide-item
                id="container"
                class="ma-2"
                v-for="(item, index) in book"
                :key="index">
                    <CardBookComponent
                    v-bind:book="item"
                    v-bind:admin="admin" />
                </v-slide-item>
            </v-slide-group>

            <v-divider class="mx-3 mb-3" />
        </div>
    </div>
</template>

<script>
import { Section } from '@/helpers/Section.helper';
import CardBookComponent from "@/components/cards/book.card";
import { addCategoryBook } from '@/helpers/category.helper';

export default {
    components: { CardBookComponent },

    props: {
        dataBooks: Array
    },

    computed: {
        books () {
            let { addCategoryBook } = new Section();
            return addCategoryBook(this.dataBooks);
        },

        admin () {
            let { type } = this.$store.state.user.fieldsUser;
            if(type == 'admin'){ return true }
            else{ return false }
        }
    },

    methods: {
        header (category) { return addCategoryBook(category) }
    }
}
</script>
