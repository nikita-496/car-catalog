import { MakeItem } from '../model/Attributes';
import { createModule, mutation, action } from "vuex-class-component";
import { $getMakes } from '~/plugins/services';
import {AxiosResponse} from "axios";

const VuexModule = createModule({
  namespaced: "make",
  strict: false,
  target: "nuxt",
})

interface ICarMakeState {
   make: MakeItem[]
}
export class CarMake extends VuexModule implements ICarMakeState {
  public make: MakeItem[] = [
    {
      id: null,
      name: '',
    }
  ]

  get getMake() {
    if(this.make) {
      return this.make
    }
  }

  @mutation setMake(payload: MakeItem[]) {
    this.make = payload
  }

  @action async fetchMakes(page: number) {
    const response: AxiosResponse = await $getMakes(page)
    this.setMake(response.data.data)
    console.log(this.make)
  }
}