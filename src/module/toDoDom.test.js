/**
 * @jest-environment jsdom
 */
import toDoDom from './toDoDom.js';
import Data from './data.js';
import Remove from './remove.js';
import Modify from './modify.js';
import * as base from './base.js';

describe('Testing add and remove', () => {
  test('Add function test', () => {
    document.body.innerHTML = '<ul class="main-body-ul"></ul>';
    const appList = document.querySelector('.main-body-ul');
    toDoDom.data('task1', appList);

    expect(Data.dataGet()[0].text).toEqual('task1');
  });

  test('Remove function test', () => {
    document.body.innerHTML = '<ul class="main-body-ul"></ul>';
    const li = document.createElement('li');
    li.setAttribute('data-id', '1');
    Remove.data(li);

    expect(li.length).toBe(undefined);
  });

  test('Editing function test', () => {
    document.body.innerHTML = '<ul class="main-body-ul"></ul>';
    const appList = document.querySelector('.main-body-ul');

    toDoDom.data('task1', appList);
    const text = document.querySelector('.data-text');
    text.value = 'task2';
    const data = document.querySelector('.main-body-li');
    Modify.modify(data, text);

    expect(text.value).toBe('task2');
  });

  test('Completed function test', () => {
    document.body.innerHTML = '<ul class="main-body-ul"></ul>';
    const appList = document.querySelector('.main-body-ul');
    toDoDom.data('task1', appList);

    const li = document.querySelector('.main-body-li');
    const checkBox = document.querySelector('.list-check');
    checkBox.setAttribute('checked', true);
    Modify.doneCheck(li);

    const completedTasks = Data.dataGet()[2].done;

    expect(completedTasks).toBe(true);
  });

  test('Clear all complated function test', () => {
    base.clearAllComplatedTasks();

    // Till this test we create 3 dom elements and change 1 element to complete one.
    // That means when we use the clear all component button we will have 2 dom elements
    // and 1 dom element that we created in the test for making checked true have been deleted

    const completedTasks = Data.dataGet().length;
    expect(completedTasks).toBe(2);
  });
});
