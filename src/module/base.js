import toDoDom from './toDoDom.js';
import data from './toDoData';

const addData = (container) => {
  const dataList = data;
  document.addEventListener('DOMContentLoaded', () => {
    dataList.forEach((data) => {
      toDoDom.addData(data, container);
    });
  });
};

export default addData;