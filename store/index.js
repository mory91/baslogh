import axios from 'axios'

export const state = () => ({
  authUser: null,
  chartData: null
})

export const mutations = {
  SET_USER: function (state, user) {
    localStorage.setItem("user", JSON.stringify({email: user.email, token: user.token, id: user.id}))
    this.$axios.setToken(user.token, 'Bearer')
    state.authUser = user
    state.loggedIn = true
  },
  SET_FILTER: function (state, filters) {
    if (state.filters == undefined) {
      state.filters = {}
    }
    state.filters = {...state.filters, ...filters}
    console.log(state.filters)
  },
  SET_CHART_DATA: function (state, chartData) {
    state.chartDate = chartData
  }
}

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let user = null;
    if (process.browser) {
       user = JSON.parse(localStorage.getItem("user"))
    }
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    } else if(user) {
      commit('SET_USER', user)
    }
  },
  nuxtClientInit({ commit }, { req }) {
    let user = null;
    if (process.browser) {
      user = JSON.parse(localStorage.getItem("user"))
      console.log("xxxxxxxxxxxxxxxxx")
      console.log(user)
    }
    if (req && req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    } else if(user) {
      commit('SET_USER', user)
    }
  },
  async login({ commit }, { email, password }) {

    try {
      const { data } = await axios.post('http://localhost:8080/api/v1/user/login', { email, password })
      console.log(data)
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
  async setChartData ({ commit }, data) {
    commit('SET_CHART_DATA', data)
  },
  async submitCase({commit}, {author, receiver, submitDate, subject, title, text}){
    try{
      const { data } = await axios.post('http://localhost:8080/api/v1/case/submit', { author, receiver, submitDate, subject, title, text })
      // commit('SET_CASE', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async editProfile({commit}, user){
    try{
      const { data } = await axios.post('http://localhost:8080/api/v1/profile/editProfile/'+user.id, user)
      // commit('SET_CASE', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }

  },
  async filter_cases ({commit}, data) {
    commit('SET_FILTER', data)
  }

}
