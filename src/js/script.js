const DEFAULT_VALUES = {
    DEFAULT_SECOND_NUMBER: null,
    DEFAULT_FIRST_NUMBER: null,
    DEFAULT_OPERATION: null,
    DEFAULT_RESULT: null,
    MAX_LINE_LENGTH: 16,
    LENGTH_FOR_SWITCH_FONT_SIZE_MEDIUM: 10,
}
const ELEMENTS_PROPERTY = {
    TAG_NAME_FOR_BUTTONS: "button",
    TAG_NAME_FOR_DISPLAY: "div",
    ROOT_FOR_BUTTONS: ".button",
    ROOT_FOR_MAIN: ".calculator",
    ROOT_FOR_DISPlAY: ".display",
    DISPLAY_CLASS: "display",
    DISPLAY_CLASS1: "button",
    DISPLAY_CLASS2: "display__history",
    DISPLAY_CLASS3: "display__result",
    DISPLAY_TYPE: "displayElement",
    BUTTON_CLASS_GENERAL: "button__element",
    BUTTON_CLASS_OPERATION:"button__element_operation",
    BUTTON_CLASS_NUMBER: "button__element_number",
    BUTTON_CLASS_EQUAL: "button__element_equal",
    OPERATION_TYPE_COMPLEX_OPERATION: "complexOperation",
    OPERATION_TYPE_CLEANUP_OPERATION: "cleanupOperation",
    OPERATION_TYPE_BASIC_OPERATION: "basicOperation",
    OPERATION_TYPE_POINT: "pointOperation",
    OPERATION_TYPE_NUMBER: "number",
    OPERATION_TYPE_EQUAL: "equal",
    OPERATION_TYPE_OTHER: "other"
}
const BUTTONS_CONTENT = {
    PERCENT: "%",
    CLEAN_LINE: "CE",
    CLEAN_ALL: "C",
    CLEAN_SYMBOL: "<",
    REVERSE: "1/x",
    SQUARE: "x²",
    SQUARE_ROOT: "\u221Ax",
    DIVISION: "\xF7",
    SEVEN: "7",
    EIGHT: "8",
    NINE: "9",
    MULTIPLICATION: "\xD7",
    FOUR: "4",
    FIVE: "5",
    SIX: "6",
    SUBTRACTION: "-",
    ONE: "1",
    TWO: "2",
    THREE: "3",
    ADDITION: "+",
    NEGATE: "±",
    ZERO: "0",
    POINT: ".",
    EQUAL: "=",
}
const ELEMENTS = [
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS2,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
    },
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS3,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
    },
    {
        CONTENT: BUTTONS_CONTENT.PERCENT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_LINE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_ALL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_SYMBOL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.REVERSE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE_ROOT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.DIVISION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.SEVEN,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.EIGHT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.NINE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.MULTIPLICATION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.FOUR,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.FIVE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.SIX,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.SUBTRACTION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.ONE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.TWO,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.THREE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.ADDITION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.NEGATE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.ZERO,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
    },
    {
        CONTENT: BUTTONS_CONTENT.POINT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_POINT,
    },
    {
        CONTENT: BUTTONS_CONTENT.EQUAL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_EQUAL,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL,
    },
]

class DomRendererElement {
    constructor(calculatorHTMLClass) {
        this.calculatorHTMLClass = calculatorHTMLClass;

        this.setDefaultCalculatorHTMLClass();
    }

    setDefaultCalculatorHTMLClass() {
        if (!this.calculatorHTMLClass) {
            this.calculatorHTMLClass = ELEMENTS_PROPERTY.ROOT_FOR_MAIN;
        }
    }

    render(params) {
        const {
            tagName,
            classNames = [],
            textContent,
            datasetText,
            datasetType,
            switchOfButtonsClickability
        } = params;

        const element = document.createElement(tagName);

        if (classNames) {
            classNames.forEach(item => {
                element.classList.add(`${item}`);
            });
        }
        if (textContent) {
            element.textContent = textContent;
        }
        if (datasetText) {
            element.dataset.text = datasetText;
        }
        if (datasetType) {
            element.dataset.type = datasetType;
        }
        if (switchOfButtonsClickability) {
            element.style.color = "gray";
            element.style.cursor = "inherit";
        }

        return element;
    }
}

