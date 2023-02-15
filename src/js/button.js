import DomRendererElement from "./domRenderElement.js";

export default class Button extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.state = {
            tagName: null,
            classNames: [],
            textContent: null,
            datasetText: null,
            datasetType: null,
            onClick: null,
            switchOfButtonsClickAbility: null
        }

        this.buttonsArray = [];
    }

    updateState(params) {
        this.state = {
            ...this.state,
            ...params,
        }
    }

    getState() {
        return this.state;
    }
}