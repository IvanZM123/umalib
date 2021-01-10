// Import << axios >>
import axios from 'axios';

// Import messages
import { notifyMyBooks, notifyBook } from '@/resources/messages.resource';

// Import << FormPacker >>
import { FormPacker } from '@/helpers/FormPacker';
let { packer } = new FormPacker();

export const state = () => ({
    booksLibrary: [],
    myBooks: [],
    book: {},
    step: 1
});

export const mutations = {
    updateBooksLibrary (state, books) { state.booksLibrary = books },
    updateMyBooks (state, myBooks) { state.myBooks = myBooks },
    updateBook (state, book) { state.book = book },
    updateStep (state, step) { state.step = step }
}

export const actions = {
    nextStep ({ commit }, step) { commit('updateStep', step) },
    getDataStep ({ commit }, dataStepOne) { commit('updateBook', dataStepOne) },

    async getAllBooks ({ commit }) {
        let { data } = await axios.get('/api/book');
        commit('updateBooksLibrary', data);
    },

    async createBook({ commit }, book) {
        const FORMULARY = packer(book);
        let { data } = await axios.post('/api/book/create', FORMULARY);

        commit('updateBooksLibrary', data);
        commit('updateStep', 3);

        setTimeout(() => { commit('updateStep', 1); }, 5000);
    },

    async updateBook ({ commit }, {book, id}) {
        const FORMULARY = packer(book);
        let { data } = await axios.put(`/api/book/update/${ id }`, FORMULARY);
        commit('updateBooksLibrary', data);
        this.dispatch('notification/getNotification', notifyBook.update);
    },

    async deleteBook ({ commit }, id) {
        let { data } = await axios.delete(`/api/book/delete/${ id }`);
        
        commit('updateBooksLibrary', data);
        this.dispatch('notification/getNotification', notifyBook.delete);
    },

    async deleteMyBook ({ commit }, id) {
        let { data } = await axios.delete(`/api/book/deleteMyBook/${ id }`);
        
        commit('updateMyBooks', data);
        this.dispatch('notification/getNotification', notifyMyBooks.delete);
    },

    async getMyBooks ({ commit }) {
        let { data } = await axios.get('/api/book/myBooks');
        commit('updateMyBooks', data);
    },

    async addMyBooks({ commit }, book) {
        let { data } = await axios.post(`/api/book/addMyBooks/`, book);
        
        commit('updateMyBooks', data);
        this.dispatch('notification/getNotification', notifyMyBooks.create);
    }
}
