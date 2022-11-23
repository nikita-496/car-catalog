import { vmx } from './../store.vuex';
import  Storage  from '~/persistent/locale-storage';
import { EngineItem } from '../model/Attributes';
import { createModule, mutation, action } from "vuex-class-component";
import { $getEngines} from '~/plugins/services';
import {AxiosResponse} from "axios";

const VuexModule = createModule({
  namespaced: "engine",
  strict: false,
  target: "nuxt",
})

interface ICarEngineState {
   engine: EngineItem[]
}
export class CarEngine extends VuexModule implements ICarEngineState {
  public engine: EngineItem[] = [
    {
      id: null,
      "make_model_trim_id": null,
      "engine_type": '',
      "fuel_type": '',
      cylinders: '',
      size: '',
      "horsepower_hp": null,
      "horsepower_rpm": null,
      "torque_ft_lbs": null,
      "torque_rpm": null,
      valves: null,
      "valve_timing": '',
      "cam_type": '',
      "drive_type": '',
      transmission: ''
    }
  ]

  get getEngine() {
    if(this.engine) {
      return this.engine
    }
  }
  
  @mutation setEngine(payload: EngineItem[]) {
    this.engine = payload
  }

  @action async fetchEngine(page: number) {
    const type =  Storage.get("query_type")?.toLowerCase()
    const value = Storage.get('query_value')
    const attributes = `${type}=${value}`
    const response: AxiosResponse = await $getEngines(page, attributes)
    vmx.trim.setAmount(response.data.collection.total)
    this.setEngine(response.data.data)
  }
}
