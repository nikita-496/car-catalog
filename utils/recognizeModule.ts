import { vmx } from '../store/store.vuex';
import Storage from "~/persistent/locale-storage";

const recognizeModule = async () => {
  let state: any
  switch(Storage.get("query_type")) {
    case "MAKE":
      {
        await vmx.trim.fetchTrim(1)
        state = vmx.trim.getTrim 
        break 
      }

    case "MODEL":
      {
        await vmx.trim.fetchTrim(1)
        state = vmx.trim.getTrim 
        break 
      }
      
    case "RGB":
      if (Storage.get('mode') === 'exterior') {
          await vmx.color.fetchEterior(1)
          state = vmx.color.getExterior
          break
          }
      else if (Storage.get('mode') === 'interior') {
        {
           await vmx.color.fetchInterior(1)
           state =  vmx.color.getInterior
           break
        } 
      }

    case "TYPE":
      {
        await vmx.body.fetchBody(1)
        state = vmx.body.getBody
        break
      }
      
    case "ENGINE_TYPE":
      {
        await vmx.engine.fetchEngine(1)
        state = vmx.engine.getEngine
        break
      }
  }
  return state
}

export default recognizeModule