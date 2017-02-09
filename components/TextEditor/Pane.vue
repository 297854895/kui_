<template>
  <div class="k-textEditor-pane">
    <k-button-group v-for="item of this.sectionOptions">
      <button @click="PaneClick(item_)" v-for="item_ of item" v-if="itemOptions[item_].kind === 'button'" :class="`k k-textEditor-bt k-textEditor-bt-mormal k-button k-button-default k-radius k-button-size-small ${ sectionStatus[item_].stat ? 'k-textEditor-bt-active' : ''}`">
        <i :class="`fa ${itemOptions[item_].icon}`" style="margin: 0px;"></i>
      </button>
      <button v-else-if="itemOptions[item_].kind === 'pane'" :class="`k k-textEditor-bt k-textEditor-pane-bt k-button k-button-default k-radius k-button-size-small`" @click="PaneClick(item_, style[item_])">
        <div class="k-textEditor-pane-bt-wrap">
          <i :class="`fa ${itemOptions[item_].icon}`" style="margin: 0px;"></i>
          <div class="k-textEditor-ForeColor-view" :style="`background: ${style[item_]}`"></div>
        </div>
        <button :class="`k k-textEditor-pane-show-bt ${sectionStatus[item_].show ? 'k-textEditor-bt-active' : ''}`" @click.stop="togglePane(item_)">
          <i class="fa fa-angle-down"></i>
        </button>
        <div class="k k-absolute-menu k-textEditor-pane-hideMenu" v-if="currentShowHidePane === item_">
          <ForeColor />
        </div>
      </button>
      <button v-else class="k k-textEditor-bt k-textEditor-bt-select k-button k-button-default k-radius k-button-size-small" @click.stop="togglePane(item_)">
        {{style[item_]}}
        <i class="fa fa-angle-down" style="margin: 0 0 0 6px;"></i>
        <div class="k k-absolute-menu k-textEditor-pane-select" v-if="currentShowHidePane === item_">
          <FontSize />
        </div>
      </button>
    </k-button-group>
  </div>
