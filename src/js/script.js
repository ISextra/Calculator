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
    OPERATION_TYPE_NUMBER: "number",
    OPERATION_TYPE_EQUAL: "equal",
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
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
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
    constructor({root}) {
        this.root = root;

        this.render();
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
                    });
                }
            }
        });

    this.root.append(...this.buttons);
    }
}

class Operations extends Calculator {
    constructor({root}) {
        super({root});

        this.firstArg = null;
        this.secondArg = null;
        this.currentOperation = null;
        this.result = null;
        this.secondArgDeleteFlag = true;

        this.historyElement = this.buttons.filter(item => {
            return Object.values(item.classList).includes(ELEMENTS_PROPERTY.DISPLAY_CLASS2);
        });

        this.resultElement = this.buttons.filter(item => {
            return Object.values(item.classList).includes(ELEMENTS_PROPERTY.DISPLAY_CLASS3);
        });

        this.bindFunctions();
        this.logic();
    }

    bindFunctions() {
        this.onClickNumber = this.onClickNumber.bind(this);
        this.onClickBasicOperation= this.onClickBasicOperation.bind(this);
        this.cleanAll = this.cleanAll.bind(this);
        this.cleanLine = this.cleanLine.bind(this);
        this.cleanLastSymbol = this.cleanLastSymbol.bind(this);
        this.percent = this.percent.bind(this);
        this.reverse = this.reverse.bind(this);
        this.square = this.square.bind(this);
        this.squareRoot = this.squareRoot.bind(this);
        this.negate = this.negate.bind(this);
        this.equal = this.equal.bind(this);
    }

    consoleInfo(text) {
        console.log(`${text}`, ' firstNumber:', this.firstArg, '; operation:', this.currentOperation, '; secondNumber:', this.secondArg, '; result:', this.result);
    }

    setOperation(content) {
        this.currentOperation = content;
    }

    setSecondArgDeleteFlag(flag) {
        this.secondArgDeleteFlag = flag;
    }

    setHistoryData() {
        throw new Error("setHistoryData logic not added here, you probably search History.setHistoryData");
    }

    getHistoryFirstArg() {
        throw new Error("getHistoryFirstArg logic not added here, you probably search History.getHistoryFirstArg");
    }

    setHistoryFirstArg(operation) {
        throw new Error("setHistoryFirstArg logic not added here, you probably search History.setHistoryFirstArg");
    }

    getHistorySecondArg() {
        throw new Error("getHistorySecondArg logic not added here, you probably search History.getHistorySecondArg");
    }

    setHistorySecondArg(operation) {
        throw new Error("setHistorySecondArg logic not added here, you probably search History.setHistorySecondArg");
    }

    setPoint() {
        if (!this.secondArgDeleteFlag) {
            this.secondArg = `${BUTTONS_CONTENT.ZERO}.`;

            this.setSecondArgDeleteFlag(1);

            return;
        }

        if (this.secondArg?.includes(".")) {//если точка уже есть в числе
            return;
        }

        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.secondArg = BUTTONS_CONTENT.ZERO;
        }

