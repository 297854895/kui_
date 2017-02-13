<template>
  <span v-highLightCode>
    <pre>
      <code>{{this.code}}</code>
    </pre>
  </span>
</template>
<script>
  import hljs from 'highlight.js';
  export default{
    name: 'k-code',
    props: {
      code: {
        type: String,
        default: ''
      }
    },
    directives: {
      highLightCode: function(el, bind) {
        let blocks = el.querySelectorAll('pre code');
        Array.prototype.forEach.call(blocks, hljs.highlightBlock);
      }
    }
  }
</script>
<style scoped>
  .hljs{
    background: #efefef;
  }
</style>
