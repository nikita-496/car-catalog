import Vuex from "vuex";
import { extractVuexModule, createProxy } from "vuex-class-component";
import { Car } from './car.vuex';
import { CarTrim } from './trim.vuex';

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule( CarTrim ),
    ...extractVuexModule( Car ),
  }
})

export const vmx = {
  trim: createProxy( store, CarTrim),
  car: createProxy( store, Car),
}
