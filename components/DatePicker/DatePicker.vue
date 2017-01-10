<template>
  <div class="k k-datepicker-wrap">
    <span class="k k-datepicker" @click="showPicker" v-if="type !== 'range'">
      <p>
        <input :placeholder="placeholder" :maxlength="dateLength" v-if="readonly === 'readonly'" readonly="readonly" :style="this.$data.dateLength === 10 ? 'width: 90px' : 'width: 150px'" class="k k-datepicker-input" v-model="date" />
        <input @click.stop="" :placeholder="placeholder" :maxlength="dateLength" v-else :style="this.$data.dateLength === 10 ? 'width: 90px' : 'width: 150px'" class="k k-datepicker-input" v-model="date" />
        <span class="k k-calendar"><i class="fa fa-calendar"></i></span>
      </p>
    </span>
    <span class="k k-datepicker" v-else @click="showPicker">
      <p v-if="readonly === 'readonly'">
        <input v-model="startDate" readonly="readonly" :maxlength="dateLength/2" class="k k-datepicker-input k-datepicker-input-range" placeholder="起始时间" /><span style="color: #888">~</span><input v-model="endDate" :maxlength="dateLength/2" readonly="readonly" class="k k-datepicker-input k-datepicker-input-range" placeholder="结束时间" />
        <span class="k k-calendar"><i class="fa fa-calendar"></i></span>
      </p>
      <p v-else>
        <input @click.stop="" v-model="startDate" :maxlength="dateLength/2" class="k k-datepicker-input k-datepicker-input-range" placeholder="起始时间" /><span style="color: #888">~</span><input v-model="endDate" :maxlength="dateLength/2" class="k k-datepicker-input k-datepicker-input-range" placeholder="结束时间" />
        <span class="k k-calendar"><i class="fa fa-calendar"></i></span>
      </p>
    </span>
  </div>
