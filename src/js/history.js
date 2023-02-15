import {BUTTONS_CONTENT} from "./constants.js";
import Display from "./display.js";

export default class History extends Display{
    constructor(params) {
        super(params);

        this.state = {
            firstArg: null,
            currentOperation: null,
            secondArg: null,
            result: null,
        }

        this.leftMoveButton = null
        this.rightMoveButton = null
        this.historyHTMLElement = null
        this.historyList =  [];
        this.copyOfHistoryElement = Object.assign({}, this.state);
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

    cleanAll() {
        this.updateState({
            firstArg: null,
            currentOperation: null,
            secondArg: null,
            result: null,
        });
        this.hideLeftMoveButton();
        this.hideRightMoveButton();
    }

    updateState(data) {
        this.state = {
            ...this.state,
            ...data,
        }
    }

    changeToHistoryElement(operation) {
        switch (operation) {
            case BUTTONS_CONTENT.SQUARE: {
                this.state.secondArg = `sqr(${this.state.secondArg})`;

                break;
            }
            case BUTTONS_CONTENT.SQUARE_ROOT: {
                this.state.secondArg = `sqrt(${this.state.secondArg})`;

                break;
            }
            case BUTTONS_CONTENT.REVERSE: {
                this.state.secondArg = `reciproc(${this.state.secondArg})`;

                break;
            }
            case BUTTONS_CONTENT.NEGATE: {
                this.state.secondArg = `negate(${this.state.secondArg})`;

                break;
            }
        }
    }

    additionFirstArg() {
        if (this.state.firstArg === null) {
            this.state.firstArg = `${this.copyOfHistoryElement.secondArg} ${this.copyOfHistoryElement.currentOperation} `;
        } else {
            this.state.firstArg = `${this.copyOfHistoryElement.firstArg} ${this.copyOfHistoryElement.secondArg} ${this.copyOfHistoryElement.currentOperation}`;
        }

    }

    refreshCopyWithoutNulls() {
        //копирование обьекта с изменением значений у всех ключей с null на ""
        this.copyOfHistoryElement = Object.assign({}, this.state);

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