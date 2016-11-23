import Vue from 'vue';

import button from './components/button';
import alert from './components/alert';
import buttonGroup from './components/buttonGroup';
import checkBox from './components/checkBox';
import dropDown from './components/dropDown';
import icon from './components/icon';
import input from './components/input';
import Page from './components/pageination';
import Switch from './components/switch';
import table from './components/table';

import Notification from './components/notification/index.js';
import Dialog from './components/dialog/index.js';

import './assets/font-awesome.min.css';
import './assets/kui.css';

Vue.component(button.name, button);
Vue.component(alert.name, alert);
Vue.component(buttonGroup.name, buttonGroup);
Vue.component(checkBox.name, checkBox);
Vue.component(dropDown.name, dropDown);
Vue.component(input.name, input);
Vue.component(Page.name, Page);
Vue.component(Switch.name, Switch);
Vue.component(table.name, table);

module.export = {
  Notification
}
