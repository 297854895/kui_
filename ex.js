<template>
  <div id="app">
    <div style="height: 60px"></div>
    <!-- <k-row>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="1"><div style="height: 50px; background: #eee"></div></k-col>
    </k-row>
    <div style="height:20px;clear:both"></div>
    <k-row>
      <k-col span="3" right="3"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="3"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="3"><div style="height: 50px; background: #eee"></div></k-col>
    </k-row>
    <div style="height:20px;clear:both"></div>
    <k-row>
      <k-col span="2" left="2"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="2" left="2"><div style="height: 50px; background: #eee"></div></k-col>
      <k-col span="2" left="2"><div style="height: 50px; background: #eee"></div></k-col>
    </k-row>
    <div style="height:20px;clear:both"></div>
    <k-button radius="no">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button>示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button size="large">示例</k-button>
    <k-button size="normal">示例</k-button>
    <k-button size="small">示例</k-button>
    <k-button size="mini">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button>示例</k-button>
    <k-button type="info">示例</k-button>
    <k-button type="primary">示例</k-button>
    <k-button type="success">示例</k-button>
    <k-button type="warning">示例</k-button>
    <k-button type="danger">示例</k-button>
    <k-button type="text">示例</k-button>
    <k-button type="danger" status="disable">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button iconBefore="fa fa-heart" :callBack="this.clickCallBack">示例</k-button>
    <k-button iconAfter="fa fa-chrome">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-button type="danger" size="large" width="300px">示例</k-button>
    <div style="height:20px;clear:both"></div>
    <k-switch :callBack="switchCallBack"></k-switch>
    <div style="height:20px;clear:both"></div>
    <k-button-group radius="no">
      <k-button>Left</k-button>
      <k-button>Mid</k-button>
      <k-button width="100px">Mid</k-button>
      <k-button>Mid</k-button>
      <k-button>Right</k-button>
    </k-button-group>
    <div style="height:20px;clear:both"></div>
    <k-button-group>
      <k-button type="info">Left</k-button>
      <k-button type="success">Mid</k-button>
      <k-button type="warning">Mid</k-button>
      <k-button type="danger">Mid</k-button>
      <k-button>Mid</k-button>
      <k-button type="primary">Right</k-button>
    </k-button-group>
    <div style="height:20px;clear:both"></div>
    <k-drop-down :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down icon="fa fa-chrome" type="info" :menu="[
        {text: 'Menu one', icon: 'fa fa-heart'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="primary" :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="success" :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="warning" :menu="[
      {text: 'Menu one'},
      {text: 'Menu two'},
      {text: 'Menu three'}
      ]">Dropdown</k-drop-down>
    <k-drop-down type="danger" :menu="[
        {text: 'Menu one'},
        {text: 'Menu two'},
        {text: 'Menu threexxxxxxxxxxxxxxxxxxx'}
      ]">Dropdown</k-drop-down>
    <div style="height:20px;clear:both"></div>
    <k-page :pageSet="{
        current: 1,
        total: 20,
        callBack: pageCallBack
      }"></k-page>
    <div style="height:20px;clear:both"></div>
    <k-page :pageSet="{
        current: 1,
        total: 20,
        size: 'small',
        callBack: pageCallBack
      }"></k-page>
    <div style="height:20px;clear:both"></div>
    <k-button :callBack="notification">Notification</k-button>
    <k-button :callBack="autoClosenotification">Notification AutoClose</k-button>
    <k-button :callBack="delayClosenotification">Notification Delay 5S</k-button>
    <div style="height:20px;clear:both"></div>
    <k-animate direction="left" delay="300">
      <k-button :callBack="message">Message</k-button>
      <k-button :callBack="messageClose">Message close</k-button>
    </k-animate>
    <div style="height:20px;clear:both"></div>
    <k-button iconBefore="fa fa-chrome" :callBack="dialog" type="success">Dialog</k-button>
    <k-button :callBack="dialog2">Dialog2</k-button>
    <div style="height:20px;clear:both"></div>
    <k-alert size="small">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="info" size="large">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="warning">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="danger">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-alert type="success" close="true">This is Alert</k-alert>
    <div style="height:20px;clear:both"></div>
    <k-breadcrumb :set="{
        data: [
          {label: 'One'},
          {label: 'Two'},
          {label: 'Three'}
        ]
      }"></k-breadcrumb>
    <div style="height:20px;clear:both"></div>
    <k-menu
      current="Menu-0"
      :menu="[
        {title: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
          {title: 'menu-0', icon: 'fa fa-chrome', key: 'menu-0', callBack: clickCallBack},
          {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
          {title: 'menu-2', key: 'menu-2'},
          {title: 'menu-3', key: 'menu-3'}
        ]},
        {title: 'Menu-1', key: 'Menu-1', callBack: clickCallBack, menu: [
          {title: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
          {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
          {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
          {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
        ]},
        {title: 'Menu-2', key: 'Menu-2'},
        {title: 'Menu-3', key: 'Menu-3'},
        {title: 'Menu-4', key: 'Menu-4'}
      ]"></k-menu>
      <div style="height:20px;clear:both"></div>
      <div style="width: 250px">
        <k-menu
          direction="y"
          current="Menu-0"
          :menu="[
            {title: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
              {title: 'menu-0', key: 'menu-0', callBack: clickCallBack},
              {title: 'menu-1', key: 'menu-1'},
              {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
              {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {title: 'Menu-1', key: 'Menu-1', menu: [
              {title: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
              {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
              {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
              {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
            ]},
            {title: 'Menu-2', key: 'Menu-2'},
            {title: 'Menu-3', key: 'Menu-3'},
            {title: 'Menu-4', key: 'Menu-4'}
          ]"></k-menu>
        </div>
    <div style="height:20px;clear:both"></div>
    <div style="width: 250px">
      <k-menu
        direction="y"
        current="Menu-0"
        border="none"
        :menu="[
          {title: '谷歌浏览器', icon: 'fa fa-chrome', key: 'Menu-0', menu: [
            {title: 'menu-0', key: 'menu-0', callBack: clickCallBack},
            {title: 'menu-1', key: 'menu-1'},
            {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
          ]},
          {title: 'Menu-1', key: 'Menu-1', menu: [
            {title: 'xxxxxxxxxxxxxxxxxxxxx', icon: 'fa fa-chrome', key: 'menu-0'},
            {title: 'menu-1', icon: 'fa fa-search', key: 'menu-1'},
            {title: 'menu-2', icon: 'fa fa-chrome', key: 'menu-2'},
            {title: 'menu-3', icon: 'fa fa-search', key: 'menu-3'}
          ]},
          {title: 'Menu-2', key: 'Menu-2'},
          {title: 'Menu-3', key: 'Menu-3'},
          {title: 'Menu-4', key: 'Menu-4'}
        ]"></k-menu>
      </div>
      <div style="height:20px;clear:both"></div>
      <k-tabs :set="{
          tabs: [
            {key: 'one', title: 'One'},
            {key: 'two', title: 'Two'},
            {key: 'three', title: 'Three'}
          ],
          current: 'one',
          animate: true
          /*animate: {
            direction: 'top',
            delay: 50
          }*/
        }">
        <div slot="one" style="height:1000px;text-align:center;line-height:400px;">T1</div>
        <div slot="two" style="height:400px;text-align:center;line-height:400px;">T2</div>
        <div slot="three" style="height:400px;text-align:center;line-height:400px;">T3</div>
      </k-tabs>
      <div style="height: 20px;clear:both"></div>
      <k-input value="Basic input"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input iconBefore="fa fa-chrome" placeholder="Chrome"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input textAfter="@"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input textBefore="账号"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input textBefore="密码" type="password"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input textBefore="Http://" :onchange="inputValueChange"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input :selectBefore="[
        {key: 'Http://', text: 'Http://'},
        {key: 'Https://', text: 'Https://'}
        ]" :selectAfter="[
        {key: '.cn', text: '.cn'}
        ]" :onchange="inputValueChange"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-input :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
        after: clickCallBack
        }"></k-input>
      <div style="height: 20px;clear:both"></div>
      <k-select :select="[
        {text: 'Andy', key: 'Andy'},
        {text: 'Kid', key: 'Kid'},
        {text: 'Fzx', key: 'Fzx'},
        {text: 'Pawn', key: 'Pawn'},
        {text: 'Xiao', key: 'Xiao'},
        {text: 'Bengi', key: 'Bengi'},
        {text: 'WeiXiao', key: 'WeiXiao'}
      ]" :selectChange="selectValueChange"></k-select>
      <div style="height: 20px;clear:both"></div>
      <k-select :select="[
        {text: 'Andy', key: 'Andy'},
        {text: 'Kid', key: 'Kid'},
        {text: 'Fzx', key: 'Fzx'},
        {text: 'Pawn', key: 'Pawn'}
      ]" width="160px"></k-select>
      <div style="height: 20px;clear:both"></div>
      <k-select input="true" :select="[
        {text: 'Andy', key: 'Andy'},
        {text: 'Kid', key: 'Kid'},
        {text: 'Fzx', key: 'Fzx'},
        {text: 'Pawn', key: 'Pawn'},
        {text: 'Xiao', key: 'Xiao'},
        {text: 'Bengi', key: 'Bengi'},
        {text: 'WeiXiaoxxxxxxxxxxxxxxxxxxx', key: 'WeiXiao'}
      ]" :selectChange="selectValueChange" placeholder="Please input"></k-select>
      <div style="height: 20px;clear:both"></div>
      <k-cascader width="200px"
        :onchange="cascaderChange"
        placeholder="input this"
        :select="[
          {key: 'chongqing',text: 'chongqing', select: [
            {key: 'c0-xxxx', text: 'c0-xxxx', select: [
              {key: 'c0-xxx', text: 'c0-xxx', select: [
                {key: 'c0-xx', text: 'c0-xx', select: [
                  {key: 'c0-x', text: 'c0-x', select: [
                    {key: 'c0', text: 'c0'}
                  ]}
                ]},
                {key: 'c0-x', text: 'c0-x'},
              ]},
            ]},
            {key: 'c1-xxxx', text: 'c1-xxxx', select: [
              {key: 'c1-xxx', text: 'c1-xxx', select: [
                {key: 'c1-xx', text: 'c1-xx'},
                {key: 'c1-x', text: 'c1-x'},
              ]},
            ]},
            {key: 'c2-xxxx', text: 'c2-xxxx', select: [
              {key: 'c2-xxx', text: 'c2-xxx', select: [
                {key: 'c2-xx', text: 'c2-xx'},
                {key: 'c2-x', text: 'c2-x'},
              ]},
            ]},
            {key: 'c3-xxxx', text: 'c3-xxxx', select: [
              {key: 'c3-xxx', text: 'c3-xxx', select: [
                {key: 'c3-xx', text: 'c3-xx'},
                {key: 'c3-x', text: 'c3-x'},
              ]},
            ]},
          ]},
          {key: 'beijing', text: 'beijing', select: [
            {key: 'b0-xxxx', text: 'b0-xxxx', select: [
              {key: 'b0-xxx', text: 'b0-xxx', select: [
                {key: 'b0-xx', text: 'b0-xx'},
                {key: 'b0-x', text: 'b0-x'},
              ]},
            ]},
            {key: 'b1-xxxx', text: 'b1-xxxx', select: [
              {key: 'b1-xxx', text: 'b1-xxx', select: [
                {key: 'b1-xx', text: 'b1-xx'},
                {key: 'b1-x', text: 'b1-x'},
              ]},
            ]},
            {key: 'b2-xxxx', text: 'b2-xxxx', select: [
              {key: 'b2-xxx', text: 'b2-xxx', select: [
                {key: 'b2-xx', text: 'b2-xx'},
                {key: 'b2-x', text: 'b2-x'},
              ]},
            ]},
            {key: 'b3-xxxx', text: 'b3-xxxx', select: [
              {key: 'b3-xxx', text: 'b3-xxx', select: [
                {key: 'b3-xx', text: 'b3-xx'},
                {key: 'b3-x', text: 'b3-x'},
              ]},
            ]},
          ]},
          {key: 'shanghai', text: 'shanghai'}
      ]"></k-cascader>
      <div style="height: 20px;clear:both"></div>
      <k-progress percent="80%"></k-progress>
      <div style="height: 20px;clear:both"></div>
      <k-datepicker width="180px" value="2017-01-01 12:34:56" :onchange="datepickerValueChange" accurate="YYYYMMDD"></k-datepicker>
      <div style="height: 20px;clear:both"></div>
      <k-datepicker value="2017-01-01 13:34:56" :onchange="datepickerValueChange" accurate="HHMMSS"></k-datepicker>
      <div style="height: 20px;clear:both"></div>
      <k-datepicker :onchange="datepickerValueChange" accurate="HHMMSS" placeholder="input date"></k-datepicker>
      <div style="height: 20px;clear:both"></div>
      <k-datepicker readonly="readonly" :onchange="datepickerValueChange" placeholder="input date"></k-datepicker>
      <div style="height: 20px;clear:both"></div>
      <k-datepicker startValue="2016-06-26" endValue="2016-08-25" type="range" readonly="readonly" :onchange="datepickerValueChange"></k-datepicker>
      <div style="height: 20px;clear:both"></div>
      <k-datepicker type="range" accurate="HHMMSS" :onchange="datepickerValueChange"></k-datepicker>
      <div style="height: 20px;clear:both"></div>
      <k-backtop background="#20a0ff" scrollTop="100"></k-backtop>
      <div style="height: 20px;clear:both"></div>
      <k-nav :scrollChange="[
        {scrollTop: 500, type: 'default', backgroundColor: '#fff'},
        {scrollTop: 1000, type: 'dark', backgroundColor: '#222', navBorderColor: '#111', navHoverColor: '#eee', navHoverBgColor: '#111'},
        {scrollTop: 1500, type: 'dark', backgroundColor: '#ff4949', navBorderColor: '#cc3333', navHoverColor: '#fff', navHoverBgColor: '#cc3333'},
      ]">
        <span slot="left">
          <img src="/static/img/logo.png" style="height:26px;" /><label style="font-size:18px;font-weight:bold;margin-left: 10px;">Xxx</label><k-input style="margin-left: 20px" :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
            after: clickCallBack
            }"></k-input>
        </span>
        <ul slot="right">
          <li class="k-nav-current">Home</li>
          <li>Faker</li>
          <li>Pawn</li>
          <li>Imp</li>
          <label>
            <img src="/static/img/dog.jpg" style="height:26px;display:inline-block"/>
            <a>登录</a>
            <a>登出</a>
          </label>
        </ul>
      </k-nav>
      <k-nav type="dark" position="fixed-bottom" backgroundColor="#222" navBorderColor="#111" navHoverColor="#eee" navHoverBgColor="#111">
        <span slot="right">
          <img src="/static/img/logo.png" style="height:26px;" />
          <k-input :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
            after: clickCallBack
            }"></k-input>
        </span>
        <ul slot="left">
          <li class="k-nav-current">Home</li>
          <li>Faker</li>
          <li>Pawn</li>
          <li>Imp</li>
        </ul>
      </k-nav>
      <div style="height: 20px;clear:both"></div>
      <k-nav position="normal">
        <span slot="left">
          <img src="/static/img/logo.png" style="height:26px;" />
          <k-input :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
            after: clickCallBack
            }"></k-input>
        </span>
        <ul slot="right">
          <li class="k-nav-current">Home</li>
          <li>Faker</li>
          <li>Pawn</li>
          <li>Imp</li>
        </ul>
      </k-nav>
      <div style="height: 20px;clear:both"></div>
      <k-nav type="dark" position="normal" backgroundColor="#222" navBorderColor="#111" navHoverColor="#eee" navHoverBgColor="#111">
        <span slot="left">
          <img src="/static/img/logo.png" style="height:26px;" />
          <k-input :onchange="inputValueChange" iconAfter="fa fa-search" placeholder="Search..." :btnCallBack="{
            after: clickCallBack
            }"></k-input>
        </span>
        <ul slot="right">
          <li class="k-nav-current">Home</li>
          <li>Faker</li>
          <li>Pawn</li>
          <li>Imp</li>
        </ul>
      </k-nav>
      <div style="height: 160px;clear:both"></div>
      <div style="height:20px;clear:both"></div>
      <k-animate direction="left" delay="300">
        <k-table
            :head="[
              {text: 'Name', dataIndex: 'Name', sort: true},
              {text: 'Age', dataIndex: 'Age', sort: true},
              {text: 'Address', dataIndex: 'Address'},
              {text: 'Control', dataIndex: 'component'}
            ]"
            :data="[
              {Name: 'xxxxxxxxxx', Age: 1, Address: 'xxxxxxx', component: {
                  component: 'button',
                  iconBefore: 'fa fa-heart',
                  text: 'Control',
                  size: 'small',
                  callBack: clickCallBack
                }},
              {Name: 'xxxxxxxxx', Age: 2, Address: 'xxxxxxx', component: {
                  component: 'switch',
                  enable: false,
                  callBack: switchCallBack,
                  status: 'disable'
                }},
              {Name: 'xxxxxxxx', Age: 3, Address: 'xxxxxxx', component: {
                  component: 'switch',
                  enable: false,
                  callBack: switchCallBack
                }},
              {Name: 'xxxxxxx', Age: 4, Address: 'xxxxxxx'},
              {Name: 'xxxxxx', Age: 5, Address: 'xxxxxxx'},
              {Name: 'xxxxx', Age: 6, Address: 'xxxxxxx'},
              {Name: 'xxxx', Age: 7, Address: 'xxxxxxx'},
              {Name: 'xxx', Age: 8, Address: 'xxxxxxx'},
              {Name: 'xx', Age: 9, Address: 'xxxxxxx'},
              {Name: 'x', Age: 10, Address: 'xxxxxxx'}
            ]"
            :options="{
                current: 1,
                size: 10,
                total: 180,
                headColor: '#888',
                headBgColor: '#e0e0e0',
                togglePage: tableTogglePage
              }"
            ></k-table>
      </k-animate>
      <k-animate direction="left" delay="300">
        <k-table
            :head="[
              {text: 'Name', dataIndex: 'Name', sort: true},
              {text: 'Age', dataIndex: 'Age', sort: true},
              {text: 'Address', dataIndex: 'Address'},
            ]"
            :data="[]"
            ></k-table>
      </k-animate>
      <div style="height:20px;clear:both"></div>
      <k-check-box :checkChange="checkBoxChange" :checkData="[
        {name: '苹果', checked: true, key: 'apple'},
        {name: '西瓜', key: 'xg'},
        {name: '橘子', key: 'orange'},
        {name: '南瓜', key: 'ng'}
      ]"></k-check-box>
      <div style="height:20px;clear:both"></div>
      <k-check-box all="true" :checkChange="checkBoxChange" checkType="mut" :checkData="[
        {name: '苹果', checked: true, key: 'apple'},
        {name: '西瓜', key: 'xg'},
        {name: '橘子', key: 'orange'},
        {name: '南瓜', key: 'ng'}
      ]"></k-check-box>
      <div style="height:20px;clear:both"></div>
      <k-check-box type="primary" :checkData="[
        {name: '苹果', checked: true, key: 'apple'},
        {name: '西瓜', key: 'xg'},
        {name: '橘子', key: 'orange'},
        {name: '南瓜', key: 'ng'}
      ]"></k-check-box>
      <div style="height:20px;clear:both"></div>
      <k-check-box type="primary" checkType="mut" :checkData="[
        {name: '苹果', checked: true, key: 'apple'},
        {name: '西瓜', key: 'xg'},
        {name: '橘子', key: 'orange'},
        {name: '南瓜', key: 'ng'}
      ]"></k-check-box>
      <k-tree
        checkChangeOutPut="node"
        :checkChange="treeCheckOnchange"
        :tree="[
          {text: 'Node-0', key: 'Node-0', children: [
            {text: 'Node-0-0', key: 'Node-0-0', children: [
              {text: 'Node-0-0-0', key: 'Node-0-0-0', children: [
                {text: 'Node-0-0-0-0', key: 'Node-0-0-0-0', children: [
                  {text: 'Node-0-0-0-0-0', key: 'Node-0-0-0-0-0'}
                ]},
                {text: 'Node-0-0-0-1', key: 'Node-0-0-0-1'},
                {text: 'Node-0-0-0-2', key: 'Node-0-0-0-2'},
                {text: 'Node-0-0-0-3', key: 'Node-0-0-0-3'},
              ]},
              {text: 'Node-0-0-1', key: 'Node-0-0-1'},
              {text: 'Node-0-0-2', key: 'Node-0-0-2'},
              {text: 'Node-0-0-3', key: 'Node-0-0-3'},
            ]},
            {text: 'Node-0-1', key: 'Node-0-1', children: [
              {text: 'Node-0-1-0', key: 'Node-0-1-0', children: [
                {text: 'Node-0-1-0-0', key: 'Node-0-1-0-0', children: [
                  {text: 'Node-0-1-0-0-0', key: 'Node-0-1-0-0-0'},
                  {text: 'Node-0-1-0-0-1', key: 'Node-0-1-0-0-1'}
                ]},
                {text: 'Node-0-1-0-1', key: 'Node-0-1-0-1'},
                {text: 'Node-0-1-0-2', key: 'Node-0-1-0-2'},
                {text: 'Node-0-1-0-3', key: 'Node-0-1-0-3'},
              ]},
              {text: 'Node-0-1-1', key: 'Node-0-1-1'},
              {text: 'Node-0-1-2', key: 'Node-0-1-2'},
              {text: 'Node-0-1-3', key: 'Node-0-1-3'},
            ]},
            {text: 'Node-0-2', key: 'Node-0-2'},
          ]},
          {text: 'Node-1', key: 'Node-1', children: [
            {text: 'Node-1-0', key: 'Node-1-0', children: [
              {text: 'Node-1-0-0', key: 'Node-1-0-0', children: [
                {text: 'Node-1-0-0-0', key: 'Node-1-0-0-0', children: [
                  {text: 'Node-1-0-0-0-0', key: 'Node-1-0-0-0-0'}
                ]},
                {text: 'Node-1-0-0-1', key: 'Node-1-0-0-1'},
                {text: 'Node-1-0-0-2', key: 'Node-1-0-0-2'},
                {text: 'Node-1-0-0-3', key: 'Node-1-0-0-3'},
              ]},
              {text: 'Node-1-0-1', key: 'Node-1-0-1'},
              {text: 'Node-1-0-2', key: 'Node-1-0-2'},
              {text: 'Node-1-0-3', key: 'Node-1-0-3'},
            ]},
            {text: 'Node-1-1', key: 'Node-1-1'},
            {text: 'Node-1-2', key: 'Node-1-2'},
          ]},
          {text: 'Node-2', key: 'Node-2'},
          {text: 'Node-3', key: 'Node-3'},
        ]"
        ></k-tree>
      <div style="height: 20px"></div>
      <k-tree
        :checkChange="treeCheckOnchange"
        type="primary"
        :tree="[
          {text: 'Node-0', key: 'Node-0', children: [
            {text: 'Node-0-0', key: 'Node-0-0', children: [
              {text: 'Node-0-0-0', key: 'Node-0-0-0', children: [
                {text: 'Node-0-0-0-0', key: 'Node-0-0-0-0', children: [
                  {text: 'Node-0-0-0-0-0', key: 'Node-0-0-0-0-0'}
                ]},
                {text: 'Node-0-0-0-1', key: 'Node-0-0-0-1'},
                {text: 'Node-0-0-0-2', key: 'Node-0-0-0-2'},
                {text: 'Node-0-0-0-3', key: 'Node-0-0-0-3'},
              ]},
              {text: 'Node-0-0-1', key: 'Node-0-0-1'},
              {text: 'Node-0-0-2', key: 'Node-0-0-2'},
              {text: 'Node-0-0-3', key: 'Node-0-0-3'},
            ]},
            {text: 'Node-0-1', key: 'Node-0-1', children: [
              {text: 'Node-0-1-0', key: 'Node-0-1-0', children: [
                {text: 'Node-0-1-0-0', key: 'Node-0-1-0-0', children: [
                  {text: 'Node-0-1-0-0-0', key: 'Node-0-1-0-0-0'},
                  {text: 'Node-0-1-0-0-1', key: 'Node-0-1-0-0-1'}
                ]},
                {text: 'Node-0-1-0-1', key: 'Node-0-1-0-1'},
                {text: 'Node-0-1-0-2', key: 'Node-0-1-0-2'},
                {text: 'Node-0-1-0-3', key: 'Node-0-1-0-3'},
              ]},
              {text: 'Node-0-1-1', key: 'Node-0-1-1'},
              {text: 'Node-0-1-2', key: 'Node-0-1-2'},
              {text: 'Node-0-1-3', key: 'Node-0-1-3'},
            ]},
            {text: 'Node-0-2', key: 'Node-0-2'},
          ]},
          {text: 'Node-1', key: 'Node-1', children: [
            {text: 'Node-1-0', key: 'Node-1-0', children: [
              {text: 'Node-1-0-0', key: 'Node-1-0-0', children: [
                {text: 'Node-1-0-0-0', key: 'Node-1-0-0-0', children: [
                  {text: 'Node-1-0-0-0-0', key: 'Node-1-0-0-0-0'}
                ]},
                {text: 'Node-1-0-0-1', key: 'Node-1-0-0-1'},
                {text: 'Node-1-0-0-2', key: 'Node-1-0-0-2'},
                {text: 'Node-1-0-0-3', key: 'Node-1-0-0-3'},
              ]},
              {text: 'Node-1-0-1', key: 'Node-1-0-1'},
              {text: 'Node-1-0-2', key: 'Node-1-0-2'},
              {text: 'Node-1-0-3', key: 'Node-1-0-3'},
            ]},
            {text: 'Node-1-1', key: 'Node-1-1'},
            {text: 'Node-1-2', key: 'Node-1-2'},
          ]},
          {text: 'Node-2', key: 'Node-2'},
          {text: 'Node-3', key: 'Node-3'},
        ]"
        ></k-tree>
    <div style="height: 20px"></div>
    <k-tree
      check="false"
      :treeNodeClick="treeNodeClick"
      type="primary"
      :tree="[
        {text: 'Node-0', key: 'Node-0', children: [
          {text: 'Node-0-0', key: 'Node-0-0', children: [
            {text: 'Node-0-0-0', key: 'Node-0-0-0', children: [
              {text: 'Node-0-0-0-0', key: 'Node-0-0-0-0', children: [
                {text: 'Node-0-0-0-0-0', key: 'Node-0-0-0-0-0'}
              ]},
              {text: 'Node-0-0-0-1', key: 'Node-0-0-0-1'},
              {text: 'Node-0-0-0-2', key: 'Node-0-0-0-2'},
              {text: 'Node-0-0-0-3', key: 'Node-0-0-0-3'},
            ]},
            {text: 'Node-0-0-1', key: 'Node-0-0-1'},
            {text: 'Node-0-0-2', key: 'Node-0-0-2'},
            {text: 'Node-0-0-3', key: 'Node-0-0-3'},
          ]},
          {text: 'Node-0-1', key: 'Node-0-1', children: [
            {text: 'Node-0-1-0', key: 'Node-0-1-0', children: [
              {text: 'Node-0-1-0-0', key: 'Node-0-1-0-0', children: [
                {text: 'Node-0-1-0-0-0', key: 'Node-0-1-0-0-0'},
                {text: 'Node-0-1-0-0-1', key: 'Node-0-1-0-0-1'}
              ]},
              {text: 'Node-0-1-0-1', key: 'Node-0-1-0-1'},
              {text: 'Node-0-1-0-2', key: 'Node-0-1-0-2'},
              {text: 'Node-0-1-0-3', key: 'Node-0-1-0-3'},
            ]},
            {text: 'Node-0-1-1', key: 'Node-0-1-1'},
            {text: 'Node-0-1-2', key: 'Node-0-1-2'},
            {text: 'Node-0-1-3', key: 'Node-0-1-3'},
          ]},
          {text: 'Node-0-2', key: 'Node-0-2'},
        ]},
        {text: 'Node-1', key: 'Node-1', children: [
          {text: 'Node-1-0', key: 'Node-1-0', children: [
            {text: 'Node-1-0-0', key: 'Node-1-0-0', children: [
              {text: 'Node-1-0-0-0', key: 'Node-1-0-0-0', children: [
                {text: 'Node-1-0-0-0-0', key: 'Node-1-0-0-0-0'}
              ]},
              {text: 'Node-1-0-0-1', key: 'Node-1-0-0-1'},
              {text: 'Node-1-0-0-2', key: 'Node-1-0-0-2'},
              {text: 'Node-1-0-0-3', key: 'Node-1-0-0-3'},
            ]},
            {text: 'Node-1-0-1', key: 'Node-1-0-1'},
            {text: 'Node-1-0-2', key: 'Node-1-0-2'},
            {text: 'Node-1-0-3', key: 'Node-1-0-3'},
          ]},
          {text: 'Node-1-1', key: 'Node-1-1'},
          {text: 'Node-1-2', key: 'Node-1-2'},
        ]},
        {text: 'Node-2', key: 'Node-2'},
        {text: 'Node-3', key: 'Node-3'},
      ]"
      ></k-tree> -->
      <div style="height: 20px"></div>
      <!-- <k-card
        boxShadow="true"
        radius="true"
        style="width: 200px;"
        >
        this is slot
      </k-card>
      <k-card
        boxShadow="true"
        radius="true"
        style="width: 200px;"
        >
        this is slot
      </k-card> -->
      <k-textEditor height="400px"></k-textEditor>
  </div>
