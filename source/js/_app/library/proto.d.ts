export declare const insertAfter: (el: Element, element: HTMLElement) => void;
/**
 * 创建一个子节点并放置
 */
export declare const createChild: (parent: Element, tag: string, obj: object, positon?: string) => HTMLElement;
/**
 *  此方法使用`<div>`包装一个 DOM 元素
 * @param parent
 * @param obj 需要被包装的对象
 */
export declare const wrapObject: (parent: HTMLElement, obj: any) => void;
export declare const getHeight: (el: HTMLElement) => number;
export declare const setWidth: (el: HTMLElement, w: number | string) => void;
export declare const getWidth: (el: HTMLElement) => number;
export declare const getTop: (el: HTMLElement) => number;
export declare const getLeft: (el: HTMLElement) => number;
export declare const getDisplay: (el: HTMLElement) => string;
export declare const setDisplay: (el: HTMLElement, d: string) => HTMLElement;
export default function initProto(): void;
