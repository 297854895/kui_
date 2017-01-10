<template>
  <button :class="`k k-button ${this.$data._class}`" @click.stop="_clickCallBack" :style="this.width ? `width: ${this.width}` : (this.set ? (this.set.width ? `width: ${this.set.width}` : '') : '' )">
    <i v-if="this.iconBefore || (this.set ? (this.set.iconBefore ? true : false) : false)" :class="`${this.iconBefore ? this.iconBefore : this.set.iconBefore}`"></i><span><slot></slot></span><i v-if="this.iconAfter || (this.set ? (this.set.iconAfter ? true : false) : false)" :class="`${this.iconAfter ? this.iconAfter : this.set.iconAfter}`"></i>
  </button>
</template>
<script>
  export default {
    name: 'k-button',
    props: ['type', 'size', 'radius', 'width', 'status', 'iconBefore', 'iconAfter', 'callBack', 'set'],
    methods: {
      _clickCallBack(evt) {
        if (this.status === 'disable') return;
        if (this.callBack && typeof this.callBack === 'function') {
          this.callBack(evt);
        }
        if (this.set) {
          if (this.set.callBack && typeof this.set.callBack === 'function') {
            this.set.callBack(evt);
          }
        }
      }
    },
    data() {
      return {
        _class: `k-button-${this.type ? this.type : (this.set ? (this.set.type ? this.set.type : 'default') : 'default')} k-button-size-${this.size ? this.size : (this.set ? (this.set.size ? this.set.size : 'normal') : 'normal')} ${this.radius === 'no' ? '' : (this.set ? (this.set.radius === 'no' ? '' : 'k-radius') : 'k-radius')} ${this.status === 'disable' ? 'k-button-disable' : (this.set ? (this.set.status === 'disable' ? 'k-button-disable' : '') : '')}`,
      }
    }
  }
</script>
