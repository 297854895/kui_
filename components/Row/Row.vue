<template>
  <div :class="'k k-row'">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-row',
    props: ['span']
  }
</script>
