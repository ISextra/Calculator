import {BUTTONS_CONTENT} from "./global_elements.js";

export default class History {
    constructor() {
        this.historyHTMLElement = null;
        this.historyList = [];

        this.historyElement = {
            firstArg: null,
            currentOperation: null,
            secondArg: null,
            result: null
        }

        this.copyOfHistoryElement = Object.assign({}, this.historyElement);
    }

    setHistoryElement(element) {
        this.historyHTMLElement = element;
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
    }

    setResultToDisplay() {
        this.refreshCopyWithoutNulls();

        this.historyHTMLElement.innerHTML = `${this.copyOfHistoryElement.firstArg} ${this.copyOfHistoryElement.secondArg} ${this.copyOfHistoryElement.currentOperation}`
    }
}