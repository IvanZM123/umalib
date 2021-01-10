<template>
    <v-sheet
    id="card-sheet"
    style="position: absolute; bottom: 0; top: 0; left: 0; right: 0;"
    class="mx-auto"
    elevation="3">
        <v-layout wrap>
            <v-flex xs12 class="d-flex">
                <v-btn width="50%" tile @click="typeUser = 'user'">
                    <v-icon>mdi-account</v-icon>
                    Usuario
                </v-btn>
                <v-btn width="50%" tile @click="typeUser = 'admin'">
                    <v-icon>mdi-account-tie</v-icon>
                    Administrador
                </v-btn>
            </v-flex>
            <v-flex xs12 class="pa-5">
                <div class="px-2 mb-6 pb-5">
                    <h1>Registrarse</h1>
                    <p>Una cuenta, toda la biblioteca y tus archivos.</p>
                </div>
                <FormSignUp v-bind:typeUser="typeUser" />
            </v-flex>
        </v-layout>
    </v-sheet>
</template>

<script>
import FormSignUp from '@/components/formularies/signup.form';

export default {
    layout: 'auth',

    components: { FormSignUp },

    data: () => ({
        typeUser: 'user'
    })
}
</script>

<style scoped>
    #card-sheet {
        width: 90%;
        margin: auto;
    }

    @media screen and (min-width: 700px) {
        #card-sheet {
            height: 70%;
        }
    }

    @media screen and (min-width: 1000px) {
        #card-sheet {
            width: 65%;
            height: 75%;
        }
    }

    @media screen and (min-width: 1100px) {
        #card-sheet {
            width: 55%;
            height: 85%;
        }
    }

</style>