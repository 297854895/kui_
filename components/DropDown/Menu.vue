<template>
  <ul :class="`k k-absolute-menu k-drop-menu`">
    <li class="k k-drop-menu-each" v-for="each in this.$options.menu">
      <i v-if="each.icon" :class="each.icon ? each.icon : ''"></i>
      {{each.text}}
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'k-drop-menu'
  }
</script>
