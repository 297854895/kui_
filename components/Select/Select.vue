<template>
  <span :class="`k k-select ${radius === 'yes' ? 'k-radius' : '' }`" @click="toggleSelect">
    <p>
      <input v-if="type === 'mut'" type="text" readonly="readonly" :value="this.handleMutSelected(this.$data.mutSelected)" :style="`width:${width}`" :placeholder="placeholder"/>
      <input v-else-if="input === 'readonly'" type="text" readonly="readonly" :value="current.text" :style="`width:${width}`"/>
      <input v-model="inputValue" :placeholder="placeholder" type="text" v-else :style="`width:${width}`"/>
      <span class="k-select-btn">
        <i class="fa fa-angle-down k-select-btn-click" :style="`${selectShow ? 'transform: rotate(180deg)' : ''}`"></i>
      </span>
    </p>
  </span>
</template>
<script>
  import SelectMenu from './SelectMenu.js';

  export default{
    name: 'k-select',
    props: {
      radius: {
        type: String,
        default: 'yes'
      },
      select: {
        type: Array,
        default: []
      },
      width: {
        type: String,
        default: '80px'
      },
      input: {
        type: String,
        default: 'readonly'
      },
      selectChange: {
        type: Function
      },
      placeholder: {
        type: String,
        default: ''
      },
      selected: {
        type: Object,
        default: null
      },
      mutSelectedArr: {
        type: Array,
        default: null
      },
      type: {
        type: String,
        default: 'single'
      }
    },
    watch: {
      inputValue: function () {
        const key = this.$data.inputValue;
        if(!key) {
          if (!this.$data.selectShow) {
            SelectMenu(this);
          }
          this.$data.selectShow = true;
        }
        if (this.$data.menu) {
          this.$data.menu.$emit(`k-select-menu-key-${this.$data.menu._uid}`, key);
        }
      },
      current: function(newValue, oldValue) {
        if (this.selectChange && typeof(this.selectChange) === 'function') {
          this.selectChange(newValue);
        }
      }
    },
    data () {
      const mutSelected = [];
      if (this.type === 'mut') {
        if (this.select) {
          const arr = [];
          this.select.forEach((item) => {
             if (item.status) {
               mutSelected.push(item);
             }
           });
        }
      }
      return {
        mutSelected: mutSelected,
        current: this.selected ? this.selected : this.select ? this.select[0] : '',
        inputValue: this.select ? this.select[0].text : '',
        selectShow: false,
        menu: ''
      }
    },
    mounted() {
      this.$on(`k-select-menu-vue-${this._uid}`, (vue_) => {
        if (vue_) {
          this.$data.menu = vue_;
        }
      });
      if (this.type === 'mut') {
        this.$on(`k-select-menu-update-mut-select-${this._uid}`, (data) => {
          this.$data.mutSelected = data;
          if (this.selectChange && typeof(this.selectChange) === 'function') {
            this.selectChange(data);
          }
        });
        return;
      }
      this.$on(`k-select-menu-update-current-${this._uid}`, (data) => {
        if (!data) return;
        this.$data.current = data;
        if (this.input !== 'readonly') {
          this.$data.inputValue = data.text;
        }
      });
    },
    methods: {
      toggleSelect () {
        this.$data.selectShow = !this.$data.selectShow;
        SelectMenu(this);
      },
      handleMutSelected(data) {
        let mutCurrentStr = '';
        data.forEach((item, idx) => {
          if (item.status) {
            mutCurrentStr += item.text + '、';
          }
        });
        mutCurrentStr = mutCurrentStr ? mutCurrentStr.substring(0, mutCurrentStr.length - 1) : '';
        return mutCurrentStr;
      }
    }
  }
</script>
