export const state = () => ({
    accessToken: '',
    user: '',
});

export const mutations = {
    accessToken(state, data) {
        state.accessToken = data;
    },
    user(state, data) {
        state.user = data;
    }
}
