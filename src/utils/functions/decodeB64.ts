export const decodeB64 = (str: string) => {
  return decodeURIComponent(escape(window.atob( str )))
}