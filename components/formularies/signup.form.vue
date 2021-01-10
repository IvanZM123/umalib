<template>
    <form @submit.prevent="signup(user)">
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Nombres completos"
                prepend-icon="mdi-account"
                v-model="user.name"
                :rules="rules.name"
                autofocus />
            </v-flex>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Apellidos completos"
                v-model="user.surname"
                :rules="rules.surname"
                prepend-icon="mdi-account" />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex xs12 sm4 class="px-2">
                <v-select
                label="Pais"
                :items="countries"
                v-model="user.country"
                :rules="rules.country"
                prepend-icon="mdi-map" />
            </v-flex>
            <v-flex xs12 sm4 class="px-2">
                <v-select
                label="Sexo"
                :items="genders"
                v-model="user.gender"
                :rules="rules.gender"
                prepend-icon="mdi-gender-male-female" />
            </v-flex>
            <v-flex xs12 sm4 class="px-2">
                <v-text-field
                type="number"
                label="Edad"
                v-model="user.age"
                :rules="rules.age"
                prepend-icon="mdi-calendar" />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex
            xs12
            :sm6="typeUser != 'admin'"
            :sm4="typeUser == 'admin'"
            class="px-2">
                <v-text-field
                label="Nombre de usuario"
                v-model="user.username"
                :rules="rules.username"
                :error="notification.status"
                :error-messages="notification.text"
                prepend-icon="mdi-account" />
            </v-flex>
            <v-flex
            xs12
            :sm6="typeUser != 'admin'"
            :sm4="typeUser == 'admin'"
            class="px-2">
                <v-text-field
                type="password"
                label="Contraseña"
                v-model="user.password"
                :rules="rules.password"
                prepend-icon="mdi-account" />
            </v-flex>
            <v-flex
            xs12
            v-if="typeUser == 'admin'"
            :sm6="typeUser != 'admin'"
            :sm4="typeUser == 'admin'"
            class="px-2">
                <v-text-field
                label="Codigo de seguridad"
                v-model="user.code"
                :rules="rules.code"
                :error="notification.status"
                :error-messages="notification.text"
                prepend-icon="mdi-card-text" />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex xs12 class="px-2">
                <v-file-input
                label="Foto de perfil"
                prepend-icon="mdi-image"
                accept=".jpg, .png, .gif, .jpeg"
                @change="getAvatar" />
            </v-flex>
        </v-layout>

        <v-btn
        type="submit"
        color="primary"
        :disabled="!formIsValid"
        class="mx-2">Registrarse</v-btn>
        <v-btn to="/auth/signin.local" color="primary" icon>
        <v-icon>mdi-login</v-icon>
        </v-btn>
        <v-btn to="/" color="primary" icon>
            <v-icon>mdi-home</v-icon>
        </v-btn>
    </form>
</template>

<script>
import { UserTemplate } from '@/class/User.class';
import { countries, genders } from '@/resources/items.resource';
import { rules } from '@/library/rules.lib';

export default {
    data: () => ({
        user: new UserTemplate(),
        countries, 
        genders,
        rules
    }),

    props: {
        typeUser: String
    },

    computed: {
        formIsValid () {
            return (
                this.user.name && this.user.surname && this.user.country &&
                this.user.gender && ((this.user.age > 0) && (this.user.age < 100)) &&
                this.user.username && this.user.password
            );
        },

        notification () { return this.$store.state.notification.notify }
    },

    methods: {
        getAvatar (avatar) { this.user.avatar = avatar },

        signup (user) {
            if(this.typeUser == 'admin'){
                user.type = this.typeUser;
            }else{
                user.type = this.typeUser;
                user.code = '';
            }

            this.$store.dispatch('auth/signup', user);
        }
    }
}
</script>
