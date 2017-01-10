<template>
  <transition :name="`k-animate-${direction ? direction : 'left'}-in`">
    <div class="k k-animate-container" v-if="status" :style="`${this.message ? 'height: 0px' : ''}`">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default{
    name: 'k-animate',
    props: ['direction', 'delay', 'remove', 'message', 'show'],
    mounted() {
      setTimeout(() => {
        this.$data.status = true;
      }, this.delay ? parseInt(this.delay) : 300);
      if (this.remove) {
        if (this.remove === null) return;
        setTimeout(() => {
          this.$data.status = false;
        }, this.remove ? parseInt(this.remove) : 1800);
      }
      const unWatch = this.$watch('show', (newValue, oldValue) => {
        if (!newValue) {
          this.$data.status = false;
          unWatch();
        }
      });
    },
    data() {
      return {
        status: false
      }
    }
  }
</script>
