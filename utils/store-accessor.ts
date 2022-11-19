import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import CommonModule from '~/store/CommonModule'

// this is the name we'll use to import the module
let commonModuleStore: CommonModule

function initialiseStores(store: Store<any>): void {
  commonModuleStore = getModule(CommonModule, store)
}

export { initialiseStores, commonModuleStore }