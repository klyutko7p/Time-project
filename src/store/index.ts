import Vuex, { StoreOptions } from 'vuex'
import axios from "axios";
import { RootState } from './types';

const store:StoreOptions<RootState> = {
  state: {
    allTimeZones: [],
    zone: {},
  },
  getters: {
    getAllTimeZones(state) {
      return state.allTimeZones;
    },
    getZone(state) {
      return state.zone;
    }
  },
  mutations: {
    setAllTimeZones(state, payload) {
      state.allTimeZones = payload;
    },
    setZone(state, payload) {
      state.zone = payload;
    }
  },
  actions: {
    async fetchAllTimeZones({ commit }) {
      return await axios
        .get("http://api.timezonedb.com/v2.1/list-time-zone?key=CUFI9BLCE4A7&format=json")
        .then((result) => {
          let allTimeZones = result.data.zones;
        commit("setAllTimeZones", allTimeZones);
      })
    },
    async fetchCity({ commit }, zone) {
      return await axios
        .get(`http://api.timezonedb.com/v2.1/get-time-zone?key=CUFI9BLCE4A7&format=json&by=zone&zone=${zone}`)
        .then((result) => {
          let zone = result.data;
        commit("setZone", zone);
      })
    },
  },
}
export default new Vuex.Store<RootState>(store)
