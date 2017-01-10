<template>
  <div class="k k-breadcrumb">
    <span v-for="(each, idx) in breadcrumbData">
      <a :href="idx === (breadcrumbData.length - 1) ? 'javascript:;' : (each.href ? each.href : 'javascript:;')">{{each.label ? each.label : 'undefined'}}</a>
      <b></b>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'k-breadcrumb',
    props: ['set'],
    data() {
      return {
        breadcrumbData: this.set ? (this.set.data ? this.set.data : []) : []
      }
    }
  }
</script>
