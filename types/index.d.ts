/* 全局主要类型定义 */

/* 回调函数结构, 同步函数不需要 */

declare interface BridgeCallBack {
 success: () => {};
 fail?: () => {};
 complete?: () => {};
}

 declare interface Window {
    BOT: '123'
}
