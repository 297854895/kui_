import Vue from 'vue';
import kDialog from './dialog';
const kBus = new Vue();

var Dialog = (data) => {
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
export default Dialog;
