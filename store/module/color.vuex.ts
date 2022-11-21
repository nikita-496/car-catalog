import { ColorItem } from '../model/Attributes';
;
import { createModule, mutation, action } from "vuex-class-component";
import { $getColorExterior, $getColorInterior, $getAllColorExterior, $getAllColorInterior} from '~/plugins/services';
import {AxiosResponse} from "axios";
import Storage from "~/persistent/locale-storage";

const VuexModule = createModule({
  namespaced: "color",
  strict: false,
  target: "nuxt",
})

interface ICarColorState {
  exterior: ColorItem[],
  interior: ColorItem[],
}
export class CarColor extends VuexModule implements ICarColorState {
  public exterior: ColorItem[] = [
    {
      id: null,
      "make_model_trim_id": null,
      name: '',
      rgb: ''
    }
  ]
  public interior: ColorItem[] = [
    {
      id: null,
      "make_model_trim_id": null,
      name: '',
      rgb: ''
    }
  ]

  get getExterior() {
    if(this.exterior) {
      return this.exterior
    }
  }
  get getInterior() {
    if(this.interior) {
      return this.interior
    }
  }

  get getUniqExterior() {
    if(this.exterior) {
      return Array.from(new Set(this.exterior.map(e => e.rgb)))
    }
  }

  get getUniqInterior() {
    if(this.interior) {
      console.log(this.interior)
      return Array.from(new Set(this.interior.map(i => i.rgb)))
    }
  }
  
  @mutation setExteriorColor(payload: []) {
    const newIt: [] = [] 
    payload.forEach((item: []) => {
      item.forEach(i => newIt.push(i))
    })
    this.exterior = newIt
  }

  @mutation setInteriorColor(payload: []) {
    const newIt: [] = [] 
    payload.forEach((item: []) => {
      item.forEach(i => newIt.push(i))
    })
    this.interior = newIt
  }

  @action async fetchEterior(page: number) {
      
    const type =  Storage.get("query_type")?.toLowerCase()
    
    const promises: string[] = JSON.parse(Storage.get('query_value'))
    const result = await Promise.all(promises.map(async (rgb: string):Promise<Object> => {
      const value = rgb
      const attributes = value ? `${type}=${value}` : ''

      const response: AxiosResponse =  await $getColorExterior(page, attributes) 
      return response.data.data
    }))
     this.setExteriorColor(result)
  }

  @action async fetchInterior(page: number) {
      
    const type =  Storage.get("query_type")?.toLowerCase()
    
    const promises: string[] = JSON.parse(Storage.get('query_value'))
    const result = await Promise.all(promises.map(async (rgb: string):Promise<Object> => {
      const value = rgb
      const attributes = value ? `${type}=${value}` : ''

      const response: AxiosResponse =  await $getColorInterior(page, attributes)
      return response.data.data
    }))
    this.setInteriorColor(result)
  }

  @action async fetchALLExterior() {
    const response: AxiosResponse = await $getAllColorExterior()
    this.setExteriorColor(response.data.data)
  }

  @action async fetchALLInterior() {
    const response: AxiosResponse = await $getAllColorInterior()
    this.setInteriorColor(response.data.data)
  }

}