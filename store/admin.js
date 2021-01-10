// Import axios
import axios from 'axios';

export const state = () => ({
    registered_users: []
})

export const mutations = {
    updateRegisteredUsers (state, users) {
        state.registered_users = users;
    }
}

export const actions = {
    async getAllUsers ({ commit }) {
        const { type } = this.state.user.fieldsUser;
        const { data } = await axios.get('/api/admin/getAllUsers', {
            headers: { "authorization": type }
        });

        if (data.status) { console.log(data) }
        else { commit('updateRegisteredUsers', data) }
    }
}
