<template>
  <transition name="k-backtop-fade">
    <div :class="`k-backtop k-backtop-${type}`" :style="`background: ${background}`" @click="BackTop" v-show="show">
      <i class="fa fa-angle-double-up"></i>
    </div>
  </transition>
</template>
<script>
  export default{
    name: 'k-backtop',
    props: {
      type: {
        type: String,
        default: 'circle'
      },
      background: {
        type: String,
        default: '#20a0ff'
      },
      scrollTop: {
        type: String,
        default: '0'
      }
    },
    mounted() {
      window.onscroll = () => {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (scrollTop >= parseInt(this.scrollTop, 10)) {
          this.$data.show = true;
        } else {
          this.$data.show = false;
        }
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      BackTop() {
        const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        const scrollTimer = setInterval(()=>{
          const scrollTop_ = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          const speed = scrollTop_ / 25;
          if (scrollTop_ <= 0) {
            clearInterval(scrollTimer);
            return;
          }
          window.scrollTo(0, scrollTop_ - speed);
        }, 1);
      }
    }
  }
</script>
