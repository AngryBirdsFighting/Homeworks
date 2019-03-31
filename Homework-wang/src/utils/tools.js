// import Cookies from 'js-cookie'
export const isEmptyByObj = (obj) => {
    for (const i in obj) {
        return true
    }
    return false
}
// export const setToken = (name, value) => {
//     Cookies.set(name, value, {expires: 1})
//   }
// export const getToken = (name) => {
//     const token = Cookies.get(name)
//     if (token) return token
//     else return false
// }