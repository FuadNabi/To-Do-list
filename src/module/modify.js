import Data from './data.js';

export default class Modify {
  static #storage(data, texts) {
    const datas = Data.dataGet();
    datas.forEach((text, id) => {
      if (id === parseInt(data.getAttribute('data-id') - 1, 10)) {
        datas[id].text = texts.value;
      }
    });

    Data.dataAdd(datas);
  }

  static modify(data, texts) {
    Modify.#storage(data, texts);
  }
}