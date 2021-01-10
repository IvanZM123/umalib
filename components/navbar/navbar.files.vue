<template>
<div>
    <v-toolbar dense flat color="transparent">
        <v-subheader class="px-0">
            <v-icon left :color="titleNav.color" v-text="titleNav.icon" />
                {{ titleNav.name }}
        </v-subheader>
        <v-spacer />
        <v-btn v-if="folder" icon @click="showDialog('folder')">
            <v-icon>mdi-folder</v-icon>
        </v-btn>
        <v-btn icon @click="showDialog('file')">
            <v-icon>mdi-file</v-icon>
        </v-btn>
    </v-toolbar>
    <v-divider />
</div>
</template>

<script>
export default {
    methods: {
        showDialog (dialog) { this.$store.commit('dialog/showDialog', dialog) }
    },

    props: {
        folder: Boolean,
        titleNav: Object
    }
}
</script>
