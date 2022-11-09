export default class Data {
  static dataGet = () => {
    let data = [];
    if (localStorage.getItem('Todo')) {
      data = JSON.parse(localStorage.getItem('Todo'));
    }

    return data;
  };

  static dataAdd = (data) => {
    localStorage.setItem('Todo', JSON.stringify(data));
  };
}