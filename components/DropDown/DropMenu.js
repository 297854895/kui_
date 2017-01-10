import Vue from 'vue';
import Dropmenu from './Menu';
const dropmenu = Vue.extend(Dropmenu);

export default (_vue, data) => {
  const fixedMenu = document.querySelectorAll('.k-absolute-menu');
  const menu = _vue.$el.querySelectorAll('.k-drop-menu');
  if (fixedMenu.length === 1) {
    fixedMenu[0].parentNode.removeChild(fixedMenu[0]);
    if (menu.length === 0) {
      const _dropmenu = new dropmenu({menu: data}).$mount();
      _vue.$el.appendChild(_dropmenu.$el);
    }
  }else {
    if (menu.length === 0) {
      const _dropmenu = new dropmenu({menu: data}).$mount();
      _vue.$el.appendChild(_dropmenu.$el);
    } else {
      _vue.$el.removeChild(menu[0]);
    }
  }
};
