import { MyButton } from './myButton.js'
import {FlexCard} from "./flexCard.js";

window.addEventListener('load', () => {
  customElements.define('my-button', MyButton)
  customElements.define('flex-card', FlexCard)
})
