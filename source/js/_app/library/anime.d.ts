/**
 * 参数  动画效果
 * 0  元素逐渐消失
 * 1  元素逐渐出现
 * bounceUpIn  元素从下方弹跳出现
 * shrinkIn  元素从放大到正常大小出现
 * slideRightIn  元素从右侧滑入
 * slideRightOut  元素向右侧滑出
 * TODO 函数功能过于复杂，需要拆分
 */
export declare const transition: (target: HTMLElement, type: number | string | Function, complete?: Function, begin?: Function) => void;
export declare const pageScroll: (target: HTMLElement | number, offset?: number, complete?: Function) => void;
