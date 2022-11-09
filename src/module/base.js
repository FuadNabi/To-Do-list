import toDoDom from './toDoDom.js';
import Modify from './modify.js';
import Remove from './remove.js';

const formClearing = (data) => {
  data.value = '';
};

const createData = (data, container, form) => {
  form.addEventListener('click', (element) => {
    element.preventDefault();
    toDoDom.data(data.value, container);
    formClearing(data);
  });
};

const createDataByEnter = (data, container, form) => {
  form.addEventListener('keypress', (element) => {
    if (element.key === 'Enter') {
      element.preventDefault();
      toDoDom.data(data.value, container);
      formClearing(data);
    }
  });
};

const removeData = (container) => {
  container.addEventListener('click', (element) => {
    if (element.target.classList.contains('remove-btn')) {
      const removeBtn = element.target;
      const dataId = removeBtn.parentElement.getAttribute('data-id');
      const data = container.querySelector(
        `li[data-id= "${dataId}"]`,
      );
      Remove.data(data);
    }
  });
};

const modifyData = (container) => {
  container.addEventListener('click', (element) => {
    if (element.target.classList.contains('data-text')) {
      const texts = element.target;
      const data = texts.parentElement.parentElement.parentElement;
      data.classList.add('green-bg');
    }
  });

  container.addEventListener('focusout', (element) => {
    if (element.target.classList.contains('data-text')) {
      const texts = element.target;
      const data = texts.parentElement.parentElement.parentElement;
      Modify.modify(data, texts);
      data.classList.remove('green-bg');
    }
  });
};

const loadData = (container) => {
  document.addEventListener('DOMContentLoaded', () => {
    toDoDom.datas(container);
  });
};

export {
  createData, removeData, modifyData, loadData, createDataByEnter,
};