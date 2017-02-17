<template>
  <div ref="nav" :class="`k k-nav k-nav-${this.$data._type === 'dark' ? 'dark' : 'default'} k-nav-${position === 'fixed-bottom' || position === 'normal' ? position : 'fixed-top'}`" :style="`border-color:${this.$data._navBorderColor};background-color:${this.$data._backgroundColor}`">
    <div class="k k-nav-container">
      <span class="k-nav-left" :style="`border-color:${this.$data._navHoverColor};color:${this.$data._navHoverColor}`">
        <div @click="navClick" :style="`height:0px;background-color:${this.$data._navHoverBgColor};border-color:${this.$data._type === 'dark' ? this.$data._navBorderColor : 'inherit'}`">
          <slot name="left"></slot>
        </div>
      </span><span class="k-nav-right" :style="`border-color:${this.$data._navHoverColor};color:${this.$data._navHoverColor}`">
        <div @click="navClick" :style="`height:0px;background-color:${this.$data._navHoverBgColor};border-color:${this.$data._type === 'dark' ? this.$data._navBorderColor : 'inherit'}`">
          <slot name="right"></slot>
        </div>
      </span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'k-nav',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      position: {
        type: String,
        default: 'fixed-top'
      },
      navBorderColor: {
        type: String,
        default: '#ddd'
      },
      navHoverColor: {
        type: String,
        default: '#20a0ff'
      },
      backgroundColor: {
        type: String,
        default: ''
      },
      navHoverBgColor: {
        type: String,
        default: ''
      },
      scrollChange: {
        type: Array,
        default: () => {
          return [];
        }
      },
      scrollDOM: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        _type: this.type,
        _position: this.position,
        _navBorderColor: this.navBorderColor,
        _navHoverColor: this.navHoverColor,
        _backgroundColor: this.backgroundColor,
        _navHoverBgColor: this.navHoverBgColor,
        _defaultStyle: {
          _type: this.type,
          _position: this.position,
          _navBorderColor: this.navBorderColor,
          _navHoverColor: this.navHoverColor,
          _backgroundColor: this.backgroundColor,
          _navHoverBgColor: this.navHoverBgColor
        }
      }
    },
    mounted() {
      if (this.position === 'normal' ) return;
      const scrollArr = this.scrollChange;
      if (scrollArr.length > 0) {
        let SCDOM;
        let bindFlag;
        if (!this.scrollDOM) {
          SCDOM = window;
          bindFlag = true;
        }else {
          const getTimer = setInterval(() => {
            if (SCDOM) {
              this.bindEvent(scrollArr, SCDOM, 'dom');
              clearInterval(getTimer);
              return;
            }
            SCDOM = document.querySelectorAll(this.scrollDOM)[0];
          }, 100);
        }
        if (!bindFlag) return;
        this.bindEvent(scrollArr, SCDOM);
      }
    },
    methods: {
      bindEvent(scrollArr, dom, flag) {
        dom.onscroll = () => {
          let scrollTop;
          if (flag === 'window') {
            scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
          } else {
            scrollTop = dom.scrollTop || dom.pageYOffset;
          }
          scrollArr.forEach((each) => {
            if (scrollTop >= each.scrollTop) {
              this.$data._type = each.type ? each.type : this.$data._defaultStyle._type;
              this.$data._navBorderColor = each.navBorderColor ?  each.navBorderColor : this.$data._defaultStyle._navBorderColor;
              this.$data._navHoverColor = each.navHoverColor ? each.navHoverColor : this.$data._defaultStyle._navHoverColor;
              this.$data._navHoverBgColor = each.navHoverBgColor ? each.navHoverBgColor : this.$data._defaultStyle._navHoverBgColor;
              this.$data._backgroundColor = each.backgroundColor ? each.backgroundColor : this.$data._defaultStyle._backgroundColor;
            }
          });
          if (scrollTop < scrollArr[0].scrollTop) {
            this.$data._type = this.$data._defaultStyle._type;
            this.$data._navBorderColor = this.$data._defaultStyle._navBorderColor;
            this.$data._navHoverColor = this.$data._defaultStyle._navHoverColor;
            this.$data._navHoverBgColor = this.$data._defaultStyle._navHoverBgColor;
            this.$data._backgroundColor = this.$data._defaultStyle._backgroundColor;
          }
        }
      },
      navClick(evt) {
        if (evt.target.nodeName !== 'LI' && evt.target.parentNode.nodeName !== 'UL') return;
        const class_ = evt.target.className;
        if (!class_) {} else if (class_.indexOf('k-nav-current') !== -1) return;
        const currentNav = this.$refs.nav.querySelectorAll('.k-nav-current')[0];
        currentNav.className = currentNav.className.replace('k-nav-current', '');
        evt.target.className = class_ + ' k-nav-current';
      }
    }
  }
</script>
