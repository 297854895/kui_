<template>
  <div class="k-textEditor" ref="kEditor">
    <k-textEditor-pane />
    <iframe class="k-textEditor-iframe" ref="textEditor" :style="`height:${ifrHeight ? ifrHeight : ''}`"></iframe>
    <div class="k-textEditor-footer"></div>
  </div>
</template>
<script>
  import textEditorPane from './Pane';

  export default {
    name: 'k-textEditor',
    components: {
      'k-textEditor-pane': textEditorPane
    },
    props: {
      height: {
        type: String,
        default: '400px'
      },
    },
    data() {
      return {
        styleNodeMap: {
          B: 'Bold',
          I: 'Italic',
          STRIKE: 'StrikeThrough',
          FONT: 'ForeColor',
        },
        styleMap: {
          'font-weight: bold': 'Bold',
          'font-style: italic': 'Italic',
          'text-decoration: line-through': 'StrikeThrough',
          'font-size: ': 'FontSize'
        },
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
                    <body style="word-break:break-all;">
                      <p>&zwj;</p>
                    </body>
                  </html>`
      }
    },
    mounted() {
      this.initEditor();
      this.$on(`k-textEditor-pane-${this._uid}`, (data) => {
        this.emit(data.key, data.options);
      });
    },
    methods: {
      emit(cmd, options) {
        var win = this.$refs.textEditor.contentDocument || this.$refs.textEditor.contentWindow.document;
        win.execCommand(cmd, false, options);
        win.body.focus();
      },
      initEditor() {
        const ifr = this.$refs.textEditor;
        const doc = ifr.contentDocument || ifr.contentWindow.document;
        doc.open();
        doc.write(this.$data.EditorTemplate);
        doc.close();
        doc.designMode = "on";
        doc.contentEditable = true;
        doc.body.focus();
        doc.body.onclick = this.currentStyle;
      },
      innerStyle(style, tagArr) {
        const curStyle = [];
        const styleArr = style.split('; ');
        const styleArrLength = styleArr.length;
        let styleArrLength_ = 0;
        for (let key in this.$data.styleMap) {
          if (styleArrLength_ === styleArrLength) break;
          if (style.indexOf(key) > -1) {
            if (this.$data.styleMap[key] !== 'FontSize') {
              tagArr.push(this.$data.styleMap[key]);
            } else {
              let f_size = style.substring(style.indexOf('font-size:') + 9);
              f_size = f_size.substring(0, f_size.indexOf(';'));
              tagArr.push(this.$data.styleMap[key] + f_size);
            }
            styleArrLength_ ++;
          }
        }
      },
      emitStylePaneStat(tagArr) {
        this.$children[0].$emit(`k-textEditor-pane-toggle-${this.$children[0]._uid}`, tagArr.length > 0 ? tagArr : null);
      },
      recursionNode(node, tagArr) {
        const tagName = node.tagName;
        const pNode = node.parentNode;
        if (node.style && node.style.cssText) {
          this.innerStyle(node.style.cssText, tagArr);
        }
        if (tagName !== 'SPAN') {
          tagArr.unshift(this.$data.styleNodeMap[tagName]);
        }
        if (pNode.tagName === 'P') {
          this.emitStylePaneStat(tagArr);
          return;
        }
        this.recursionNode(pNode.parentNode.children[pNode.parentNode.children.length - 1], tagArr);
      },
      currentStyle() {
        const doc = this.$refs.textEditor.contentDocument || this.$refs.textEditor.contentWindow.document;
        const selection = doc.getSelection();
        const anchorNode = selection.anchorNode;

        const Node = anchorNode.parentNode.tagName === 'P' ? anchorNode : anchorNode.parentNode;
        const tagName = anchorNode.parentNode.tagName === 'P' ? 'NORMAL' : anchorNode.parentNode.tagName;
        const tagArr = [];
        if (Node.tagName === 'BODY') return;
        if (tagName === 'NORMAL') {
          this.emitStylePaneStat(tagArr);
          return;
        }
        this.recursionNode(Node, tagArr);
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
