<template>
  <div class="k k-slider">
    <div class="k-slider-bar radius">
      <div ref="slider" :style="`width: ${this.$data._percent}%`" :class="`k-slider-percent ${this.type ? 'k-slider-' + this.type : 'k-slider-default'} radius`">
        <div @mousemove.stop="_moveIng" @mouseup.stop="_moveEnd"  @mousedown.stop="_moveStart" ref="slider" :class="`k-slider-bt ${this.size ? 'k-slider-bt-size-' + this.size : 'k-slider-size-mormal'}`"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'k-slider',
    props: {
      percent: {
        type: String,
        default: '0'
      },
      start: {
        type: String,
        default: '0'
      },
      min: {
        type: String,
        default: '0'
      },
      max: {
        type: String,
        default: '100'
      },
      type: {
        type: String,
        default: ''
      },
      size: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        _percent: this.percent ? this.percent : 0,
        _start: this.start === true ? true : false,
        _clientX: 0,
        moveStart: false
      }
    },
    methods: {
      _moveStart(evt) {
        this.$data.moveStart = true;
        this.$data._clientX = evt.clientX;
      },
      _moveEnd() {
        this.$data.moveStart = false;
      },
      _moveIng(evt) {
        if (this.$data.moveStart) {
          // this.$refs.slider.style.width = this.$data._width + evt.clientX - this.$data._clientX + 'px';
        }
      }
    }
  }
</script>
