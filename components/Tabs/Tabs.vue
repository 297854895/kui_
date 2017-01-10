<template>
  <div class="k k-tabs">
    <ul :class="'k-tabs-title' + ' k-tabs-default'">
      <li @click="current === each.key ? '' : toggleCurrent(each.key)" v-for="each in this.$data.tabs" :class="`${current === each.key ? 'k-tabs-title-active': ''}`">
        <i v-if="each.icon" :class="each.icon ? each.icon : ''"></i>{{each.title}}
      </li>
    </ul>
    <div class="k-tabs-container" v-if="animate">
      <transition :name="`k-animate-left-in`">
        <div class="k k-animate-container" v-if="status">
          <slot :name="current"></slot>
        </div>
      </transition>
    </div>
    <div v-else class="k-tabs-container">
      <slot :name="current"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'k-tabs',
    props: ['set'],
    methods: {
      toggleCurrent (key) {
        this.$data.status = false;
        this.$data.current = key;
        setTimeout(()=>{
          this.$data.status = true;
        }, 10);
      }
    },
    data () {
      let tabs_ = [];
      if (this.set.tabs) {
        tabs_ = this.set.tabs;
      }
      return {
        current: this.set.current ? this.set.current : this.set.tabs[0].key,
        tabs: tabs_,
        animate: this.set.animate ? this.set.animate : '',
        status: true
      }
    }
  }
</script>
