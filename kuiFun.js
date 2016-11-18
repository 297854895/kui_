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
exports.Notification = (data) => {
  const _notification = document.querySelectorAll('.k-notification-wrap');
  if (_notification.length === 0) {
    const knotification = Vue.component('knotification', {
      components: {
        'k-notification': kNotification
      },
      methods: {
        show () {
          console.log(123);
        }
      },
      template: `<div class="k-notification-wrap">
                    <k-notification v-for="each in notificationData">
                      <div class="k-notification-left">
                        <i class="fa fa-search" @click="show"></i>
                      </div><div class="k-notification-right">
                        <h3 class="k-notification-title">
                        <span>{{each.title ? each.title : ''}}</span>
                        <i class="fa fa-close"></i>
                        </h3>
                        <p>{{each.content ? each.content : ''}}</p>
                      </div>
                    </k-notification>
                 </div>`,
      data () {
        return {
          notificationData: []
        }
      },
      created () {
        kBus.$on('knotification-add', (data) => {
          this.$data.notificationData.push(data);
        });
        kBus.$on('knotification-remove', (data) => {
          console.log('remove');
        });
      },
      mounted () {
        kBus.$emit('knotification-add', data.data);
      }
    });
    const _knotification = new knotification().$mount();
    document.querySelectorAll('body')[0].appendChild(_knotification.$el);
  }else {
    switch (data.type) {
      case 'add':
        kBus.$emit('knotification-add', data.data);
        break;
      case 'remove':
        kBus.$emit('knotification-remove', data.data);
        break;
      default:
    }
  }
};
