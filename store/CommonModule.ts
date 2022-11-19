import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  // change the name to lower case
  name: 'CommonModule',
  namespaced: true,
  stateFactory: true,
})
// no need to name the class:
export default class extends VuexModule {
  message: string = 'hi'

  @Mutation
  public SET_MESSAGE(val: string) {
    this.message = val
  }
}