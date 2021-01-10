<template>
    <v-card>
        <v-img
        height="200px"
        :src="`https://res.cloudinary.com/dlkfpx8lb/image/upload/v1610255256/umalib/random/image${ background() }_q6rqv0.jpg`"
        position="relative"
        class="align-center text-center white--text"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)">
            <v-subheader class="white--text">
                <v-icon left small color="white">mdi-calendar</v-icon>
                {{ showDate(user.created_at) }}
                <v-spacer />
            </v-subheader>
            <v-avatar size="90">
                <v-img :src="`/avatar/${ user.avatar }`" />
            </v-avatar>
            <p id="word-title" class="pa-0 pt-2" >{{ user.name }}</p>
        </v-img>
        <v-list-item
        two-line
        dense
        v-for="(item, index) in items" :key="index">
            <v-list-item-avatar :color="item.color">
                <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title v-text="item.value" />
                <v-list-item-subtitle v-text="item.field" />
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
import { parseDate } from '@/helpers/created.helper';

export default {
    props: {
        user: Object
    },

    data: function () {
        return {
            show: false,
            items: [
                { field: 'Nombre de usuario', value: this.user.username, icon: 'mdi-account', color: 'primary' },
                //{ field: 'Pais de origen', value: this.user.country, icon: 'mdi-map', color: 'green darken-3' },
                //{ field: 'Sexo', value: this.user.gender, icon: 'mdi-gender-male-female', color: 'orange darken-4' }
            ]
        }
    },

    methods: {
        background () {
            let number = Math.round(Math.random() * 10);
            return number + 1;
        },

        showDate (date) { return parseDate(date) }
    }
}
</script>
