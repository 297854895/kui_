<script>
  import Vue from 'vue';
  import kPage from '../Pageination/Pageination';
  import kButton from '../Button/Button';
  import kSwitch from '../Switch/Switch';
  export default {
    name: 'k-table',
    props: ['head', 'data', 'options'],
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
      this.$on(`sort-table-${this._uid}`, (data) => {
        const _showData = this._data.SHOWDATA;
        var len=_showData.length, tmp;
        if (data.sortType === 'asc') {
          for(var i=0;i<len-1;i++){
            for(var j=0;j<len-1-i;j++){
              if(_showData[j][data.dataIndex]>_showData[j+1][data.dataIndex]){
                tmp = _showData[j];
                _showData[j] = _showData[j+1];
                _showData[j+1] = tmp;
              }
            }
          }
        }else {
          for(var i=0;i<len-1;i++){
            for(var j=0;j<len-1-i;j++){
              if(_showData[j][data.dataIndex]<_showData[j+1][data.dataIndex]){
                tmp = _showData[j];
                _showData[j] = _showData[j+1];
                _showData[j+1] = tmp;
              }
            }
          }
        }
        this.$data.SHOWDATA = _showData;
        this.$forceUpdate();
      });
      setTimeout(()=>{
        const sortArr = document.querySelectorAll('.k-table-sort div');
        sortArr.forEach((sort)=>{
          sort.onclick = (evt) => {
            const dataIndex = evt.target.parentNode.parentNode.getAttribute('index');
            this.sortData(evt, dataIndex);
          }
        });
      },10)
    },
    methods: {
      turn (page) {
        if (this.options) {
          if (this.options.turn) {
            const current = this.$data.TableOptions.current;
            const size = this.$data.TableOptions.size;
            if ( page * size < this.$data.TableData.length  || this.$data.TableData.length - ((page - 1) * size) > 0) {
              this.$data.TableOptions.current = page;
            }else {
              this.options.turn(page, this.callFun);
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
      },
      sortData (evt, dataIndex) {
        const sortType = evt.target.getAttribute('sort');
        this.$emit(`sort-table-${this._uid}`, {sortType, dataIndex});
      },
      test () {
        console.log(123);
      }
    },
    computed: {
      showData () {
        let Size = this.$data.TableOptions.size;
        let Current = this.$data.TableOptions.current;
        if (!Size) {
          Size = 10;
        }
        if (!Current) {
          Current = 1;
        }
        if (this.$data.TableData.length === 0) return;
        const DATA = this.$data.TableData.slice((Current - 1) * Size, Current * Size);
        this.$data.SHOWDATA = DATA;
      },
      pageination () {
        let pageSet = {callBack: this.turn};
        if (this.$data.TableOptions) {
          if (this.$data.TableOptions.current) {
            pageSet.current = this.$data.TableOptions.current;
          }
          if (this.$data.TableOptions.total) {
            pageSet.total = Math.ceil(this.$data.TableOptions.total / this.$data.TableOptions.size);
          }
        }
        return pageSet;
      }
    },
    data () {
      return {
        TableHead: this.head ? this.head : [],
        TableData: this.data ? this.data : [],
        TableOptions: this.options ? this.options : {},
        SHOWDATA: []
      }
    },
    render (h) {
      let Size = this.$data.TableOptions.size;
      let Current = this.$data.TableOptions.Current;
      if (!Size) {
        Size = 10;
      }
      if (!Current) {
        Current = 1;
      }
      this.showData;//计算显示数据
      const _showDATA  = this.$data.SHOWDATA;
      const _head = <tr></tr>;
      const _headArr = [];
      if (this.$data.TableHead) {
        for (let head_ of this.$data.TableHead) {
          const sortBtn = [];
          if (head_.sort) {
            sortBtn.push(<div class="k-table-sort">
                            <div class="k-table-sort-asc" title="升序" sort="asc" click={this.test}></div>
                            <div class="k-table-sort-desc" title="倒序" sort="desc" click={this.test}></div>
                         </div>);
          }
          _head.children.push(
            <th index={head_.dataIndex}>
              {head_.text ? head_.text : ''}
              {sortBtn}
            </th>);
          _headArr.push(head_.dataIndex);
        }
      }
      const _body = <tbody></tbody>;
      if (_showDATA.length > 0) {
        const trLength = this.$data.TableHead.length;
        for (let _data of _showDATA){
          const each = <tr key={_data.key}></tr>;
          for (let num = 0; num < trLength; num ++){
            if(typeof(_data[_headArr[num]]) === 'object' && _data[_headArr[num]].hasOwnProperty('component') ) {
              switch (_data[_headArr[num]].component) {
                case 'switch':
                  each.children.push(
                    <td>
                      <k-switch status={_data[_headArr[num]].status} enable={_data[_headArr[num]].enable} callBack={_data[_headArr[num]].callBack ? _data[_headArr[num]].callBack : ''}></k-switch>
                    </td>);
                  break;
                case 'button':
                  const buttonSet = _data[_headArr[num]];
                  each.children.push(
                    <td>
                      <k-button set={buttonSet ? buttonSet : ''}>{buttonSet.text ? buttonSet.text : ''}</k-button>
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
      }else {
        _body.children.push(<td colspan={_headArr.length ? _headArr.length : 0} class="k k-table k-table-no-data"><p>暂无数据</p></td>);
      }
      return (
        <div class="k k-table">
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