        this.secondArg = `${this.secondArg}.`;
    }

    setNumber(content) {
        if (this.secondArg?.length > DEFAULT_VALUES.MAX_LINE_LENGTH) {//если длинна больше допустимой
            return;
        }

        if (!this.secondArgDeleteFlag) {
            this.secondArg = `${content}`;

            this.setSecondArgDeleteFlag(1);

            return;
        }

        if ((this.secondArg === BUTTONS_CONTENT.ZERO) ||
            (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER)) {//если изначально стоит 0, начальное значение или "-"
            this.secondArg = `${content}`;

            return;
        }

        this.secondArg = `${this.secondArg}${content}`;
    }

    onClickNumber(event) {
        const content = event.target.dataset.text;

        if (content === BUTTONS_CONTENT.POINT) {
            this.setPoint();
            this.consoleInfo(`setNumber`);

            return;
        }

        this.setNumber(content);
        this.consoleInfo(`setNumber`);
    }

    onClickBasicOperation(event) {
        const content = event.target.dataset.text;

        this.firstArg = this.secondArg;

        this.setSecondArgDeleteFlag(0);
        this.setOperation(content);
        this.consoleInfo(`setOperation`);
    }

    cleanAll() {
        //this.setResult(BUTTONS_CONTENT.ZERO);
        //this.setHistory("");

        this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
        this.firstArg = DEFAULT_VALUES.DEFAULT_FIRST_NUMBER;
        this.result = DEFAULT_VALUES.DEFAULT_RESULT;

        this.setOperation(DEFAULT_VALUES.DEFAULT_OPERATION);
        this.consoleInfo("cleanAll");
    }

    cleanLine() {
        //this.setResult(BUTTONS_CONTENT.ZERO);

        this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;

        this.consoleInfo("cleanLine");
    }

    cleanLastSymbol() {
        if (!this.secondArgDeleteFlag) {
            this.consoleInfo("cleanLastSymbol");

            return;
        }

        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.consoleInfo("cleanLastSymbol");

            return;
        }

        this.secondArg = this.secondArg?.slice(0, this.secondArg?.length - 1);

        if (this.secondArg === "" || this.secondArg === "-") {
            this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
        }

        this.consoleInfo("cleanLastSymbol");
    }

    percent() {
        if (!this.firstArg) {
            this.secondArg = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;

            this.setSecondArgDeleteFlag(0);
            this.consoleInfo("percent");

            return;
        }

        if (this.currentOperation === BUTTONS_CONTENT.ADDITION || this.currentOperation === BUTTONS_CONTENT.SUBTRACTION) {
            this.secondArg = `${this.firstArg / 100 * this.secondArg}`;

            this.setSecondArgDeleteFlag(0);
            this.consoleInfo("percent");

            return;
        }

        if (this.currentOperation === BUTTONS_CONTENT.MULTIPLICATION || this.currentOperation === BUTTONS_CONTENT.DIVISION) {
            this.secondArg = `${this.firstArg / 100}`;

            this.setSecondArgDeleteFlag(0);
            this.consoleInfo("percent");

            return;
        }
    }

    reverse() {
        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.consoleInfo("reverse");//нельзя делить на ноль (пустое значение)

            console.log("Cannot divide by zero");

            return;
        }

        this.secondArg = `${1 / Number(this.secondArg)}`;

        this.setSecondArgDeleteFlag(0);
        this.consoleInfo("reverse");
    }

    square() {
        this.secondArg = `${Math.pow(Number(this.secondArg), 2)}`;

        this.setSecondArgDeleteFlag(0);
        this.consoleInfo("square");
    }

    squareRoot() {
        this.secondArg = `${Math.sqrt(Number(this.secondArg))}`;

        this.setSecondArgDeleteFlag(0);
        this.consoleInfo("squareRoot");
    }

    negate() {
        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER && this.firstArg === DEFAULT_VALUES.DEFAULT_FIRST_NUMBER) {
            this.consoleInfo("negate");

            return;
        }

        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.secondArg = `${Number(this.secondArg) * -1}`;
            this.consoleInfo("negate");

            return;
        }

        this.secondArg = `${Number(this.secondArg) * -1}`;
        this.consoleInfo("negate");
    }

    equal() {
        if (this.firstArg === DEFAULT_VALUES.DEFAULT_FIRST_NUMBER) {
            this.result = `${Number(this.secondArg)}`;
            this.consoleInfo("equal");
            this.setSecondArgDeleteFlag(0);
            this.setHistoryData();
            this.cleanAll()

            return;
        }

        if (this.secondArg === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.secondArg = this.firstArg;
        }

        switch (this.currentOperation) {
            case BUTTONS_CONTENT.ADDITION: {
                this.addition();

                break;
            }
            case BUTTONS_CONTENT.SUBTRACTION: {
                this.subtraction();

                break;
            }
            case BUTTONS_CONTENT.MULTIPLICATION: {
                this.multiplication();

                break;
            }
            case  BUTTONS_CONTENT.DIVISION: {
                this.division();

                break;
            }
        }

        this.consoleInfo("equal");
        this.setSecondArgDeleteFlag(0);
        this.setHistoryData();
        this.cleanAll()
    }

    addition() {
        this.result = `${Number(this.firstArg) + Number(this.secondArg)}`;
    }

    subtraction() {
        this.result = `${Number(this.firstArg) - Number(this.secondArg)}`
    }

    multiplication() {
        this.result = `${Number(this.firstArg) * Number(this.secondArg)}`
    }

    division() {
        this.result = `${Number(this.firstArg) / Number(this.secondArg)}`
    }

    logic() {
        this.buttons.forEach(item => {
            switch (item.dataset.text) {
                case BUTTONS_CONTENT.PERCENT: {
                    item.onclick = this.percent;

                    break;
                }
                case BUTTONS_CONTENT.CLEAN_LINE: {
                    item.onclick = this.cleanLine;

                    break;
                }
                case BUTTONS_CONTENT.CLEAN_ALL: {
                    item.onclick = this.cleanAll;

                    break;
                }
                case BUTTONS_CONTENT.CLEAN_SYMBOL: {
                    item.onclick = this.cleanLastSymbol;

                    break;
                }
                case BUTTONS_CONTENT.REVERSE: {
                    item.onclick = this.reverse;

                    break;
                }
                case BUTTONS_CONTENT.SQUARE: {
                    item.onclick = this.square;

                    break;
                }
                case BUTTONS_CONTENT.SQUARE_ROOT: {
                    item.onclick = this.squareRoot;

                    break;
                }
                case BUTTONS_CONTENT.NEGATE: {
                    item.onclick = this.negate;

                    break;
                }
                case BUTTONS_CONTENT.EQUAL: {
                    item.onclick = this.equal;

                    break;
                }
                default: {
                    if (item.dataset.type === ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER) {
                        item.onclick = this.onClickNumber;

                        break;
                    }

                    if (item.dataset.type === ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION) {
                        item.onclick = this.onClickBasicOperation;

                        break;
                    }
                }
            }
        })
    }
}

