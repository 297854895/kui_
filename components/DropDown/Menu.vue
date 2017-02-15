<template>
  <ul :class="`k k-absolute-menu k-drop-menu`" @click="close">
    <li class="k k-drop-menu-each" v-for="each in this.$options.menu" @click="each.callBack ? each.callBack(each.key) : ''">
      <i v-if="each.icon" :class="each.icon ? each.icon : ''"></i>{{each.text.indexOf(' ') > 0 ? each.text.replace(new RegExp(' ', 'g'), '&nbsp;') : each.text}}
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'k-drop-menu',
    methods: {
      close() {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  }
</script>
