import DomRendererElement from "./dom-render-element.js";
import {DEFAULT_VALUES} from "./constants.js"
export default class Display extends DomRendererElement {
    constructor(params) {
        super(params);

        this.displayValue = null;
        this.displayElement = null;
    }

    setResultToDisplay(result) {
        this.displayValue = result;
        this.displayElement.innerHTML = this.displayValue;

        if (this.displayValue?.length > DEFAULT_VALUES.LENGTH_FOR_SWITCH_FONT_SIZE_MEDIUM) {//если длинна больше допустимой
            this.displayElement.style.fontSize = DEFAULT_VALUES.FONT_SIZE_MEDIUM;

            return
        }

        this.displayElement.style.fontSize = DEFAULT_VALUES.FONT_SIZE_LARGE;
    }

    set resultElement(element) {
        this.displayElement = element;
    }

    get resultElement() {
        return this.displayElement;
    }

    set displayResult(value) {
        this.displayValue = value;
    }

    get displayResult() {
        return this.displayValue;
    }
}