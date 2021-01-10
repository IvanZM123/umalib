<template>
    <div style="height: 90vh">
        <iframe
        width="100%"
        height="100%"
        :src="`/book/${ file.book.content_book }`"
        frameborder="0"/>
    </div>
</template>

<script>
export default {
    layout: 'user',

    computed: {
        file () {
            let { params } = this.$route;
            let { booksLibrary } = this.$store.state.book;
            return booksLibrary.find(value => value._id == params.id);
        }
    }

}
</script>