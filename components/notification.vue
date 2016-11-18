<template>
    <div>
      <transition name="fade">
        <div class="k-notification" v-show="show">
          <slot></slot>
        </div>
      </transition>
    </div>
</template>
<script>
  export default{
    name: 'k-notification',
    props: ['set'],
    mounted () {
      this.show = true;
    },
    data () {
      const data = this.set ? this.set[0] : [];
      return {
        data: data,
        show: false
      }
    }
  }
</script>
<style scoped>
  div {
   -moz-box-sizing: border-box;
   -webkit-box-sizing: border-box;
   -o-box-sizing: border-box;
   -ms-box-sizing: border-box;
   box-sizing: border-box;
  }
  .k-notification{
    position: relative;
    font-size: 14px;
    margin-top: 16px;
    width: 360px;
    height: auto;
    border-radius: 3px;
    border: 1px solid #c0ccda;
    right: 0px;
    padding: 16px 20px 16px 10px;
    color: #666;
    transition: all .3s
  }
  .fade-enter-active, .fade-leave-active{
    transition: all .3s ease-in-out;
  }
  .fade-enter{
    opacity: 0;
    height: 0;
    width: 0;
    right: -360px;
  }
</style>
