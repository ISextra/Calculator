import {BUTTONS_CONTENT} from "./constants.js";
import Display from "./display.js";

export default class History extends Display{
    constructor(params) {
        super(params);

        this.leftMoveButton = null;
        this.rightMoveButton = null;
        this.historyHTMLElement = null;
        this.historyList = [];

        this.historyElement = {
            firstArg: null,
            currentOperation: null,
            secondArg: null,
            result: null
        }

        this.copyOfHistoryElement = Object.assign({}, this.historyElement);
        this.moveButtons = [];
    }

    setHistoryElement(element) {
        this.historyHTMLElement = element;
    }

    setMoveButtons(buttonData, renderedElement) {
        if (buttonData.datasetText === BUTTONS_CONTENT.MOVE_RIGHT) {
            this.rightMoveButton = renderedElement;

            return
        }

        this.leftMoveButton = renderedElement;
    }

    showLeftMoveButton() {
        this.leftMoveButton.style.visibility = "visible";
    }

    hideLeftMoveButton() {
        this.leftMoveButton.style.visibility = "hidden";
    }

    showRightMoveButton() {
        this.rightMoveButton.style.visibility = "visible";
    }

    hideRightMoveButton() {
        this.rightMoveButton.style.visibility = "hidden";
    }

    moveToHistoryEnd() {
        this.historyHTMLElement.scrollLeft = 1e9;
    }

    pushInHistoryList () {
        this.historyList.push(this.copyOfHistoryElement);
    }

    showHistoryList() {
        console.log(this.historyList);
    }

    cleanHistoryList() {
        this.historyList = [];
    }

    cleanCurrentOperation() {
        this.historyElement.currentOperation = null;
    }

    cleanLine() {
        this.historyElement.secondArg = null;
    }

    cleanAll() {
        this.historyElement.firstArg = null;
        this.historyElement.currentOperation = null;
        this.historyElement.secondArg = null;
        this.historyElement.result = null;
        this.hideLeftMoveButton();
        this.hideRightMoveButton();
    }

    setHistoryData(element) {
        const {
            firstArg,
            currentOperation,
            secondArg,
            result
        } = element;

        if (currentOperation !== undefined) {
            this.historyElement.currentOperation = currentOperation;
        }
        if (secondArg !== undefined) {
            this.historyElement.secondArg = secondArg;
        }
        if (firstArg !== undefined) {
            this.historyElement.firstArg = firstArg;
        }
        if (result !== undefined) {
            this.historyElement.result = result;
        }
    }

    changeToHistoryElement(operation) {
        switch (operation) {
            case BUTTONS_CONTENT.SQUARE: {
                this.historyElement.secondArg = `sqr(${this.historyElement.secondArg})`;

                break;
            }
            case BUTTONS_CONTENT.SQUARE_ROOT: {
                this.historyElement.secondArg = `sqrt(${this.historyElement.secondArg})`;

                break;
            }
            case BUTTONS_CONTENT.REVERSE: {
                this.historyElement.secondArg = `reciproc(${this.historyElement.secondArg})`;

                break;
            }
            case BUTTONS_CONTENT.NEGATE: {
                this.historyElement.secondArg = `negate(${this.historyElement.secondArg})`;

                break;
            }
        }
    }

    additionFirstArg() {
        if (this.historyElement.firstArg === null) {
            this.historyElement.firstArg = `${this.copyOfHistoryElement.secondArg} ${this.copyOfHistoryElement.currentOperation} `;
        } else {
            this.historyElement.firstArg = `${this.copyOfHistoryElement.firstArg} ${this.copyOfHistoryElement.secondArg} ${this.copyOfHistoryElement.currentOperation}`;
        }

    }

    refreshCopyWithoutNulls() {
        this.copyOfHistoryElement = Object.assign({}, this.historyElement);

        Object.keys(this.copyOfHistoryElement).forEach(function(key) {
            if (this[key] === null) {
                this[key] = "";
            } else {
                while (this[key].includes(" null ")) {
                    this[key] = this[key].replace(" null ", "");
                }
            }
        }, this.copyOfHistoryElement);
    }

    setResultOfComplexOperationToDisplay() {
        this.refreshCopyWithoutNulls();

        this.historyHTMLElement.innerHTML = `${this.copyOfHistoryElement.firstArg} ${this.copyOfHistoryElement.secondArg}`

        if (this.historyHTMLElement.scrollWidth > this.historyHTMLElement.clientWidth) {
            this.moveToHistoryEnd();
            this.showLeftMoveButton();

            return
        }

        this.hideLeftMoveButton();
        this.hideRightMoveButton();
    }

    setResultToDisplay() {
        this.refreshCopyWithoutNulls();

        this.historyHTMLElement.innerHTML = `${this.copyOfHistoryElement.firstArg} ${this.copyOfHistoryElement.secondArg} ${this.copyOfHistoryElement.currentOperation}`

        if (this.historyHTMLElement.scrollWidth > this.historyHTMLElement.clientWidth) {
            this.moveToHistoryEnd();
            this.showLeftMoveButton();

            return
        }

        this.hideLeftMoveButton();
        this.hideRightMoveButton();
    }
}