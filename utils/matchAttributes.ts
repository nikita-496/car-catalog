import locale from "~/config/locale";
import write from "./whiteToStorage";

 const matchAttributes = (searchValue: string): boolean => {
  const pattern = /[a-zA-Z]|\d|[-]\g/;
    const match: RegExpMatchArray | null = searchValue.match(pattern);
    let byAPI: string = "";

    byAPI = convertByAPIValue(searchValue, match)

    return write(searchValue, byAPI)
}

  const convertByAPIValue = (searchValue: string, match: RegExpMatchArray | null):string => match ? searchValue : locale.en[searchValue];

  
export default matchAttributes