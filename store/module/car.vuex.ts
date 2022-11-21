import { ColorItem, EngineItem,  TrimItem, TrimUniqItem } from '../model/Attributes';
;
import { createModule, mutation, action } from "vuex-class-component";
import { $getTrimsById } from '~/plugins/services';
import {AxiosResponse} from "axios";

const VuexModule = createModule({
  namespaced: "car",
  strict: false,
  target: "nuxt",
})

type ID = number | null

interface ICarState {
   car: TrimUniqItem[]
}
export class Car extends VuexModule implements ICarState {
  public car: TrimUniqItem[] = [
    {
      id: null,
      "make_model_id" : null, 
      year: null,
      name: '',
      description: '', 
      msrp: null,
      invoice: null,
      "make_model_trim_interior_colors": [
        {
          id: null,
          "make_model_trim_id": null,
          name: '',
          rgb: ''
        },
      ],
      "make_model_trim_exterior_colors": [
        {
          id: null,
          "make_model_trim_id": null,
          name: '',
          rgb: ''
        },
      ],
      "make_model_trim_mileage": {
        id: null,
        "make_model_trim_id": null,
        "fuel_tank_capacity": '',
        "combined_mpg": null,
        "epa_city_mpg": null,
        "epa_highway_mpg": null,
        "range_city": null,
        "range_highway": null
      },
      "make_model_trim_engine": {
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
      },
      "make_model_trim_body": {
        id: null,
        "make_model_trim_id": null,
        type: '',
        doors: null,
        length: '',
        width: '',
        seats: null,
        height: '',
        "wheel_base": '',
        "front_track": '',
        "rear_track": '',
        "ground_clearance": '',
        "cargo_capacity": '',
        "max_cargo_capacity": null,
        "curb_weight": null,
        "gross_weight": null,
        "max_payload": null,
        "max_towing_capacity": null
      },
      "make_model": {
        model: {
          id: null,
          "make_id" : null, 
          name: '',
        },
        'make': {
          id: null,
          name: ''
        }
      },
  }
  ]

  get getCar() {
    if(this.car) {
      return this.car
    }
  }
  
  @mutation setCar(payload: TrimUniqItem[]) {
    this.car = payload
  }

  @action async fetchGroupCarById(promises: TrimItem[] | ColorItem[] | EngineItem[]) {
    let result: Promise<Object> | Object= {} 
      result =  await Promise.all(promises.map(async (promise: TrimItem | ColorItem | EngineItem ):Promise<Object> => {
        const id: ID = promise['make_model_trim_id'] ? promise['make_model_trim_id'] : promise.id
        const response: AxiosResponse = await $getTrimsById(id)
        return response.data
      }))
    this.setCar(result)
  }

  @action async fetchCarById(id: number) {
    const response: AxiosResponse = await $getTrimsById(id)
    this.setCar(response.data)
  }
}

