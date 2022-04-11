/* 平台名称 */
type platform = 'ios' | 'android' | 'web'

export interface PluginListenerHandle {
    remove: () => Promise<void>
}

export  interface BOTBridgeGlobal {
    /*
    * 获取平台名称
    * */
    getPlatform: () => platform;
    /*
    *  是否原生平台
    * */
    isNativePlatform: () => boolean
    /*
    *  用于检测平台是否注册过并且可用
    * */
    isPluginAvailable: () => boolean

    /*
    *  为插件添加事件
    * */
    addListener?: (
        pluginName: string,
        eventName: string,
        callback: typeof Function
    ) => PluginListenerHandle;

    /*
    * 为插件移除事件
    * */
    removeListener?: (
        pluginName: string,
        eventName: string,
        callback: typeof Function
    ) => void;
    /*
    * 是否开启debug
    * */
    DEBUG?: boolean;
    isLoggingEnabled?: boolean;

}

export interface BOTBridgeInstance extends BOTBridgeGlobal {}
/*
* Bridge初始化需要的配置
* */
export interface BOTBridgeConfig {
    onLaunch: () => void; // 小程序启动时候的注册函数
    isLoggingEnabled?: boolean; // 是否开启调试日志
}

export type PluginImplementations = {
    [platform: string]: (() => Promise<unknown>) | unknown;
}

export type RegisterPlugin = <T>(
    pluginName: string,
    implementations?: Readonly<PluginImplementations>
) => T;

/*
* window.BOTBridge 为一个大域，来源于原生在webview上注入的方法，主要获取系统级别的信息
* getEnvironment 下会有bridge实现的函数进行合并
* */

export interface BOTBridge {
    getEnvironment: () => ({})
    getAPILevel: () => void
    isChrome: () => boolean
    isAndroid: () => boolean
    // isiOS: () => window.BOT
    isRtl: () => boolean
}