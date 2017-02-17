<template>
  <div class="k k-breadcrumb" v-if="this.$data.breadcrumbData.length > 0">
    <span v-for="(item, idx) in breadcrumbData">
      <a @click="itemClick(item.callBack ? item.callBack : '', {label: item.label ? item.label : 'undefiend', key: item.key ? item.key : ''})" :href="idx === (breadcrumbData.length - 1) ? 'javascript:;' : (item.href ? item.href : 'javascript:;')">{{item.label ? item.label : 'undefined'}}</a>
      <b></b>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'k-breadcrumb',
    props: {
      options: {
        type: Array,
        default: () => {
          return [];
        }
      }
    },
    data() {
      return {
        breadcrumbData: this.options
      }
    },
    methods: {
      itemClick(fn, item) {
        if (typeof fn === 'function') {
          fn(item);
        }
      }
    }
  }
</script>
