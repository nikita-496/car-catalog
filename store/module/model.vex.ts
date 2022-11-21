import { ModelItem } from '../model/Attributes';
import { createModule, mutation, action} from "vuex-class-component";
import { $getModels } from '~/plugins/services';
import {AxiosResponse} from "axios";

const VuexModule = createModule({
  namespaced: "model",
  strict: false,
  target: "nuxt",
})

interface IModelState {
   model: ModelItem[]
}
export class CarModel extends VuexModule implements IModelState {
  public model: ModelItem[] = [
    {
      id: null,
      "make_id" : null, 
      name: '',
    }
  ]

  get getModel() {
    if(this.model) {
      return this.model
    }
  }

  @mutation setModel(payload: ModelItem[]) {
    this.model = payload
  }

  @action async fetchModels(page: number) {
    const response: AxiosResponse = await $getModels(page)
    this.setModel(response.data.data)
  }
}