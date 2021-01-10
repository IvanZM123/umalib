export const state = () => ({
    notify: { status: false, type: '', text: '', icon: '' },
    progress: { status: false, type: '', text: '', value: 0 }
});

export const mutations = {
    updateNotification (state, notification) {
        state.notify = notification;
    },

    updateProgress (state, progress) {
        state.progress = progress;
    }
}

export const actions = {
    getNotification ({ commit }, notification) {
        commit('updateNotification', notification);

        setTimeout(() => {
            commit('updateNotification', {
                status: false,
                type: '',
                text: '',
                icon: ''
            });
        }, 5000);
    },

    getProgressUpload ({ commit }, progress) {
        commit('updateProgress', {
            status: true,
            type: 'dark',
            text: 'El archivo se esta subiendo',
            value: progress
        });
    }
}
