<template>
    <form @submit.prevent="signin(credentials)">
        <v-layout wrap>
            <v-flex xs12 class="px-2">
                <v-text-field
                label="Nombre de usuario"
                v-model="credentials.username"
                :rules="rules.username"
                :error="notification.status"
                :error-messages="notification.text"
                outlined
                autofocus />
            </v-flex>
            <v-flex xs12 class="px-2">
                <v-text-field
                type="password"
                label="Contraseña"
                v-model="credentials.password"
                :rules="rules.password"
                :error="notification.status"
                :error-messages="notification.text"
                outlined />
            </v-flex>
        </v-layout>

        <v-btn
        type="submit"
        class="mx-2"
        color="primary">Iniciar sesion</v-btn>
        <v-btn icon color="primary" to="/auth/signup.local" title="Crear una cuenta">
            <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-btn icon color="primary" to="/" title="Inicio">
            <v-icon>mdi-home</v-icon>
        </v-btn>
    </form>
</template>

<script>
import { Credentials } from '@/class/Credentials.class';
import { rules } from '@/library/rules.lib';

export default {
    data: () => ({
        credentials: new Credentials(),
        rules
    }),

    computed: {
        formIsValid () {
            return (
                this.credentials.username && this.credentials.password
            );
        },

        notification () { return this.$store.state.notification.notify }
    },

    methods: {
        signin (credentials) {
            this.$store.dispatch('auth/signin', credentials);
        }
    }
}
</script>
