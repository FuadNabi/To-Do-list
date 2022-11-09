import Data from './data.js';

export default class Modify {
  static #storage(data, texts) {
    const datas = Data.dataGet();
    datas.forEach((task) => {
      const info = parseInt(data.getAttribute('data-id'), 10);
      if (task.id === info) {
        task.text = texts.value;
      }
    });

    Data.dataAdd(datas);
  }

  static modify(data, texts) {
    Modify.#storage(data, texts);
  }
}