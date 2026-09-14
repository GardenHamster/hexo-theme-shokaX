/**
 * 更改日夜模式
 */
export declare const changeTheme: (type?: string) => void;
/**
 * 自动调整黑夜白天
 * 优先级: 手动选择>时间>跟随系统
 */
export declare const autoDarkmode: () => void;
/**
 * 更改主题的meta
 */
export declare const changeMetaTheme: (color: string) => void;
export declare const themeColorListener: () => void;
