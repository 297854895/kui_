import Vue from 'vue';
import kNotification from './notification';
const notifications = Vue.extend(kNotification);

export default (data) => {
  const _notification = document.querySelectorAll('.k-notification-wrap');
  if (_notification.length === 0) {
    const knotification = Vue.component('knotification', {
      template: `<div class="k-notification-wrap"></div>`,
      mounted () {
        const _notifications = new notifications(data).$mount();
        this.$el.appendChild(_notifications.$el);
      }
    });
    const _knotification = new knotification().$mount();
    document.querySelectorAll('body')[0].appendChild(_knotification.$el);
  }else {
    const _notifications = new notifications(data).$mount();
    _notification[0].appendChild(_notifications.$el);
  }
};
