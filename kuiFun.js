import Vue from 'vue';
import kDialog from './components/dialog';
const kDialogBus = new Vue();
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
        kDialogBus.$on('kdialog', (data) => {
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
    kDialogBus.$emit('kdialog', data);
  }
};
