class MoltinLocalStorageAdapter {
  set(key, value) {
    return window.localStorage.setItem(key, value)
  }

  get(key) {
    return window.localStorage.getItem(key)
  }

  delete(key) {
    return window.localStorage.removeItem(key)
  }
}

export default MoltinLocalStorageAdapter
