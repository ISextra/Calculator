import DomRendererElement from "./domRenderElement.js";
import {DEFAULT_VALUES} from "./constants.js"

export default class Display extends DomRendererElement {
    constructor(params) {
        super(params);

        this.displayValue = null;
        this.displayHTMLElement = null;
    }

    setResultToDisplay(result) {
        this.displayValue = result;
        this.displayHTMLElement.innerHTML = this.displayValue;

        if (this.displayValue?.length > DEFAULT_VALUES.LENGTH_FOR_SWITCH_FONT_SIZE_MEDIUM) {//если длинна больше допустимой
            this.displayHTMLElement.style.fontSize = DEFAULT_VALUES.FONT_SIZE_MEDIUM;

            return
        }

        this.displayHTMLElement.style.fontSize = DEFAULT_VALUES.FONT_SIZE_LARGE;
    }

    setDisplayElement(element) {
        this.displayHTMLElement = element;
        this.displayHTMLElement.innerHTML = DEFAULT_VALUES.ZERO;
    }

    get displayElement() {
        return this.displayHTMLElement;
    }
}