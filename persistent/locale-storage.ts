class Storage {
  get(key: string) {
    if (typeof window != "undefined") {
      return localStorage.getItem(key);
    }
  }
  set(key: string, val: string) {
    console.log(key, val)
    if (typeof window != "undefined") {
      localStorage.setItem(key, val);
    }
  }
  remove(key: string ) {
    if (typeof window != "undefined") {
      localStorage.removeItem(key);
    }
  }
}

export default new Storage();