import Vuex from "vuex";
import { extractVuexModule, createProxy } from "vuex-class-component";
import { CarMake } from './module/make.vuex';
import { Car } from './module/car.vuex';
import { CarTrim } from './module/trim.vuex';
import { CarEngine } from './module/engine.vuex';
import { CarBody } from './module/body.vuex';
import { CarModel } from './module/model.vex';
import { Loading } from "./loading.vuex";

export const store = new Vuex.Store({
  state:{
    isLoading: false
  },
  modules: {
    ...extractVuexModule( CarTrim ),
    ...extractVuexModule( Car ),
    ...extractVuexModule( CarMake ),
    ...extractVuexModule( CarModel ),
    ...extractVuexModule( CarBody ),
    ...extractVuexModule( CarEngine ),
    ...extractVuexModule ( Loading )
  },
  getters: {
    getLoading(state) {
      return state.isLoading
    }
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload;
    }
  },
  actions: {
    beginLoading({ commit }) {
      commit('setLoading', true);
    },
    endLoading({ commit }) {
      commit('setLoading', false);
    },
  }
})

export const vmx = {
  trim: createProxy(store, CarTrim),
  car: createProxy(store, Car),
  make: createProxy(store, CarMake),
  model: createProxy(store, CarModel),
  body: createProxy (store, CarBody),
  engine: createProxy(store, CarEngine),
  loading: createProxy(store, Loading)
}
