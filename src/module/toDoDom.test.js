/**
 * @jest-environment jsdom
 */
import toDoDom from './toDoDom.js';
import Data from './data.js';

describe('Testing add and remove', () => {
  test('Add function test', () => {
    document.body.innerHTML = '<ul class="main-body-ul"></ul>';
    const appList = document.querySelector('.main-body-ul');
    toDoDom.data('task1', appList);

    expect(Data.dataGet()[0].text).toEqual('task1');
  });
});