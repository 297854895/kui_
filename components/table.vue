<script>
  import Vue from 'vue';
  import kPage from './pageination';
  import kButton from './button';
  import kSwitch from './switch';
  const kTableBus = new Vue();
  export default {
    name: 'k-table',
    props: ['set'],
    components: {
      'k-switch': kSwitch,
      'k-button': kButton,
      'k-page': kPage
    },
    mounted () {
      this.$on(`update-table-${this._uid}`, (data) => {
        if (!data) {
          return;
        }
        this.updateTable(data);
      });
    },
    methods: {
      turn (page) {
        if (this.set.options) {
          if (this.set.options.turn) {
            const current = this._data.TableOptions.current;
            const size = this._data.TableOptions.size;
            if ( page * size < this._data.TableData.length  || this._data.TableData.length - ((page - 1) * size) > 0) {
              this.$data.TableOptions.current = page;
            }else {
              this.set.options.turn(page, this.callFun);
            }
          }
        }
      },
      callFun (page, data) {
        this.$emit(`update-table-${this._uid}`, {page: page, data: data})
      },
      updateTable (data) {
        if (data) {
          this.$data.TableData = this.$data.TableData.concat(data.data);
          this.$data.TableOptions.current = data.page;
        }
      }
    },
    computed: {
      showData () {
        let Size = this._data.TableOptions.size;
        let Current = this._data.TableOptions.current;
        if (!Size) {
          Current = 1;
        }
        if (!Current) {
          Current = 1;
        }
        const DATA = this._data.TableData.slice((Current - 1) * Size, Current * Size);
        this.$data.SHOWDATA = DATA;
      },
      pageination () {
        let pageSet = {callBack: this.turn};
        if (this._data.TableOptions) {
          if (this._data.TableOptions.current) {
            pageSet.current = this._data.TableOptions.current;
          }
          if (this._data.TableOptions.total) {
            pageSet.total = Math.ceil(this._data.TableOptions.total / this._data.TableOptions.size);
          }
        }
        return pageSet;
      }
    },
    data () {
      const _TableData = {};
      if (this.set){
        if (this.set.head) {
          _TableData.head = this.set.head;
        }
        if (this.set.body) {
          _TableData.body = this.set.body;
        }
        _TableData.options = {};
        if (this.set.options) {
          _TableData.options = this.set.options;
        }
      }
      return {
        TableHead: _TableData.head,
        TableData: _TableData.body,
        TableOptions: _TableData.options,
        SHOWDATA: []
      }
    },
    render (h) {
      let Size = this._data.TableOptions.size;
      let Current = this._data.TableOptions.Current;
      if (!Size) {
        Current = 1;
      }
      if (!Current) {
        Current = 1;
      }
      this.showData;//计算显示数据
      const _showDATA  = this._data.SHOWDATA;
      const _head = <tr></tr>;
      const _headArr = [];
      if (this._data.TableHead) {
        for (let head_ of this._data.TableHead) {
          _head.children.push(<th index={head_.dataIndex}>{head_.title}</th>);
          _headArr.push(head_.dataIndex);
        }
      }
      const _body = <tbody></tbody>;
      if (_showDATA) {
        const trLength = this._data.TableHead.length;
        for (let _data of _showDATA){
          const each = <tr key={_data.key}></tr>;
          for (let num = 0; num < trLength; num ++){
            if(typeof(_data[_headArr[num]]) === 'object' && _data[_headArr[num]].hasOwnProperty('component') ) {
              switch (_data[_headArr[num]].component.component) {
                case 'switch':
                  each.children.push(
                    <td>
                      <k-switch enable={_data[_headArr[num]].component.enable} callBack={_data[_headArr[num]].component.callBack}></k-switch>
                    </td>);
                  break;
                case 'button':
                  const buttonSet = _data[_headArr[num]].component;
                  each.children.push(
                    <td>
                      <k-button set={buttonSet ? buttonSet : ''}>123</k-button>
                    </td>);
                  break;
                default:
              }
              continue;
            }
            each.children.push(<td>{_data[_headArr[num]] ? _data[_headArr[num]] : '--'}</td>);
          }
          _body.children.push(each);
        }
      }
      return (
        <div>
          <table class="default">
            <thead>
              {_head}
            </thead>
            {_body}
          </table>
          <k-page pageSet={this.pageination}></k-page>
        </div>
      )
    }
  }
</script>
<style scoped>
  .k-button {
    margin: 0;
  }
  table {
    font-size: 14px;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .k-page-wrap {
    float: right;
  }
  thead th{
    text-align: left;
    padding: 8px 8px;
    color: #fff;
    background: #4db3ff;
  }
  tbody td {
    text-align: left;
    overflow: auto;
    color: #888;
    padding: 8px 8px;
    border-bottom: 1px solid #c0ccda;
  }
  tbody tr {
    transition: all .3s;
  }
  tbody tr:hover {
    background: #DDF1FF;
  }
</style>
