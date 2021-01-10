<template>
    <v-layout wrap>
        <v-flex xs12 sm6 md3
        id="container"
        class="pa-2"
        v-for="(user, index) in users" :key="index">
            <UserCardComponent v-bind:user="user" />
        </v-flex>
    </v-layout>
</template>

<script>
import UserCardComponent from '@/components/cards/user.card';

export default {
    middleware: 'IsAdmin',
    layout: 'user',

    components: { UserCardComponent },

    computed: {
        users () { return this.$store.state.admin.registered_users }
    },
    
    created () {
        this.$store.dispatch('admin/getAllUsers');
    }
}
</script>