class Display extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class Button extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class ButtonNumber extends Button{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class ButtonCleanup extends Button{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class ButtonComplexOperation extends Button{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class ButtonBasicOperation extends Button{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class ButtonEqual extends Button{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }
}

class Calculator {
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

class History {
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

class Operations {
    constructor(operationsData) {
        const {
            buttons,
            history,
            showConsoleInfo,
        } = operationsData

        this.buttons = buttons;
        this.history = history;
        this.isShownConsoleInfo = showConsoleInfo;

        const [historyElement] = this.buttons.filter(item => {
            return Object.values(item.classList).includes(ELEMENTS_PROPERTY.DISPLAY_CLASS2);
        });

        this.history.setHistoryElement(historyElement);

        const [resultElement] = this.buttons.filter(item => {
            return Object.values(item.classList).includes(ELEMENTS_PROPERTY.DISPLAY_CLASS3);
        });

        this.resultHTMLElement = resultElement;
        this.resultHTMLElement.innerHTML = "0";
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
        this.setOperationsLogic();

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

    setResultToDisplay(content) {
        this.resultHTMLElement.innerHTML = content;

        if (content?.length > DEFAULT_VALUES.LENGTH_FOR_SWITCH_FONT_SIZE_MEDIUM) {//если длинна больше допустимой
            this.resultHTMLElement.style.fontSize = "26px";

            return
        }

        this.resultHTMLElement.style.fontSize = "42px";
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
            this.setResultToDisplay("Cant divide by zero");

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
            this.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}.`);
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

            this.setResultToDisplay(`${this.secondArg}`);
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
            this.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
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

            this.setResultToDisplay(`${this.secondArg}`);
            this.consoleInfo(`setNumber`);

            return;
        }

        this.secondArg = `${this.secondArg}${content}`;
        this.setResultToDisplay(`${this.secondArg}`);
        this.setIsOperationPressed(false);
        this.setIsComplexOperationPressed(false);
        this.setIsEqualPressed(false);
        this.consoleInfo(`setNumber`);
    }

    onClickBasicOperation(event) {
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
            this.setResultToDisplay(`${this.result}`);
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

        this.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
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

            this.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
            this.history.setResultToDisplay();
            this.consoleInfo("cleanLine");

            return;
        }

        this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;

        this.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
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

        this.setResultToDisplay(`${this.secondArg}`);

        if (this.secondArg === "" || this.secondArg === "-") {//если после стирания остался '-' или ничего
            this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
            this.setResultToDisplay(`${BUTTONS_CONTENT.ZERO}`);
        }

        this.consoleInfo("cleanLastSymbol");
    }

    onClickPercent() {
        if (!this.firstArg) {//для вычисления необходимы все переменные
            this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
            this.result = BUTTONS_CONTENT.ZERO;

            this.setResultToDisplay(`${this.result}`);
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
        this.setResultToDisplay(`${this.secondArg}`);
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

        this.setResultToDisplay(this.secondArg);
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

        this.setResultToDisplay(this.secondArg);
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

        this.setResultToDisplay(this.secondArg);
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

        this.setResultToDisplay(this.secondArg);
        this.setIsComplexOperationPressed(true);
        this.setIsOperationPressed(false);
        this.setIsNeededCleanResult(true);
        this.consoleInfo("negate");
    }

    onClickEqual() {
        if (this.firstArg === DEFAULT_VALUES.DEFAULT_FIRST_NUMBER) {
            this.result = `${Number(this.secondArg)}`;

            this.setResultToDisplay(this.result);
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
        this.setResultToDisplay(this.result);
    }

    subtraction(param) {
        this.result = `${Number(param) - Number(this.secondArg)}`;
        this.setResultToDisplay(this.result);
    }

    multiplication(param) {
        this.result = `${Number(param) * Number(this.secondArg)}`;
        this.setResultToDisplay(this.result);
    }

    division(param) {
        if (this.processingDivideByZero()) {
            return;
        }

        this.result = `${Number(param) / Number(this.secondArg)}`
        this.setResultToDisplay(this.result);
    }

    numberOperations(item) {
        switch (item.dataset.text) {
            case BUTTONS_CONTENT.ONE: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.TWO: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.THREE: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.FOUR: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.FIVE: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.SIX: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.SEVEN: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.EIGHT: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.NINE: {
                item.onclick = this.onClickNumber;

                break;
            }
            case BUTTONS_CONTENT.ZERO: {
                item.onclick = this.onClickNumber;

                break;
            }
        }
    }

    pointOperation(item) {
        switch (item.dataset.text) {
            case BUTTONS_CONTENT.POINT: {
                item.onclick = this.onClickPoint;

                break;
            }
        }
    }

    cleanupOperations(item) {
        switch (item.dataset.text) {
            case BUTTONS_CONTENT.CLEAN_LINE: {
                item.onclick = this.onClickCleanLine;

                break;
            }
            case BUTTONS_CONTENT.CLEAN_ALL: {
                item.onclick = this.onClickCleanAll;

                break;
            }
            case BUTTONS_CONTENT.CLEAN_SYMBOL: {
                item.onclick = this.onClickCleanLastSymbol;

                break;
            }
        }
    }

    complexOperations(item) {
        switch (item.dataset.text) {
            case BUTTONS_CONTENT.PERCENT: {
                item.onclick = this.onClickPercent;

                break;
            }
            case BUTTONS_CONTENT.SQUARE: {
                item.onclick = this.onClickSquare;

                break;
            }
            case BUTTONS_CONTENT.SQUARE_ROOT: {
                item.onclick = this.onClickSquareRoot;

                break;
            }
            case BUTTONS_CONTENT.REVERSE: {
                item.onclick = this.onClickReverse;

                break;
            }
            case BUTTONS_CONTENT.NEGATE: {
                item.onclick = this.onClickNegate;

                break;
            }
        }
    }

    basicOperations(item) {
        switch (item.dataset.text) {
            case BUTTONS_CONTENT.ADDITION: {
                item.onclick = this.onClickBasicOperation;

                break;
            }
            case BUTTONS_CONTENT.SUBTRACTION: {
                item.onclick = this.onClickBasicOperation;

                break;
            }
            case BUTTONS_CONTENT.MULTIPLICATION: {
                item.onclick = this.onClickBasicOperation;

                break;
            }
            case BUTTONS_CONTENT.DIVISION: {
                item.onclick = this.onClickBasicOperation;

                break;
            }
        }
    }

    equalOperation(item) {
        switch (item.dataset.text) {
            case BUTTONS_CONTENT.EQUAL: {
                item.onclick = this.onClickEqual;

                break;
            }
        }
    }

    setOperationsLogic() {
        this.buttons.forEach(item => {
            switch (item.dataset.type) {
                case ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER: {
                    this.numberOperations(item);

                    break;
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_POINT: {
                    this.pointOperation(item);

                    break;
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION: {
                    this.cleanupOperations(item);

                    break;
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION: {
                    this.complexOperations(item);

                    break;
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION: {
                    this.basicOperations(item);

                    break;
                }
                case ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL: {
                    this.equalOperation(item);

                    break;
                }
                case ELEMENTS_PROPERTY.DISPLAY_TYPE: {
                    break;
                }
                default: {
                    console.warn(`Element ${item.dataset.type} has no initialized setOperationsLogic`);
                }
            }
        })
    }
}

const calculator = new Calculator({
    root: document.querySelector(ELEMENTS_PROPERTY.ROOT_FOR_MAIN),
    history: new History(),
    showConsoleInfo: false,
    switchOfButtonsClickability: true,
    },
);