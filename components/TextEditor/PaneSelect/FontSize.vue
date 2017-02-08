<template>
  <ul>
    <li v-for="item of this.selectOptions" :style="`font-size: ${item.key < 14 ? '14px' : item.text}`" @click.stop="toggleFontSize(item.key)">
      {{item.text}}
    </li>
  </ul>
</template>
<script>
  export default{
    name: 'k-font-size',
    props: {
      selectOptions: {
        type: Array,
        default: () => {
          return [
            {text: '10px', key: 10},
            {text: '12px', key: 12},
            {text: '14px', key: 14},
            {text: '16px', key: 16},
            {text: '18px', key: 18},
            {text: '20px', key: 20},
            {text: '22px', key: 22},
            {text: '24px', key: 24},
            {text: '36px', key: 36},
          ];
        }
      }
    },
    methods: {
      toggleFontSize(fontSize) {
        this.$parent.$parent.$emit(`k-textEditor-close-paneselect-${this.$parent.$parent._uid}`, {key: 'FontSize', options: fontSize + 'px', select: true});
      }
    }
  }
</script>