</template>
<script>
  import moment from 'moment';
  import Picker from './Picker.js';

  export default{
    name: 'k-datepicker',
    props: {
      type: {
        type: String,
        default: 'Date'
      },
      width: {
        type: String,
        default: '170px'
      },
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      readonly: {
        type: String,
        default: ''
      },
      onchange: {
        type: Function
      },
      accurate: {
        type: String,
        default: 'YYYYMMDD'
      },
      startValue: {
        type: String,
        default: ''
      },
      endValue: {
        type: String,
        default: ''
      }
    },
    mounted() {
      const date = moment();
      this.$on(`k-datepicker-picker-vue-${this._uid}`, (vue_) => {
        if (vue_) {
          this.$data.pickerVue = vue_;
        }
      });
      this.$on(`k-datepicker-update-date-${this._uid}`, (data) => {
        let _date;
        if (data.range) {
          _date = this.stringToYMD(this.$data[data.range+'Date'] ? this.$data[data.range+'Date'] : (this.$data.dateLength / 2 === 19 ? moment().format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD')), date);
        }else {
          _date = this.stringToYMD(this.$data.date ? this.$data.date : (this.$data.dateLength === 19 ? moment().format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD')), date);
        }
        switch (data.flag) {
          case 'next':
            if (_date.month === 12) {
              _date.year += 1;
              _date.month = 1;
            } else {
              _date.month = _date.month + 1;
            }
            _date.day = this.toDouble(data.day);
            break;
          case 'back':
            if (_date.month === 1) {
              _date.year -= 1;
              _date.month = 12;
            } else {
              _date.month = _date.month - 1;
            }
            _date.day = this.toDouble(data.day);
            break;
          case 'toggleYear':
            if (data.action === 'back') {
              _date.year -= 1;
            } else {
              _date.year += 1;
            }
            _date.day = this.toDouble(data.day);
            break;
          case 'resetDate':
            _date = this.stringToYMD(this.$data.dateLength === 19 ? moment().format('YYYY-MM-DD HH:mm:ss') : moment().format('YYYY-MM-DD'));
            break;
          case 'increamentTime':
            if (data.action === 'hour') {
              if (_date.hour === 23) {
                _date.hour = 0;
              }else {
                _date.hour += 1;
              }
            } else if (data.action === 'minute') {
              if (_date.minute === 59) {
                _date.minute = 0;
              }else {
                _date.minute += 1;
              }
            } else {
              if (_date.second === 59) {
                _date.second = 0;
              }else {
                _date.second += 1;
              }
            }
            break;
          case 'decreamentTime':
            if (data.action === 'hour') {
              if (_date.hour === 0) {
                _date.hour = 23;
              }else {
                _date.hour -= 1;
              }
            } else if (data.action === 'minute') {
              if (_date.minute === 0) {
                _date.minute = 59;
              }else {
                _date.minute -= 1;
              }
            } else {
              if (_date.second === 0) {
                _date.second = 59;
              }else {
                _date.second -= 1;
              }
            }
            break;
          default:
            _date.day = this.toDouble(data.day);
        }
        if (data.range) {
          if (this.$data.dateLength / 2 === 10) {
            this.$data[data.range + 'Date'] = `${_date.year}-${this.toDouble(_date.month)}-${this.toDouble(_date.day)}`;
          } else if (this.$data.dateLength / 2 === 19) {
            this.$data[data.range + 'Date'] = `${_date.year}-${this.toDouble(_date.month)}-${this.toDouble(_date.day)} ${this.toDouble(_date.hour)}:${this.toDouble(_date.minute)}:${this.toDouble(_date.second)}`;
          }
          this.$data[data.range + 'DateObj'] = this.isDate(this.$data.dateLength, this.$data[data.range + 'Date']);
          this.$data.pickerVue.$emit(`k-datepicker-picker-update-picker-${this.$data.pickerVue._uid}`, {obj: this.$data[data.range + 'DateObj'], type: data.range});
        } else {
          if (this.$data.dateLength === 10) {
            this.$data.date = `${_date.year}-${this.toDouble(_date.month)}-${this.toDouble(_date.day)}`;
          } else if (this.$data.dateLength === 19) {
            this.$data.date = `${_date.year}-${this.toDouble(_date.month)}-${this.toDouble(_date.day)} ${this.toDouble(_date.hour)}:${this.toDouble(_date.minute)}:${this.toDouble(_date.second)}`;
          }
          this.$data.dateObj = this.isDate(this.$data.dateLength, this.$data.date);
          this.$data.pickerVue.$emit(`k-datepicker-picker-update-picker-${this.$data.pickerVue._uid}`, this.$data.dateObj);
        }
      });
    },
    watch: {
      date(newDate, oldDate) {
        if (newDate.length === 10 && this.$data.dateLength === 19 && newDate.match(/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])( ([01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/)) {
          newDate = newDate + ' 00:00:00';
          this.$data.date = newDate;
          this.$data.dateObj = moment(newDate);
        }else if (!this.isDate(this.$data.dateLength, newDate)) return;
        if (this.$data.pickerVue) {
          this.$data.pickerVue.$emit(`k-datepicker-picker-update-picker-${this.$data.pickerVue._uid}`, this.isDate(this.$data.dateLength, this.$data.date))
        }
        if (this.onchange && typeof(this.onchange) === 'function') {
          this.onchange(this.$data.date);
        }
      },
      startDate(newDate, oldDate) {
        if (newDate.length === 10 && this.$data.dateLength === 38 && newDate.match(/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])( ([01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/)) {
          newDate = newDate + ' 00:00:00';
          this.$data.startDate = newDate;
          this.$data.startDateObj = moment(newDate);
        }else if (!this.isDate(this.$data.dateLength, newDate)) return;
        if (this.$data.pickerVue) {
          this.$data.pickerVue.$emit(`k-datepicker-picker-update-picker-${this.$data.pickerVue._uid}`, {obj: this.isDate(this.$data.dateLength, this.$data.startDate), type: 'start'});
        }
        if (this.onchange && typeof(this.onchange) === 'function') {
          this.onchange(this.$data.startDate);
        }
      },
      endDate(newDate, oldDate) {
        if (newDate.length === 10 && this.$data.dateLength === 38 && newDate.match(/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])( ([01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/)) {
          newDate = newDate + ' 00:00:00';
          this.$data.endDate = newDate;
          this.$data.endDateObj = moment(newDate);
        }else if (!this.isDate(this.$data.dateLength, newDate)) return;
        if (this.$data.pickerVue) {
          this.$data.pickerVue.$emit(`k-datepicker-picker-update-picker-${this.$data.pickerVue._uid}`, {obj: this.isDate(this.$data.dateLength, this.$data.endDate), type: 'end'});
        }
        if (this.onchange && typeof(this.onchange) === 'function') {
          this.onchange(this.$data.endDate);
        }
      },
    },
    data () {
      let date_flag;
      let startdate_flag;
      let enddate_flag;
      const LENGTH = this.accurate === 'HHMMSS' ? (this.type === 'range' ? 38 : 19) : (this.type === 'range' ? 20 : 10);
      const date__ = this.value.substring(0, LENGTH);
      const date_ = this.isDate(LENGTH, date__);
      const startdate__ = this.startValue.substring(0, LENGTH);
      const startdate_ = this.isDate(LENGTH, startdate__);
      const enddate__ = this.endValue.substring(0, LENGTH);
      const enddate_ = this.isDate(LENGTH, enddate__);
      if (date_) {
        date_flag = true;
      }
      if (startdate_) {
        startdate_flag = true;
      }
      if (enddate_) {
        enddate_flag = true;
      }
      return {
        pickerShow: false,
        dateLength: LENGTH,
        startDate: startdate_flag ? startdate__ : '',
        startDateObj: startdate_flag ? startdate_ : '',
        endDate: enddate_flag ? enddate__ : '',
        endDateObj: enddate_flag ? enddate_ : '',
        date: date_flag ? date__ : '',
        dateObj: date_flag ? date_ : '',
        pickerVue: ''
      }
    },
    methods: {
      showPicker () {
        Picker(this);
      },
      isDate(length, date) {
        if (date.length === length){
          if(date.match(/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])( ([01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/)){
             return moment(date);
          }else {
            return '';
          }
        }else if (this.type === 'range' && date.length === length / 2){
          if(date.match(/^\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])( ([01]\d|2[0-3])\:[0-5]\d\:[0-5]\d)?$/)){
             return moment(date);
          }else {
            return '';
          }
        }else {
          return '';
        }
      },
      stringToYMD(obj, date) {
        const yyyy = parseInt(obj.substring(0, 4), 10);
        const mmmm = parseInt(obj.substring(5, 7), 10);
        const dddd = parseInt(obj.substring(8, 10), 10);
        const year = isNaN(yyyy) ? parseInt(date.format('Y')) : (yyyy.toString().length === 4 ? yyyy : parseInt(date.format('Y')));
        const month = isNaN(mmmm) ? 1 : (mmmm === 0 || mmmm > 12 ? 1 : mmmm);
        const day = isNaN(dddd) ? 1 : dddd;
        const _obj = {
          year,
          month,
          day
        };
        const hour = parseInt(obj.substring(11, 13));
        const minute = parseInt(obj.substring(14, 16));
        const second = parseInt(obj.substring(17, 19));
        if (this.$data.dateLength === 19) {
          _obj.hour = isNaN(hour) ? 0 : hour > 23 ? 0 : hour;
          _obj.minute = isNaN(minute) ? 0 : minute > 59 ? 0 : minute;
          _obj.second =  isNaN(second) ? 0 : second > 59 ? 0 : second;
        } else if (this.type === 'range' && this.$data.dateLength / 2 === 19) {
          _obj.hour = isNaN(hour) ? 0 : hour > 23 ? 0 : hour;
          _obj.minute = isNaN(minute) ? 0 : minute > 59 ? 0 : minute;
          _obj.second =  isNaN(second) ? 0 : second > 59 ? 0 : second;
        }
        return {..._obj};
      },
      toDouble(time) {
        return time.toString().length === 2 ? time : '0' + time;
      }
    }
  }
</script>
