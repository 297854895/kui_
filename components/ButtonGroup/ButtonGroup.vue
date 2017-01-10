<template>
  <div :class="`k k-button-group ${radius === 'no' ? '' : 'k-radius'} ${type ? 'k-button-group-' + type : 'k-button-group-default'}`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-button-group',
    props: ['radius', 'type', 'size']
  }
</script>
