<template>
    <v-layout wrap justify-center class="py-10">
        <v-flex xs10 sm6 md4 lg8>
            <v-card elevation="5">
                <v-layout wrap align-center>
                    <v-flex xs12 lg6 class="pa-5 d-none d-lg-block">
                        <v-img
                            src="/images/banner-login.svg"
                            width="100%"
                        >
                        </v-img>
                    </v-flex>
                    <v-flex xs12 lg6 class="pa-5">
                        <h1>
                            <strong>Iniciar sesion</strong>
                        </h1>
                        <p>Inicia sesion y accede a tus archivos.</p>
                        <SignInForm />
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import SignInForm from '@/components/formularies/signin.form';

export default {
    components: { SignInForm },

    data: function () {
        return {
            form: null
        }
    },

    methods: {
        showForm () {
            if (innerWidth < 600) { this.form = true }
            else{ this.form = false }
        }
    },

    beforeMount () {
        this.showForm();
        window.addEventListener('resize', this.showForm, { passive: true });
    }
}
</script>
