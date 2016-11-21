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
    props: ['kBus', 'autoClose', 'nID'],
    mounted () {
      this.show = true;
      if (!this.autoClose) return;
      const timer = setTimeout(()=>{
        this.show = false;
        setTimeout(() => {
          if (this.kBus) {
            this.kBus.$emit('knotification-remove', 'auto');
          }
        },355);
      },5000);
      let _timer = {};
      _timer[this.nID.toString()] = timer;
      this.kBus.$emit('knotification-timer', _timer);
    },
    data () {
      return {
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
    overflow: hidden;
  }
  .fade-enter-active{
    transition: all .3s ease-in;
  }
  .fade-leave-active{
    transition: all .35s;
  }
  .fade-enter{
    opacity: 0;
    height: 0;
    right: -360px;
  }
  .fade-leave-active{
    opacity: 0;
    height: 0;
    padding: 0;
    border: none;
    right: -360px;
  }
</style>
