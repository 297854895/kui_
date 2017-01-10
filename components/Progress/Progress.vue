<template>
  <div class="k-progress">
    <div class="k-progress-bar" :style="`width:${percent};background:${color}`">
      {{percent}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'k-progress',
    props: {
      percent: {
        type: String,
        default: '0%'
      },
      color: {
        type: String,
        default: '#428bca'
      }
    }
  }
</script>
