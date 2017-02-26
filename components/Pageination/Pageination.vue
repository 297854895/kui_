<template>
  <ul class="k k-page-wrap k-page-wrap-default" v-if="this.pageSet.total && this.pageSet.total > 0 && this.pageSet.current">
    <li class="k k-page-each">
      <div v-if="current === 1">
        <a :class="`k k-page-each-a k-page-each-a-disable ${this.$data.size_}`">&nbsp;<i class="fa fa-angle-left"></i>&nbsp;</a>
      </div>
      <div v-else>
        <a @click.stop="back" :class="`k k-page-each-a k-page-each-a-enable ${this.$data.size_}`">&nbsp;<i class="fa fa-angle-left"></i>&nbsp;</a>
      </div>
    </li>
    <li v-for="_page in show" class="k-page-each">
      <div v-if="_page.className.indexOf('active') > -1">
        <a :class="_page.className">{{_page.num}}</a>
      </div>
      <div v-else>
        <a :class="_page.className" @click="turn(_page.num)">{{_page.num}}</a>
      <div>
    </li>
    <li class="k k-page-each">
      <div v-if="current === total">
        <a :class="`k k-page-each-a k-page-each-a-disable ${this.$data.size_}`">&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</a>
      </div>
      <div v-else>
        <a @click.stop="next" :class="`k k-page-each-a k-page-each-a-enable ${this.$data.size_}`">&nbsp;<i class="fa fa-angle-right"></i>&nbsp;</a>
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'k-page',
    props: {
      pageSet: {
        type: Object,
        default: () => {
          return {
            total: 0,
            current: 1
          }
        }
      },
      size: {
        type: String,
        default: 'normal'
      }
    },
    created () {
      // this.$forceUpdate();
      this.computedPage('first');
    },
    updated() {
      this.current = this.pageSet.current;
      this.total = this.pageSet.total;
      this.computedPage('first');
    },
    data() {
      return {
        size_: this.size === 'small' ? 'k k-page-size-small' : 'k k-page-size-normal',
        current: this.pageSet.current || 1,
        total: this.pageSet.total || 1,
        show: []
      }
    },
    methods: {
      next () {
        if (this.current < this.total) {
          this.current += 1;
        }
        this.computedPage();
      },
      back () {
        if (this.current > 1) {
          this.current -= 1;
        }
        this.computedPage();
      },
      turn (idx) {
        if (idx === '...') {
          return;
        }
        this.current = idx;
        this.computedPage();
      },
      computedPage (times) {
        this.show = [];
        this.show.push({
          num : 1,
          className : this.current === 1 ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
        });
        if (this.total > 7) {
          if (this.current > 4 && this.current + 3 === this.total ) {
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable ' + this.$data.size_
            });
            for (let num = this.current - 1 ; num < this.total + 1; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
              });
            }
          }else if (this.current > 4 && this.current + 3 > this.total ) {
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable ' + this.$data.size_
            });
            for (let num = this.total - 4 ; num < this.total + 1; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
              });
            }
          }else if(this.current > 4 && this.current + 3 < this.total ) {
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable ' + this.$data.size_
            });
            for (let num = this.current - 1 ; num < this.current + 2; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
              });
            }
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable ' + this.$data.size_
            });
            this.show.push({
              num : this.total,
              className : this.total === this.current ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
            });
          }else if(this.current <= 4){
            for (let num = 2 ; num < 6; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
              });
            }
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable ' + this.$data.size_
            });
            this.show.push({
              num : this.total,
              className : this.total === this.current ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
            });
          }else {
            for (let num = 2 ; num < 8; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
              });
            }
          }
        }else {
          for (let num = 2; num < this.total + 1; num++) {
            this.show.push({
              num : num,
              className : this.current === num ? 'k-page-each-a k-page-each-a-active ' + this.$data.size_ : 'k-page-each-a k-page-each-a-enable ' + this.$data.size_
            });
          }
        }
        if (this.pageSet.callBack && !times) {
          this.pageSet.callBack(this.current);
        }
      }
    }
  }
</script>
