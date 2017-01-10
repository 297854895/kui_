<template>
  <ul :class="`k k-menu k-menu-${this.direction === 'x' || this.direction === 'y' ? this.direction : 'x'} k-menu-default`" :style="this.direction === 'y' ? 'border-radius:4px' : ''">
    <li @mouseleave="direction === 'y' ? '' : hideMenu(each.key)" @mouseenter="direction === 'y' ? '' : showMenu(each.key)" @click="each.key === current_ ? (direction === 'y' ? toggleMenu(each.key) : '') : toggleMenu(each.key)" :class="`k-menu-each ${current_ === each.key ? 'k-menu-each-active' : ''} ${direction === 'y' ? (border === 'none' ? 'k-menu-menu-border-none' : '') : ''}`" v-for="each in (this.menu ? this.menu : [])">
      <p class="k-menu-each-wrap">
        <i v-if="each.icon" :class="`k-menu-icon ${each.icon}`"></i>
        {{each.title}}
        <i v-if="each.menu" class="k-menu-icon-arr fa fa-caret-down"></i>
      </p>
      <transition name="k-menu-menu-animate">
        <ul v-if="each.menu" v-show="menu_Status[each.key].status" class="k-menu-menu">
          <li @click.stop="menuMenuClick(each.key, each_.key)" class="k-menu-menu-each" v-for="each_ in each.menu" :style="each_.icon ? (direction === 'y' ? '' : 'padding-left:38px') : ''">
            <i v-if="each_.icon" :class="`k-menu-icon ${each_.icon}`"></i>
            <span>{{each_.title}}</span>
          </li>
        </ul>
      </transition>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'k-menu',
    props: ['direction', 'menu', 'current', 'border'],
    data () {
      let menu_Status = {};
      this.menu.forEach((each) => {
        if (each.menu) {
          let funObj = {};
          let call_;
          each.menu.forEach((each_) => {
            if (each_.callBack) {
              funObj[each_.key] = each_.callBack;
            }
          });
          menu_Status[each.key] = {
            status: false,
            callBack: each.callBack ? each.callBack : '',
            ...funObj
          };
        }
      });
      return {
        current_: this.current ? this.current : this.menu[0].key,
        menu_Status: menu_Status
      }
    },
    methods: {
      toggleMenu (key) {
        this.$data.current_ = key;
        if (this.$data.menu_Status[key] && typeof(this.$data.menu_Status[key].callBack) === 'function') {
          this.$data.menu_Status[key].callBack(key);
        }
        if (this.direction !== 'y') return;
        this.yToggleMenu(key);
      },
      yToggleMenu (key) {
        if (!this.$data.menu_Status[key]) return;
        this.$data.menu_Status[key].status = !this.$data.menu_Status[key].status;
      },
      showMenu (key) {
        if (!this.$data.menu_Status[key]) return;
        this.$data.menu_Status[key].status = true;
      },
      hideMenu (key) {
        if (!this.$data.menu_Status[key]) return;
        this.$data.menu_Status[key].status = false;
      },
      menuMenuClick (key_, key) {
        if (this.$data.menu_Status[key_] && typeof(this.$data.menu_Status[key_][key]) === 'function') {
          this.$data.menu_Status[key_][key](key);
        }
        if (this.direction === 'y') return;
        this.hideMenu(key_);
      }
    }
  }
</script>
