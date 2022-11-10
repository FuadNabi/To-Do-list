import * as base from './module/base.js';
import './style.css';

const inputBtn = document.querySelector('.list-btn');
const inputData = document.querySelector('.list-input');
const appList = document.querySelector('.main-body-ul');
const clearBtn = document.querySelector('.clear-btn');

base.createDataByEnter(inputData, appList, inputData);
base.createData(inputData, appList, inputBtn);
base.removeData(appList);
base.modifyData(appList);
base.loadData(appList);
base.registerClearBtnListener(clearBtn);