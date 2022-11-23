
import Storage from "~/persistent/locale-storage";
import locale from "~/config/locale";
import { atrributesGroup } from "~/config/attributes";
import recognize from "./recognizeAttributesGroup";

const write = (searchValue: string, byAPI: string ): boolean => {
  let found: boolean = true

  if (byAPI) {
    setStorage(searchValue, byAPI)
    recognize(Storage.get('query_value'))
  } else {
    found = false 
  } 
  
  return found
}

const setStorage = ( searchValue: string, byAPI: string) => {
  Storage.remove('mode')
  let storageValue:string = ''
  if(
      Object.keys(locale.en).includes(searchValue) 
    || atrributesGroup[1].includes(byAPI) 
    || Object.values(locale.en).includes(byAPI)
  ) {
    storageValue = byAPI
    Storage.set(
      "query_value", storageValue
    );
  }
}

export default write