<template>
  <div class="k k-drop-down">
    <k-button :type="type ? type : 'default'" iconAfter="fa fa-angle-down" :iconBefore="icon ? icon : ''" :callBack="_addMenu">
      <slot></slot>
    </k-button>
  <div>
</template>
<script>
  import kButton from '../Button/Button';
  import DropMenu from './DropMenu.js';
  export default{
    name: 'k-drop-down',
    props: ['menu', 'type', 'icon'],
    components: {
      'k-button': kButton
    },
    data() {
      return {
        _menu: this.menu && typeof this.menu === 'object' ? this.menu : []
      }
    },
    methods: {
      _addMenu() {
        DropMenu(this, this.$data._menu);
      }
    }
  }
</script>
