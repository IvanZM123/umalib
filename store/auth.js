// Import << FormPacker >>
const { FormPacker } = require('../helpers/FormPacker');
const { packer } = new FormPacker();

// Import axios
import axios from 'axios';

export const actions = {
    async signup ({ commit }, user) {
        const form = packer(user);
        const { data } = await axios.post(`/api/auth/local.signup`, form);
        
        if(data.status){
            this.dispatch('notification/getNotification', data);
        }else{
            this.commit('user/updateDataUser', data.user);
        }
    },

    async signin ({ commit }, credentials) {
        const form = packer(credentials);
        const { data } = await axios.post('/api/auth/local.signin', form);

        if(data.status){
            this.dispatch('notification/getNotification', data);
        }else{
            this.commit('user/updateDataUser', data.user);
        }
    }
}
