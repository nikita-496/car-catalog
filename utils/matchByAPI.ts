import locale from "~/config/locale";
import Storage from "~/persistent/locale-storage";
import { atrributesGroup } from "~/config/attributes";
import  associations  from "~/config/associations"
import recognize from "./recognizeAttributesGroup";

 const match = (searchValue: string) => {
  const pattern = /[a-zA-Z]|\d|[-]\g/;
    const match: RegExpMatchArray | null = searchValue.match(pattern);
    let byAPI: string = "";

    byAPI = convertByAPIValue(searchValue, match)

    setStorage(searchValue, byAPI)
    if(Storage.get('query_value')) {
      recognize(Storage.get('query_value'))
    }
}

const convertByAPIValue = (searchValue: string, match: RegExpMatchArray | null) =>
{
  const value: string = match 
  ? searchValue
  : associations.colors[searchValue]
  ? associations.colors[searchValue]
  : locale.en[searchValue];

  return Array.isArray(value) ? value[0] : value
}

const setStorage = ( searchValue: string, byAPI: string) => {
  Storage.remove("query_value")
  Storage.remove("query_type")
  let storageValue:string = ''
  if(
      Object.keys(locale.en).includes(searchValue) 
    || atrributesGroup[1].includes(byAPI) 
    || Object.values(locale.en).includes(byAPI)
  ) {
    storageValue = byAPI
  }

  if(storageValue) {
    Storage.set(
      "query_value", storageValue
    );
  }
  else{
    console.log('Ничего не найдено')
  }
}
export default match