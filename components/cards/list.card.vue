<template>
    <v-sheet elevation="3">
        <v-subheader>
            <v-icon left v-text="header.icon" />
            {{ header.text }}
        </v-subheader>
        <v-layout wrap>
            <v-flex xs12 sm4 md6
            v-for="(item ,index) in data"
            :key="index">
                <v-list-item :to="item.url" v-if="index < 8" dense>
                    <v-list-item-avatar>
                        <v-img :src="`/${root}/${item.img}`" />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"  />
                        <v-list-item-subtitle v-text="item.category" />
                    </v-list-item-content>
                </v-list-item>
            </v-flex>
        </v-layout>
    </v-sheet>
</template>

<script>
export default {
    props: {
        header: Object,
        data: Array,
        root: String
    }
}
</script>
