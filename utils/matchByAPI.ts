import locale from "~/config/locale";
import Storage from "~/persistent/locale-storage";
import { enums } from "~/config/attributes";
import  associations  from "~/config/associations"

 const match = (searchValue: string) => {
  const pattern = /[a-zA-Z]|\d|[-]\g/;
    const match: RegExpMatchArray | null = searchValue.match(pattern);
    let byAPI: string = "";

    byAPI = convertByAPIValue(searchValue, match)

    setStorage(searchValue, byAPI)
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
    Storage.set(
      "query_value",
      Object.keys(locale.en).includes(searchValue)
        ? byAPI
        : enums[1][byAPI] ? byAPI
        : Object.values(locale.en).includes(byAPI)
        ? byAPI
        : "false"
    );
}
export default match