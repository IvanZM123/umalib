<template>
    <v-list shaped>
        <v-list-item-group>
            <v-list-item @click="changeDark">
                <v-list-item-icon>
                    <v-icon>mdi-lamp</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Apagar las luces</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
                <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Cerrar sesion</v-list-item-title>
            </v-list-item>
        </v-list-item-group>
    </v-list>
</template>

<script>
export default {
    methods: {
        logout () { this.$store.dispatch('user/logout') },

        changeDark () {
            if (this.$vuetify.theme.isDark) {
                this.$vuetify.theme.isDark = false;
            } else {
                this.$vuetify.theme.isDark = true;
            }
        }
    }
}
</script>
