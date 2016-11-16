<template>
  <div :class="this._data._set._thisClass">
    <span v-if="this._data._set.icon" :style="this._data._set.icon.type === 'after' ? 'display:none' : ''" @click="_callBack">
      <i :class="this._data._set.icon.name ? this._data._set.icon.name : '' " v-if="this._data._set.icon.type === 'before'">
        {{this._data._set.icon.text ? this._data._set.icon.text : ''}}
      </i>
    </span>
    <input :type="this._data._set.type === 'password' ? 'password' : 'text' " :value="this._data._set.value ? this._data._set.value : ''" :placeholder="this._data._set.placeholder ? this._data._set.placeholder : ''" />
    <span v-if="this._data._set.icon" :style="this._data._set.icon.type === 'before' ? 'display:none' : ''" @click="_callBack">
      <i :class="this._data._set.icon.name ? this._data._set.icon.name : '' " v-if="this._data._set.icon.type === 'after'">
        {{this._data._set.icon.text ? this._data._set.icon.text : ''}}
      </i>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'k-input',
    props: ['set'],
    data () {
      let _set = {
        _thisClass: 'k-input'
      };
      if (this.set){
        _set = {
          _thisClass: 'k-input',
          ...this.set
        }
      }
      switch (_set.style) {
        case 'primary':
          _set._thisClass += ' primary';
          break;
        default:
          _set._thisClass += ' default';
      }
      return {
        _set: _set
      }
    },
    methods: {
      _callBack () {
        if (this._data._set.callBack) {
          let value;
          value = this.$el.querySelectorAll('input')[0].value;
          if (value) {
            this._data._set.callBack(value);
          }else {
            this._data._set.callBack();
          }
        }
      }
    }
  }
</script>
<style scoped>
  .k-input {
    display: table;
    vertical-align: top;
    width: inherit;
    overflow: hidden;
    height: 28px;
    box-sizing: border-box;
  }
  .default {
    border: 1px solid #c0ccda;
    border-radius: 4px;
    background: #fff;
    color: #666;
    border-color: #c0ccda;
  }
  .default span:hover {
    background: #eee;
  }
  .default span:active {
    background: #e0e0e0;
  }
  .primary {
    border: 1px solid #20a0ff;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    color: #20a0ff;
    border-color: #20a0ff;
  }
  .primary span:hover {
    background: #4db3ff;
    color: #fff;
  }
  .primary span:active {
    background: #0099FF;
    color: #fff;
  }
  .k-input i {
    font-style: normal;
  }
  .k-input span {
    font-size: 14px;
    width: 1px;
    word-break: keep-all;
    display: table-cell;
    padding: 5px 12px;
    cursor: pointer;
    transition: all .3s;
    box-sizing: border-box;
  }
  .k-input span:first-child{
    border-right: 1px solid;
    border-color: inherit;
  }
  .k-input span:last-child{
    border-left: 1px solid;
    border-color: inherit;
  }
  .k-input input {
    display: table-cell;
    vertical-align: top;
    height: 100%;
    border: none;
    outline: none;
    color: inherit;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
</style>
