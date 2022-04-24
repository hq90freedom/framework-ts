export interface Environment {
    isChrome: () => boolean
    isAndroid: () => boolean
    isiOS: () => boolean
    isRtl: () => boolean
    getDisplayWidth: () => number
    getDisplayHeight: () => number
    doLogin: (() => {})
    getUserInfo: (() => {})
}