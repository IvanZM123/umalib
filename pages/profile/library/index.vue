<template>
    <BookSectionComponent v-bind:dataBooks="books" />
</template>

<script>
//import CardBookComponent from '@/components/cards/book.card';
import BookSectionComponent from '@/components/sections/book.section';

export default {
    layout: 'user',

    components: { BookSectionComponent },

    computed: {
        books () { return this.$store.state.book.booksLibrary }
    }

}
</script>
