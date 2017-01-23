<template>
  <div class="k-textEditor" ref="kEditor">
    <div class="k-textEditor-pane" ref="textEditorPane">
      <k-button-group v-for="each in options">
        <button v-if="!each_.hidePane" v-for="(each_, key) in each" class="k k-button k-button-default k-button-size-small k-radius" @click="emit(key, null)">
          <i :class="`fa ${iconOptions[key]}`" style="margin: 0px;">
            {{iconOptions[key] ? '' : each_}}
          </i>
        </button><button v-else class="k k-button k-button-default k-button-size-small k-radius k-textEditor-hidePaneBt" @click="selectPaneClick(key)">
          <i role="action" :class="`fa ${iconOptions[key]}`" style="margin: 0px;"></i><i role="pane" class="fa fa-angle-down k-textEditor-hidePaneBt-i" style="line-height: 22px;font-size: 12px;"></i>
        </button>
      </k-button-group>
    </div>
    <iframe class="k-textEditor-iframe" ref="textEditor" :style="`height:${ifrHeight ? ifrHeight : ''}`"></iframe>
    <div class="k-textEditor-footer"></div>
  </div>
</template>
<script>
  import ButtonGroup from '../ButtonGroup/ButtonGroup';
  import Select from '../Select/Select';

  export default {
    name: 'k-textEditor',
    props: {
      height: {
        type: String,
        default: '400px'
      },
      iconOptions: {
        type: Object,
        default: () => {
          return {
            Redo: 'fa-rotate-left',
            Undo: 'fa-rotate-right',
            Font: 'fa-font',
            Bold: 'fa-bold',
            Italic: 'fa-italic',
            Header: 'fa-header',
            StrikeThrough: 'fa-strikethrough',
            Underline: 'fa-underline',
            Subscript: 'fa-subscript',
            Superscript: 'fa-superscript',
            Indent: 'fa-indent',
            Outdent: 'fa-outdent',
            JustifyLeft: 'fa-align-left',
            JustifyRight: 'fa-align-right',
            JustifyCenter: 'fa-align-center',
            JustifyFull: 'fa-align-justify',
            Paste: 'fa-paste',
            Copy: 'fa-copy',
            Cut: 'fa-cut',
            Save: 'fa-save',
            InsertOrderedList: 'fa-list-ol',
            InsertUnorderedList: 'fa-list-ul',
            Table: 'fa-table',
            Heading: 'fa-header'
          }
        }
      },
      options: {
        type: Object,
        default: () => {
          return {
            one: {
              Redo: true,
              Undo: true
            },
            two: {
              Font: {
                hidePane: true,
              },
              Bold: true,
              Italic: true,
              Underline: true,
              StrikeThrough: true,
              Subscript: true,
              Superscript: true
            },
            three: {
              Indent: true,
              Outdent: true,
              JustifyLeft: true,
              JustifyRight: true,
              JustifyCenter: true,
              JustifyFull: true,
            },
            four: {
              Paste: true,
              Copy: true,
              Cut: true,
              Save: true
            },
            five: {
              Table: true,
            },
            six: {
              InsertHorizontalRule: `—`,
              InsertOrderedList: true,
              InsertUnorderedList: true,
            }
          };
        }
      }
    },
    components: {
      'k-button-group': ButtonGroup
    },
    data() {
      return {
        ifrHeight: this.height,
        EditorTemplate: `<html>
                    <head>
                      <style>
                        p {
                          margin: 8px 0;
                          font-size: 14px;
                          color: #333;
                          font-family: "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
                        }
                      </style>
                    </head>
                    <body style="word-break:break-all;"></body>
                  </html>`,
        hidePane: {
          Font: true,
        }
      }
    },
    mounted() {
      this.initEditor();
    },
    methods: {
      selectPaneClick(key) {
        if (event.target.getAttribute('role') === 'pane') {
          console.log("showPane");
        }else {
          if (event.target.parentNode.className.indexOf('k-textEditor-hidePaneBt-active') > -1) {
            event.target.parentNode.className = event.target.parentNode.className.replace('k-textEditor-hidePaneBt-active', '');
          }else {
            event.target.parentNode.className += ' k-textEditor-hidePaneBt-active';
          }
        }
      },
      emit(cmd, options) {
        var win = this.$refs.textEditor.contentDocument || this.$refs.textEditor.contentWindow.document;
        win.execCommand(cmd, false, options);
        win.body.focus();
      },
      createElement(Tag, innerHTML) {
        const Ele = document.createElement(Tag);
        if (innerHTML) {
          Ele.innerHTML = innerHTML;
        }
        return Ele;
      },
      initEditor() {
        const ifr = this.$refs.textEditor;
        const doc = ifr.contentDocument || ifr.contentWindow.document;
        doc.open();
        doc.write(this.$data.EditorTemplate);
        doc.close();
        doc.designMode = "on";
        doc.contentEditable = true;
        doc.body.appendChild(this.createElement('p', '<br>'));
        doc.body.focus();
        // doc.onkeydown = this.insertP;
      },
      insertP(evt) {
        if (evt.which === 13) {
          const doc = this.$refs.textEditor.contentDocument || this.$refs.textEditor.contentWindow.document;
          if (doc) {
            // let firstChild;
            // if (doc.body.getElementsByTagName('p').length === 1) {
            //   firstChild = doc.body.getElementsByTagName('p')[0];
            // }
            // doc.open();
            // doc.close();
            // if (firstChild) {
            //   doc.body.appendChild(firstChild);
            // }
            // doc.body.appendChild(this.createElement('p', '<br>'));
            // return false;
          }
        }
      }
    }
  }
</script>
