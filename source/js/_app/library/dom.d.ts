/**
 * 获取一个dom选择器对应的元素
 * @deprecated Will be removed in the v0.5
 */
declare const $dom: {
    (selector: string, element?: Document): HTMLElement;
    all(selector: string, element?: Document): NodeListOf<HTMLElement>;
    each(selector: string, callback: (value: HTMLElement, key: number, parent: NodeListOf<Element>) => void, element?: Document): void;
};
export { $dom };
