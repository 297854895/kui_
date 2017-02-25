<template>
  <transition name="k-datepicker-picker-in">
    <ul v-if="this.$options.type === 'mut'" class="k k-absolute-menu k-select-menu" v-show="show">
      <li v-for="(each, idx) in select" @click="">
        <div class="k-select-checkbox" @click.stop="mutSelect(each, idx)">
          <i v-if="each.status" class="fa fa-check"></i>
        </div>&nbsp;&nbsp;{{each.text}}
      </li>
    </ul><ul v-else-if="this.$options.input === 'readonly'" class="k k-absolute-menu k-select-menu" v-show="show">
      <li v-for="each in select" @click="selectIt(each.key)" :class="each.key === current.key ? 'k-select-active' : ''">{{each.text}}</li>
    </ul><ul v-else class="k k-absolute-menu k-select-menu" v-show="show">
      <li v-for="(each, idx) in selectArr" @click="inputSelectIt(each.key)">{{each.text}}</li>
    </ul>
  </transition>
</template>
<script>
  export default{
    name: 'k-select-menu',
    mounted() {
      this.$data.show = true;
      this.$options.$emit(`k-select-menu-vue-${this.$options._uid}`, this);
      this.$on(`k-select-menu-key-${this._uid}`, (key) => {
        if (!key) {
          this.$data.selectArr = this.select;
          return;
        }
        let _key = key.toLowerCase();
        const selectArr_ = [];
        this.select.forEach((each)=>{
          if (each.text.toLowerCase().indexOf(_key) > -1) {
            selectArr_.push(each);
          }
        });
        if (selectArr_.length === 0) {
          selectArr_.push({
            text: '没有匹配的选项',
            key: 'k-select-match-failed'
          })
        }
        this.$data.selectArr = selectArr_;
      });
    },
    data() {
      return {
        show: false,
        current: this.$options.current ? this.$options.current : this.$options.select[0],
        select: this.$options.select ? this.$options.select : []
      }
    },
    methods: {
      mutSelect(item, idx) {
        this.$data.select[idx].status = !this.$data.select[idx].status;
        const arr = [];
        this.$data.select.forEach((item, idx) => {
           if (item.status) {
             arr.push(item);
           }
         });
        this.$options.$emit(`k-select-menu-update-mut-select-${this.$options._uid}`, arr);
        this.$forceUpdate();
      },
      selectIt (key) {
        this.select.forEach((each) => {
          if (each.key === key) {
            this.$data.current = each;
            this.$options.$emit(`k-select-menu-update-current-${this.$options._uid}`, this.$data.current);
          }
        });
      },
      inputSelectIt (key) {
        if (key === 'k-select-match-failed') return;
        this.select.forEach((each) => {
          if (each.key === key) {
            this.$data.current = each;
            this.$options.$emit(`k-select-menu-update-current-${this.$options._uid}`, this.$data.current);
          }
        });
      }
    }
  }
</script>
