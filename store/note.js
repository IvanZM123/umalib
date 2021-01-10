// Import axios
import axios from 'axios';

// Import << FormPacker >>
import { FormPacker } from '@/helpers/FormPacker';
const { packer } = new FormPacker();

// Import messages
import { notifyNote } from '@/resources/messages.resource';

export const state = () => ({
    notes: []
});

export const mutations = {
    updateNotes (state, notes) { state.notes = notes }
}

export const actions = {
    async getAllNotes ({ commit }) {
        const { data } = await axios.get('/api/note');
        commit('updateNotes', data);
    },

    async createNote ({ commit }, note) {
        const formulary = packer(note);
        const { data } = await axios.post('/api/note/create', formulary);

        commit('updateNotes', data);
        this.dispatch('notification/getNotification', notifyNote.createNote);
    },

    async updateNote ({ commit }, note) {
        const formulary = packer(note);
        const { data } = await axios.put('/api/note/update', formulary);

        commit('updateNotes', data);
        this.dispatch('notification/getNotification', notifyNote.updateNote);
    },

    async deleteNote ({ commit }, id) {
        const { data } = await axios.delete(`/api/note/delete/${ id }`);
        
        commit('updateNotes', data);
        this.dispatch('notification/getNotification', notifyNote.deleteNote);
    }
}
