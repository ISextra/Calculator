import DomRendererElement from "./dom-render-element.js";

class Display extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class Button extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

export {Display, Button}