/**
 * @jest-environment jsdom
 */
import toDoDom from './toDoDom.js';
import Data from './data.js';
import Remove from './remove.js';

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
});
