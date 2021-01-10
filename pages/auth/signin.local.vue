<template>
    <v-sheet
    class="pa-5"
    id="card-form"
    style="position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto"
    elevation="3">
        <v-layout wrap
        align-center>
        <v-flex xs12 class="pb-10">
            <h1>Iniciar Sesion</h1>
            <p>Inicia sesion y accede a todos tus documentos</p>
        </v-flex>
            <v-flex xs12>
                <SignInForm />
            </v-flex>
        </v-layout>
    </v-sheet>
</template>

<script>
import SignInForm from '@/components/formularies/signin.form';

export default {
    layout: 'auth',

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

<style scoped>
    #card-form {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
        width: 90%;
        height: 400px;
    }

    @media screen and (min-width: 630px) {
        #card-form {
            width: 70%;
        }
    }

    @media screen and (min-width: 720px){
        #card-form {
            width: 65%;
            height: 55%;
        }
    }

    @media screen and (min-width: 1010px){
        #card-form {
            width: 40%;
            height: 60%;
        }
    }

    @media screen and (min-width: 1210px){
        #card-form {
            width: 30%;
            height: 65%;
        }
    }
</style>
