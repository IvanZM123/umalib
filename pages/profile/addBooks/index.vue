<template>
    <div>
        <v-stepper v-model="step">
            <v-stepper-header>
                <v-stepper-step step="1" :complete="step > 1">
                    Datos de libro
                </v-stepper-step>
                <v-divider />
                <v-stepper-step step="2" :complete="step > 2">
                    Datos de autor
                </v-stepper-step>
                <v-divider />
                <v-stepper-step step="3">
                    ¡Libro subido!
                </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-sheet color="transparent">
                        <v-layout wrap align-center>
                            <v-flex xs12 sm6>
                                <FormBook />
                            </v-flex>
                            <v-flex xs12 sm6 class="">
                                <v-card width="90%" height="450" style="margin: auto">
                                    <v-img width="100%" height="100%" src="/random/image9.jpg"></v-img>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-sheet>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <v-sheet elevation="3" color="transparent">
                        <v-layout wrap>
                            <v-flex xs12 sm6>
                                <AuthorForm />
                            </v-flex>
                        </v-layout>
                    </v-sheet>
                </v-stepper-content>
                
                <v-stepper-content step="3">
                    <v-sheet
                    elevation="3"
                    style="margin: auto"
                    width="90%"
                    color="transparent"
                    class="text-center">
                        <v-img
                        contain=""
                        width="100%"
                        height="350px"
                        src="https://image.freepik.com/vector-gratis/pila-libros-planta-interior_25030-39080.jpg" />
                        <h1 style="font-family: Oswald">¡Un libro mas a tu biblioteca!</h1>
                    </v-sheet>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </div>
</template>

<script>
import FormBook from '@/components/formularies/book/book.card';
import AuthorForm from '@/components/formularies/book/author.form';

export default {
    layout: 'user',

    components: { FormBook, AuthorForm },

    computed: {
        step () { return this.$store.state.book.step }
    }
}
</script>