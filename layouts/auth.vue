<template>
    <v-app>
        <v-main>
            <v-sheet id="sheet" height="100vh" width="100%" tile>
                <nuxt/>
            </v-sheet>
        </v-main>
    </v-app>
</template>

<script>
export default {
    created () {
        this.$store.dispatch('user/getDataUser');
    }
}
</script>

<style scoped>
    #sheet {
        background-image: url("/slides/background2.jpg");
        background-size: cover;
    }
</style>
