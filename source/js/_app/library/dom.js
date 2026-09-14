/**
 * 获取一个dom选择器对应的元素
 * @deprecated Will be removed in the v0.5
 */
const $dom = (selector, element = document) => {
    // 在测试环境中这能优化0.01-0.02ms左右
    if (selector[0] === '#') {
        return element.getElementById(selector.substring(1));
    }
    return element.querySelector(selector);
};
/**
 * 获取具有此选择器的所有dom节点
 * @deprecated Will be removed in the v0.5
 */
$dom.all = (selector, element = document) => {
    return element.querySelectorAll(selector);
};
/**
 * 获取具有此选择器的所有dom节点,并依次执行callback函数
 * @deprecated Will be removed in the v0.5
 */
$dom.each = (selector, callback, element) => {
    $dom.all(selector, element).forEach(callback);
};
export { $dom };
