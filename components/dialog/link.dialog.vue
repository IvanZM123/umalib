<template>
    <div>
        <v-dialog
        max-width="500px"
        persistent
        v-if="name == 'link-create'"
        v-model="dialog">
            <v-sheet elevation="3" class="pa-5">
                <FormLink />
            </v-sheet>
        </v-dialog>

        <v-dialog 
        max-width="500px"
        persistent
        v-if="nameDialogEdit == 'link-edit'"
        v-model="dialogEdit">
            <v-sheet elevation="3" class="pa-5">
                <FormLinkEdit v-bind:linkProp="dataLink" />
            </v-sheet>
        </v-dialog>
    </div>
</template>

<script>
import FormLink from '@/components/formularies/link/link.form';
import FormLinkEdit from '@/components/formularies/link/link.form.edit';
import { FormDataEdit } from '@/helpers/FormEdit.helper';

export default {
    components: { FormLink, FormLinkEdit },

    props: {
        dialog: Boolean,
        name: String,

        dialogEdit: Boolean,
        nameDialogEdit: String,
        dataForm: Object
    },

    computed: {
        dataLink () {
            const { setDataLink } = new FormDataEdit();
            return setDataLink(this.dataForm);
        }
    }
}
</script>
