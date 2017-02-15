<template>
  <div :class="`k k-button-group ${radius === 'false' ? '' : 'k-radius'}`">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'k-button-group',
    props: {
      radius: {
        type: String,
        default: 'true'
      }
    }
  }
</script>
