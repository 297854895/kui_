import Vue from 'vue';
import button from './components/button';
import alert from './components/alert';
import buttonGroup from './components/buttonGroup';
import checkBox from './components/checkBox';
import Dialog from './components/dialog';
import dropDown from './components/dropDown';
import icon from './components/icon';
import input from './components/input';
import Page from './components/pageination';
import Switch from './components/switch';
import table from './components/table';

import './assets/font-awesome.min.css';

Vue.component(button.name, button);
Vue.component(alert.name, alert);
Vue.component(buttonGroup.name, buttonGroup);
Vue.component(checkBox.name, checkBox);
Vue.component(Dialog.name, Dialog);
Vue.component(dropDown.name, dropDown);
Vue.component(input.name, input);
Vue.component(Page.name, Page);
Vue.component(Switch.name, Switch);
Vue.component(table.name, table);
