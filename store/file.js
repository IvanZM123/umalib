// Import << formpacker >>
import { FormPacker } from "~/helpers/FormPacker";
const { packer } = new FormPacker();

// Import messages notify
import { notifyFile } from '@/resources/messages.resource';

// Import axios
import axios from 'axios';
import { progressUpload } from "~/library/progressUpload.lib";


export const state = () => ({
    files: []
});

export const mutations = {
    updateFiles (state, files) { state.files = files }
}

export const actions = {
    async getAllFiles ({ commit }) {
        const { data } = await axios.get('/api/file/');
        commit('updateFiles', data);
    },

    async createFile ({ commit }, file) {
        const formulary = packer(file);
        const { data } = await axios.post('/api/file/create', formulary, {
            onUploadProgress: (event) => {
                const progress = progressUpload(event);
                this.dispatch('notification/getProgressUpload', progress);
            }
        });
        
        commit('updateFiles', data);
        this.dispatch('notification/getNotification', notifyFile.createFile);
    },

    async updateFile ({ commit }, file) {
        const formulary = packer(file);
        const { data } = await axios.put('/api/file/update', formulary, {
            onUploadProgress: (event) => {
                const progress = progressUpload(event);
                this.dispatch('notification/getProgressUpload', progress);
            }
        });

        commit('updateFiles', data);
        this.dispatch('notification/getNotification', notifyFile.updateFile);
    },

    async deleteFile ({ commit }, id) {
        const { data } = await axios.delete(`/api/file/delete/${ id }`);
        
        commit('updateFiles', data);
        this.dispatch('notification/getNotification', notifyFile.deleteFile);
    },

    async deleteAllCategory ({ commit }, dataCategory) {
        let { category, folder } = dataCategory;
        let { data } = await axios.delete(`/api/file/deleteAllCategory/${ category }?folder=${ folder }`);
        
        commit('updateFiles', data);
        this.dispatch('notification/getNotification', notifyFile.deleteFile);
    }
}
