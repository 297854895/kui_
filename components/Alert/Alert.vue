<template>
  <div :class="`k k-alert ${type ? 'k-alert-' + type : 'k-alert-default'} ${size ? 'k-alert-size-' + size : 'k-alert-size-normal'}`">
    <p>
      <i :class="returnIcon(type)"></i>
      <slot></slot>
      <!-- <i @click="closeFn" v-if="close === 'true'" class="fa fa-close k-alert-close" style="position: absolute;top: 0px;right: 0px;"></i> -->
    </p>
  </div>
</template>
<script>
  export default {
    name: 'k-alert',
    props: ['type', 'size', 'close'],
    methods: {
      returnIcon(_type) {
        const type_ = _type;
        switch (type_) {
          case 'success':
            return 'fa fa-check-circle';
          case 'danger':
            return 'fa fa-times-circle';
          case 'info':
            return 'fa fa-info-circle';
          case 'warning':
            return 'fa fa-exclamation-triangle';
          default:
            return 'fa fa-telegram';
        }
      },
      // closeFn() {
      //   // this.$destroy();
      //   console.log(this);
      // }
    }
  }
</script>