//обект с значениями операций
// значения - описания
// на основании операции заполнять дисплей
// class operationLogger(history)

//если при % было изменено число, второй аргумент стирается из истории
//если оба аргумента введены, можно несколько раз нижимать знак равно

class OperationsLogger{
    constructor(historyFirstArg, operation, historySecondArg, result) {

        this.displayValues = {
            historyFirstArg: historyFirstArg,
            historyOperation: operation,
            historySecondArg: historySecondArg,
            result: result,
        }
    }
}

class History extends Operations {
    constructor({root}) {
        super({root});

        this.historyFirstArg = null;
        this.historySecondArg = null;

        this.historyList = [];
    }

    getHistoryElement(operation, arg) {
        switch (operation) {
            case BUTTONS_CONTENT.SQUARE: {
                return `sqr(${arg})`;
            }
            case BUTTONS_CONTENT.SQUARE_ROOT: {
                return `\u221A(${arg})`;
            }
            case BUTTONS_CONTENT.REVERSE: {
                return `1/(${arg})`;
            }
            case BUTTONS_CONTENT.NEGATE: {
                return `negate/(${arg})`;
            }
        }
    }

    setHistoryData() {
        this.historyList.push(new OperationsLogger(this.firstArg, this.currentOperation, this.secondArg, this.result))
        console.log(this.historyList);
    }

    getHistoryFirstArg() {
        return this.historyFirstArg;
    }

    setHistoryFirstArg(operation) {
        this.historyFirstArg = this.getHistoryElement(operation, this.firstArg);
    }

    getHistorySecondArg() {
        return this.historySecondArg;
    }

    setHistorySecondArg(operation) {
        this.historySecondArg = this.getHistoryElement(operation, this.secondArg);
    }


}

const af = new History({
    root: document.querySelector(ELEMENTS_PROPERTY.ROOT_FOR_MAIN),
});