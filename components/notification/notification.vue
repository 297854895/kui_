<template>
    <transition name="fade">
      <div :class="'k-notification ' + (this.type ? this.type : 'default')" v-show="show">
        <div class="k-notification-left">
          <i :class="this.notificationIcon ? this.notificationIcon : ''"></i>
        </div><div class="k-notification-right">
          <h3 class="k-notification-title">
            <span>{{this.title ? this.title : this.defaultTitle}}</span>
            <i class="fa fa-close" @click="close"></i>
          </h3>
          <p>{{this.content ? this.content : ''}}</p>
        </div>
      </div>
    </transition>
</template>
<script>
  export default{
    name: 'k-notification',
    methods: {
      close () {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
    mounted () {
      this.show = true;
      this.type;
      if (!this.autoClose) return;
      const timer = setTimeout(()=>{
        this.show = false;
        setTimeout(()=>{
          if (this.$el) {
            this.$el.parentNode.removeChild(this.$el);
          }
        },355);
      },this.delay ? this.delay : 3000);
    },
    data () {
      let notification = 'fa';
      let defaultTitle;
      switch (this.$options.type) {
        case 'success':
          notification += ' fa-check-circle';
          defaultTitle = '成功';
          break;
        case 'error':
          notification += ' fa-window-close';
          defaultTitle = '错误';
          break;
        case 'info':
          notification += ' fa-info-circle';
          defaultTitle = '信息';
          break;
        case 'warning':
          notification += ' fa-exclamation-triangle';
          defaultTitle = '警告';
          break;
        default:
          notification += ' fa-telegram';
          defaultTitle = '提示';
      }
      return {
        show: false,
        notificationIcon: notification,
        defaultTitle: defaultTitle,
        ...this.$options
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
    right: 4px;
    padding: 12px 20px 12px 10px;
    color: #666;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,.2);
  }
  .default {
    background: #fff;
    color: #888;
    border: 1px solid #c0ccda;
  }
  .k-notification p{
    color: inherit;
  }
  .k-notification-title{
    color: inherit;
  }
  .success {
    background: #dff0d8;
    color: #3c763d;
    border: 1px solid #d6e9c6;
  }
  .info {
    color: #31708f;
    background: #d9edf7;
    border: 1px solid #bce8f1;
  }
  .error {
    color: #a94442;
    background: #f2dede;
    border: 1px solid #ebccd1;
  }
  .warning {
    color: #8a6d3b;
    background: #fcf8e3;
    border:1px solid #faebcc;
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
