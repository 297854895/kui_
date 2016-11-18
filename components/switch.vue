<template>
  <div :class="this._data._enable ? 'k-switch default enable' : 'k-switch default disable'">
    <a class="default" @click="toggle"></a>
  </div>
</template>
<script>
  export default {
    name: 'k-switch',
    props: ['enable','callBack'],
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
      toggle () {
        this.$data._enable = !this.$data._enable;
        const _thisStatus = this.$data._enable;
        if (this.callBack) {
          this.callBack(_thisStatus);
        }
      }
    }
  }
</script>
<style scoped>
  div{
  -moz-box-sizing: border-box;
   -webkit-box-sizing: border-box;
   -o-box-sizing: border-box;
   -ms-box-sizing: border-box;
   box-sizing: border-box;
  }
  .k-switch{
    position: relative;
    background: #e0e0e0;
    transition: all .35s ease-in ;
  }
  .default {
    width: 40px;
    height: 20px;
    border-radius: 20px;
  }
  .k-switch a{
    display: block;
    position: absolute;
    top: 2px;
    cursor: pointer;
    transition: all .35s ease-out ;
  }
  .disable a{
    left: 2px;
  }
  .enable a{
    left: 22px;
  }
  .enable {
    background: #4db3ff;
  }
  .default a{
    width: 16px;
    height: 16px;
    background: #fff;
    border-radius: 50%;
  }
</style>
