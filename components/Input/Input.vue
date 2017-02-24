<template>
  <span :class="`k k-input k-input-default ${radius === 'true' ? 'k-radius' : '' }`" :style="`${style}`">
    <span v-if="iconBefore || textBefore" :class="`k k-input-btn ${typeof(btnCallBack.before) === 'function' ? 'k-input-btn-click' : ''}`" @click="btnCallBack.before && typeof(btnCallBack.before) === 'function' ? beforeClick() : ''">
      <i :class="iconBefore" v-if="iconBefore"></i>
      {{textBefore ? textBefore : ''}}
    </span>
    <span v-if="selectBefore.length > 0" @click="showSelectBefore" class="k k-input-btn k-input-btn-click k-input-btn-select-click" style="padding: 0px">
      <p>{{this.$data.selectBefore_.current.key}}<i class="fa fa-angle-down k-input-btn-select"></i></p>
      <ul class="k-input-btn-select-ab" v-show="this.$data.selectBefore_.show">
        <li v-for="each in selectBefore" @click="selectIt(each, 'selectBefore_')">{{each.text}}</li>
      </ul>
    </span>
    <input :id="id" :style="`width: ${this.width}`" :type="type" :value="value" :placeholder="placeholder" @change="valueChange" @enter="valueChange" ref="input"/>
    <span v-if="iconAfter || textAfter" :class="`k k-input-btn ${typeof(btnCallBack.after) === 'function' ? 'k-input-btn-click' : ''}`" @click="btnCallBack.after && typeof(btnCallBack.after) === 'function' ? afterClick() : ''">
      <i :class="iconAfter" v-if="iconAfter"></i>
      {{textAfter ? textAfter : ''}}
    </span>
    <span v-if="selectAfter.length > 0" @click="showSelectAfter" class="k k-input-btn k-input-btn-click k-input-btn-select-click" style="padding: 0px">
      <p>{{this.$data.selectAfter_.current.key}}<i class="fa fa-angle-down k-input-btn-select"></i></p>
      <ul class="k-input-btn-select-ab" v-show="this.$data.selectAfter_.show">
        <li v-for="each in selectAfter" @click="selectIt(each, 'selectAfter_')">{{each.text}}</li>
      </ul>
    </span>
  </span>
</template>
<script>
  export default{
    name: 'k-input',
    props: {
      id: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      btnCallBack: {
        type: Object,
        default: () => {return {}}
      },
      width: {
        type: String,
        default: '120px'
      },
      radius: {
        type: String,
        default: 'true'
      },
      iconBefore: {
        type: String,
        default: ''
      },
      iconAfter: {
        type: String,
        default: ''
      },
      textBefore: {
        type: String,
        default: ''
      },
      textAfter: {
        type: String,
        default: ''
      },
      selectBefore: {
        type: Array,
        default: () => {return []}
      },
      selectAfter: {
        type: Array,
        default: () => {return []}
      },
      onChange: {
        type: Function
      },
      style: {
        type: String,
        default: ''
      }
    },
    data() {
      let selectBtn = {};
      if (this.selectBefore.length > 0) {
        selectBtn.selectBefore_ = {
          show: false,
          current: this.selectBefore[0]
        };
      }
      if (this.selectAfter.length > 0) {
        selectBtn.selectAfter_ = {
          show: false,
          current: this.selectAfter[0]
        };
      }
      return {
        ...selectBtn
      }
    },
    methods: {
      afterClick () {
        this.btnCallBack.after();
      },
      beforeClick () {
        this.btnCallBack.before();
      },
      showSelectBefore () {
        this.$data.selectBefore_.show = !this.$data.selectBefore_.show;
      },
      showSelectAfter () {
        this.$data.selectAfter_.show = !this.$data.selectAfter_.show;
      },
      selectIt (sel, type) {
        this.$data[type].current = {
          key: sel.key,
          text: sel.text
        }
      },
      valueChange () {
        if(!this.onChange || typeof(this.onChange) !== 'function') return;
        this.onChange(`${this.$data.selectBefore_ ? this.$data.selectBefore_.current.text : (this.textBefore ? this.textBefore : '')}${this.$refs.input.value}${this.$data.selectAfter_ ? this.$data.selectAfter_.current.text : (this.textAfter ? this.texttextAfter : '')}`);
      }
    }
  }
</script>
