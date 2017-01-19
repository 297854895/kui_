import Vue from 'vue';
import kuiCss from './assets/kui.css';
import fontAwesome from './assets/font-awesome.min.css';

import Alert from './components/Alert/Alert';
import Animate from './components/Animate/Animate';
import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import BreadCrumb from './components/BreadCrumb/BreadCrumb';
import BackTop from './components/BackTop/BackTop';
import Cascader from './components/Cascader/Cascader';
import Col from './components/Col/Col';
import CheckBox from './components/CheckBox/CheckBox';
import DropDown from './components/DropDown/DropDown';
import DatePicker from './components/DatePicker/DatePicker';
import Menu from './components/Menu/Menu';
import Nav from './components/Nav/Nav';
import Pageination from './components/Pageination/Pageination';
import Progress from './components/Progress/Progress';
import Row from './components/Row/Row';
import Switch from './components/Switch/Switch';
import Select from './components/Select/Select';
import Table from './components/Table/Table';
import Tabs from './components/Tabs/Tabs';
import Tree from './components/Tree/Tree';
import Input from './components/Input/Input';

import Notification from './components/Notification/index.js';
import Dialog from './components/Dialog/index.js';
import Message from './components/Message/index.js';

Vue.component(Alert.name, Alert);
Vue.component(Animate.name, Animate);
Vue.component(BackTop.name, BackTop);
Vue.component(Button.name, Button);
Vue.component(ButtonGroup.name, ButtonGroup);
Vue.component(BreadCrumb.name, BreadCrumb);
Vue.component(Cascader.name, Cascader);
Vue.component(Col.name, Col);
Vue.component(CheckBox.name, CheckBox);
Vue.component(DropDown.name, DropDown);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Menu.name, Menu);
Vue.component(Nav.name, Nav);
Vue.component(Progress.name, Progress);
Vue.component(Pageination.name, Pageination);
Vue.component(Row.name, Row);
Vue.component(Switch.name, Switch);
Vue.component(Select.name, Select);
Vue.component(Table.name, Table);
Vue.component(Tabs.name, Tabs);
Vue.component(Tree.name, Tree);
Vue.component(Input.name, Input);

Vue.prototype.$Kui = {
  Notification,
  Dialog,
  Message
}
