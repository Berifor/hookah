
const appSettings = require("tns-core-modules/application-settings");
import  authService  from '../services/auth.service';
import Home from '../components/Home'
const settings = {
  namespaced: true,
  state: {
    user:null,
    statusSendCode:null,
    country:null
  },

  actions: {
    async startRegister({ commit },user) {
      const token = await authService.startRegister(user)
      appSettings.setString("token",token)
      global.vm.$navigateTo(Home)
    },
    async auth({ commit },user) {
      const token = await authService.auth(user)
      appSettings.setString("token",token)
      global.vm.$navigateTo(Home)
    },
    async getUserInfo({commit}) {
      const user = await authService.getUserInfo()
      commit('setUser', user)
    },
    async getConfirm({commit}) {
      const data = await authService.getConfirm()
    },
    async register({commit},code) {
      const data = await authService.register(code)
      commit('setStatusSendCode',data)
    },
    async country({commit}) {
      const data = await authService.country()
      commit('setCountry',data)
    },
  },

  mutations: {
    setUser(state,user){
      state.user = user
    },
    setStatusSendCode(state,statusSendCode){
      state.statusSendCode = statusSendCode
    },
    setCountry(state,country){
      state.country = country
    }
  },
}



export default settings