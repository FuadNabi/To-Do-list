import Data from './data.js';

export default class Remove {
  static #displayRemove = (data) => {
    data.remove();
  };

  static #DataRemove = (data) => {
    let datas = Data.dataGet();
    const id = data.getAttribute('data-id');
    datas = datas.filter((task) => task.id !== parseInt(id, 10));

    Data.dataAdd(datas);
  };

  static #refreshId = () => {
    const datas = Data.dataGet();
    let counter = 1;
    datas.forEach((data) => {
      data.index = counter;
      counter += 1;
    });

    Data.dataAdd(datas);
  };

  static data = (data) => {
    Remove.#DataRemove(data);
    Remove.#displayRemove(data);
    Remove.#refreshId();
  };
}