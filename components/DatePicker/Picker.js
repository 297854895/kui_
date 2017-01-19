import Vue from 'vue';
import Menu from './PickerMenu';
const picker = Vue.extend(Menu);

export default (_vue) => {
  const fixedPicker = document.querySelectorAll('.k-absolute-menu');
  const picker_ = _vue.$el.querySelectorAll('.k-datepicker-picker');
  if (fixedPicker.length === 1) {
    fixedPicker[0].parentNode.removeChild(fixedPicker[0]);
    if (picker_.length === 0) {
      const _picker = new picker(_vue).$mount();
      _vue.$el.appendChild(_picker.$el);
    }
  } else {
    if (picker_.length === 0) {
      const _picker = new picker(_vue).$mount();
      _vue.$el.appendChild(_picker.$el);
    } else {
      _vue.$el.removeChild(picker_[0]);
    }
  }
}
