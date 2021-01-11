<template>
    <v-snackbar
        v-model="notify.status"
        :color="notify.type"
        class="d-flex w-100"
        right
    >
        <v-icon
            class="mr-2"
            color="white"
            v-text="notify.icon"
        />
        <span>{{ notify.text }}</span>
    </v-snackbar>
</template>

<script>
export default {
    props: {
        notify: Object
    }
}
</script>