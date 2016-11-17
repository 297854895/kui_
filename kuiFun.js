import Vue from 'vue';
import kDialog from './components/dialog';
import kNotification from './components/notification';
const kBus = new Vue();
//dialog
exports.showDialog = (data) => {
  const _dialog = document.querySelectorAll('.k-dialog-wrap');
  if (_dialog.length === 0) {
    const kdialog = Vue.component('kdialog', {
      components: {
        'k-dialog': kDialog
      },
      data () {
        return {
          dialogData: data
        }
      },
      created () {
        kBus.$on('kdialog', (data) => {
          if (data) {
            this.$data.dialogData = data;
          }
        });
      },
      render (h) {
        return (
          <k-dialog set={this._data.dialogData}></k-dialog>
        )
      }
    });
    const _kdialog = new kdialog().$mount();
    document.querySelectorAll('body')[0].appendChild(_kdialog.$el);
  }else {
    kBus.$emit('kdialog', data);
  }
};
exports.showNotification = (data) => {
  const _notification = document.querySelectorAll('.k-notification-wrap');
  if (_notification.length === 0) {
    const knotification = Vue.component('knotification', {
      components: {
        'k-notification': kNotification
      },
      data () {
        return {
          notificationData: data
        }
      },
      created () {
        kBus.$on('knotification', (data) => {
          if (data) {
            this.$data.notificationData = data;
          }
        });
      },
      render (h) {
        return (
          <k-notification set={this._data.notificationData}></k-notification>
        )
      }
    });
    const _knotification = new knotification().$mount();
    document.querySelectorAll('body')[0].appendChild(_knotification.$el);
  }else {
    kBus.$emit('knotification', data);
  }
};
