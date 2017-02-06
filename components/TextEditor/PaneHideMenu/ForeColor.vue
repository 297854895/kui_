<template>
  <div class="k-textEditor-ForeColor-container">
    <div class="k-textEditor-ForeColor-title">颜色选取</div>
    <div class="k-textEditor-ForeColor-currentColor">
      <div :style="`background: ${currentColor}`"></div>
    </div>
    <ul v-for="item of this.colorMap" class="k-textEditor-ForeColor-wrap">
      <li v-for="item_ of item" class="k-textEditor-ForeColor-each" :style="`background: #${item_}`" @click.stop="setColor(item_)"></li>
    </ul>
    <div class="k-textEditor-ForeColor-colorInput">
      <input placeholder="请输入16进制颜色" maxlength="7" v-model="currentColor"/>
    </div>
    <span class="k-textEditor-ForeColor-close" @click="close">确定</span>
  </div>
</template>
<script>
  export default{
    name: 'k-fore-color',
    props: {
      colorMap: {
        type: Array,
        default: () => {
          return [['fff', 'f2f2f2', 'd8d8d8', 'bfbfbf', 'a5a5a5', '7f7f7f'],
                  ['000', '7f7f7f', '595959', '3f3f3f', '262626', '0c0c0c'],
                  ['eeece1', 'ddd9c3', 'c4bd97', '938953', '494429', '1d1b10'],
                  ['1f497d', 'c6d9f0', '8db3e2', '548dd4', '17365d', '0f243e'],
                  ['4f81bd', 'dbe5f1', 'b8cce4', '9fb3d7', '366092', '244061'],
                  ['c0504d', 'f2dcdb', 'e5b9b7', 'd99694', '953734', '632423'],
                  ['9bbb59', 'ebf1dd', 'd7e3bc', 'c3d69b', '76923c', '4f6128'],
                  ['8064a2', 'e5e0ec', 'ccc1d9', 'b2a2c7', '5f497a', '3f3151'],
                  ['4bacc6', 'dbeef3', 'b7dde8', '92cddc', '31859b', '205867'],
                  ['f79646', 'fdeada', 'fbd5b5', 'fac08f', 'e36c09', '974806']]
        }
      }
    },
    data() {
      return {
        currentColor: '#333'
      }
    },
    methods: {
      setColor(color) {
        if (!color) {
          this.$data.viewColor = this.$data.currentColor;
          return;
        }
        this.$data.currentColor = '#' + color;
        this.$data.viewColor = '#' + color;
      },
      close() {
        let cColor = this.$data.currentColor;
        if(!cColor.match('^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$')) {
          cColor = '#333';
        }
        this.$parent.$parent.$emit(`k-textEditor-close-pane-${this.$parent.$parent._uid}`, {key: 'ForeColor', options: cColor});
      }
    }
  }
</script>
