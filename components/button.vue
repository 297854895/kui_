<template>
  <div :class="this._data._thisClass" v-if="!this._data._drop" @click="callBack" :style="'width:' + this._data._width">
    <k-icon :type="this._data._icon"/>
    <span>
      <slot></slot>
    </span>
  </div>
  <div dropButton="true" :class="this._data._thisClass" v-else>
    <span>
      <slot></slot>
    </span>
    <k-icon :type="this._data._icon"/>
  </div>
</template>
<script>
  import kIcon from './icon';
  export default {
    name: 'k-button',
    props: ['set'],
    components: {
      'k-icon': kIcon
    },
    methods: {
      callBack () {
        let _callBack;
        _callBack = this.set ? (this.set.callBack ? this.set.callBack : '') : '';
        if (_callBack) {
          _callBack();
        }
      }
    },
    data () {
      let _Class = 'k-button k-button-default';
      let _drop;
      let _icon;
      let _width;
      if (this.set) {
        switch (this.set.type) {
          case 'primary':
          _Class = 'k-button k-button-primary';
          break;
          case 'text':
          _Class = 'k-button k-button-text';
          break;
          case 'disable':
          _Class = 'k-button k-button-disable';
          break;
          case 'success':
          _Class = 'k-button k-button-success';
          break;
          case 'warning':
          _Class = 'k-button k-button-warning';
          break;
          case 'danger':
          _Class = 'k-button k-button-danger';
          break;
          case 'info':
          _Class = 'k-button k-button-info';
          break;
          default:
          _Class = 'k-button k-button-default'
        }
        switch (this.set.size) {
          case 'mini':
          _Class += ' k-button-size-mini';
          break;
          case 'small':
          _Class += ' k-button-size-small';
          break;
          case 'large':
          _Class += ' k-button-size-large';
          break;
          default:
          _Class += ' k-button-size-default';
        }
        if (this.set.radius === 'no') {
          _Class += ' k-button-noRadius';
        }
        _drop = this.set.drop ? true : false;
        _icon = this.set.icon ? this.set.icon : '';
        _width = this.set.width ? this.set.width : '';
      }else {
        _Class += ' k-button-size-default';
      }
      return {
        _thisClass: _Class,
        _drop: _drop,
        _icon: _icon,
        _width: _width
      }
    }
  }
</script>
<style scoped>
  .k-button{
    display: inline-block;;
    vertical-align: top;
    border-radius: 4px;
    cursor: pointer;
    transition: all .25s;
    color: #666;
    white-space: nowrap;
    background: #fff;
    border: 1px solid #c0ccda;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;person_identity
    padding: 6px 12px;
    font-size: 14px;
    margin: 0 4px;
  }
  .k-button-noRadius {
    border-radius: 0;
  }
  .k-button span{
    font-size: inherit;
    line-height: 0;
  }
  p .k-button-default:hover {
    border: 1px solid #20a0ff;
    color: inherit;
    background: inherit;
  }
  .k-button-group-default .k-button-default:hover{
    color: #20a0ff;
  }
  .k-button-group-default .k-button-default:active{
    color: #3879D9;
  }
  .k-button-group-black .k-button-default:hover{
    background: #555;
  }
  .k-button-group-black .k-button-default:active{
    background: #222;
  }
  .k-button-group-primary .k-button-default:hover{
    background: #4db3ff;
  }
  .k-button-group-primary .k-button-default:active{
    background: #0099FF;
  }
  .k-button-default {
    border: 1px solid #c0ccda;
    background: #fff;
  }
  .k-button-default:hover {
    border: 1px solid #20a0ff;
    color: #20a0ff;
  }
  .k-button-default:active {
    border: 1px solid #3879D9;
    color: #3879D9;
  }
  .k-button-group .k-button {
    border-radius: 0;
  }
  .k-button-primary {
    border: 1px solid #20a0ff;
    background: #20a0ff;
    color: #fff;
  }
  .k-button-primary:hover {
    border: 1px solid #4db3ff;
    background: #4db3ff;
  }
  .k-button-primary:active{
    border: 1px solid #0099FF;
    background: #0099FF;
  }
  .k-button-text {
    border: none;
    background: none;
    color: #20a0ff;
  }
  .k-button-text:hover {
    color: #4db3ff;
  }
  .k-button-text:active {
    color: #3879D9;
  }
  .k-button-disable{
    cursor: not-allowed;
    color: #d3dce6;
  }
  .k-button-success {
    border: 1px solid #13ce66;
    background: #13ce66;
    color: #fff;
  }
  .k-button-success:hover {
    background: #42d885;
    border: 1px solid #42d885;
  }
  .k-button-success:active {
    background: #42AE77;
    border: 1px solid #42AE77;
  }
  .k-button-warning {
    border: 1px solid #f7ba2a;
    background: #f7ba2a;
    color: #fff;
  }
  .k-button-warning:hover {
    background: #f9c885;
    border: 1px solid #f9c885;
  }
  .k-button-warning:active {
    background: #FF9900;
    border: 1px solid #FF9900;
  }
  .k-button-danger {
    border: 1px solid #ff4949;
    background: #ff4949;
    color: #fff;
  }
  .k-button-danger:hover {
    background: #ff6d6d;
    border: 1px solid #ff6d6d;
  }
  .k-button-danger:active {
    background: #cc3333;
    border: 1px solid #cc3333;
  }
  .k-button-info {
    border: 1px solid #50bfff;
    background: #50bfff;
    color: #fff;
  }
  .k-button-info:hover {
    background: #73ccff;
    border: 1px solid #73ccff;
  }
  .k-button-info:active {
    background: #20a0ff;
    border: 1px solid #20a0ff;
  }
  .k-button-size-default {
    padding: 6px 12px;
  }
  .k-button-size-small {
    padding: 4px 8px;
  }
  .k-button-size-mini {
    padding: 2px 4px;
  }
  .k-button-size-large {
    padding: 8px 16px;
  }
</style>
