<template>
    <v-card dark
    :color="note.color"
    :to="`/profile/myNotes/${ note._id }`">
        <v-list-item two-line>
            <v-list-item-content>
                <v-list-item-subtitle class="mb-1">
                    {{ note.title }} - {{ showDate(note.created_at) }}
                </v-list-item-subtitle>
                <v-list-item-title id="word-title" class="mb-2" v-text="note.subtitle" />
                <v-list-item-subtitle v-text="note.description" />
            </v-list-item-content>
        </v-list-item>
    </v-card>
</template>

<script>
import { parseDate } from '@/helpers/created.helper';

export default {
    props: {
        note: Object
    },

    methods: {
        showDate (date) { return parseDate(date) }
    }
}
</script>
