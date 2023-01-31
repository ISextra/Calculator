import Operations from "./operations.js";
import {ButtonNumber, ButtonCleanup, ButtonComplexOperation, ButtonBasicOperation, ButtonEqual} from "./button_childs.js"
import {Display} from "./dom-render-elemen_childs.js";
import {ELEMENTS, ELEMENTS_PROPERTY} from "./global_elements.js";

export default class Calculator {
    constructor(rootData) {
        const {
            root,
            history,
            showConsoleInfo,
            switchOfButtonsClickability,
        } = rootData

        this.root = root;
        this.switchOfButtonsClickability = false;
        this.showConsoleInfo = false;

        if (typeof switchOfButtonsClickability !== undefined) {
            this.switchOfButtonsClickability = switchOfButtonsClickability;
        }

        if (typeof showConsoleInfo !== undefined) {
            this.showConsoleInfo =  showConsoleInfo;
        }

        this.render();

        if (!this.switchOfButtonsClickability) {
            this.operations = new Operations({
                    buttons: this.buttons,
                    history: history,
                    showConsoleInfo: this.showConsoleInfo,
                },
            );
        }
    }
    render() {
        this.buttons = ELEMENTS.map(item => {
            switch (item.OPERATION_TYPE) {
                case ELEMENTS_PROPERTY.DISPLAY_TYPE: {
                    const display = new Display();

                    return display.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.DISPLAY_CLASS],
                        datasetType: item.OPERATION_TYPE,
                        switchOfButtonsClickability: this.switchOfButtonsClickability
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER: {
                    const button = new ButtonNumber();

                    return button.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        switchOfButtonsClickability: this.switchOfButtonsClickability
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_POINT: {
                    const button = new ButtonNumber();

                    return button.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        switchOfButtonsClickability: this.switchOfButtonsClickability
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION: {
                    const button = new ButtonBasicOperation();

                    return button.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        switchOfButtonsClickability: this.switchOfButtonsClickability
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION: {
                    const button = new ButtonComplexOperation();

                    return button.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        switchOfButtonsClickability: this.switchOfButtonsClickability
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION: {
                    const button = new ButtonCleanup();

                    return button.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        switchOfButtonsClickability: this.switchOfButtonsClickability
                    });
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL: {
                    const button = new ButtonEqual();

                    return button.render({
                        tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                        classNames: [item.BUTTON_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                        textContent: item.CONTENT,
                        datasetText: item.CONTENT,
                        datasetType: item.OPERATION_TYPE,
                        switchOfButtonsClickability: this.switchOfButtonsClickability
                    });
                }
            }
        });

        this.root.append(...this.buttons);
    }
}