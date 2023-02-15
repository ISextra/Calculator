import {BUTTONS_CONTENT, DEFAULT_VALUES, ELEMENTS_PROPERTY} from "./constants.js";

export default class Operations {
    constructor(operationsData) {
        if (operationsData) {}

        const {
            display,
            history,
            showConsoleInfo,
            switchOfButtonsClickAbility,
        } = operationsData;

        this.display = display;
        this.history = history;
        this.switchOfButtonsClickAbility = switchOfButtonsClickAbility;
        
        this.state = {
            firstArg: null,
            secondArg: null,
            currentOperation: null,
            result: null,
            isEqualPressed: false,
            isOperationPressed: false,
            isComplexOperationPressed: false,
            isNeededCleanResult: false,
            isShownConsoleInfo: false,
        }

        this.state.isShownConsoleInfo = showConsoleInfo;

        this.bindFunctions();

        if (showConsoleInfo) {
            this.showConsoleInfo(showConsoleInfo);
        }
    }
    
    bindFunctions() {
        this.onClickNumber = this.onClickNumber.bind(this);
        this.onClickPoint = this.onClickPoint.bind(this);
        this.onClickNegate = this.onClickNegate.bind(this);
        this.onClickBasicOperation = this.onClickBasicOperation.bind(this);
        this.onClickCleanAll = this.onClickCleanAll.bind(this);
        this.onClickCleanLine = this.onClickCleanLine.bind(this);
        this.onClickCleanLastSymbol = this.onClickCleanLastSymbol.bind(this);
        this.onClickPercent = this.onClickPercent.bind(this);
        this.onClickReverse = this.onClickReverse.bind(this);
        this.onClickSquare = this.onClickSquare.bind(this);
        this.onClickSquareRoot = this.onClickSquareRoot.bind(this);
        this.onClickEqual= this.onClickEqual.bind(this);
        this.onClickMoveHistoryLeft= this.onClickMoveHistoryLeft.bind(this);
        this.onClickMoveHistoryRight= this.onClickMoveHistoryRight.bind(this);
    }

    updateState(data) {
        this.state = {
            ...this.state,
            ...data,
        }//!!
    }

    getStateDate(dataKey) {
        //return this.state.dataKey
    }
    
    showConsoleInfo(flag) {
        this.state.isShownConsoleInfo = flag;
    }

    consoleInfo(text) {
        if (!this.state.isShownConsoleInfo) {
            return;
        }

        console.log(`${text}`, ' firstNumber:', this.state.firstArg, '; operation:', this.state.currentOperation, '; secondNumber:', this.state.secondArg, '; result:', this.state.result);
        console.log(`Oper: ${this.state.isOperationPressed} ComplexOper: ${this.state.isComplexOperationPressed} Equal: ${this.state.isEqualPressed}`)
    }

    processingDivideByZero() {
        if (Number(this.state.secondArg) === 0 || this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.onClickCleanAll();
            this.display.setResultToDisplay("Cant divide by zero");

            return true;
        }

        return false;
    }

