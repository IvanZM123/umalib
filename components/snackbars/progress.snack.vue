<template>
    <v-snackbar
        timeout="-1"
        right
        v-model="progress.status"
        :color="progress.type"
        class="white--text"
    >
        {{ progress.text }}
        <v-progress-circular
        color="green"
        size="30"
        width="7"
        :value="progress.value" />
    </v-snackbar>
</template>

<script>
export default {
    props: {
        progress: Object
    }
}
</script>