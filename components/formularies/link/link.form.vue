<template>
    <form @submit.prevent="createLink">
        <v-layout wrap>
            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Titulo del link"
                v-model="link.title"
                :rules="rules.title"
                autofocus />
            </v-flex>

            <v-flex xs12 sm6 class="px-2">
                <v-text-field
                label="Subtitulo del link"
                v-model="link.subtitle"
                :rules="rules.subtitle" />
            </v-flex>

            <v-flex xs12 class="px-2">
                <v-text-field
                type="url"
                label="Ingresa la URL"
                v-model="link.url"
                :rules="rules.url"
                messages="Ejemplo: https://ejemplo.com" />
            </v-flex>

            <v-flex xs12 class="px-2">
                <v-textarea
                label="Descripcion del link"
                v-model="link.description"
                rows="4"
                auto-grow />
            </v-flex>
        </v-layout>

        <v-layout wrap>
            <v-flex xs12 class="px-2">
                <v-file-input
                label="Imagen del link"
                prepend-icon
                prepend-inner-icon="mdi-image"
                accept=".jpg, .png, .gif, .jpeg"
                @change="getBackground" />
            </v-flex>
        </v-layout>

        <v-btn
        :disabled="!formIsValid"
        class="mx-2"
        type="submit"
        color="primary"
        dark>
            <v-icon>mdi-floppy</v-icon>
            Guardar
        </v-btn>
        <v-btn
        @click="closeDialog"
        color="primary"
        text>Cerrar</v-btn>
    </form>
</template>

<script>
import { LinkTemplate } from '@/class/Link.class';
import { rules } from '@/library/rules.lib';

export default {
    data: () => ({
        link: new LinkTemplate(),
        rules
    }),

    computed: {
        formIsValid () {
            return (this.link.title && this.link.subtitle);
        }
    },

    methods: {
        closeDialog () { this.$store.commit('dialog/closeDialog') },
        getBackground (background) { this.link.background = background },

        createLink () {
            const { username } = this.$store.state.user.fieldsUser;
            this.link.username = username;

            this.$store.dispatch('link/createLink', this.link);
            this.$store.commit('dialog/closeDialog');
            this.link = new LinkTemplate();
        }
    }
}
</script>
