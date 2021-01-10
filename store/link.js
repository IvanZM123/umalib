// Import << axios >>
import axios from 'axios';

// Import << FormPacker >>
import { FormPacker } from '@/helpers/FormPacker';
const { packer } = new FormPacker();

// Import messsage
import { notifyLink } from '@/resources/messages.resource';

export const state = () => ({
    links: []
});

export const mutations = {
    updateLinks (state, links) { state.links = links }
}

export const actions = {
    async getAllLinks ({ commit }) {
        let { data } = await axios.get('/api/link');
        commit('updateLinks', data);
    },

    async createLink ({ commit }, link) {
        const FORMULARY = packer(link);
        let { data } = await axios.post('/api/link/create', FORMULARY);
        
        commit('updateLinks', data);
        this.dispatch('notification/getNotification', notifyLink.create);
    },

    async updateLink ({ commit }, link) {
        const FORMULARY = packer(link);
        const { data } = await axios.put('/api/link/update', FORMULARY);
        
        commit('updateLinks', data);
        this.dispatch('notification/getNotification', notifyLink.update);
    },

    async deleteLink ({ commit }, id) {
        const { data } = await axios.delete(`/api/link/delete/${ id }`);
        
        commit('updateLinks', data);
        this.dispatch('notification/getNotification', notifyLink.delete);
    }
}
