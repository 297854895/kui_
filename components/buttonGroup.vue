<template>
  <div :class="this._data._thisClass">
    <slot></slot>
  </div>
</template>
<script>
  import kButton from './button';
  import kDropDown from './dropDown';
  export default {
    name: 'k-button-group',
    props: ['type'],
    components: {
      'k-button': kButton,
      'k-drop-down': kDropDown
    },
    data () {
      let thisClass = "k-button-group";
      switch (this.type) {
        case 'primary':
        thisClass += ' k-button-group-primary';
        break;
        case 'black':
        thisClass += ' k-button-group-black';
        break;
        default:
        thisClass += " k-button-group-default";
      }
      return {
        _thisClass: thisClass
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
  .k-button-group .k-drop-down{
    margin: 0;
  }
  .k-button-group {
    display: inline-block;
    border-radius: 4px;
    height: 30px;
  }
  .k-button-group  div:last-child:hover{
    border-right: none;
  }
  .k-button-group-default{
    color: #666;
    border: 1px solid #c0ccda;
    background: #fff;
  }
  .k-button-group-default div:hover{
    border: none;
    border-right: 1px solid #c0ccda;
    color: #20a0ff;
    background: #fff;
  }
  .k-button-group-default div:active{
    border: none;
    border-right: 1px solid #c0ccda;
    color: #3879D9;
    background: #fff;
  }
  .k-button-group-primary {
    border: 1px solid #c0ccda;
    background: #20a0ff;
    color: #fff;
  }
  .k-button-group-primary:hover {
    border: 1px solid #c0ccda;
  }
  .k-button-group-primary div:hover {
    border: none;
    border-right: 1px solid #c0ccda;
    background: #4db3ff;
    color: inherit;
  }
  .k-button-group-primary div:active {
    border: none;
    border-right: 1px solid #c0ccda;
    background: #0099FF;
    color: inherit;
  }
  .k-button-group p{
    background: inherit;
    color: inherit;
  }
  .k-button-group-black {
    border: 1px solid #c0ccda;
    background: #333;
    color: #fff;
  }
  .k-button-group-black:hover {
    border: 1px solid #c0ccda;
  }
  .k-button-group-black div:hover {
    border: none;
    border-right: 1px solid #c0ccda;
    background: #555;
    color: inherit;
  }
  .k-button-group-black div:active {
    border: none;
    border-right: 1px solid #c0ccda;
    background: #222;
    color: inherit;
  }
  .k-button{
    border: none;
    border-right: 1px solid #c0ccda;
    margin: 0;
    border-radius: 0;
    background: inherit;
    color: inherit;
  }
  .k-button:last-child{
    border-right: none;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  .k-button:first-child{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
</style>
