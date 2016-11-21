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
        remove (id) {
          this.$data.notificationData.forEach((data, index) => {
            if (data.notificationID === id) {
              this.$data.notificationData.splice(index, 1);
              this.$data.timer.forEach((data, _index) => {
                if(data[id.toString()]) {
                  clearTimeout(data[id.toString()]);
                  this.$data.timer.splice(_index, 1);
                }
              });
            }
          });
        }
      },
      template: `<div class="k-notification-wrap">
                    <k-notification v-for="each in notificationData" :kBus="kBus" :autoClose="each.autoClose" :nID="each.notificationID">
                      <div class="k-notification-left">
                        <i class="fa fa-search"></i>
                      </div><div class="k-notification-right">
                        <h3 class="k-notification-title">
                          <span>{{each.title ? each.title : ''}}</span>
                          <i class="fa fa-close" @click="remove(each.notificationID)"></i>
                        </h3>
                        <p>{{each.content ? each.content : ''}}</p>
                      </div>
                    </k-notification>
                 </div>`,
      data () {
        return {
          notificationData: [],
          kBus: kBus,
          notificationID: 0,
          autoRemoveID: [],
          timer: []
        }
      },
      created () {
        kBus.$on('knotification-add', (data) => {
          this.$data.notificationData.push({...data, notificationID: this._data.notificationID});
          if (data.autoClose) {
            this.$data.autoRemoveID.push(this.$data.notificationID);
          }
          this.$data.notificationID += 1;
        });
        kBus.$on('knotification-remove', (data) => {
          switch (data) {
            case 'auto':
              this.$data.notificationData.forEach((data, index)=>{
                if (data.notificationID === this.$data.autoRemoveID[0]) {
                  this.$data.notificationData.splice(index ,1);
                  this.$data.autoRemoveID.shift();
                }
              });
              break;
            default:
              console.log(data);
          }
        });
        kBus.$on('knotification-timer', (data) => {
          this.$data.timer.push(data);
        });
      },
      mounted () {
        kBus.$emit('knotification-add', data);
      }
    });
    const _knotification = new knotification().$mount();
    document.querySelectorAll('body')[0].appendChild(_knotification.$el);
  }else {
    kBus.$emit('knotification-add', data);
  }
};
