import Operations from "./operations.js";
import Button from "./button.js";
import Display from "./display.js";
import History from "./history.js";
import DragAndDrop from "./dragAndDrop.js";
import LocalStorage from "./localStorage.js";
import Widget from "./widget.js";
import {ELEMENTS, HISTORY_ELEMENTS, ELEMENTS_PROPERTY, DEFAULT_VALUES} from "./constants.js";

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
        this.localStorage = new LocalStorage();
        this.dragAndDrop = new DragAndDrop(this.root, this.localStorage);
        this.widget = new Widget(this.root, this.buttons);
        this.elements = null;
        this.buttons = [];

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

        this.setCalculatorPosition();
        this.render();
    }

    render() {
        this.elements = ELEMENTS.map(item => {
            switch (item.OPERATION_TYPE) {
                case ELEMENTS_PROPERTY.DISPLAY_TYPE: {
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.DISPLAY_CLASS],
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.DISPLAY_TYPE),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    const renderedElement = this.display.render(params);

                    this.display.setDisplayElement(renderedElement);
                    this.buttons.push(this.display);

                    return renderedElement;

                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.setButtonsData(params);
                    this.buttons.push(button);

                    return button.render(button.getButtonData());
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_POINT: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_POINT, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.setButtonsData(params);
                    this.buttons.push(button);

                    return button.render(button.getButtonData());
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.setButtonsData(params);
                    this.buttons.push(button);

                    return button.render(button.getButtonData());
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.setButtonsData(params);
                    this.buttons.push(button);

                    return button.render(button.getButtonData());
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.setButtonsData(params);
                    this.buttons.push(button);

                    return button.render(button.getButtonData());
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.setButtonsData(params);
                    this.buttons.push(button);

                    return button.render(button.getButtonData());
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
                    const  params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.DISPLAY_CLASS],
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.DISPLAY_TYPE_HISTORY_RESULT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    const renderedElement = this.history.render(params);

                    this.history.setHistoryElement(renderedElement);
                    this.buttons.push(this.history);

                    return renderedElement;
                }
                case ELEMENTS_PROPERTY.DISPLAY_TYPE_MOVE_BUTTON: {
                    const button = new Button();
                    const params = {
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        onClick: this.operations.setOperationsLogic(ELEMENTS_PROPERTY.DISPLAY_TYPE_MOVE_BUTTON, item.CONTENT),
                        switchOfButtonsClickAbility: this.switchOfButtonsClickAbility
                    }

                    button.setButtonsData(params);
                    this.buttons.push(button);

                    const renderedElement = button.render(button.getButtonData());
                    this.history.setMoveButtons(params, renderedElement);

                    return renderedElement;
                }
            }
        });

        this.rootForHistoryElements.append(...this.historyElements);
        this.elements.push(...this.historyElements);
    }

    setCalculatorPosition() {
        let position = {
            positionX: DEFAULT_VALUES.DEFAULT_POSITION_X,
            positionY: DEFAULT_VALUES.DEFAULT_POSITION_Y,
        }
        const positionFromLocalStorage = this.localStorage.getPosition()

        if (positionFromLocalStorage.positionX !== null) {
            position.positionX = positionFromLocalStorage.positionX;
        }
        if (positionFromLocalStorage.positionY !== null) {
            position.positionY = positionFromLocalStorage.positionY;
        }

        this.root.style.left = position.positionX + "px";
        this.root.style.top = position.positionY + "px";
    }
}