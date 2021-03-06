import axios from 'axios'


export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters: {
        authenticated (state){
            return state.token && state.user
        },
        user (state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token=token
        },
        SET_USER(state, data) {
            state.user=data
        }
    },
    actions: {
        async signIn( {dispatch}, credentials) {
            let response = await axios.post('api/auth/signin', credentials)
            dispatch('attempt', response.data.accessToken);
        },
        async attempt ( {commit, state}, token) {
            if (token) {
                commit('SET_TOKEN', token);
            }
            if (!state.token) {
                return
            }
            try {
                let response = await axios.get('/api/authme')
                commit('SET_USER', response.data)
                console.log('signin state is: ', this.state)
            } catch (e) {
                commit('SET_USER', null)
                commit('SET_TOKEN', null)
                console.log('check signin status failed')
            }
        },
        signOut({commit}) {
            return axios.post('/api/auth/signout').then(()=> {
                commit('SET_TOKEN', null)
                commit('SET_USER',null)
            })
        }
    }
}