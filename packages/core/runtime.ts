import { BOTBridgeConfig, BOTBridgeInstance } from './definitions'

export interface RegisteredPlugin {
    readonly name: string;
    readonly proxy: any;
    readonly platforms: ReadonlySet<string>
}


/*
*
* */
export const createBOTBridge = (config: BOTBridgeConfig): BOTBridgeInstance => {
    const bot: BOTBridgeInstance = ({} as any);
    return bot
}