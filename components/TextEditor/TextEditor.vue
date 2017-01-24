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
          B: 'Bold'
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
                    <body style="word-break:break-all;"></body>
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
        doc.body.onclick = this.currentStyle;
        // doc.body.onselect = this.currentStyle;
        // doc.onkeydown = this.insertP;
      },
      recursionNode(node, direction) {
        if (!node.children || node.children.length <= 0) return;
      },
      currentStyle(evt) {
        const Node = evt.target;
        if (Node.tagName === 'BODY') return;
        if (Node.tagName === 'P') {
          console.log(Node.lastChild.tagName);
          return;
        }
        for (let key in this.$data.styleNodeMap) {
          if (Node.tagName === key) {
            console.log(key);
          }
        }
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
