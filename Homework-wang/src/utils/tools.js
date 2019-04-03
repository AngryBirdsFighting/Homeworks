// import Cookies from 'js-cookie'
export const isEmptyByObj = (obj) => {
    for (const i in obj) {
        return true
    }
    return false
}