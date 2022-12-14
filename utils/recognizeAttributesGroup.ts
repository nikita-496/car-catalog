import { atrributesGroup } from "~/config/attributes"
import Storage from "~/persistent/locale-storage";

const recognize = (attribute: string) => {
  const group = ['MAKE', 'MODEL', 'TYPE', 'ENGINE_TYPE']
  const length = atrributesGroup.length
  let index: number = -1

  for (let i = 0; i <= length; i++) {
    if(atrributesGroup[i].includes(attribute)) {
      index = i
      break
    }
  }

  Storage.set('query_type', group[index])
}

export default recognize