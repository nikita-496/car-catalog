import { vmx } from './../store.vuex';
import { BodyItem } from '../model/Attributes';
;
import { createModule, mutation, action } from "vuex-class-component";
import { $getBodies } from '~/plugins/services';
import {AxiosResponse} from "axios";
import Storage from "~/persistent/locale-storage";

const VuexModule = createModule({
  namespaced: "body",
  strict: false,
  target: "nuxt",
})

interface ICarBodyState {
   body: BodyItem[]
}
export class CarBody extends VuexModule implements ICarBodyState {
  public body: BodyItem[] = [
    {
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
    }
  ]
  
  get getBody() {
    if(this.body) {
      return this.body
    }
  }
  
  @mutation setBody(payload: BodyItem[]) {
    this.body = payload
  }

  @action async fetchBody(page: number) {

    const value = Storage.get("query_value")
    const type =  Storage.get("query_type")?.toLowerCase()
    const attributes = value ? `${type}=${value}` : ''

    const response: AxiosResponse = await $getBodies(page, attributes)
    vmx.trim.setAmount(response.data.collection.total)
    this.setBody(response.data.data)
  }
}