<template>
  <div v-highLightCode>
    <pre><code :class="`${this.type ? this.type : ''}`">{{this.code}}</code></pre>
  </div>
</template>
<script>
  import hljs from 'highlight.js';
  export default{
    name: 'k-code',
    props: {
      code: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      }
    },
    directives: {
      highLightCode: function(el, bind) {
        const blocks = el.querySelectorAll('pre code');
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
