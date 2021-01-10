<template>
    <v-snackbar
        v-model="notify.status"
        :color="notify.type"
        right
    >
        {{ notify.text }}
        <v-icon color="white" v-text="notify.icon" />
    </v-snackbar>
</template>

<script>
export default {
    props: {
        notify: Object
    }
}
</script>