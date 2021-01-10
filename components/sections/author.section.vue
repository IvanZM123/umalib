<template>
    <v-sheet elevation="3" class="pa-5">
        <v-layout wrap>
            <v-flex xs12 sm4>
                <v-card>
                    <v-img
                    :src="`/avatar/${ author.avatar }`">
                    </v-img>
                </v-card>
            </v-flex>
            <v-flex xs12 sm8 class="px-3">
                <v-tabs v-model="tab">
                    <v-tab>Biografia</v-tab>
                    <v-tab>Caracteristicas</v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item>
                        <v-container
                        class="text-justify"
                        v-text="author.biography" />
                    </v-tab-item>
                    
                    <v-tab-item>
                        <v-container>
                            <v-layout wrap>
                                <v-flex xs12
                                v-for="(item, index) in fieldsAuthor"
                                :key="index">
                                    <v-list-item dense class="pb-0 pt-0">
                                        <v-list-item-icon>
                                            <v-icon v-text="item.icon" />
                                        </v-list-item-icon>
                                        <v-list-item-title style="font-size: 16px" v-text="item.text" />
                                    </v-list-item>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-tab-item>

                </v-tabs-items>
            </v-flex>
        </v-layout>
    </v-sheet>
</template>

<script>
import CardAuthorComponent from '@/components/cards/user.card'

export default {
    components: { CardAuthorComponent },

    data: function () {
        return {
            tab: null
        }
    },

    props: {
        author: Object
    },

    computed: {
        fieldsAuthor () {
            let { fullname, country, gender, placeOfBirth, birthday } = this.author;

            return [
                {text: fullname, icon: 'mdi-account' },
                {text: placeOfBirth, icon: 'mdi-home'},
                {text: country, icon: 'mdi-map'},
                {text: birthday, icon: 'mdi-cake-variant'},
                {text: gender, icon: 'mdi-gender-male-female'}
            ];
        }
    }
}
</script>