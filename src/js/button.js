import DomRendererElement from "./dom-render-element.js";

export default class Button extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.buttonsData = {
            tagName: null,
            classNames: [],
            textContent: null,
            datasetText: null,
            datasetType: null,
            onClick: null,
            switchOfButtonsClickAbility: null
        }
    }

    setButtonsData(params) {
        this.buttonsData.tagName = params.tagName;
        this.buttonsData.classNames = params.classNames;
        this.buttonsData.textContent = params.textContent;
        this.buttonsData.datasetText = params.datasetText;
        this.buttonsData.datasetType = params.datasetType;
        this.buttonsData.onClick = params.onClick;
        this.buttonsData.switchOfButtonsClickAbility = params.switchOfButtonsClickAbility;
    }

    getButtonData() {
        return this.buttonsData;
    }
}