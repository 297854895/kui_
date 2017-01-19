<template>
  <div :class="`k k-switch k-switch-default k-switch-${this.$data._enable ? 'enable' : 'disable'} k-switch-status-${status === 'disable' ? 'disable' : 'normal'}`" @click.stop="_toggle">
    <a class="k-switch-default" ref="circle"></a>
  </div>
</template>
<script>
  export default {
    name: 'k-switch',
    props: ['enable', 'callBack', 'status'],
    data () {
      let enable_ = false;
      if (this.enable) {
        enable_ = this.enable;
      }
      return {
        _enable : enable_
      }
    },
    methods: {
      _toggle() {
        if (this.status === 'disable') return;
        this.$data._enable = !this.$data._enable;
        const _thisStatus = this.$data._enable;
        const button = this.$refs.circle;
        button.style.width = '26px';
        setTimeout(() => {
          button.style.width = '16px';
        }, 150);
        if (!this.callBack || typeof this.callBack !== 'function') return;
        this.callBack(_thisStatus, this._callBack);
      },
      _callBack(status) {
        if (!status) {
          this.$data._enable = !this.$data._enable;
          const button = this.$refs.circle;
          button.style.width = '26px';
          setTimeout(() => {
            button.style.width = '16px';
          }, 150);
        }
      }
    }
  }
</script>