</template>
<script>
  export default {
    methods: {
      treeCheckOnchange(data) {
        console.log('treeCheckOnchange', data);
      },
      treeNodeClick(data) {
        console.log('treeNodeClick', data);
      },
      cascaderChange(data) {
        console.log('cascaderChange', data);
      },
      checkBoxChange(data) {
        console.log('checkBoxChange', data);
      },
      tableTogglePage(page, fn) {
        console.log('table togglePage:', page);
        fn(page, [
            {Name: 'xxxxxxxxxx', Age: 11, Address: 'xxxxxxx', component: {
                component: 'button',
                iconBefore: 'fa fa-heart',
                text: 'Control',
                size: 'small',
                callBack: this.clickCallBack
              }},
            {Name: 'xxxxxxxxx', Age: 12, Address: 'xxxxxxx', component: {
                component: 'switch',
                enable: false,
                callBack: this.switchCallBack,
                status: 'disable'
              }},
            {Name: 'xxxxxxxx', Age: 13, Address: 'xxxxxxx', component: {
                component: 'switch',
                enable: false,
                callBack: this.switchCallBack
              }},
            {Name: 'xxxxxxx', Age: 14, Address: 'xxxxxxx'},
            {Name: 'xxxxxx', Age: 15, Address: 'xxxxxxx'},
            {Name: 'xxxxx', Age: 16, Address: 'xxxxxxx'},
            {Name: 'xxxx', Age: 17, Address: 'xxxxxxx'},
            {Name: 'xxx', Age: 18, Address: 'xxxxxxx'},
            {Name: 'xx', Age: 19, Address: 'xxxxxxx'},
            {Name: 'x', Age: 20, Address: 'xxxxxxx'}
          ]);
      },
      datepickerValueChange(date) {
        console.log(date);
      },
      selectValueChange(data) {
        console.log('select Key:', data.key);
        console.log('select Text:', data.text);
      },
      inputValueChange(value) {
        console.log('inputValueChange', value);
      },
      clickCallBack() {
        console.log('this is callback');
      },
      switchCallBack(status, fn) {
        console.log(status);
        // fn(false);
      },
      pageCallBack(page) {
        console.log(page);
      },
      dialog() {
        this.$Kui.Dialog({title: 'Dialog', content: 'this is content', button: [
          {label: 'Sure', CallBack: this.clickCallBack},
          {label: 'Cancel', CallBack: this.clickCallBack},
        ]});
      },
      dialog2() {
        this.$Kui.Dialog({title: 'Dialogxxxxx', content: 'this is content222222222222222'});
      },
      message() {
        this.$Kui.Message.success({text: '通知内容ner水电费水电费水电费'});
      },
      messageClose() {
        this.$Kui.Message.success({text: '通知内容ner水电费水电费水电费', remove: null});
      },
      notification() {
        this.$Kui.Notification.error({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        setTimeout(()=>{
          this.$Kui.Notification.info({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },500);
        setTimeout(()=>{
          this.$Kui.Notification.default({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },1000);
        setTimeout(()=>{
          this.$Kui.Notification.success({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },1500);
        setTimeout(()=>{
          this.$Kui.Notification.warning({title:'标题标题标题', content: '通知内容ner水电费水电费水电费'});
        },2000);
      },
      autoClosenotification() {
        this.$Kui.Notification.error({title:'标题标题标题', content: '通知内容ner水电费水电费水电费', autoClose: true});
      },
      delayClosenotification() {
        this.$Kui.Notification.error({title:'标题标题标题', content: '通知内容ner水电费水电费水电费', delay: 5000, autoClose: true, });
      }
    }
  }
</script>
<style>
  body{
    font-family:  "Lucida Grande", Lucida Sans Unicode, Hiragino Sans GB, WenQuanYi Micro Hei, Verdana, Aril, sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 14px;
    /*background: gray;*/
  }
</style>
