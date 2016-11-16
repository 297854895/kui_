<template>
  <ul :class="this._thisClass" v-if="this.pageSet.total && this.pageSet.current">
    <li class="k-page-each">
      <div v-if="current === 1">
        <a class="k-page-each-a k-page-each-a-disable">&nbsp;<k-icon type="fa fa-angle-left"></k-icon>&nbsp;</a>
      </div>
      <div v-else>
        <a @click="back" class="k-page-each-a k-page-each-a-enable">&nbsp;<k-icon type="fa fa-angle-left"></k-icon>&nbsp;</a>
      </div>
    </li><li v-for="_page in show" class="k-page-each">
      <div v-if="_page.className.indexOf('active') > -1">
        <a :class="_page.className">{{_page.num}}</a>
      </div>
      <div v-else>
        <a :class="_page.className" @click="turn(_page.num)">{{_page.num}}</a>
      <div>
    </li><li class="k-page-each">
      <div v-if="current === total">
        <a class="k-page-each-a k-page-each-a-disable">&nbsp;<k-icon type="fa fa-angle-right"></k-icon>&nbsp;</a>
      </div>
      <div v-else>
        <a @click="next" class="k-page-each-a k-page-each-a-enable">&nbsp;<k-icon type="fa fa-angle-right"></k-icon>&nbsp;</a>
      </div>
    </li>
  </ul>
</template>
<script>
  import kIcon from './icon';
  export default {
    name: 'k-page',
    props: ['pageSet'],
    components: {
      'k-icon': kIcon
    },
    data: () => {
      return {
        _thisClass: 'k-page-wrap',
        current: 0,
        total: 0,
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
      computedPage () {
        this.show = [];
        this.show.push({
          num : 1,
          className : this.current === 1 ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
        });
        if (this.total > 7) {
          if (this.current > 4 && this.current + 3 === this.total ) {
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable'
            });
            for (let num = this.current - 1 ; num < this.total + 1; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
              });
            }
          }else if (this.current > 4 && this.current + 3 > this.total ) {
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable'
            });
            for (let num = this.total - 4 ; num < this.total + 1; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
              });
            }
          }else if(this.current > 4 && this.current + 3 < this.total ) {
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable'
            });
            for (let num = this.current - 1 ; num < this.current + 2; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
              });
            }
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable'
            });
            this.show.push({
              num : this.total,
              className : this.total === this.current ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
            });
          }else if(this.current <= 4){
            for (let num = 2 ; num < 6; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
              });
            }
            this.show.push({
              num : '...',
              className : 'k-page-each-a k-page-each-a-disable'
            });
            this.show.push({
              num : this.total,
              className : this.total === this.current ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
            });
          }else {
            for (let num = 2 ; num < 8; num ++) {
              this.show.push({
                num : num,
                className : num === this.current ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
              });
            }
          }
        }else {
          for (let num = 2; num < this.total + 1; num++) {
            this.show.push({
              num : num,
              className : this.current === num ? 'k-page-each-a k-page-each-a-active' : 'k-page-each-a k-page-each-a-enable'
            });
          }
        }
        if (this.pageSet.callBack) {
          this.pageSet.callBack(this.current);
        }
      }
    },
    created () {
      switch (this.pageSet.type) {
        case 'primary':
          this._thisClass += ' k-page-wrap-primary';
          break;
        case 'black':
          this._thisClass += ' k-page-wrap-black';
          break;
        default:
          this._thisClass = 'k-page-wrap k-page-wrap-default';
      }
      this.current = this.pageSet.current;
      this.total = this.pageSet.total;
      this.computedPage();
      this.$forceUpdate();
    }
  }
</script>
<style scoped>
  ul,li{
    padding: 0;
    margin: 0;
  }
  .k-page-wrap{
    text-align: center;
    display: inline-block;
    border: 1px solid #c0ccda;
    overflow: hidden;
  }
  .k-page-wrap li {
    border-right: 1px solid #c0ccda;
  }
  .k-page-wrap li:last-child{
    border-right: none;
  }
  .k-page-wrap-default{
    border-radius: 4px;
    color: #666;
    background: #fff;
  }
  .k-page-wrap-default .k-page-each-a-active{
    color: #3384FE;
    cursor: not-allowed;
    /*border: 1px solid;*/
  }
  .k-page-wrap-default .k-page-each-a-enable:hover {
    color: #20a0ff;
  }
  .k-page-each{
    display: inline-block;
    vertical-align: top;
    list-style: none;
  }
  .k-page-each-a{
    padding: 4px 8px;
    display: block;
    color: inherit;
    font-size: 14px;
  }
  .k-page-each-a-enable {
    /*border: 1px solid;*/
    cursor: pointer;
    transition: all .3s;
  }
  .k-page-each-a-disable {
    color: #bbb;
    /*border:1px solid #777;*/
    cursor: not-allowed;
  }
</style>
