<template>
  <span :class="`k k-cascader ${radius === 'yes' ? 'k-radius' : '' }`" @click="toggleMenu" @mouseenter.stop="mouseenter" @mouseleave.stop="mouseleave">
    <p>
      <input readonly :placeholder="placeholder" :style="`width: ${width}`" v-model="value"><span class="k-cascader-btn"><i :title="icon === 'angle-down' ? '' : '清空选择'" @click="reset" :class="`fa fa-${icon} k-cascader-btn-click`" :style="`${selectShow ?  (icon === 'angle-down' ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)') : 'transform: rotate(0deg)'}`"></i></span>
    </p>
  </span>
</template>
<script>
  import CascaderMenu from './CascaderMenu.js';

  export default {
    name: 'k-cascader',
    props: {
      radius: {
        type: String,
        default: 'yes'
      },
      width: {
        type: String,
        default: '80px'
      },
      select: {
        type: Array,
        default: () => {
          return [];
        }
      },
      placeholder: {
        type: String,
        default: ''
      },
      onchange: {
        type: Function
      }
    },
    mounted() {
      this.$on(`k-cascader-value-change-${this._uid}`, (data) => {
        if (data && data.length > 0) {
          let getValue = '';
          const getValueData = [];
          data.forEach((each) => {
            getValueData.push(each);
            getValue += each.text + ' / ';
          });
          getValue = getValue.substring(0, getValue.length - 3);
          this.$data.value = getValue;
          this.$data.valueData = getValueData;
          this.$data.selectShow = !this.$data.selectShow;
        }
      });
    },
    data() {
      return {
        selectShow: false,
        value: '',
        valueData: [],
        icon: 'angle-down'
      }
    },
    watch: {
      valueData: function(newValue) {
        if (this.onchange && typeof(this.onchange) === 'function') {
          const copyData = [];
          newValue.forEach((each) => {
            copyData.push({
              key: each.key,
              text: each.text
            });
          });
          this.onchange({data: copyData, value: this.$data.value});
        }
      }
    },
    methods: {
      toggleMenu() {
        this.$data.selectShow = !this.$data.selectShow;
        CascaderMenu(this);
      },
      mouseenter(evt) {
        if (this.$data.value) {
          this.$data.icon = 'close';
        }
      },
      mouseleave() {
        this.$data.icon = 'angle-down';
      },
      reset(evt) {
        if (this.$data.value) {
          evt.stopPropagation();
          this.$data.value = '';
          this.$data.icon = 'angle-down';
          this.onchange(null);
        }
      }
    }
  }
</script>
