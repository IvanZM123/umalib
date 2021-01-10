<template>
    <div>
        <BookSectionComponent v-bind:dataBooks="myBooks" />
    </div>
</template>

<script>
import BookSectionComponent from '@/components/sections/book.section';

export default {
    layout: 'user',

    components: { BookSectionComponent },

    computed: {
        myBooks () {
            var myCollections = [];
            let { myBooks } = this.$store.state.book;

            myBooks.forEach(value => {
                myCollections.push({
                    _id: value.book.id,
                    book: value.book,
                    author: value.author,
                    myBook: value._id
                })
            });
            return myCollections;
        }
    },

    created () {
        this.$store.dispatch('book/getMyBooks');
    }
}
</script>
