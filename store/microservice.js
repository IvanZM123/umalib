//Require axios
import axios from 'axios';

export const state = () => ({
    downloadsFiles: []
});

export const mutations = {
    updateDownloadFile (state, downloadsFiles) {
        state.downloadsFiles = downloadsFiles;
    }
}

export const actions = {
    async getAllDownloadFile ({ commit }, username) {
        const { data } = await axios.get('/api/microservice');
        commit('updateDownloadFile', data);
    },

    async deleteDownload ({ commit }, id) {
        let { data } = await axios.delete(`/api/microservice/delete/${ id }`);
        commit('updateDownloadFile', data);
    }
}