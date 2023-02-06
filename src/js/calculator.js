import Operations from "./operations.js";
import DomRendererElement from "./dom-render-element.js"
import Display from "./display.js";
import History from "./history.js";
import {ELEMENTS, HISTORY_ELEMENTS, ELEMENTS_PROPERTY} from "./constants.js";

export default class Calculator {
    constructor(rootData) {
        const {
            root,
            showConsoleInfo,
            switchOfButtonsClickAbility,
        } = rootData

        this.root = root;
        this.switchOfButtonsClickAbility = false;
        this.showConsoleInfo = false;
        this.display = new Display();
        this.history = new History();

        if (typeof switchOfButtonsClickAbility !== undefined) {
            this.switchOfButtonsClickAbility = switchOfButtonsClickAbility;
        }

        if (typeof showConsoleInfo !== undefined) {
            this.showConsoleInfo =  showConsoleInfo;
        }

        this.operations = new Operations({
                display: this.display,
                history: this.history,
                showConsoleInfo: this.showConsoleInfo,
                switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
            },
        )

        this.render();
    }
    render() {
        this.elements = ELEMENTS.map(item => {
            switch (item.OPERATION_TYPE) {
                case ELEMENTS_PROPERTY.DISPLAY_TYPE: {
                    //накидывать в this.buttons экземпляры display и button

                    const renderedElement = this.display.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.DISPLAY_CLASS],
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.DISPLAY_TYPE),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });

                    this.display.setDisplayElement(renderedElement);

                    return renderedElement;

                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER: {
                    const domRenderElement = new DomRendererElement();

                    return domRenderElement.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_POINT: {
                    const domRenderElement = new DomRendererElement();

                    return domRenderElement.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_POINT, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION: {
                    const domRenderElement = new DomRendererElement();

                    return domRenderElement.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION: {
                    const domRenderElement = new DomRendererElement();

                    return domRenderElement.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION: {
                    const domRenderElement = new DomRendererElement();

                    return domRenderElement.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL: {
                    const domRenderElement = new DomRendererElement();

                    return domRenderElement.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });
                }
                default: {
                    return;
                }
            }
        });

        this.root.append(...this.elements);
        this.rootForHistoryElements = document.querySelector(ELEMENTS_PROPERTY.ROOT_FOR_HISTORY_ELEMENTS);

        this.historyElements = HISTORY_ELEMENTS.map(item => {
            switch (item.OPERATION_TYPE) {
                case ELEMENTS_PROPERTY.DISPLAY_TYPE_HISTORY_RESULT: {
                    const domRenderElement = new DomRendererElement();

                    const renderedElement = domRenderElement.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.DISPLAY_CLASS],
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.DISPLAY_TYPE_HISTORY_RESULT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });

                    this.history.setHistoryElement(renderedElement);

                    return renderedElement;
                }
                case ELEMENTS_PROPERTY.DISPLAY_TYPE_MOVE_BUTTON: {
                    const renderedElement = this.history.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.DISPLAY_TYPE_MOVE_BUTTON, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    });

                    this.history.setMoveButtons(renderedElement);

                    return renderedElement;
                }
            }
        });

        this.rootForHistoryElements.append(...this.historyElements);
        this.elements.push(...this.historyElements);
    }
}