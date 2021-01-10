// Import << FormPacker >>
import { FormPacker } from '@/helpers/FormPacker';
const { packer } = new FormPacker();

// Import notify
import { notifyFolder } from '@/resources/messages.resource';

// Import << axios >>
import axios from 'axios';

export const state = () => ({
    folders: []
});

export const mutations = {
    updateFolders (state, folders) {
        state.folders = folders;
    }
}

export const actions = {
    async getAllFolders ({ commit }) {
        const { data } = await axios.get('/api/folder/');
        commit('updateFolders', data);
    },

    async createFolder ({ commit }, folder) {
        const form = packer(folder);
        const { data } = await axios.post('/api/folder/create', form);
        
        commit('updateFolders', data);
        this.dispatch('notification/getNotification', notifyFolder.createFolder);
    },

    async updateFolder ({ commit }, folder) {
        const form = packer(folder);
        const { data } = await axios.put('/api/folder/update', form);
        
        commit('updateFolders', data);
        this.dispatch('notification/getNotification', notifyFolder.updateFolder);
    },

    async deleteFolder ({ commit }, id) {
        const { data } = await axios.delete(`/api/folder/delete/${ id }`);
        
        commit('updateFolders', data);
        this.dispatch('notification/getNotification', notifyFolder.deleteFolder);
    }
}
