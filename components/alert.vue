<template>
  <div :class="this._data._set._thisClass">
    <p><i :class="this._data._set._iconClass"></i>{{this._data._set.message ? this._data._set.message : ''}}</p>
  </div>
</template>
<script>
  export default {
    name: 'k-alert',
    props: ['set'],
    data () {
      let _set;
      if (this.set) {
        _set = {
          _thisClass: 'k-alert',
          _iconClass: 'fa',
          ...this.set
        }
      }
      if (!_set) {
        _set.type = 'default';
      }
      switch (_set.type) {
        case 'primary':
          _set._thisClass += ' primary';
          _set._iconClass += ' fa-search';
          break;
        case 'success':
          _set._thisClass += ' success';
          _set._iconClass += ' fa-check-circle';
          break;
        case 'danger':
          _set._thisClass += ' danger';
          _set._iconClass += ' fa-window-close';
          break;
        case 'info':
          _set._thisClass += ' info';
          _set._iconClass += ' fa-info-circle';
          break;
        case 'warning':
          _set._thisClass += ' warning';
          _set._iconClass += ' fa-exclamation-triangle';
          break;
        default:
          _set._thisClass += ' default';
          _set._iconClass += ' fa-telegram';
      }
      return {
        _set: _set
      }
    },
    // render (h) {
    //   return(
    //     <div class={this._data._set._thisClass}>
    //       <p><i class={this._data._set._iconClass}></i>{this._data._set.message ? this._data._set.message : ''}</p>
    //     </div>
    //   )
    // }
  }
</script>
<style scoped>
  .k-alert {
    display: inline-block;
    padding: 12px 16px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }
  .k-alert i {
    margin-right: 10px;
  }
  .default {
    border: 1px solid #c0ccda;
    background: #fff;
    color: #666;
  }
  .success{
    border: 1px solid #d6e9c6;
    background: #dff0d8;
    color: #3c763d;
  }
  .danger{
    color: #a94442;
    background: #f2dede;
    border: 1px solid #ebccd1;
  }
  .info {
    color: #31708f;
    background: #d9edf7;
    border: 1px solid #bce8f1;
  }
  .warning {
    color: #8a6d3b;
    background: #fcf8e3;
    border:1px solid #faebcc;
  }
  .k-alert p{
    font-size: 14px;
    margin: 0;
    padding: 0;
    word-break: break-all;
    color: inherit;
  }
</style>
