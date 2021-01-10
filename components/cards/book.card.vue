<template>
    <v-hover v-slot:default="{ hover }">
        <v-card elevation="3" width="260" height="370" dark>
            <v-img height="370" position="relative"
            :src="`/cover_photo/${book.book.cover_photo}`"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                <v-subheader>
                    {{ showDate(book.book.created_at) }}
                    <v-spacer />
                    <v-btn
                    v-if="$route.name == 'profile-myBooks'"
                    @click="deleteBookCollection(book.myBook)"
                    icon>
                        <v-icon>mdi-delete</v-icon>
                    </v-btn>
                    <v-btn icon
                    v-if="$route.name == 'profile-library'"
                    @click="addMyBooks(book)">
                        <v-icon>mdi-clipboard</v-icon>
                    </v-btn>

                    <!-- actions menu -->
                    <v-speed-dial v-model="fab" direction="bottom" transition="scale-transition">
                        <template v-slot:activator>
                            <v-btn v-model="fab" icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-btn fab x-small
                        color="green darken-1"
                        :href="`/api/microservice/download/book/${ book.book.content_book }?category=${ book.book.category }&filename=${ book.book.title }`">
                            <v-icon>mdi-download</v-icon>
                        </v-btn>
                        <v-btn fab x-small color="purple darken-3" :to="`/profile/library/read/${ book._id }`">
                            <v-icon>mdi-eye</v-icon>
                        </v-btn>
                        <div v-if="admin && $route.name == 'profile-library'">
                            <v-btn fab x-small
                            @click="deleteBook(book._id)"
                            color="red darken-2">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </div>
                    </v-speed-dial>
                </v-subheader>

                <div
                class="pa-3 pb-4"
                style="position: absolute; bottom: 0; left: 0">
                    <v-subheader v-text="book.author.fullname" class="pt-6 pa-0"/>
                    <h1 id="word-title" class="pa-0" v-text="book.book.title" />
                    <v-expand-transition>
                        <div v-show="hover">
                            <v-card-text class="pa-0 text-justify" v-text="book.book.description" />

                            <v-card-actions class="pa-0">
                                <v-spacer />
                                <v-btn :to="`/profile/library/${book._id}`" text>
                                    Ver mas...
                                    <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                                <v-spacer />
                            </v-card-actions>
                        </div>
                    </v-expand-transition>
                </div>
            </v-img>
        </v-card>
    </v-hover>
</template>

<script>
import { parseDate } from '@/helpers/created.helper';

export default {
    data: () => ({ fab: null }),

    props: {
        book: Object,
        admin: Boolean
    },

    methods: {
        addMyBooks (id) { this.$store.dispatch('book/addMyBooks', id) },

        showDate (date) {
            if (date != undefined) { return parseDate(date) }
            else{ return null }
        },

        deleteBook (id) {
            confirm('El libro sera eliminado ¿deseas continuar?')
                ? this.$store.dispatch('book/deleteBook', id)
                : null;
        },

        deleteBookCollection (id) {
            this.$store.dispatch('book/deleteMyBook', id);
        }
    }
}
</script>
