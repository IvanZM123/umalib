<template>
    <v-sheet class="mx-auto py-10">
        <v-layout wrap justify-center>
            <v-flex xs11 sm10 md8 lg10>
                <v-card elevation="5" class="pa-5">
                    <v-layout wrap align-center>
                        <v-flex xs12 lg6 class="pa-5 d-none d-lg-block">
                            <v-img
                                src="/images/banner-register.svg"
                                alt="Umalib banner register"
                                width="100%"
                            />
                        </v-flex>
                        <v-flex xs12 lg6>
                            <div class="pb-5">
                                <h1>Crear una cuenta</h1>
                                <p>Una cuenta, y organiza tus archivos</p>
                            </div>
                            <FormSignUp />
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-sheet>
</template>

<script>
import FormSignUp from '@/components/formularies/signup.form';

export default {
    components: { FormSignUp },

    data: () => ({
        typeUser: 'user'
    })
}
</script>
