<template>
  <div class="k-mask-dialog k-dialog-wrap" v-show="this._data._set._showStatus">
    <transition name="dialog">
      <div class="k-dialog-container">
        <h1>
          {{this._data._set.title ? this._data._set.title : ''}}
          <i class="fa fa-close" style="line-height:21px;float:right;margin-right:10px;font-size:18px;cursor:pointer;" @click="close"></i>
        </h1>
        <p>{{this._data._set.content ? this._data._set.content : ''}}</p>
        <div class="k-dialog-button">
          <k-button :set="{
            type: 'danger',
            size: 'small',
            callBack: sure
          }">{{this._data._set.button[0].label}}</k-button>
          <k-button :set="{
            size: 'small',
            callBack: cancel
            }">{{this._data._set.button[1].label}}</k-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import kButton from './button';
  let _setNone = false;
  let _setUpdate = false;
  export default {
    name: 'k-dialog',
    props: ['set'],
    components: {
      'k-button': kButton
    },
    beforeUpdate () {
      if (!this._data._set._showStatus && _setNone) {
        _setNone = false;
        return;
      }
      if (_setUpdate) {
        return;
      }
      let _set_;
      if (this.set) {
        _set_ = {
          _showStatus: true,
          ...this.set
        }
      } else {
        _set_ = {
          _showStatus: false,
          button: [
            {label: '确定'},
            {label: '取消'}
          ],
          title: '',
          content: ''
        }
      }
      if (!_set_.button) {
        _set_.button = [
          {label: '确定'},
          {label: '取消'}
        ];
      } else if (!set_.button[0]) {
        _set_.button[0] = {label: '确定'};
      }else if (!set_.button[1]) {
        _set_.button[1] = {label: '取消'};
      }
      this.$data._set = _set_;
      _setUpdate = true;
    },
    methods: {
      close () {
        if (this._data._set._showStatus) {
          const _dialog = document.querySelectorAll('.k-dialog-container')[0];
          _dialog.style.animationName = "dialogOut";
          setTimeout(()=>{
            this.$data._set._showStatus = false;
            _setNone = true;
            _setUpdate = false;
            _dialog.style.animationName = "dialogIn";
          },400);
        }
      },
      sure () {
        if (this._data._set.button) {
          if (this._data._set.button[0].callBack){
            this._data._set.button[0].callBack();
          }
        }
        this.close();
      },
      cancel () {
        if (this._data._set.button) {
          if (this._data._set.button[1].callBack){
            this._data._set.button[1].callBack();
          }
        }
        this.close();
      }
    },
    data () {
      let set_;
      if (this.set) {
        set_ = {
          _showStatus: true,
          ...this.set
        }
      } else {
        set_ = {
          _showStatus: false,
          button: [
            {label: '确定'},
            {label: '取消'}
          ],
          title: '',
          content: ''
        }
      }
      if (!set_.button) {
        set_.button = [
          {label: '确定'},
          {label: '取消'}
        ]
      } else if (!set_.button[0]) {
        set_.button[0] = {label: '取消'};
      }else if (!set_.button[1]) {
        set_.button[1] = {label: '取消'};
      }
      _setNone = false;
      return {
        _set: set_
      }
    }
  }
</script>
<style scoped>
  div {
    position: initial;
    width: initial;
    height: initial;
    top: initial;
    background: initial;
    -moz-box-sizing: border-box;
     -webkit-box-sizing: border-box;
     -o-box-sizing: border-box;
     -ms-box-sizing: border-box;
     box-sizing: border-box;
  }
  @keyframes dialogIn {
    0%{
      top: 35px;
      opacity: 0;
    }
    100%{
      top: 50px;
      opacity: 1;
    }
  }
  @-webkitkeyframes dialogIn {
    0%{
      top: 35px;
      opacity: 0;
    }
    100%{
      top: 50px;
      opacity: 1;
    }
  }
  @-mozkeyframes dialogIn {
    0%{
      top: 35px;
      opacity: 0;
    }
    100%{
      top: 50px;
      opacity: 1;
    }
  }
  @keyframes dialogOut {
    0%{
      top: 50px;
      opacity: 1;
    }
    100%{
      top: 35px;
      opacity: 0;
    }
  }
  @-webkitkeyframes dialogOut {
    0%{
      top: 50px;
      opacity: 1;
    }
    100%{
      top: 35px;
      opacity: 0;
    }
  }
  @-mozkeyframes dialogOut {
    0%{
      top: 50px;
      opacity: 1;
    }
    100%{
      top: 35px;
      opacity: 0;
    }
  }
  .k-mask-dialog{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.65);
    text-align: center;
    z-index: 99;
  }
  .k-dialog-container{
    top: 35px;
    opacity: 0;
    position: relative;
    display: inline-block;
    background: #fff;
    border-radius: 2px;
    padding: 20px 16px;
    width: 400px;
    animation: dialogIn .45s ease forwards;
    -moz-animation: dialogIn .45s ease forwards;
    -webkit-animation: dialogIn .45s ease forwards;
  }
  .k-dialog-button{
    padding-top: 10px;
  }
  .k-dialog-container h1 {
    font-size: 16px;
    font-weight: bold;
    padding: 0;
    padding-left: 10px;
    margin: 0;
    text-align: initial;
    color: #333;
  }
  .k-dialog-container i{
    color: #666;
  }
  .k-dialog-container i:hover {
    color: #888;
  }
  .k-dialog-container i:active{
    color: #333;
  }
  .k-dialog-container p {
    color: #555;
    text-align: initial;
    padding: 0;
    margin: 0;
    font-size: 14px;
    text-indent: 2em;
    padding: 22px 0 16px;
  }
  .k-dialog-container div {
    float: right;
  }
  .k-dialog-button div {
    width: 54px;
  }
</style>
