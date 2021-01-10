import axios from 'axios';

export const state = () => ({
    fieldsUser: undefined,
    filesDashboard: [],
    booksDashboard: []
});

export const mutations = {
    updateDataUser (state, user) {
        state.fieldsUser = user;
        this.$router.replace('/profile');
    },

    updateFilesDash (state, files) { state.filesDashboard = files }
}

export const actions = {
    async getDataUser ({ commit }) {
        const { data } = await axios.get('/api/user/profile');
        
        if (data.status) { }
        else { commit('updateDataUser', data.user) }
    },

    async logout ({ commit }) {
        await axios.get('/api/user/logout');
        this.$router.replace('/auth/signin.local');
        
        setTimeout(() => {
            commit('updateDataUser', undefined);
        }, 1000);
    }
}
