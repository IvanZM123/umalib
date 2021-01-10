<template>
    <v-sheet elevation="3">
        <v-subheader>
            <v-icon left v-text="header.icon" />
            {{ header.text }}
        </v-subheader>
        <v-layout wrap="">
            <v-flex
            xs12 sm4 md6
            v-for="(item, index) in items"
            :key="index"
            class="pa-2">
            <v-list-item class="pa-0" two-line>
                <v-list-item-avatar tile :color="item.color">
                    <v-icon color="white" v-text="item.icon" />
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                    <v-list-item-subtitle v-text="item.subtitle" />
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
        items: Array
    }
}
</script>