export const state = () => ({
    accessToken: {}
});

export const mutations = {
    accessToken(state, data) {
        state.accessToken = data;
    }
}
