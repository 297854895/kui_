<template>
  <span>This is code</span>
</template>
<script>
  import hljs from 'highlightjs';

  export default{
    name: 'k-code',
    directives: {
      highLightCode: function(el, bind) {
        if (binding.value) {
           let value = null
           if (typeof(binding.value) === "string") {
               value = binding.value
           } else {
               value = JSON.stringify(binding.value, null, 4)
           }
           el.innerHTML = hljs.highlight("json", value, true).value
       }
      }
    }
  }
</script>
