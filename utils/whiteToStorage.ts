
import Storage from "~/persistent/locale-storage";
import locale from "~/config/locale";
import { atrributesGroup } from "~/config/attributes";
import  rgb  from "~/config/rgb"
import recognize from "./recognizeAttributesGroup";

const write = (searchValue: string, byAPI: string ): boolean => {
  let found: boolean = true

  if (byAPI) {
    setStorage(searchValue, byAPI)
    recognize(Storage.get('query_value'))
  } else {
    Object.keys(rgb.colors.exterior).includes(searchValue) || Object.keys(rgb.colors.interior).includes(searchValue) ? selectColorType(searchValue) : found = false 
  } 
  
  return found
}

const selectColorType = (searchValue: string) => {
  if (window.confirm('Цвет экстерьера?')) {
    Storage.set('query_type', 'RGB')
    Storage.set('query_value', JSON.stringify(rgb.colors.exterior[searchValue]))
    Storage.set('mode', 'exterior')
  }
  else {
    Storage.set('query_type', 'RGB')
    Storage.set ('query_value', JSON.stringify(rgb.colors.interior[searchValue]))
    Storage.set('mode', 'interior')
  }
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