import DomRendererElement from "./dom-render-element.js";
import {DEFAULT_VALUES, BUTTONS_CONTENT} from "./constants.js"

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
        this.displayHTMLElement.innerHTML = BUTTONS_CONTENT.ZERO;
    }

    get displayElement() {
        return this.displayHTMLElement;
    }

    set displayResult(value) {
        this.displayValue = value;
    }

    get displayResult() {
        return this.displayValue;
    }
}