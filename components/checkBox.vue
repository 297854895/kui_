<template>
  <div :class="this._data._checkSet._thisClass + ' ' + this._data._checkSet.type + (this._data._checkSet.isRadio ? ' Radio' : ' Mut' )">
    <ul v-if="this._data._checkSet.isRadio">
      <li v-for="each in this._data._checkSet.checkData">
        <div>
          <a :class="each.checked ? 'active' : ''" @click="check"></a>
        </div>
        <label>{{each.name}}</label>
      </li>
    </ul>
    <ul v-else>
      <li v-for="each in this._data._checkSet.checkData">
        <div>
          <a :class="each.checked ? 'active' : ''" @click="check">
            <i class="fa fa-check"></i>
          </a>
        </div>
        <label>{{each.name}}</label>
      </li>
      <li>
        <div>
          <a :class="this._data._checkAll ? 'active' : ''" @click="checkAll">
            <i class="fa fa-check"></i>
          </a>
        </div>
        <label class="k-check-box-checkall">全选</label>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'k-check-box',
    props: ['checkSet'],
    data () {
      const checkSet_ = {
        _thisClass: 'k-check-box',
        ...this.checkSet
      };
      if (checkSet_.type === 'primary') {
        checkSet_.type = 'primary';
      }else if (!checkSet_.type || checkSet_.type !== 'primary' || checkSet_.type !== 'default') {
        checkSet_.type = 'default';
      }
      return {
        _checkSet: checkSet_,
        _checkAll: false
      }
    },
    methods: {
      checkAll (evt) {
        let _tar = evt.target;
        let _class = _tar.getAttribute('class');
        if (_class === 'fa fa-check') {
          _tar = evt.target.parentNode;
          _class = _tar.getAttribute('class');
        }
        const a = _tar.parentNode.parentNode.parentNode.querySelectorAll('.k-check-box a');
        if (!_class) {
          //全选
          this.$data._checkAll = true;
          for (let num = 0; num < a.length; num++) {
            a[num].setAttribute('class', 'active');
          }
        } else {
          //取消全选
          this.$data._checkAll = false;
          for (let num = 0; num < a.length; num++) {
            a[num].setAttribute('class', '');
          }
        }
        const active = _tar.parentNode.parentNode.parentNode.querySelectorAll('.k-check-box .active');
        const checkedArr = [];
        for (let num = 0; num < active.length; num++) {
          const checkIt = active[num].parentNode.parentNode.querySelectorAll('label')[0];
          if (checkIt.getAttribute('class') === 'k-check-box-checkall') {
            continue;
          }
          checkedArr.push(checkIt.innerHTML);
        }
        this._data._checkSet.callBack(checkedArr);
      },
      check (evt) {
        let a;
        let _tar;
        if (this._data._checkSet.isRadio) {
          //Radio
          const _class = evt.target.getAttribute('class');
          if (!_class) {
            const _checked = evt.target.parentNode.parentNode.parentNode.querySelectorAll('.k-check-box .active')[0];
            if (_checked) {
              _checked.setAttribute('class', '');
            }
            evt.target.setAttribute('class', 'active');
          }
        }else {
          //Mut
          _tar = evt.target;
          let _class = _tar.getAttribute('class');
          if (_class === 'fa fa-check') {
            _tar = evt.target.parentNode;
            _class = _tar.getAttribute('class');
          }
          a = _tar.parentNode.parentNode.parentNode.querySelectorAll('.k-check-box a');
          if (!_class) {
            _tar.setAttribute('class', 'active');
          } else {
            _tar.setAttribute('class', '');
          }
        }
        let active;
        active = evt.target.parentNode.parentNode.parentNode.querySelectorAll('.k-check-box .active');
        if (!this._data._checkSet.isRadio) {
          active = _tar.parentNode.parentNode.parentNode.querySelectorAll('.k-check-box .active');
          if (this._data._checkAll) {
            if (active.length < a.length) {
              this.$data._checkAll = false;
            }
          }else {
            if (active.length - 1 === a.length - 2) {
              this.$data._checkAll = true;
            }
          }
        }
        const checkedArr = [];
        for (let num = 0; num < active.length; num++) {
          const checkIt = active[num].parentNode.parentNode.querySelectorAll('label')[0];
          if (checkIt.getAttribute('class') === 'k-check-box-checkall') {
            continue;
          }
          checkedArr.push(checkIt.innerHTML);
        }
        this._data._checkSet.callBack(checkedArr);
      }
    }
  }
</script>
<style scoped>
  div{
    -moz-box-sizing: border-box;
     -webkit-box-sizing: border-box;
     -o-box-sizing: border-box;
     -ms-box-sizing: border-box;
     box-sizing: border-box;
  }
  .k-check-box {
    display: inline-block;
    font-size: 14px;
  }
  .Radio {
    border-radius: 50%;
  }
  .Mut {
    border-radius: 2px;
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
    border-radius: inherit;
  }
  .k-check-box li {
    display: inline-block;
    vertical-align: top;
    position: relative;
    padding: 0 0 0 26px;
    color: #666;
    height: 20px;
    margin: 0 4px;
  }
  .k-check-box div {
    position: absolute;
    left: 2px;
    top: 2px;
    width: 14px;
    height: 14px;
    background: #fff;
    border-radius: inherit;
    border: 1px solid #b9b9b9;
  }
  .k-check-box a{
    display: block;
    position: absolute;
    width: 6px;
    height: 6px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    cursor: pointer;
    border-radius: inherit;
    border: 1px solid #c0ccda;
    border-color: inherit;
    transition: all .3s;
  }
  .Mut a{
    border-radius: initial;
  }
  .k-check-box i{
    color: #fff;
    font-size: 12px;
    position: absolute;
    transition: all .3s;
    transform: scale(0);
  }
  .Mut a{
    border: none;
    width: 100%;
    height: 100%;
  }
  .default a:hover {
    background:#999;
    opacity: .6;
  }
  .default a:hover i {
    transform: scale(1);
  }
  .default a:active {
    background: #333;
  }
  .default a:active i{
    transform: scale(.5);
  }
  .default .active {
    background: #666;
  }
  .default .active i {
    transform: scale(1);
  }
  .primary a:hover {
    background:#4db3ff;
    border-color: #4db3ff;
    opacity: .6;
  }
  .primary a:hover i{
    transform: scale(1);
  }
  .primary a:active {
    background: #0099FF;
    border-color: #0099ff;
  }
  .primary a:active i{
    transform: scale(.5);
  }
  .primary .active {
    background: #20a0ff;
    border-color: #4db3ff;
  }
  .primary .active i{
    transform: scale(1);
  }
  .primary div{
    border-color: #4db3ff;
  }
</style>
