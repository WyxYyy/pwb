
export function setCookie(name,content) {
  if (!name) return
  if (typeof content !== 'string') {
      content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

export function getCookie(name) {
  if (!name) return
  return window.localStorage.getItem(name)
}

export function delCookie(name) {
  if (!name) return
  window.localStorage.removeItem(name)
}
