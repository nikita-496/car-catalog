import Vuex from "vuex";
import { extractVuexModule, createProxy } from "vuex-class-component";
import { CarMake } from './module/make.vuex';
import { Car } from './module/car.vuex';
import { CarTrim } from './module/trim.vuex';
import { CarEngine } from './module/engine.vuex';
import { CarBody } from './module/body.vuex';
import { CarColor } from './module/color.vuex';
import { CarModel } from './module/model.vex';

export const store = new Vuex.Store({
  modules: {
    ...extractVuexModule( CarTrim ),
    ...extractVuexModule( Car ),
    ...extractVuexModule( CarMake ),
    ...extractVuexModule( CarModel ),
    ...extractVuexModule( CarColor ),
    ...extractVuexModule( CarBody ),
    ...extractVuexModule( CarEngine )
  }
})

export const vmx = {
  trim: createProxy(store, CarTrim),
  car: createProxy(store, Car),
  make: createProxy(store, CarMake),
  model: createProxy(store, CarModel),
  color: createProxy (store, CarColor),
  body: createProxy (store, CarBody),
  engine: createProxy(store, CarEngine)
}
