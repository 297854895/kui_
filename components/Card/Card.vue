<template>
  <div :class="`k k-card ${boxShadow === 'true' ? 'k-card-boxshadow' : ''} ${radius === 'none' ? '' : 'k-radius'} ${border === 'true' ? 'k-card-border' : ''}`" :style="style ? style : ''">
    <slot></slot>
  </div>
</template>
<script>
  export default{
    name: 'k-card',
    props: {
      boxShadow: {
        type: String,
        default: 'none'
      },
      radius: {
        type: String,
        default: 'true'
      },
      border: {
        type: String,
        default: 'true'
      },
      style: {
        type: String,
        default: ''
      }
    }
  }
</script>
