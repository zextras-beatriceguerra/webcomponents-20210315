export class MyButton extends HTMLElement {
  constructor () {
    super()

    const template = document.createElement('template')

    template.innerHTML = `
      <style>
        :host button {
          color: white;
          background: black;
        }
      </style>
      <!-- host start -->
      <button>
      </button>
      <!-- host end -->
    `

    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  }

  static get observedAttributes() {
    return ['label']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'label': {
        this.shadowRoot.querySelector('button').innerHTML = newValue
        break
      }
    }

  }

  connectedCallback() {
    console.log('mounted')
  }

  disconnectedCallback() {
    console.log('unmounted')
  }
}
