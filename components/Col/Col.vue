<template>
  <div :class="`k k-col k-col-${span} ${left ? 'k-col-left-' + left : ''} ${right ? 'k-col-right-' + right : ''}`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-col',
    props: ['span', 'left', 'right']
  }
</script>
