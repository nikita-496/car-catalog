import { createModule, mutation, action } from "vuex-class-component";

const VuexModule = createModule({
  namespaced: "loading",
  strict: false,
  target: "nuxt",
})

interface ILoadingState {
   isLoading: boolean
}

export class Loading extends VuexModule implements ILoadingState {
  public isLoading: boolean = false
  

  get getLoading() {
    if(this.isLoading) {
      return this.isLoading
    }
  }

  @mutation setLoading(payload: boolean) {
    this.isLoading = payload;
  }

  @action async beginLoading() {
    this.setLoading(true)
  }

  @action async endLoading() {
    this.setLoading(false)
  }
}