    onClickPoint() {
        if (this.state.isComplexOperationPressed) {//Если была нажата комп. операция, то стираем из истории предидущее действие из истории
            this.history.updateState({
                secondArg: null,
            });
            this.history.updateState({
                currentOperation: null,
            });
            this.history.setResultToDisplay();
        }

        if (this.state.isNeededCleanResult) {//если была нажата операция, стираем строку с дисплея
            this.history.updateState({
                currentOperation: this.state.currentOperation,
                secondArg: this.state.secondArg
            });
            this.history.additionFirstArg();
            this.updateState({
                secondArg: BUTTONS_CONTENT.ZERO,
                isNeededCleanResult: false,
                isOperationPressed: false,
                isComplexOperationPressed: false,
                isEqualPressed: false,
            });
            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}.`);
            this.consoleInfo(`setPoint`);

            return;
        }

        if (this.state.secondArg?.includes(".")) {//если точка уже есть в числе
            this.consoleInfo(`setPoint`);

            return;
        }

        if ((this.state.secondArg === BUTTONS_CONTENT.ZERO) ||
            (this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER)) {//если изначально стоит 0, начальное значение или "-"
            this.updateState({
                secondArg: `${BUTTONS_CONTENT.ZERO}.`,
            });
            this.display.setResultToDisplay(`${this.state.secondArg}`);
            this.consoleInfo(`setNumber`);

            return;
        }
    }

    onClickNumber(event) {
        const content = event.target.dataset.text;

        if (this.state.isComplexOperationPressed) {
            this.history.updateState({
                secondArg: null,
            });
            this.history.updateState({
                currentOperation: null,
            });
            this.history.setResultToDisplay();
        }

        if (this.state.isNeededCleanResult) {//если была нажата операция, стираем строку с дисплея
            this.history.updateState({
                currentOperation: this.state.currentOperation,
                    secondArg: this.state.secondArg,
                });
            this.history.additionFirstArg();
            this.updateState({
                secondArg: BUTTONS_CONTENT.ZERO,
                isNeededCleanResult: false,
                isOperationPressed: false,
                isComplexOperationPressed: false,
                isEqualPressed: false,
            });
            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
            this.consoleInfo(`setNumber`);
        }

        if (this.state.secondArg?.length > DEFAULT_VALUES.MAX_LINE_LENGTH) {//если длинна больше допустимой
            return;
        }

        if ((this.state.secondArg === BUTTONS_CONTENT.ZERO) ||
            (this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER)) {//если изначально стоит 0, начальное значение или "-"
            this.updateState({
                secondArg: `${content}`,
            });
            this.display.setResultToDisplay(`${this.state.secondArg}`);
            this.consoleInfo(`setNumber`);

            return;
        }

        this.updateState({
            secondArg: `${this.state.secondArg}${content}`,
            isOperationPressed: false,
            isComplexOperationPressed: false,
            isEqualPressed: false,
        });
        this.display.setResultToDisplay(`${this.state.secondArg}`);
        this.consoleInfo(`setNumber`);
    }

    onClickBasicOperation(event) {
        const content = event.target.dataset.text;

        if (this.state.firstArg === null && this.state.secondArg === null) {//все значения не были заданы
            this.updateState({
                secondArg: `${DEFAULT_VALUES.ZERO}`,
            });
        }

        if (!this.state.isOperationPressed && this.state.firstArg !== DEFAULT_VALUES.DEFAULT_FIRST_NUMBER) {//последовательный подсчет (без нажатия на =)
            if (this.processingDivideByZero()) {
                return;
            }

            if (this.state.result !== null){
                this.updateState({
                    firstArg: this.state.result,
                })

            }

            if (this.state.isEqualPressed) {
                this.updateState({
                    secondArg: this.state.result,
                });
            }

            this.execBasicOperation(this.state.result);
            this.display.setResultToDisplay(`${this.state.result}`);
            this.consoleInfo(`equal`);
            this.updateState({
                currentOperation: content,
            });

            if (this.state.isComplexOperationPressed) {
                this.history.updateState({
                    currentOperation: this.state.currentOperation
                })
            } else {
                this.history.updateState({
                    currentOperation: this.state.currentOperation,
                    secondArg: this.state.secondArg
                });
            }

            this.history.setResultToDisplay()
            this.updateState({
                isOperationPressed: true,
                isComplexOperationPressed: false,
                isNeededCleanResult: true,
                isEqualPressed: false,
            });

            return;
        }
        
        if (this.state.result === DEFAULT_VALUES.DEFAULT_RESULT) {
            this.updateState({
                firstArg: this.state.secondArg,
            });
        } else {
            this.updateState({
                firstArg: this.state.result,
            });
        }

        if (this.state.isEqualPressed) {
            this.updateState({
                secondArg: this.state.result,
            });
        }

        this.updateState({
            currentOperation: content,
        });

        if (this.state.isComplexOperationPressed) {
            this.history.updateState({
                currentOperation: this.state.currentOperation
            });
        } else {
            this.history.updateState({
                currentOperation: this.state.currentOperation,
                secondArg:this.state.secondArg
            });
        }

        this.history.setResultToDisplay();
        this.updateState({
            isOperationPressed: true,
            isComplexOperationPressed: false,
            isNeededCleanResult: true,
            isEqualPressed: false,
        });
        this.consoleInfo(`setOperation`);
    }

    onClickCleanAll() {
        this.updateState({
            firstArg: DEFAULT_VALUES.DEFAULT_SECOND_NUMBER,
            secondArg: DEFAULT_VALUES.DEFAULT_FIRST_NUMBER,
            result: DEFAULT_VALUES.DEFAULT_RESULT,
            currentOperation: DEFAULT_VALUES.DEFAULT_OPERATION,
            isOperationPressed: false,
            isComplexOperationPressed: false,
            isEqualPressed: false,
        });
        this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
        this.history.cleanAll();
        this.history.setResultToDisplay();
        this.consoleInfo("cleanAll");
    }

    onClickCleanLine() {
        if (this.state.isOperationPressed || this.state.isComplexOperationPressed) {
            this.updateState({
                secondArg: BUTTONS_CONTENT.ZERO,
            })

            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
            this.history.setResultToDisplay();
            this.consoleInfo("cleanLine");

            return;
        }

        this.updateState({
            secondArg: DEFAULT_VALUES.DEFAULT_SECOND_NUMBER,
        })

        this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
        this.history.updateState({
            secondArg: null,
        });
        this.history.setResultToDisplay();
        this.consoleInfo("cleanLine");
    }

    onClickCleanLastSymbol() {
        if (this.state.isOperationPressed || this.state.isComplexOperationPressed || this.state.isEqualPressed) {
            this.consoleInfo("cleanLastSymbol");

            return;
        }

        if (this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {//если нет значения
            this.consoleInfo("cleanLastSymbol");

            return;
        }

        this.updateState({
            secondArg: this.state.secondArg?.slice(0, this.state.secondArg?.length - 1),
        })
        this.display.setResultToDisplay(`${this.state.secondArg}`);

        if (this.state.secondArg === "" || this.state.secondArg === "-") {//если после стирания остался '-' или ничего
            this.updateState({
                secondArg: DEFAULT_VALUES.DEFAULT_SECOND_NUMBER,
            })
            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
        }

        this.consoleInfo("cleanLastSymbol");
    }

    onClickPercent() {
        if (!this.state.firstArg) {//для вычисления необходимы все переменные
            this.updateState({
                secondArg: DEFAULT_VALUES.DEFAULT_SECOND_NUMBER,
                result: BUTTONS_CONTENT.ZERO,
                isComplexOperationPressed: true,
            });
            this.display.setResultToDisplay(`${this.state.result}`);
            this.consoleInfo("percent");

            return;
        }

        if (this.state.isComplexOperationPressed) {
            this.history.updateState({
            secondArg: null,
        });
            this.history.updateState({
                currentOperation: null,
            });
        }
        this.updateState({
            secondArg: `${this.state.firstArg / 100 * this.state.secondArg}`,
            result: BUTTONS_CONTENT.ZERO,
            isComplexOperationPressed: true,
            isNeededCleanResult: true,
        });
        this.history.updateState({
            currentOperation: null,
            secondArg: this.state.secondArg
        });
        this.history.setResultToDisplay();
        this.display.setResultToDisplay(`${this.state.secondArg}`);
        this.consoleInfo("percent");
    }

    onClickReverse() {
        if (this.processingDivideByZero()) {
            return;
        }

        if (this.state.isOperationPressed) {
            this.history.additionFirstArg();
        }

        if (!this.state.isComplexOperationPressed) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.updateState({
                secondArg: this.state.secondArg
            });
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.REVERSE);
        this.history.setResultOfComplexOperationToDisplay();
        this.updateState({
            secondArg: `${1 / Number(this.state.secondArg)}`,
            isOperationPressed: false,
            isComplexOperationPressed: true,
            isNeededCleanResult: true,
        });
        this.display.setResultToDisplay(this.state.secondArg);
        this.consoleInfo("reverse");
    }

    onClickSquare() {
        if (this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.updateState({
                secondArg: BUTTONS_CONTENT.ZERO,
            });
        }

        if (this.state.isOperationPressed) {
            this.history.additionFirstArg();
        }

        if (!this.state.isComplexOperationPressed) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.updateState({
                secondArg: this.state.secondArg
            });
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.SQUARE);
        this.history.setResultOfComplexOperationToDisplay();
        this.updateState({
            secondArg: `${Math.pow(Number(this.state.secondArg), 2)}`,
            isOperationPressed: false,
            isComplexOperationPressed: true,
            isNeededCleanResult: true,
        });
        this.display.setResultToDisplay(this.state.secondArg);
        this.consoleInfo("square");
    }

    onClickSquareRoot() {
        if (this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.updateState({
                secondArg: BUTTONS_CONTENT.ZERO,
            });
        }

        if (this.state.isOperationPressed) {
            this.history.additionFirstArg();
        }

        if (!this.state.isComplexOperationPressed) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.updateState({
                secondArg: this.state.secondArg
            });
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.SQUARE_ROOT);
        this.history.setResultOfComplexOperationToDisplay();
        this.updateState({
            secondArg: `${Math.sqrt(Number(this.state.secondArg))}`,
            isOperationPressed: false,
            isComplexOperationPressed: true,
            isNeededCleanResult: true,
        });
        this.display.setResultToDisplay(this.state.secondArg);
        this.consoleInfo("squareRoot");
    }

    onClickNegate() {
        if (this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.updateState({
                secondArg: BUTTONS_CONTENT.ZERO,
            });
        }

        if (this.state.isOperationPressed) {
            this.history.additionFirstArg();
        }

        if (!this.state.isComplexOperationPressed) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.updateState({
                secondArg: this.state.secondArg,
            });
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.NEGATE);
        this.history.setResultOfComplexOperationToDisplay();
        this.updateState({
            secondArg: `${Number(this.state.secondArg) * -1}`,
            isOperationPressed: false,
            isComplexOperationPressed: true,
            isNeededCleanResult: true,
        });
        this.display.setResultToDisplay(this.state.secondArg);
        this.consoleInfo("negate");
    }

    onClickEqual() {
        if (this.state.firstArg === DEFAULT_VALUES.DEFAULT_FIRST_NUMBER) {
            this.updateState({
                result: `${Number(this.state.secondArg)}`,
                isOperationPressed: true,
                isEqualPressed: true,
            });
            this.display.setResultToDisplay(this.state.result);
            this.history.updateState({result: this.state.result})
            this.history.pushInHistoryList();
            this.history.cleanAll();
            this.history.updateState({
                secondArg:this.state.result,
            });
            this.consoleInfo("equal");

            return;
        }

        if (this.state.isEqualPressed) {
            this.updateState({
                firstArg: this.state.result,
            });
        }

        if (this.state.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {//если не было введенного значения после выбора знака
            this.updateState({
                secondArg: this.state.firstArg,
            });
        }

        this.execBasicOperation(this.state.result);
        this.history.updateState({result: this.state.result})
        this.history.pushInHistoryList();
        this.history.cleanAll();
        this.history.setResultToDisplay();
        this.history.updateState({
            secondArg:this.state.result,
        });
        this.updateState({
            isOperationPressed: true,
            isNeededCleanResult: true,
            isEqualPressed: true,
        });
        this.consoleInfo("equal");
    }

    onClickMoveHistoryLeft() {
        const scrollLeftBefore = this.history.historyHTMLElement.scrollLeft;
        this.history.historyHTMLElement.scrollLeft -= DEFAULT_VALUES.HISTORY_SCROLL_LENGTH;
        const scrollLeftAfter = this.history.historyHTMLElement.scrollLeft;

        this.history.showRightMoveButton();

        if (scrollLeftBefore === scrollLeftAfter) {
            this.history.hideLeftMoveButton();
        } else {
            this.history.showLeftMoveButton();
        }

        this.consoleInfo("moveHistory");
    }

    onClickMoveHistoryRight() {
        const scrollLeftBefore = this.history.historyHTMLElement.scrollLeft;
        this.history.historyHTMLElement.scrollLeft += DEFAULT_VALUES.HISTORY_SCROLL_LENGTH;
        const scrollLeftAfter = this.history.historyHTMLElement.scrollLeft;

        this.history.showLeftMoveButton();

        if (scrollLeftBefore === scrollLeftAfter) {
            this.history.hideRightMoveButton();
        } else {
            this.history.showRightMoveButton();
        }

        this.consoleInfo("moveHistory");
    }

    execBasicOperation(param) {
        if (!param) {
            param = this.state.firstArg;
        }

        switch (this.state.currentOperation) {
            case BUTTONS_CONTENT.ADDITION: {
                this.addition(param);

                break;
            }
            case BUTTONS_CONTENT.SUBTRACTION: {
                this.subtraction(param);

                break;
            }
            case BUTTONS_CONTENT.MULTIPLICATION: {
                this.multiplication(param);

                break;
            }
            case  BUTTONS_CONTENT.DIVISION: {
                this.division(param);
                break;
            }
        }
    }

    addition(param) {
        this.updateState({
            result: `${Number(param) + Number(this.state.secondArg)}`,
        });
        this.display.setResultToDisplay(this.state.result);
    }

    subtraction(param) {
        this.updateState({
            result: `${Number(param) - Number(this.state.secondArg)}`,
        });
        this.display.setResultToDisplay(this.state.result);
    }

    multiplication(param) {
        this.updateState({
            result: `${Number(param) * Number(this.state.secondArg)}`,
        });
        this.display.setResultToDisplay(this.state.result);
    }

    division(param) {
        if (this.processingDivideByZero()) {
            return;
        }

        this.updateState({
            result: `${Number(param) / Number(this.state.secondArg)}`,
        });
        this.display.setResultToDisplay(this.state.result);
    }

    numberOperations(text) {
        switch (text) {
            case BUTTONS_CONTENT.ONE: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.TWO: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.THREE: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.FOUR: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.FIVE: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.SIX: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.SEVEN: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.EIGHT: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.NINE: {
                return this.onClickNumber;
            }
            case BUTTONS_CONTENT.ZERO: {
                return this.onClickNumber;
            }
        }
    }

    pointOperation(text) {
        switch (text) {
            case BUTTONS_CONTENT.POINT: {
                return this.onClickPoint;
            }
        }
    }

    cleanupOperations(text) {
        switch (text) {
            case BUTTONS_CONTENT.CLEAN_LINE: {
                return this.onClickCleanLine;
            }
            case BUTTONS_CONTENT.CLEAN_ALL: {
                return this.onClickCleanAll;
            }
            case BUTTONS_CONTENT.CLEAN_SYMBOL: {
                return this.onClickCleanLastSymbol;
            }
        }
    }

    complexOperations(text) {
        switch (text) {
            case BUTTONS_CONTENT.PERCENT: {
                return this.onClickPercent;
            }
            case BUTTONS_CONTENT.SQUARE: {
                return this.onClickSquare;
            }
            case BUTTONS_CONTENT.SQUARE_ROOT: {
                return this.onClickSquareRoot;
            }
            case BUTTONS_CONTENT.REVERSE: {
                return this.onClickReverse;
            }
            case BUTTONS_CONTENT.NEGATE: {
                return this.onClickNegate;
            }
        }
    }

    basicOperations(text) {
        switch (text) {
            case BUTTONS_CONTENT.ADDITION: {
                return this.onClickBasicOperation;
            }
            case BUTTONS_CONTENT.SUBTRACTION: {
                return this.onClickBasicOperation;
            }
            case BUTTONS_CONTENT.MULTIPLICATION: {
                return this.onClickBasicOperation;
            }
            case BUTTONS_CONTENT.DIVISION: {
                return this.onClickBasicOperation;
            }
        }
    }

    equalOperation(text) {
        switch (text) {
            case BUTTONS_CONTENT.EQUAL: {
                return this.onClickEqual;
            }
        }
    }

    moveOperation(text) {
        switch (text) {
            case BUTTONS_CONTENT.MOVE_LEFT: {
                return this.onClickMoveHistoryLeft;

            }
            case BUTTONS_CONTENT.MOVE_RIGHT: {
                return this.onClickMoveHistoryRight;
            }
        }
    }

    setOperationsLogic(type, text) {
        if (this.switchOfButtonsClickAbility) {
            return;
        }

        switch (type) {
            case ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER: {
                return this.numberOperations(text);
            }
            case ELEMENTS_PROPERTY.OPERATION_TYPE_POINT: {
                return this.pointOperation(text);
            }
            case ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION: {
                return this.cleanupOperations(text);
            }
            case ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION: {
                return this.complexOperations(text);
            }
            case ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION: {
                return this.basicOperations(text);
            }
            case ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL: {
                return this.equalOperation(text);
            }
            case ELEMENTS_PROPERTY.DISPLAY_TYPE_MOVE_BUTTON: {
                return this.moveOperation(text);

            }
            case ELEMENTS_PROPERTY.DISPLAY_TYPE: {
                break;
            }
            case ELEMENTS_PROPERTY.DISPLAY_TYPE_HISTORY_RESULT: {
                break;
            }
            default: {
                console.warn(`Element ${type} has no initialized logic \n\tat setOperationsLogic() \n\tat operation.js`);
            }
        }
    }
    }