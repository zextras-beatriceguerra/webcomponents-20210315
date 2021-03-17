export class FlexCard extends HTMLElement {

  constructor() {
    super();
    const container = document.createElement('div');
    container.setAttribute('class', 'wrapper');

    const title = this.getAttribute('title') || 'Default title';
    const text = this.getAttribute('text') || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat aliquet ex id porta. Ut interdum imperdiet diam, vel luctus turpis commodo sed. Etiam tempus id massa sit amet iaculis. Sed tempor feugiat arcu. Nunc blandit viverra imperdiet. Quisque lacinia sem sem, a vestibulum mi rhoncus eget. Integer suscipit purus sapien, id aliquam turpis tempus posuere. Aliquam nec mi eu nunc rutrum rhoncus. Nullam blandit faucibus quam dictum imperdiet. Duis ut risus iaculis, suscipit dolor sed, scelerisque lectus. Quisque feugiat ligula vitae placerat egestas. Nam convallis leo sit amet leo dictum, dignissim tincidunt ex dignissim. Duis at ex ante. Maecenas hendrerit dui diam, in feugiat dui hendrerit id. Nulla facilisis risus libero, euismod ultrices massa vehicula id.';
    container.innerHTML = `
      <header>
          <h1>${title}</h1>
      </header>
      <main>
          <p>${text}</p>
      
      </main>
    `;

    // Apply external styles to the shadow dom
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'flexCard.css');

    const shadow= this.attachShadow({mode: 'open'});
    shadow.appendChild(container);
    shadow.appendChild(linkElem);
  }

}
