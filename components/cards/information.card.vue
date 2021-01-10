<template>
    <v-sheet
    elevation="3"
    :color="data.color"
    dark>
        <v-layout wrap align-center>
            <v-flex xs9>
                <div class="px-3">
                    <h1
                    style="font-family: Oswald; font-size: 50px"
                    v-text="data.number" />
                    <p v-text="data.text" />
                </div>
            </v-flex>
            <v-flex xs3 class="text-center">
                <v-icon large v-text="data.icon" />
            </v-flex>
        </v-layout>
        <v-btn
        :to="data.url"
        width="100%"
        small
        color="rgba(0,0,0,.1)"
        elevation="0">
            Ver todos <v-icon small right>mdi-plus</v-icon>
        </v-btn>
    </v-sheet>
</template>

<script>
export default {
    props: {
        data: Object
    }
}
</script>