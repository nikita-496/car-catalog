import { vmx } from '../store/store.vuex';
import Storage from "~/persistent/locale-storage";

const recognizeModule = async (page?: number) => {
  let state: any
  switch(Storage.get("query_type")) {
    case "RGB":
      if (Storage.get('mode') === 'exterior') {
          await vmx.color.fetchExterior(page ? page: 1)
          state = vmx.color.getExterior
          break
          }
      else if (Storage.get('mode') === 'interior') {
        {
           await vmx.color.fetchInterior(page ? page: 1)
           state =  vmx.color.getInterior
           break
        } 
      }

    case "TYPE":
      {
        await vmx.body.fetchBody(page ? page: 1)
        state = vmx.body.getBody
        break
      }
      
    case "ENGINE_TYPE":
      {
        await vmx.engine.fetchEngine(page ? page: 1)
        state = vmx.engine.getEngine
        break
      }
    
    default:
      await vmx.trim.fetchTrim(page ? page: 1)
      state = vmx.trim.getTrim 
  }
  return state
}

export default recognizeModule