import { TrimItem } from '../model/Attributes';
;
import { createModule, mutation, action } from "vuex-class-component";
import { $getTrims } from '~/plugins/services';
import {AxiosResponse} from "axios";
import Storage from "~/persistent/locale-storage";

const VuexModule = createModule({
  namespaced: "trim",
  strict: false,
  target: "nuxt",
})

interface ICarTrimState {
   trim: TrimItem[],
   amount: number
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
  public amount: number = 0
  
  get getTrim() {
    if(this.trim) {
      return this.trim
    }
  }

  get getAmount() {
    return this.amount
  }

  @mutation setTrim(payload: TrimItem[]) {
    this.trim = payload
  }

  @mutation setAmount(payload: number) {
    this.amount = payload
  }

  @action async fetchTrim(page: number) {

    const value = Storage.get("query_value")
    const type =  Storage.get("query_type")?.toLowerCase()
    const attributes = value ? `&${type}=${value}` : ''

    const response: AxiosResponse = await $getTrims(page, attributes)
    Storage.remove("query_value")
    Storage.remove("query_type")

    this.setTrim(response.data.data)
    this.setAmount(response.data.collection.total)
  }

}
