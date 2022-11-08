export default class toDoDom {
  static #datacheck = (done) => {
    if (done) {
      return 'done';
    }
    return '';
  }

  static addData = (data, container) => {
    const listHtml = `
    <li class="main-body-li">
    <div>
      <span><input type="checkbox" name="list-check" id="list-check" ${toDoDom.#datacheck(data.done)}></span>
      <span class="main-body-text">${data.text}</span>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
    `;

    container.innerHTML += listHtml;
  }
}