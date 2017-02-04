<template>
  <div class="k-textEditor-pane">
    <k-button-group v-for="item of section">
      <button @click="PaneClick(item_)" v-for="item_ of item" v-if="itemOptions[item_].kind === 'button'" :class="`k k-textEditor-bt k-button k-button-default k-radius k-button-size-small ${ itemOptions[item_].stat ? 'k-textEditor-bt-active' : ''}`">
        <i :class="`fa ${itemOptions[item_].icon}`" style="margin: 0px;"></i>
      </button>
      <button v-else-if="itemOptions[item_].kind === 'pane'" :class="`k k-textEditor-bt k-textEditor-pane-bt k-button k-button-default k-radius k-button-size-small ${ itemOptions[item_].stat ? 'k-textEditor-bt-active' : ''}`">
        <span class="k-textEditor-pane-btin" style="line-height: 22px;">
          <i :class="`fa ${itemOptions[item_].icon}`" style="margin: 0px;"></i>
        </span>
      </button>
      <span v-else>select</span>
    </k-button-group>
  </div>
</template>
<script>
  import kButtonGroup from '../ButtonGroup/ButtonGroup';

  export default{
    name: 'k-textEditor-pane',
    components: {
      'k-button-group': kButtonGroup
    },
    props: {
      defaultOptions: {
        type: Object,
        default: () => {
          return {
            Redo: {
              icon: 'fa-rotate-left',
              kind: 'button',
              stat: false
            },
            Undo: {
              icon: 'fa-rotate-right',
              kind: 'button',
              stat: false
            },
            ForeColor: {
              icon: 'fa-font',
              kind: 'pane',
              stat: false
            },
            Bold: {
              icon: 'fa-bold',
              kind: 'button',
              stat: false
            },
            Italic: {
              icon: 'fa-italic',
              kind: 'button',
              stat: false
            },
            Header: {
              icon: 'fa-header',
              kind: 'button',
              stat: false
            },
            StrikeThrough: {
              icon: 'fa-strikethrough',
              kind: 'button',
              stat: false
            },
            Underline: {
              icon: 'fa-underline',
              kind: 'button',
              stat: false
            },
            Subscript: {
              icon: 'fa-subscript',
              kind: 'button',
              stat: false
            },
            Superscript: {
              icon: 'fa-superscript',
              kind: 'button',
              stat: false
            },
            Indent: {
              icon: 'fa-indent',
              kind: 'button',
              stat: false
            },
            Outdent: {
              icon: 'fa-outdent',
              kind: 'button',
              stat: false
            },
            JustifyLeft: {
              icon: 'fa-align-left',
              kind: 'button',
              stat: false
            },
            JustifyRight: {
              icon: 'fa-align-right',
              kind: 'button',
              stat: false
            },
            JustifyCenter: {
              icon: 'fa-align-center',
              kind: 'button',
              stat: false
            },
            JustifyFull: {
              icon: 'fa-align-justify',
              kind: 'button',
              stat: false
            },
            Paste: {
              icon: 'fa-paste',
              kind: 'button',
              stat: false
            },
            Copy: {
              icon: 'fa-copy',
              kind: 'button',
              stat: false
            },
            Cut: {
              icon: 'fa-cut',
              kind: 'button',
              stat: false
            },
            Save: {
              icon: 'fa-save',
              kind: 'button',
              stat: false
            },
            InsertOrderedList: {
              icon: 'fa-list-ol',
              kind: 'button',
              stat: false
            },
            InsertUnorderedList: {
              icon: 'fa-list-ul',
              kind: 'button',
              stat: false
            },
            Table: {
              icon: 'fa-table',
              kind: 'button',
              stat: false
            },
            Heading: {
              icon: 'fa-header',
              kind: 'button',
              stat: false
            },
            FontSize: {
              kind: 'select',
              stat: false
            }
          }
        }
      }
    },
    mounted() {
      //toggleStyle
      this.$on(`k-textEditor-pane-toggle-${this._uid}`, (styleArr) => {
        this.resetPane();
        // if (styleArr.length > 0) {
        //   for (let each of styleArr) {
        //     this.$data.itemOptions[each].stat = true;
        //   }
        // }
      });
    },
    methods: {
      PaneClick(key) {
        if(!this.$data.itemOptions[key]) return;
        this.$data.itemOptions[key].stat = !this.$data.itemOptions[key].stat;
        this.$parent.$emit(`k-textEditor-pane-${this.$parent._uid}`, {key: key, options: null});
      },
      resetPane() {
        const defaultOptions_ = JSON.parse(JSON.stringify(this.defaultOptions));
        // console.log(defaultOptions_.Bold.stat);
        // this.$data.itemOptions = defaultOptions_;

      }
    },
    data() {
      return {
        itemOptions: this.defaultOptions,
        section: [
          ['Bold', 'Italic', 'StrikeThrough', 'ForeColor', 'FontSize']
        ],
        PaneOptions: {
          ForeColor: {
            style: '#333',
            viewColor: '#333',
            show: false,
            color: [['fff', 'f2f2f2', 'd8d8d8', 'bfbfbf', 'a5a5a5', '7f7f7f'],
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
        },
      }
    }
  }
</script>
