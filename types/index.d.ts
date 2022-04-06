declare interface Window {
    BOT: '111'
}
export type Platform = 'web' | 'ios' | 'android'

export interface BOTGlobal {
    // 获取平台
    getPlatform: () => Platform
}
