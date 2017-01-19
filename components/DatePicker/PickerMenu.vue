<template>
  <transition name="k-datepicker-picker-in">
    <div class="k k-absolute-menu k-datepicker-picker" v-if="show" :style="this.$options.dateLength === 10 || this.$options.dateLength === 19 ? 'width: 220px' : 'width: 440px'">
      <div class="k k-datepicker-picker-wrap" v-if="this.$options.dateLength === 10 || this.$options.dateLength === 19">
        <div class="k k-datepicker-picker-head">
          <span @click="toggleYear('back')" class="k-datepicker-picker-head-btn" title="上一年"><i class="fa fa-angle-double-left"></span>
          <span @click="toggleMonth('back')" class="k-datepicker-picker-head-btn" title="上一月" style="left:30px;"><i class="fa fa-angle-left"></i></span>
          {{`${this.$data.date.format('Y')}年${toDouble(this.$data.date.format('M'))}月`}}
          <span @click="toggleMonth('next')" class="k-datepicker-picker-head-btn" title="下一月" style="right:30px;top:0px;"><i class="fa fa-angle-right"></i></span>
          <span @click="toggleYear('next')" class="k-datepicker-picker-head-btn" title="下一年" style="right:10px;top:0px;"><i class="fa fa-angle-double-right"></span>
        </div>
        <div class="k k-datepicker-picker-body">
          <div class="k k-datepicker-picker-container" :style="timeShow ? 'margin-left: -100%' : 'margin-left: 0'">
            <ul class="k k-datepicker-picker-date">
              <li v-for="each in calendarTitle" class="k-datepicker-picker-day k-datepicker-picker-day-title">{{each}}</li>
              <li @click="toggleDay(each.status === 'disable' ? (each.day >= 20 ? 'back': 'next') : 'current', each.day, each.current)" v-for="each in calendar" :class="`k-datepicker-picker-day ${each.status === 'disable' ? '' : each.current ? 'k-datepicker-picker-day-enable k-datepicker-picker-day-current' : 'k-datepicker-picker-day-enable'}`">
                {{each.day}}
              </li>
            </ul>
            <div class="k k-datepicker-picker-time">
              <div class="k k-datepicker-picker-time-wrap">
                <div class="k-datepicker-picker-time-btn" @click="decreament('hour')">
                  <i class="fa fa-angle-up"></i>
                </div>
                <ul>
                  <li v-for="each in 24" :style="each === 1 ? `margin-top:-${parseInt(date.format('HH'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                </ul>
                <div class="k-datepicker-picker-time-btn" @click="increament('hour')">
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
              <div class="k k-datepicker-picker-time-wrap">
                <div class="k-datepicker-picker-time-btn" @click="decreament('minute')">
                  <i class="fa fa-angle-up"></i>
                </div>
                <ul>
                  <li v-for="each in 60" :style="each === 1 ? `margin-top:-${parseInt(date.format('mm'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                </ul>
                <div class="k-datepicker-picker-time-btn" @click="increament('minute')">
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
              <div class="k k-datepicker-picker-time-wrap">
                <div class="k-datepicker-picker-time-btn" @click="decreament('second')">
                  <i class="fa fa-angle-up"></i>
                </div>
                <ul>
                  <li v-for="each in 60" :style="each === 1 ? `margin-top:-${parseInt(date.format('ss'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                </ul>
                <div class="k-datepicker-picker-time-btn" @click="increament('second')">
                  <i class="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="k k-datepicker-picker-range">
        <div class="k k-datepicker-picker-wrap" style="width: 50%; overflow: hidden">
          <div class="k k-datepicker-picker-head">
            <span @click="toggleYear('back', 'start')" class="k-datepicker-picker-head-btn" title="上一年"><i class="fa fa-angle-double-left"></span>
            <span @click="toggleMonth('back', 'start')" class="k-datepicker-picker-head-btn" title="上一月" style="left:30px;"><i class="fa fa-angle-left"></i></span>
            {{`${this.$data.startDate.format('Y')}年${toDouble(this.$data.startDate.format('M'))}月`}}
            <span @click="toggleMonth('next', 'start')" class="k-datepicker-picker-head-btn" title="下一月" style="right:30px;top:0px;"><i class="fa fa-angle-right"></i></span>
            <span @click="toggleYear('next', 'start')" class="k-datepicker-picker-head-btn" title="下一年" style="right:10px;top:0px;"><i class="fa fa-angle-double-right"></span>
          </div>
          <div class="k k-datepicker-picker-body">
            <div class="k k-datepicker-picker-container" :style="timeShow ? 'margin-left: -100%' : 'margin-left: 0'">
              <ul class="k k-datepicker-picker-date">
                <li v-for="each in calendarTitle" class="k-datepicker-picker-day k-datepicker-picker-day-title">{{each}}</li>
                <li @click="toggleDay(each.status === 'disable' ? (each.day >= 20 ? 'back': 'next') : 'current', each.day, each.current, 'start')" v-for="each in startCalendar" :class="`k-datepicker-picker-day ${each.status === 'disable' ? '' : each.current ? 'k-datepicker-picker-day-enable k-datepicker-picker-day-current' : 'k-datepicker-picker-day-enable'}`">
                  {{each.day}}
                </li>
              </ul>
              <div class="k k-datepicker-picker-time">
                <div class="k k-datepicker-picker-time-wrap">
                  <div class="k-datepicker-picker-time-btn" @click="decreament('hour', 'start')">
                    <i class="fa fa-angle-up"></i>
                  </div>
                  <ul>
                    <li v-for="each in 24" :style="each === 1 ? `margin-top:-${parseInt(startDate.format('HH'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                  </ul>
                  <div class="k-datepicker-picker-time-btn" @click="increament('hour', 'start')">
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
                <div class="k k-datepicker-picker-time-wrap">
                  <div class="k-datepicker-picker-time-btn" @click="decreament('minute', 'start')">
                    <i class="fa fa-angle-up"></i>
                  </div>
                  <ul>
                    <li v-for="each in 60" :style="each === 1 ? `margin-top:-${parseInt(startDate.format('mm'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                  </ul>
                  <div class="k-datepicker-picker-time-btn" @click="increament('minute', 'start')">
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
                <div class="k k-datepicker-picker-time-wrap">
                  <div class="k-datepicker-picker-time-btn" @click="decreament('second', 'start')">
                    <i class="fa fa-angle-up"></i>
                  </div>
                  <ul>
                    <li v-for="each in 60" :style="each === 1 ? `margin-top:-${parseInt(startDate.format('ss'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                  </ul>
                  <div class="k-datepicker-picker-time-btn" @click="increament('second', 'start')">
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><div class="k k-datepicker-picker-wrap" style="width: 50%; overflow: hidden">
          <div class="k k-datepicker-picker-head">
            <span @click="toggleYear('back', 'end')" class="k-datepicker-picker-head-btn" title="上一年"><i class="fa fa-angle-double-left"></span>
            <span @click="toggleMonth('back', 'end')" class="k-datepicker-picker-head-btn" title="上一月" style="left:30px;"><i class="fa fa-angle-left"></i></span>
            {{`${this.$data.endDate.format('Y')}年${toDouble(this.$data.endDate.format('M'))}月`}}
            <span @click="toggleMonth('next', 'end')" class="k-datepicker-picker-head-btn" title="下一月" style="right:30px;top:0px;"><i class="fa fa-angle-right"></i></span>
            <span @click="toggleYear('next', 'end')" class="k-datepicker-picker-head-btn" title="下一年" style="right:10px;top:0px;"><i class="fa fa-angle-double-right"></span>
          </div>
          <div class="k k-datepicker-picker-body">
            <div class="k k-datepicker-picker-container" :style="timeShow ? 'margin-left: -100%' : 'margin-left: 0'">
              <ul class="k k-datepicker-picker-date">
                <li v-for="each in calendarTitle" class="k-datepicker-picker-day k-datepicker-picker-day-title">{{each}}</li>
                <li @click="toggleDay(each.status === 'disable' ? (each.day >= 20 ? 'back': 'next') : 'current', each.day, each.current, 'end')" v-for="each in endCalendar" :class="`k-datepicker-picker-day ${each.status === 'disable' ? '' : each.current ? 'k-datepicker-picker-day-enable k-datepicker-picker-day-current' : 'k-datepicker-picker-day-enable'}`">
                  {{each.day}}
                </li>
              </ul>
              <div class="k k-datepicker-picker-time">
                <div class="k k-datepicker-picker-time-wrap">
                  <div class="k-datepicker-picker-time-btn" @click="decreament('hour', 'end')">
                    <i class="fa fa-angle-up"></i>
                  </div>
                  <ul>
                    <li v-for="each in 24" :style="each === 1 ? `margin-top:-${parseInt(endDate.format('HH'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                  </ul>
                  <div class="k-datepicker-picker-time-btn" @click="increament('hour', 'end')">
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
                <div class="k k-datepicker-picker-time-wrap">
                  <div class="k-datepicker-picker-time-btn" @click="decreament('minute', 'end')">
                    <i class="fa fa-angle-up"></i>
                  </div>
                  <ul>
                    <li v-for="each in 60" :style="each === 1 ? `margin-top:-${parseInt(endDate.format('mm'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                  </ul>
                  <div class="k-datepicker-picker-time-btn" @click="increament('minute', 'end')">
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
                <div class="k k-datepicker-picker-time-wrap">
                  <div class="k-datepicker-picker-time-btn" @click="decreament('second', 'end')">
                    <i class="fa fa-angle-up"></i>
                  </div>
                  <ul>
                    <li v-for="each in 60" :style="each === 1 ? `margin-top:-${parseInt(endDate.format('ss'), 10)*32}px` : ''">{{toDouble(each - 1)}}</li>
                  </ul>
                  <div class="k-datepicker-picker-time-btn" @click="increament('second', 'end')">
                    <i class="fa fa-angle-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="k k-datepicker-picker-bottom">
        <div :style="this.$options.accurate !== 'HHMMSS' ? (this.$options.dateLength === 10 || this.$options.dateLength === 19 ? 'width: 50%' : 'width: 16%') : (this.$options.dateLength === 10 || this.$options.dateLength === 19 ? 'width: 33.3333333%' : 'width: 20%')">
          <k-button type="info" size="mini" :callBack="enter">确认</k-button>
        </div>
        <div v-if="this.$options.accurate === 'HHMMSS'" :style="this.$options.dateLength === 10 || this.$options.dateLength === 19 ? 'width: 33.3333333%' : 'width: 16%'">
          <k-button type="text" size="mini" :callBack="timePicker">{{timeShow ? '日期': '时间'}}</k-button>
        </div>
        <div v-if="this.$options.dateLength === 10 || this.$options.dateLength === 19" :style="this.$options.accurate !== 'HHMMSS' ? 'width: 50%' : 'width: 33.3333333%'">
          <k-button :callBack="resetDate" type="text" size="mini">今天</k-button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import moment from 'moment';
  import kButton from '../Button/Button';
  export default{
    name: 'k-datepicker-picker',
    components: {
      'k-button': kButton
    },
    mounted() {
      this.$data.show = !this.$data.show;
      if (this.$options.type === 'range') {
        this.showPickerDays(this.$data.startDate, 'startCalendar');
        this.showPickerDays(this.$data.endDate, 'endCalendar');
      }else {
        this.showPickerDays(this.$data.date, 'calendar');
      }
      this.$options.$emit(`k-datepicker-picker-vue-${this.$options._uid}`, this);
      this.$on(`k-datepicker-picker-update-picker-${this._uid}`, (data) => {
        if (this.$options.type === 'range') {
          this.$data[data.type + 'Date'] = data.obj;
          this.showPickerDays(this.$data[data.type + 'Date'], data.type + 'Calendar');
        }else {
          this.$data.date = data;
          this.showPickerDays(this.$data.date, 'calendar');
        }
      });
    },
    data() {
      return{
        show: false,
        timeShow: false,
        calendarTitle: ['一', '二', '三', '四', '五', '六', '日'],
        calendar: [],
        startCalendar: [],
        endCalendar: [],
        date: this.$options.dateObj ? this.$options.dateObj : moment(),
        startDate: this.$options.startDateObj ? this.$options.startDateObj : moment(),
        endDate: this.$options.endDateObj ? this.$options.endDateObj : moment()
      }
    },
    methods: {
      enter() {
        this.$data.show = !this.$data.show;
      },
      toDouble(time) {
        return time.toString().length === 2 ? time : '0' + time;
      },
      getMonthDay (year, month) {
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 ) {
          return 31;
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
          return 30;
        } else if (month == 2) {
          if (year % 4 === 0) {
            return 29;
          }else {
            return 28;
          }
        }
      },
      showPickerDays (DATE, key) {
        const date = DATE;
        const dateYear = date.format('Y');
        let dateMonth = date.format('M');
        if (dateMonth === 13) {
          dateMonth = 1;
        }else if (dateMonth === 0) {
          dateMonth = 12;
        }
        const dateDay = date.format('D');
        let dateWeek = date.format('d') === '0' ? 7 : parseInt(date.format('d'));
        if (dateDay !== 1) {
          dateWeek = Math.abs(dateWeek - ((dateDay - 1) % 7 - 7));
        }
        if (dateWeek > 7) {
          dateWeek = dateWeek - 7;
        }
        const calendar = [];
        const _dateMonthDay = this.getMonthDay( (dateMonth - 1) === 0 ? dateYear - 1 : dateYear, (dateMonth - 1) === 0 ? 12 : dateMonth - 1);
        const dateMonthDay = this.getMonthDay(dateYear, dateMonth);
        const dateMonthDay_ = this.getMonthDay( (dateMonth + 1) === 13 ? dateYear + 1 : dateYear, (dateMonth + 1) === 13 ? 1 : dateMonth + 1);

        for (let num = 1; num < dateWeek; num ++){
          calendar.push({status:'disable', current: false, day: _dateMonthDay - dateWeek + num + 1});
        }
        for (let num = 1; num < dateMonthDay + 1; num ++) {
          calendar.push({status:'enable', current: num === parseInt(dateDay, 10) ? true : false, day: num});
        }
        const _nextMonth = 42 - calendar.length + 1;
        for (let num = 1; num < _nextMonth; num ++) {
          calendar.push({status:'disable', current: false, day: num});
        }
        this.$data[key] = calendar;
      },
      toggleDay(flag, day, current, range) {
        if(current) return;
        this.$options.$emit(`k-datepicker-update-date-${this.$options._uid}`, {flag: flag, day: day, range: range});
      },
      toggleMonth(action, range) {
        this.$options.$emit(`k-datepicker-update-date-${this.$options._uid}`, {flag: action, day: this.$data.date.format('D'), range: range});
      },
      toggleYear(action, range) {
        this.$options.$emit(`k-datepicker-update-date-${this.$options._uid}`, {flag: 'toggleYear', action: action, day: this.$data.date.format('D'), range: range});
      },
      resetDate() {
        this.$options.$emit(`k-datepicker-update-date-${this.$options._uid}`, {flag: 'resetDate', date: moment()});
      },
      timePicker() {
        this.timeShow = !this.timeShow;
      },
      increament(action, range) {
        this.$options.$emit(`k-datepicker-update-date-${this.$options._uid}`, {flag: 'increamentTime', action: action, range: range});
      },
      decreament(action, range) {
        this.$options.$emit(`k-datepicker-update-date-${this.$options._uid}`, {flag: 'decreamentTime', action: action, range: range});
      }
    }
  }
</script>
