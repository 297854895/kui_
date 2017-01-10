import Vue from 'vue';
import SelectMenu from './SelectMenu.vue';
const menu = Vue.extend(SelectMenu);

export default (_vue) => {
  const fixedMenu = document.querySelectorAll('.k-absolute-menu');
  const menu_ = _vue.$el.querySelectorAll('.k-select-menu');
  if (fixedMenu.length === 1) {
    fixedMenu[0].parentNode.removeChild(fixedMenu[0]);
    if (menu_.length === 0) {
      const _menu = new menu(_vue).$mount();
      _vue.$el.appendChild(_menu.$el);
    }
  }else {
    if (menu_.length === 0) {
      const _menu = new menu(_vue).$mount();
      _vue.$el.appendChild(_menu.$el);
    } else {
      _vue.$el.removeChild(menu_[0]);
    }
  }
}
