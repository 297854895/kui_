<template>
  <p :class="this._thisClass" @click="toggle">
    <k-button :set="{
        type: this._buttonType,
        drop: 'true',
        icon: this._icon
      }">
      {{dropName}}
    </k-button>
    <span v-if="dropData">
      <ul :class="'k-drop-down-menu' + (this.show ? ' k-drop-down-menu-show' : '')">
        <li class="k-drop-down-menu-each" v-for="drop in _dropData">
          <a :href="drop.href ? drop.href : 'javascript:;'" @click="drop.callBack ? drop.callBack() : ''">
            <k-icon :type="drop.icon"></k-icon>
            {{drop.text}}
          </a>
        </li>
      </ul>
    </span>
  </p>
</template>
<script>
  import kButton from './button';
  import kIcon from './icon';
  export default {
    name: 'k-drop-down',
    props: ['type', 'dropData', 'dropName'],
    components: {
      'k-button': kButton,
      'k-icon': kIcon
    },
    data (){
      return {
        show: false,
        _dropData: [],
        _thisClass: 'k-drop-down',
        _buttonType: '',
        _icon: 'fa fa-angle-down'
      }
    },
    mounted () {
      const _parent =  this.$el.parentNode.className;
      if (_parent.indexOf('k-button-group') > -1 ) {
        let _ul = this.$el.childNodes[2];
        if(_ul.tagName === 'SPAN') {
          _ul.childNodes[0].style.left = '-1px';
          if (this.$el.nextSibling) {
            _ul.childNodes[0].style.width = _ul.childNodes[0].offsetWidth - 6 + 'px';
          }
          _ul.childNodes[0].style.boxSizing = 'inherit';
        }
      }
    },
    created () {
      if (this.dropData) {
        this._dropData = this.dropData;
      }else {
        this._dropData = [];
      }
      if (!this._icon) {
        this._icon = 'fa fa-angle-down';
      }
      switch (this.type) {
        case 'primary':
          this._thisClass = 'k-drop-down k-drop-down-primary';
          this._buttonType = 'primary';
          break;
        case 'success':
          this._thisClass = 'k-drop-down k-drop-down-success';
          this._buttonType = 'success';
          break;
        case 'danger':
          this._thisClass = 'k-drop-down k-drop-down-danger';
          this._buttonType = 'danger';
          break;
        case 'warning':
          this._thisClass = 'k-drop-down k-drop-down-warning';
          this._buttonType = 'warning';
          break;
        default:
          this._thisClass = 'k-drop-down k-drop-down-default';
          this._buttonType = '';
      }
    },
    methods: {
      toggle (evt) {
        let _thisButton = evt.target;
        if (_thisButton.tagName === 'SPAN' || _thisButton.tagName === 'I') {
          _thisButton = _thisButton.parentNode;
        }
        if (_thisButton.getAttribute('dropButton') === 'true') {
          if(_thisButton.parentNode.childNodes[2].tagName) {
            _thisButton.parentNode.style.zIndex = 98;
            this.show = !this.show;
            this._icon = 'fa fa-angle-up';
            if (!this.show) {
              _thisButton.parentNode.style.zIndex = 'auto';
              this._icon = 'fa fa-angle-down';
            }
          }
        }
      }
    }
  }
</script>
<style  scoped>
  div{
    -moz-box-sizing: border-box;
     -webkit-box-sizing: border-box;
     -o-box-sizing: border-box;
     -ms-box-sizing: border-box;
     box-sizing: border-box;
  }
  ul,li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .k-drop-down {
    position: relative;
    display: inline-block;
    font-size: 14px;
    margin: 0 4px;
  }
  .k-drop-down span {
    background: inherit;
    border-color: inherit;
  }
  .k-drop-down-default {
    color: #666;
    background: #fff;
    border-radius: 4px;
    border-color: #c0ccda;
  }
  .k-drop-down-default li:hover{
    color: #20a0ff;
  }
  .k-drop-down-default li:active{
    color: #3879D9;
  }
  p .k-button {
    background: inherit;
    color: inherit;
  }
  .k-drop-down-primary {
    color: #fff;
    background: #20a0ff;
    border-radius: 4px;
    border-color: #20a0ff;
  }
  .k-drop-down-primary li:hover{
    color: #fff;
    background: #4db3ff;
  }
  .k-drop-down-primary li:active{
    color: #fff;
    background: #0099FF;
  }
  .k-drop-down-success {
    color: #fff;
    background: #13ce66;
    border-radius: 4px;
    border-color: #13ce66;
  }
  .k-drop-down-success li:hover{
    color: #fff;
    background: #42d885;
  }
  .k-drop-down-success li:active{
    color: #fff;
    background: #42AE77;
  }
  .k-drop-down-warning {
    color: #fff;
    background: #f7ba2a;
    border-radius: 4px;
    border-color: #f7ba2a;
  }
  .k-drop-down-warning li:hover{
    color: #fff;
    background: #f9c885;
  }
  .k-drop-down-warning li:active{
    color: #fff;
    background: #FF9900;
  }
  .k-drop-down-danger {
    color: #fff;
    background: #ff4949;
    border-radius: 4px;
    border-color: #ff4949;
  }
  .k-drop-down-danger li:hover{
    color: #fff;
    background: #ff6d6d;
  }
  .k-drop-down-danger li:active{
    color: #fff;
    background: #cc3333;
  }
  .k-button-group-black li:hover{
    color: #fff;
    background: #555;
  }
  .k-button-group-black li:active{
    color: #fff;
    background: #222;
  }
  .k-button-group-primary li:hover{
    color: #fff;
    background: #4db3ff;
  }
  .k-button-group-primary li:active{
    color: #fff;
    background: #0099FF;
  }
  a{
    display: inline-block;
    font-size: inherit;
    width: 100%;
    line-height: 0;
    text-decoration: none;
    color: inherit;
  }
  .k-button{
    margin: 0;
    position: relative;
    z-index: 1;
  }
  .k-drop-down-menu {
    position: absolute;
    color: inherit;
    z-index: 0;
    background: inherit;
    overflow: hidden;
    min-height: 0px;
    opacity: 0;
    visibility: hidden;
    width: 100%;
    margin-top: -5px;
    padding: 3px 0 0 0;
    border-radius: 4px;
    border: 1px solid;
    border-color: inherit;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box; /*W3C标准(IE9+，Safari5.1+,Chrome10.0+,Opera10.6+都符合box-sizing的w3c标准语法)*/
    transition: all .15s;
    /*border-color: inherit;*/
  }
  .k-drop-down-menu-show {
    opacity: 1;
    visibility: inherit;
  }
  .k-drop-down-menu-each a{
    padding: 6px 12px;
  }
  .k-drop-down-menu-each{
    color: inherit;
    position: relative;
    font-size: 14px;
    -moz-box-sizing: border-box; /*Firefox3.5+*/
    -webkit-box-sizing: border-box; /*Safari3.2+*/
    -o-box-sizing: border-box; /*Opera9.6*/
    -ms-box-sizing: border-box; /*IE8*/
    box-sizing: border-box; /*W3C标准(IE9+，Safari5.1+,Chrome10.0+,Opera10.6+都符合box-sizing的w3c标准语法)*/
  }
  .k-button-group div{
    border:none;
  }
  .k-button-group div:hover{
    border:none;
  }
  .k-button-group .k-drop-down:last-child div{
    border: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .k-button-group .k-drop-down:first-child div{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .k-button-group .k-drop-down div{
    border-right: 1px solid;
    border-color: inherit;
  }
</style>
