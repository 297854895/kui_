<template>
  <div :class="`k k-switch k-switch-default k-switch-${this.$data._enable ? 'enable' : 'disable'} k-switch-status-${this.disable === 'true' ? 'disable' : 'normal'}`" @click.stop="_toggle">
    <a class="k-switch-default" ref="circle"></a>
  </div>
</template>
<script>
  export default {
    name: 'k-switch',
    props: {
      status: {
        type: String,
        default: 'false'
      },
      disable: {
        type: String,
        default: 'false'
      },
      callBack: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        _enable: this.status === 'true' ? true : false,
        animate: 'stop'
      }
    },
    methods: {
      _toggle() {
        if (this.disable === 'true') return;
        if (this.$data.animate === 'move') return;
        this.$data.animate = 'move';
        this.$data._enable = !this.$data._enable;
        const _thisStatus = this.$data._enable;
        const button = this.$refs.circle;
        button.style.width = '26px';
        setTimeout(() => {
          button.style.width = '16px';
        }, 150);
        setTimeout(() => {
          this.$data.animate = 'stop';
        }, 350);
        if (!this.callBack || typeof this.callBack !== 'function') return;
        this.callBack(_thisStatus, this._callBack);
      },
      _callBack(status) {
        if (!status) {
          this.$data.animate = 'move';
          this.$data._enable = !this.$data._enable;
          const button = this.$refs.circle;
          button.style.width = '26px';
          setTimeout(() => {
            button.style.width = '16px';
          }, 150);
          setTimeout(() => {
            this.$data.animate = 'stop';
          }, 350);
        }
      }
    }
  }
</script>
