<template>
  <transition name="k-datepicker-picker-in">
    <div ref="menuContainer" class="k k-absolute-menu k-cascader-menu" v-if="show">
      <ul ref="menuEach" v-for="(num, idx) in degree" v-if="idx === 0 ? true : (degreeData[`degree${idx}`] ? (degreeData[`degree${idx}`].length > 0 ? true : false) : false)" class="k-cascader-menu-each">
        <li :class="clickSeq[idx] === index ? 'k-cascader-menu-each-active' : ''" v-for="(each, index) in idx === 0 ? select : degreeData[`degree${idx}`]" @click.stop="eachClick(each.key, index, idx)">
          {{each.text}}
          <span class="k-cascader-menu-arr"><i class="fa fa-angle-right" v-if="each.select && each.select.length > 0"></i></span>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
  export default{
    name: 'k-cascader-menu',
    mounted() {
      this.$data.show = !this.$data.show;
    },
    data() {
      const degree = Math.max.apply({}, this.handleData(this.$options.select));
      const obj = {};
      for (let num = 1; num < degree; num ++) {
        obj[`degree${num}`] = [];
      }
      return {
        show: false,
        select: this.$options.select,
        degree: degree,
        degreeData: {
          ...obj
        },
        clickSeq: []
      }
    },
    updated() {
      this.$nextTick(() => {
        const menuEach = this.$refs.menuEach;
        if (menuEach) {
          let width = 0;
          menuEach.forEach((each) => {
            width += each.offsetWidth;
          });
          if (!this.$refs.menuContainer) return;
          this.$refs.menuContainer.style.width = width + 'px';
        }
      });
    },
    methods: {
      handleData(data) {
        if (data && typeof(data) === 'object' && data.length > 0) {
          const degree = Array.apply(null, Array(data.length)).map(() => {return 1});
          let max;
          data.forEach((each, idx) => {
            if (each.select && typeof(each.select) === 'object' && each.select.length > 0) {
              degree[idx] += 1;
              degree[idx] = this.getDegree(each.select, 2);
            }
          });
          return degree;
        }
      },
      getDegree(data, index) {
        let max = index;
        const degree = Array.apply(null, Array(data.length)).map(() => {return index});
        data.forEach((each, idx) => {
          if (each.select && typeof(each.select) === 'object' && each.select.length > 0) {
            degree[idx] = this.getDegree(each.select, index + 1);
          }
        });
        const cmax = Math.max.apply({}, degree);
        return cmax > max ? cmax : max;
      },
      eachClick(key, idx, index) {
        const menuNum = index + 1;
        this.$data.clickSeq[menuNum - 1] = idx;
        const handleLength = this.$data.clickSeq.length - menuNum;
        if (menuNum < this.$data.clickSeq.length) {
          for (let num = menuNum + 1; num < this.$data.clickSeq.length + 1; num ++) {
            this.$data.degreeData[`degree${num}`] = [];
          }
          this.$data.clickSeq.length = menuNum;
        }
        let getData = this.$data.select;
        const choiceData = [];
        this.$data.clickSeq.forEach((each)=>{
          choiceData.push({
            key: getData[each]['key'],
            text: getData[each]['text']
          });
          getData = getData[each].select;
        });
        this.$data.degreeData[`degree${menuNum}`] = getData;
        if (menuNum === this.$data.degree || !getData) {
          this.$options.$emit(`k-cascader-value-change-${this.$options._uid}`, choiceData);
          this.$data.show = !this.$data.show;
        }
      }
    }
  }
</script>
