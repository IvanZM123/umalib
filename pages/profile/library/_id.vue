<template>
    <div>
        <v-sheet elevation="3" style="margin:auto" dark>
            <v-img 
            :src="`/cover_photo/${ book.book.cover_photo }`"
            width="100%"
            height="400"
            class="pa-5"
            gradient="to bottom, rgba(0,0,0,.2), rgba(0,0,0,.5)">
            <h1
            class="text-center"
            style="font-family: Oswald; font-size: 50px">{{ book.book.title }}</h1>
            <p class="text-center" style="font-size: 20px">{{ book.author.fullname }}</p>
            <v-avatar size="90" style="position: absolute; bottom: 20px">
                <v-img :src="`/avatar/${ book.author.avatar }`" />
            </v-avatar>
            </v-img>
        </v-sheet>
        <v-tabs v-model="tab">
            <v-tab>Sinopsis</v-tab>
            <v-tab>Autor</v-tab>
            <v-tab v-if="user == 'admin'">Edicion</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <v-container>
                    {{ book.book.sinopsis }}
                </v-container>
            </v-tab-item>
            <v-tab-item>
                <SectionAuthorComponent v-bind:author="book.author" />
            </v-tab-item>
            <v-tab-item v-if="user == 'admin'">
                <FormEditBook v-bind:data="book" />
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
import SectionAuthorComponent from '@/components/sections/author.section';
import FormEditBook from '@/components/formularies/book/book.general';

export default {
    layout: 'user',

    components: { SectionAuthorComponent, FormEditBook },

    data: () => ({
        tab: null
    }),

    computed: {
        book () {
            let { booksLibrary } = this.$store.state.book;
            let { params } = this.$route;
            return booksLibrary.find(value => value._id == params.id);
        },

        user () {
            let { type } = this.$store.state.user.fieldsUser;
            return type;
        }
    }
}
</script>

<style scoped>
    #container { overflow: auto; height: 500px; width: 90%; margin: auto }
</style>