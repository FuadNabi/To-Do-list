import Data from './data.js';

export default class toDoDom {
  static #datacheck = (done) => {
    if (done) {
      return 'checked';
    }
    return '';
  }

  static #dataDone = (done) => {
    if (done) {
      return 'text-dec';
    }
    return '';
  }

  static #addData = (data, container) => {
    const listHtml = `
    <li class="main-body-li" id="${data.id}" data-id="${data.id}">
      <div class="width">
        <span><input type="checkbox" name="list-check" class="list-check" ${toDoDom.#datacheck(data.done)}></span>
        <span class="main-body-text"><input type="text" value="${data.text}" class="data-text ${toDoDom.#dataDone(data.done)}" contenteditable="true"></span>
      </div>
      <i class="fa-solid fa-square-minus remove-btn"></i>
    </li>
    `;

    container.innerHTML += listHtml;
  };

  static #dataDownload = (data) => {
    const datas = Data.dataGet();
    datas.push(data);
    Data.dataAdd(datas);
  }

  static data = (texts, container) => {
    const task = {
      text: texts,
      done: false,
      index: Data.dataGet().length + 1,
      id: Date.now(),
    };

    if (texts !== '') {
      toDoDom.#addData(task, container);
      toDoDom.#dataDownload(task);
    }
  }

  static datas = (container) => {
    const datas = Data.dataGet();
    datas.forEach((data) => {
      toDoDom.#addData(data, container);
    });
  }
}