</template>
<script>
  import kButtonGroup from '../ButtonGroup/ButtonGroup';
  import ForeColor from './PaneHideMenu/ForeColor';
  import FontSize from './PaneSelect/FontSize';

  export default{
    name: 'k-textEditor-pane',
    components: {
      'k-button-group': kButtonGroup,
      'ForeColor': ForeColor,
      'FontSize': FontSize
    },
    props: {
      sectionOptions: {
        type: Array,
        default: () => {
          return [
            ['ForeColor', 'Bold', 'Italic', 'StrikeThrough', 'FontSize']
          ]
        }
      },
      defaultOptions: {
        type: Object,
        default: () => {
          return {
            Redo: {
              icon: 'fa-rotate-left',
              kind: 'button'
            },
            Undo: {
              icon: 'fa-rotate-right',
              kind: 'button'
            },
            ForeColor: {
              icon: 'fa-font',
              kind: 'pane'
            },
            Bold: {
              icon: 'fa-bold',
              kind: 'button'
            },
            Italic: {
              icon: 'fa-italic',
              kind: 'button'
            },
            Header: {
              icon: 'fa-header',
              kind: 'button'
            },
            StrikeThrough: {
              icon: 'fa-strikethrough',
              kind: 'button'
            },
            Underline: {
              icon: 'fa-underline',
              kind: 'button'
            },
            Subscript: {
              icon: 'fa-subscript',
              kind: 'button'
            },
            Superscript: {
              icon: 'fa-superscript',
              kind: 'button'
            },
            Indent: {
              icon: 'fa-indent',
              kind: 'button'
            },
            Outdent: {
              icon: 'fa-outdent',
              kind: 'button'
            },
            JustifyLeft: {
              icon: 'fa-align-left',
              kind: 'button'
            },
            JustifyRight: {
              icon: 'fa-align-right',
              kind: 'button'
            },
            JustifyCenter: {
              icon: 'fa-align-center',
              kind: 'button'
            },
            JustifyFull: {
              icon: 'fa-align-justify',
              kind: 'button'
            },
            Paste: {
              icon: 'fa-paste',
              kind: 'button'
            },
            Copy: {
              icon: 'fa-copy',
              kind: 'button'
            },
            Cut: {
              icon: 'fa-cut',
              kind: 'button'
            },
            Save: {
              icon: 'fa-save',
              kind: 'button'
            },
            InsertOrderedList: {
              icon: 'fa-list-ol',
              kind: 'button'
            },
            InsertUnorderedList: {
              icon: 'fa-list-ul',
              kind: 'button'
            },
            Table: {
              icon: 'fa-table',
              kind: 'button'
            },
            Heading: {
              icon: 'fa-header',
              kind: 'button'
            },
            FontSize: {
              kind: 'select'
            }
          }
        }
      }
    },
    mounted() {
      //toggleStyle
      this.$on(`k-textEditor-pane-toggle-${this._uid}`, (styleArr) => {
        this.resetPane();
        if (!styleArr) {
          this.$data.style.FontSize = '14px';
          return;
        }
        let sizeFlag;
        for (let key of styleArr) {
          if (this.$data.sectionStatus.hasOwnProperty(key)) {
            this.$data.sectionStatus[key].stat = true;
          } else if (!sizeFlag && key.indexOf('FontSize:') > -1) {
            sizeFlag = true;
            const fSize = key.substring(10);
            this.$data.style.FontSize = fSize;
          }
        }
      });
      //close Pane or select
      this.$on(`k-textEditor-close-paneselect-${this._uid}`, (data) => {
        this.$data.sectionStatus[data.key].show = false;
        this.$data.currentShowHidePane = '';
        this.$data.style[data.key] = data.options;
        if (data.select === true) {
          this.setFontSize(data.options);
        }
      });
    },
    methods: {
      createSectionStatus() {
        const sectionStatus = {};
        for (let item of this.sectionOptions) {
          for (let item_ of item) {
            sectionStatus[item_] = {
              stat: false
            };
            if (this.defaultOptions[item_].kind !== 'button') {
              sectionStatus[item_].show = false;
            }
          }
        }
        return sectionStatus;
      },
      PaneClick(key, options) {
        this.$data.sectionStatus[key].stat = !this.$data.sectionStatus[key].stat;
        this.$parent.$emit(`k-textEditor-pane-${this.$parent._uid}`, {key: key, options: options ? options : null});
      },
      resetPane() {
        this.$data.sectionStatus = this.createSectionStatus();
      },
      togglePane(key) {
        if (key === this.$data.currentShowHidePane) {
          this.$data.currentShowHidePane = '';
          this.$data.sectionStatus[key].show = false;
          return;
        }
        if (this.$data.currentShowHidePane) {
          this.$data.sectionStatus[this.$data.currentShowHidePane].show = false;
        }
        this.$data.sectionStatus[key].show = !this.$data.sectionStatus[key].show;
        if (this.$data.sectionStatus[key].show) {
          this.$data.currentShowHidePane = key;
        }
      },
      setFontSize(fontSize) {
          // console.log('setFontSize', fontSize);
          const doc = this.$parent.$refs.textEditor.contentDocument || this.$parent.$refs.textEditor.contentWindow.document;
          const selection = doc.getSelection();
          const selectionText = selection.toString();
          const anchorNode = selection.anchorNode;
          if (selection.isCollapsed) {
            const span = doc.createElement('span');
            span.innerHTML = '&zwnj;';
            span.style.fontSize = fontSize;
            if (anchorNode.parentNode.tagName === 'P' && anchorNode.parentNode.innerHTML.length === 1) {
              anchorNode.parentNode.innerHTML = `<span style="font-size: ${fontSize}">&zwnj;</span>`;
            } else {
              // console.log(typeof anchorNode.parentNode.innerHTML.substring(0, 1));
              if (anchorNode.parentNode.parentNode.tagName === 'P') {
                anchorNode.parentNode.innerHTML = anchorNode.parentNode.innerHTML.substring(0, 1) + anchorNode.parentNode.innerHTML.substring(2);
              } else {
                anchorNode.parentNode.innerHTML = anchorNode.parentNode.innerHTML.substring(1);
              }
              anchorNode.parentNode.appendChild(span);
              selection.extend(anchorNode.parentNode, 2);
              selection.collapseToEnd();
            }
            doc.body.focus();
            return;
          }
          const lastStr = selection.focusNode.data.substring(0, selection.focusOffset);
          const firstStr = selection.anchorNode.data.substring(selection.anchorOffset);
          console.log('select text', selectionText, selection.getRangeAt(0), selection);
      }
    },
    data() {
      const sectionStatus = this.createSectionStatus();
      return {
        itemOptions: this.defaultOptions,
        sectionStatus: sectionStatus,
        currentShowHidePane: '',
        style: {
          ForeColor: '#333',
          FontSize: '14px'
        }
      }
    }
  }
</script>
