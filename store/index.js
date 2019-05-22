import axios from 'axios'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, user) {
    console.log(user)
    state.authUser = user
    state.loggedIn = true
  }
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { email, password }) {

    try {
      const { data } = await axios.post('http://localhost:8080/api/v1/user/login', { email, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async register({ commit }, { email, password, roles }) {
    console.log(roles)
    try {
      const { data } = await axios.post('http://localhost:8080/api/v1/user/register', { email, password, roles })
      console.log(data)
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout({ commit }) {
    await axios.post('http://localhost:8000/api/logout')
    commit('SET_USER', null)
  },

  async submitCase({commit}, {author, receiver, submitDate, subject, title, text}){
    try{
      const { data } = await axios.post('http://localhost:8080/api/v1/case', { author, receiver, submitDate, subject, title, text })
      console.log(submitDate)
      console.log(text)
      console.log("content")
      // commit('SET_CASE', data)
    }catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }

  }

}
