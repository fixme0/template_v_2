export default class Nav {
  constructor(data, target) {
    this.data = data;
    this.target = target;
    this.init();
  }

  createNav() {
    let ul = document.createElement('ul');
    ul.className = 'nav-list';

    this.data.map(navElem => {
      ul.innerHTML += `
        <li class="nav-list-item">
          <a href="${navElem.link}">${navElem.title}</a>
        </li>
      `;
    });

    this.renderNav(ul);
  }

  renderNav(ul) {
    this.target.append(ul);
  }

  init(){
    this.createNav();
  }
}