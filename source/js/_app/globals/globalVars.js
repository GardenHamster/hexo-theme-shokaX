import initProto from '../library/proto';
export const CONFIG = shokax_CONFIG;
initProto();
export const statics = CONFIG.statics.indexOf('//') > 0 ? CONFIG.statics : CONFIG.root;
export const scrollAction = { x: 0, y: 0 };
export let diffY = 0;
export let originTitle, titleTime;
export const BODY = document.getElementsByTagName('body')[0];
export const HTML = document.documentElement;
export const Container = document.getElementById('container');
export const loadCat = document.getElementById('loading');
export const siteNav = document.getElementById('nav');
export const siteHeader = document.getElementById('header');
export const menuToggle = siteNav.querySelector('.toggle');
export const quickBtn = document.getElementById('quick');
export const sideBar = document.getElementById('sidebar');
export const siteBrand = document.getElementById('brand');
export let toolBtn = document.getElementById('tool');
export let toolPlayer;
export let backToTop;
export let goToComment;
export let showContents;
export let siteSearch = document.getElementById('search');
export let siteNavHeight, headerHightInner, headerHight;
export let oWinHeight = window.innerHeight;
export let oWinWidth = window.innerWidth;
export let LOCAL_HASH = 0;
export let LOCAL_URL = window.location.href;
export let pjax;
export function setSiteNavHeight(value) {
    siteNavHeight = value;
}
export function setHeaderHightInner(value) {
    headerHightInner = value;
}
export function setHeaderHight(value) {
    headerHight = value;
}
export function setOWinHeight(value) {
    oWinHeight = value;
}
export function setOWinWidth(value) {
    oWinWidth = value;
}
export function setDiffY(value) {
    diffY = value;
}
export function setTitleTime(value) {
    titleTime = value;
}
export function setLocalHash(value) {
    LOCAL_HASH = value;
}
export function setLocalUrl(value) {
    LOCAL_URL = value;
}
export function setPjax(value) {
    pjax = value;
}
export function setOriginTitle(value) {
    originTitle = value;
}
export function setToolPlayer(value) {
    toolPlayer = value;
}
export function setBackToTop(value) {
    backToTop = value;
}
export function setGoToComment(value) {
    goToComment = value;
}
export function setShowContents(value) {
    showContents = value;
}
export function setToolBtn(value) {
    toolBtn = value;
}
export function setSiteSearch(value) {
    siteSearch = value;
}
