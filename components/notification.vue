<template>
    <div class="k-notification-wrap" @click="show = !show">
      <transition name="fade">
        <span v-if="show">123456</span>
      </transition>
    </div>
</template>
<script>
  export default{
    name: 'k-notification',
    props: ['set'],
    data () {
      const data = this.set ? this.set[0] : [];
      return {
        data: data,
        show: true
      }
    }
  }
</script>
<style scoped>
  .k-notification-wrap{
    position: fixed;
    top: 0px;
    margin-top: 16px;
    right: 0;
    z-index: 99999;
    width: 300px;
    height: 80px;
    background: #000;
    color: #fff;
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .3s;
  }
  .fade-enter, .fade-leave-active{
    opacity: 0;
  }
</style>
