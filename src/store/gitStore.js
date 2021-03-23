export default {
    state: {
        stars: ['Not stars', '★', '★★', '★★★', '★★★★', '★★★★★'],
        repos: [],
        profileUsers: [],
    },
    mutations: {
        setProfileUsers (state, payload) {
            state.profileUsers = payload;
        },
        setRepos (state, payload) {
            state.repos = payload;
        },
    }, 
    actions: {
        setProfileUsers ({commit}, payload) {
            commit('setProfileUsers', payload);
        },
        setRepos ({commit}, payload) {
            commit('setRepos', payload);
        },
    },
    getters: {
       getStars (state) {
            return state.stars;
       },
       getProfileUsers (state) {
            return state.profileUsers;
       },
       getRepos (state) {
        return state.repos;
       },

    },
}

