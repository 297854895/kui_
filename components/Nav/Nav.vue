<template>
  <div :class="`k k-nav k-nav-${this.$data._type === 'dark' ? 'dark' : 'default'} k-nav-${position === 'fixed-bottom' || position === 'normal' ? position : 'fixed-top'}`" :style="`border-color:${this.$data._navBorderColor};background-color:${this.$data._backgroundColor}`">
    <div class="k k-nav-container">
      <span class="k-nav-left" :style="`border-color:${this.$data._navHoverColor};color:${this.$data._navHoverColor}`">
        <div :style="`height:0px;background-color:${this.$data._navHoverBgColor};border-color:${this.$data._type === 'dark' ? this.$data._navBorderColor : 'inherit'}`">
          <slot name="left"></slot>
        </div>
      </span><span class="k-nav-right" :style="`border-color:${this.$data._navHoverColor};color:${this.$data._navHoverColor}`">
        <div :style="`height:0px;background-color:${this.$data._navHoverBgColor};border-color:${this.$data._type === 'dark' ? this.$data._navBorderColor : 'inherit'}`">
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
      const scrollArr = this.scrollChange;
      if (scrollArr.length > 0) {
        window.onscroll = () =>{
          const scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
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
      }
    }
  }
</script>
