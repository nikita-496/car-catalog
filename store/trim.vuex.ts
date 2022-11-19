import { TrimItem } from './model/Attributes';
;
import { createModule, mutation, action } from "vuex-class-component";
import { $getTrims } from '~/plugins/services';
import {AxiosResponse} from "axios";

const VuexModule = createModule({
  namespaced: "trim",
  strict: false,
  target: "nuxt",
})

interface ICarTrimState {
   trim: TrimItem[]
}
export class CarTrim extends VuexModule implements ICarTrimState {
  public trim: TrimItem[] = [
    {
      id: null,
      "make_id": null,
      year: null,
      name: '',
      description: '',
      msrp: null,
      invoice: null
    }
  ]
  
  @mutation setTrim(payload: TrimItem[]) {
    this.trim = payload
  }

  @action async fetchTrim(page: number) {
    const response: AxiosResponse = await $getTrims(page)
    this.setTrim(response.data.data)
  }

  get getTrim() {
    if(this.trim) {
      return this.trim
    }
  }

}
