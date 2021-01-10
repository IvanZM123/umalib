<template>
    <div>
        <v-layout wrap align-center>
            <v-flex xs12 sm4 md3 class="pa-1">
                <v-sheet color="transparent" class="text-center">
                    <v-btn @click="openDialog" fab>
                        <v-icon>mdi-link</v-icon>
                    </v-btn>
                </v-sheet>
            </v-flex>
            <v-flex xs12 sm6 md3
            id="container"
            v-for="(link, index) in links"
            :key="index"
            class="pa-2">
                <CardLinkComponent v-bind:link="link" />
            </v-flex>
        </v-layout>

        <LinkDialog
        v-bind:name="nameDialog"
        v-bind:dialog="dialog"
        v-bind:dialogEdit="dialogEdit"
        v-bind:nameDialogEdit="nameDialogEdit"
        v-bind:dataForm="dataLink" />
    </div>
</template>

<script>
import CardLinkComponent from '@/components/cards/link.card';
import LinkDialog from '@/components/dialog/link.dialog';

export default {
    layout: 'user',

    components: { CardLinkComponent, LinkDialog },

    data: function () {
        return {
            items: []
        }
    },

    computed: {
        links () { return this.$store.state.link.links },
        
        //Dialog create
        dialog () { return this.$store.state.dialog.dialog },
        nameDialog () { return this.$store.state.dialog.modalComponent },
        
        // Dialog edit
        dialogEdit () { return this.$store.state.dialog.dialogEdit },
        nameDialogEdit () { return this.$store.state.dialog.modalEditComponent },

        dataLink () {
            const { dataFormDialog } = this.$store.state.dialog;
            return dataFormDialog;
        }
    },

    methods: {
        openDialog () {
            this.$store.commit('dialog/showDialog', 'link-create');
        }
    },

    beforeCreate () {
        this.$store.dispatch('link/getAllLinks');
    }
}
</script>
