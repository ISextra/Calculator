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
        this.isShownConsoleInfo = showConsoleInfo;
        this.switchOfButtonsClickAbility = switchOfButtonsClickAbility;

        this.firstArg = null;
        this.secondArg = null;
        this.currentOperation = null;
        this.result = null;
        this.isEqualPressed = false;
        this.isOperationPressed = false;
        this.isComplexOperationPressed = false;
        this.isNeededCleanResult = false;
        this.isShownConsoleInfo = false;

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

    showConsoleInfo(flag) {
        this.isShownConsoleInfo = flag;
    }

    consoleInfo(text) {
        if (!this.isShownConsoleInfo) {
            return;
        }

        console.log(`${text}`, ' firstNumber:', this.firstArg, '; operation:', this.currentOperation, '; secondNumber:', this.secondArg, '; result:', this.result);
        console.log(`Oper: ${this.isOperationPressed} ComplexOper: ${this.isComplexOperationPressed} Equal: ${this.isEqualPressed}`)
    }

    setOperation(content) {
        this.currentOperation = content;
    }

    setIsOperationPressed(flag) {
        this.isOperationPressed = flag;
    }

    getIsOperationPressed() {
        return this.isOperationPressed;
    }

    setIsComplexOperationPressed(flag) {
        this.isComplexOperationPressed = flag;
    }

    getIsComplexOperationPressed() {
        return this.isComplexOperationPressed;
    }

    setIsNeededCleanResult(flag) {
        this.isNeededCleanResult = flag;
    }

    getIsNeededCleanResult() {
        return this.isNeededCleanResult;
    }

    setIsEqualPressed(flag) {
        this.isEqualPressed = flag;
    }

    getIsEqualPressed() {
        return this.isEqualPressed;
    }

    processingDivideByZero() {
        if (Number(this.secondArg) === 0 || this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.onClickCleanAll();
            this.display.setResultToDisplay("Cant divide by zero");

            return true;
        }

        return false;
    }

    onClickPoint() {
        if (this.getIsComplexOperationPressed()) {//Если была нажата комп. операция, то стираем из истории предидущее действие из истории
            this.history.cleanLine();
            this.history.cleanCurrentOperation();
            this.history.setResultToDisplay();
        }

        if (this.getIsNeededCleanResult()) {//если была нажата операция, стираем строку с дисплея
            this.history.setHistoryData({
                currentOperation: this.currentOperation,
                secondArg:this.secondArg});
            this.history.additionFirstArg();
            this.secondArg = BUTTONS_CONTENT.ZERO;
            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}.`);
            this.setIsNeededCleanResult(false);
            this.setIsOperationPressed(false);
            this.setIsComplexOperationPressed(false);
            this.setIsEqualPressed(false);
            this.consoleInfo(`setPoint`);

            return;
        }

        if (this.secondArg?.includes(".")) {//если точка уже есть в числе
            this.consoleInfo(`setPoint`);

            return;
        }

        if ((this.secondArg === BUTTONS_CONTENT.ZERO) ||
            (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER)) {//если изначально стоит 0, начальное значение или "-"
            this.secondArg = `${BUTTONS_CONTENT.ZERO}.`;

            this.display.setResultToDisplay(`${this.secondArg}`);
            this.consoleInfo(`setNumber`);

            return;
        }
    }

    onClickNumber(event) {
        const content = event.target.dataset.text;

        if (this.getIsComplexOperationPressed()) {
            this.history.cleanLine();
            this.history.cleanCurrentOperation();
            this.history.setResultToDisplay();
        }

        if (this.getIsNeededCleanResult()) {//если была нажата операция, стираем строку с дисплея
            this.history.setHistoryData({
                currentOperation: this.currentOperation,
                secondArg:this.secondArg});
            this.history.additionFirstArg();

            this.secondArg = BUTTONS_CONTENT.ZERO;
            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
            this.setIsNeededCleanResult(false);
            this.setIsOperationPressed(false);
            this.setIsComplexOperationPressed(false);
            this.setIsEqualPressed(false);
            this.consoleInfo(`setNumber`);
        }

        if (this.secondArg?.length > DEFAULT_VALUES.MAX_LINE_LENGTH) {//если длинна больше допустимой
            return;
        }

        if ((this.secondArg === BUTTONS_CONTENT.ZERO) ||
            (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER)) {//если изначально стоит 0, начальное значение или "-"
            this.secondArg = `${content}`;

            this.display.setResultToDisplay(`${this.secondArg}`);
            this.consoleInfo(`setNumber`);

            return;
        }

        this.secondArg = `${this.secondArg}${content}`;
        this.display.setResultToDisplay(`${this.secondArg}`);
        this.setIsOperationPressed(false);
        this.setIsComplexOperationPressed(false);
        this.setIsEqualPressed(false);
        this.consoleInfo(`setNumber`);
    }

    onClickBasicOperation(event) {//---
        const content = event.target.dataset.text;

        if (this.firstArg === null && this.secondArg === null) {//все значения не были заданы
            this.secondArg = `${0}`;
        }

        if (!this.getIsOperationPressed() && this.firstArg !== DEFAULT_VALUES.DEFAULT_FIRST_NUMBER) {//последовательный подсчет (без нажатия на =)
            if (this.processingDivideByZero()) {
                return;
            }

            if (this.result !== null){
                this.firstArg = this.result;
            }

            if (this.getIsEqualPressed()) {
                this.secondArg = this.result
            }

            this.execBasicOperation(this.result);
            this.display.setResultToDisplay(`${this.result}`);
            this.consoleInfo(`equal`);
            this.setOperation(content);

            if (this.getIsComplexOperationPressed()) {
                this.history.setHistoryData({
                    currentOperation: this.currentOperation})
            } else {
                this.history.setHistoryData({
                    currentOperation: this.currentOperation,
                    secondArg:this.secondArg});
            }

            this.history.setResultToDisplay()
            this.setIsOperationPressed(true);
            this.setIsComplexOperationPressed(false);
            this.setIsNeededCleanResult(true);
            this.setIsEqualPressed(false);

            return;
        }

        if (this.result === DEFAULT_VALUES.DEFAULT_RESULT) {
            this.firstArg = this.secondArg;
        } else {
            this.firstArg = this.result;
        }

        if (this.getIsEqualPressed()) {
            this.secondArg = this.result
        }

        this.setOperation(content);

        if (this.getIsComplexOperationPressed()) {
            this.history.setHistoryData({
                currentOperation: this.currentOperation})
        } else {
            this.history.setHistoryData({
                currentOperation: this.currentOperation,
                secondArg:this.secondArg});
        }

        this.history.setResultToDisplay()
        this.setIsOperationPressed(true);
        this.setIsComplexOperationPressed(false);
        this.setIsNeededCleanResult(true);
        this.setIsEqualPressed(false);
        this.consoleInfo(`setOperation`);
    }

    onClickCleanAll() {
        this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
        this.firstArg = DEFAULT_VALUES.DEFAULT_FIRST_NUMBER;
        this.result = DEFAULT_VALUES.DEFAULT_RESULT;

        this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
        this.setOperation(DEFAULT_VALUES.DEFAULT_OPERATION);
        this.history.cleanAll();
        this.history.setResultToDisplay();
        this.setIsOperationPressed(false);
        this.setIsComplexOperationPressed(false);
        this.setIsEqualPressed(false);
        this.consoleInfo("cleanAll");
    }

    onClickCleanLine() {
        if (this.getIsOperationPressed() || this.getIsComplexOperationPressed()) {
            this.secondArg = BUTTONS_CONTENT.ZERO;

            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
            this.history.setResultToDisplay();
            this.consoleInfo("cleanLine");

            return;
        }

        this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;

        this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
        this.history.cleanLine();
        this.history.setResultToDisplay();
        this.consoleInfo("cleanLine");
    }

    onClickCleanLastSymbol() {
        if (this.getIsOperationPressed() || this.getIsComplexOperationPressed() || this.getIsEqualPressed()) {
            this.consoleInfo("cleanLastSymbol");

            return;
        }

        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {//если нет значения
            this.consoleInfo("cleanLastSymbol");

            return;
        }

        this.secondArg = this.secondArg?.slice(0, this.secondArg?.length - 1);

        this.display.setResultToDisplay(`${this.secondArg}`);

        if (this.secondArg === "" || this.secondArg === "-") {//если после стирания остался '-' или ничего
            this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
            this.display.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
        }

        this.consoleInfo("cleanLastSymbol");
    }

    onClickPercent() {
        if (!this.firstArg) {//для вычисления необходимы все переменные
            this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
            this.result = BUTTONS_CONTENT.ZERO;

            this.display.setResultToDisplay(`${this.result}`);
            this.setIsComplexOperationPressed(true);
            this.consoleInfo("percent");

            return;
        }

        if (this.getIsComplexOperationPressed()) {
            this.history.cleanLine();
            this.history.cleanCurrentOperation();
        }

        this.secondArg = `${this.firstArg / 100 * this.secondArg}`;

        this.history.setHistoryData({
            currentOperation: null,
            secondArg:this.secondArg});
        this.history.setResultToDisplay();
        this.display.setResultToDisplay(`${this.secondArg}`);
        this.setIsComplexOperationPressed(true);
        this.setIsNeededCleanResult(true);
        this.consoleInfo("percent");
    }

    onClickReverse() {
        if (this.processingDivideByZero()) {
            return;
        }

        if (this.getIsOperationPressed()) {
            this.history.additionFirstArg();
        }

        if (!this.getIsComplexOperationPressed()) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.setHistoryData({
                secondArg:this.secondArg});
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.REVERSE);
        this.history.setResultOfComplexOperationToDisplay();

        this.secondArg = `${1 / Number(this.secondArg)}`;

        this.display.setResultToDisplay(this.secondArg);
        this.setIsComplexOperationPressed(true);
        this.setIsOperationPressed(false);
        this.setIsNeededCleanResult(true);
        this.consoleInfo("reverse");
    }

    onClickSquare() {
        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.secondArg = BUTTONS_CONTENT.ZERO;
        }

        if (this.getIsOperationPressed()) {
            this.history.additionFirstArg();
        }

        if (!this.getIsComplexOperationPressed()) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.setHistoryData({
                secondArg:this.secondArg});
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.SQUARE);
        this.history.setResultOfComplexOperationToDisplay();

        this.secondArg = `${Math.pow(Number(this.secondArg), 2)}`;

        this.display.setResultToDisplay(this.secondArg);
        this.setIsComplexOperationPressed(true);
        this.setIsOperationPressed(false);
        this.setIsNeededCleanResult(true);
        this.consoleInfo("square");
    }

    onClickSquareRoot() {
        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.secondArg = BUTTONS_CONTENT.ZERO;
        }

        if (this.getIsOperationPressed()) {
            this.history.additionFirstArg();
        }

        if (!this.getIsComplexOperationPressed()) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.setHistoryData({
                secondArg:this.secondArg});
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.SQUARE_ROOT);
        this.history.setResultOfComplexOperationToDisplay();

        this.secondArg = `${Math.sqrt(Number(this.secondArg))}`;

        this.display.setResultToDisplay(this.secondArg);
        this.setIsComplexOperationPressed(true);
        this.setIsOperationPressed(false);
        this.setIsNeededCleanResult(true);
        this.consoleInfo("squareRoot");
    }

    onClickNegate() {
        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.secondArg = BUTTONS_CONTENT.ZERO;
        }

        if (this.getIsOperationPressed()) {
            this.history.additionFirstArg();
        }

        if (!this.getIsComplexOperationPressed()) {//начальная передача числа при последовательном нажатии на компл. операции
            this.history.setHistoryData({
                secondArg:this.secondArg});
        }

        this.history.changeToHistoryElement(BUTTONS_CONTENT.NEGATE);
        this.history.setResultOfComplexOperationToDisplay();

        this.secondArg = `${Number(this.secondArg) * -1}`;

        this.display.setResultToDisplay(this.secondArg);
        this.setIsComplexOperationPressed(true);
        this.setIsOperationPressed(false);
        this.setIsNeededCleanResult(true);
        this.consoleInfo("negate");
    }

    onClickEqual() {
        if (this.firstArg === DEFAULT_VALUES.DEFAULT_FIRST_NUMBER) {
            this.result = `${Number(this.secondArg)}`;

            this.display.setResultToDisplay(this.result);
            this.history.setHistoryData({result: this.result})
            this.history.pushInHistoryList();
            this.history.cleanAll();
            this.history.setHistoryData({
                secondArg:this.result});
            this.setIsEqualPressed(true);
            this.setIsOperationPressed(true);
            this.consoleInfo("equal");

            return;
        }

        if (this.getIsEqualPressed()) {
            this.firstArg = this.result;
        }

        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {//если не было введенного значения после выбора знака
            this.secondArg = this.firstArg;
        }

        this.execBasicOperation(this.result);
        this.history.setHistoryData({result: this.result})
        this.history.pushInHistoryList();
        this.history.cleanAll();
        this.history.setResultToDisplay();
        this.history.setHistoryData({
            secondArg:this.result});
        this.setIsEqualPressed(true);
        this.setIsOperationPressed(true);
        this.setIsNeededCleanResult(true);
        this.consoleInfo("equal");
    }

    onClickMoveHistoryLeft() {
        this.historyElement.scrollLeft -= 35;
        this.consoleInfo("moveHistory");
    }

    onClickMoveHistoryRight() {
        this.historyElement.scrollLeft += 35;
        this.consoleInfo("moveHistory");
    }

    execBasicOperation(param) {
        if (!param) {
            param = this.firstArg;
        }

        switch (this.currentOperation) {
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
        this.result = `${Number(param) + Number(this.secondArg)}`;
        this.display.setResultToDisplay(this.result);
    }

    subtraction(param) {
        this.result = `${Number(param) - Number(this.secondArg)}`;
        this.display.setResultToDisplay(this.result);
    }

    multiplication(param) {
        this.result = `${Number(param) * Number(this.secondArg)}`;
        this.display.setResultToDisplay(this.result);
    }

    division(param) {
        if (this.processingDivideByZero()) {
            return;
        }

        this.result = `${Number(param) / Number(this.secondArg)}`
        this.display.setResultToDisplay(this.result);
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