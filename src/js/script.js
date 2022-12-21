const DEFAULT_VALUES = {
    DEFAULT_SECOND_NUMBER: null,
    DEFAULT_FIRST_NUMBER: null,
    DEFAULT_OPERATION: null,
    DOCUMENT_COLLECTION: [],
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
// class Calculator {
//     constructor(calculatorHTMLClass) {
//         this.secondNumber = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
//         this.firstNumber = DEFAULT_VALUES.DEFAULT_FIRST_NUMBER;
//         this.operation = DEFAULT_VALUES.DEFAULT_OPERATION;
//
//         this.renderElements(calculatorHTMLClass);
//     }
//
//     renderElements(calculatorHTMLClass) {
//         const mainElement = document.querySelector(calculatorHTMLClass);
//
//         const topHtml = document.createElement("div");
//         topHtml.classList.add("display");
//         mainElement.append(topHtml);
//
//         this.bottomHtml = document.createElement("div");
//         this.bottomHtml.classList.add("button");
//         mainElement.append(this.bottomHtml);
//
//         const topElement = document.querySelector('.display');
//
//         this.topHistory = document.createElement("output");
//         this.topHistory.classList.add("display-history");
//         this.topHistory.dataset.text = "0";
//         topElement.append(this.topHistory);
//
//         this.topResult = document.createElement("output");
//         this.topResult.classList.add("display-result");
//         this.topResult.textContent = '0';
//         topElement.append(this.topResult);
//
//         this.renderSimilarElements();
//     }
//
//     renderSimilarElements() {
//         const appendTarget = document.querySelector('.button');
//
//         DEFAULT_VALUES.DOCUMENT_COLLECTION = OPERATIONS.map((element, index) => {
//             const button = document.createElement("button");
//
//             button.textContent = element.CONTENT;
//             button.dataset.text = element.CONTENT;
//             button.dataset.type = element.OPERATION_TYPE;
//             button.classList.add(BUTTONS_PROPERTY.BUTTON_CLASS_GENERAL);
//             button.classList.add(element.BUTTON_CLASS);
//
//             appendTarget.append(button);
//
//             return button;
//         } );
//     }
//
//     setOperation(content) {
//         this.operation = content;
//     }
// }
// class CalculatorNumbers extends Calculator {
//     constructor(...args) {
//         super(...args);
//
//         this.onClickNumber = this.onClickNumber.bind(this);
//         this.handleClickForNumber();
//     }
//
//     consoleInfo(text) {
//         console.log(`${text}`, ' firstNumber:',this.firstNumber,'; operation:',this.operation,'; secondNumber:',this.secondNumber);
//     }
//
//     handleClickForNumber() {
//         DEFAULT_VALUES.DOCUMENT_COLLECTION.forEach( element => {
//             const type = element.dataset.type;
//
//             if (type !== BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER) {
//                 return;
//             }
//
//             element.onclick = this.onClickNumber;
//         } );
//     }
//
//     onClickNumber(event) {
//         const content = event.target.dataset.text;
//
//         switch (content) {
//             case BUTTONS_CONTENT.POINT: {
//                 this.setPoint();
//
//                 break;
//             }
//
//             default: {
//                 this.setNumber(content);
//             }
//         }
//
//         this.consoleInfo(`setNumber`);
//     }
//
//
//     setPoint() {
//         if (this.secondNumber.includes(".")) {//если точка уже есть в числе
//             return;
//         }
//
//         if (this.secondNumber === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
//             this.secondNumber = BUTTONS_CONTENT.ZERO;
//         }
//
//         this.secondNumber = `${this.secondNumber}.`;
//     }
//
//     setNumber(content) {
//         if (this.secondNumber.length > DEFAULT_VALUES.MAX_LINE_LENGTH) {//если длинна больше допустимой
//             return;
//         }
//
//         if ((this.secondNumber === BUTTONS_CONTENT.ZERO) ||
//             (this.secondNumber === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER)) {//если изначально стоит 0 или начальное значение
//             this.secondNumber = `${content}`;
//
//             return;
//         }
//
//         this.secondNumber = `${this.secondNumber}${content}`;
//     }
// }
// class CalculatorCleanupOperations extends CalculatorNumbers {
//     constructor(...args) {
//         super(...args);
//
//         this.onClickCleanup = this.onClickCleanup.bind(this);
//         this.handleClickForCleanupOperation();
//     }
//
//     handleClickForCleanupOperation() {
//         DEFAULT_VALUES.DOCUMENT_COLLECTION.forEach( element => {
//             const type = element.dataset.type;
//
//             if (type !== BUTTONS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION)
//             {
//                 return;
//             }
//
//             element.onclick = this.onClickCleanup;
//         } );
//     }
//
//     onClickCleanup(event) {
//         const content = event.target.dataset.text;
//
//         switch (content) {
//             case BUTTONS_CONTENT.CLEAN_ALL: {
//                 this.cleanAll();
//
//                 break;
//             }
//             case  BUTTONS_CONTENT.CLEAN_LINE: {
//                 this.cleanLine();
//
//                 break;
//             }
//             case  BUTTONS_CONTENT.CLEAN_SYMBOL: {
//                 this.cleanLastSymbol();
//
//                 break;
//             }
//         }
//     }
//
//     cleanAll() {
//         this.topResult.innerHTML = BUTTONS_CONTENT.ZERO;
//         this.topHistory.innerHTML = "";
//         this.secondNumber = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
//         this.firstNumber = DEFAULT_VALUES.DEFAULT_FIRST_NUMBER;
//         this.operation = DEFAULT_VALUES.DEFAULT_OPERATION;
//
//         this.consoleInfo("cleanAll");
//     }
//
//     cleanLine() {
//         this.topResult.innerHTML = BUTTONS_CONTENT.ZERO;
//         this.secondNumber = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
//
//         this.consoleInfo("cleanLine");
//     }
//
//     cleanLastSymbol() {
//         if (this.secondNumber === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
//             this.consoleInfo("cleanLastSymbol");
//             return;
//         }
//
//         this.secondNumber = this.secondNumber.slice(0, this.secondNumber.length - 1);
//
//         if (this.secondNumber === "") {
//             this.secondNumber = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
//         }
//
//         this.consoleInfo("cleanLastSymbol");
//     }
// }
// class CalculatorBasicOperations extends CalculatorCleanupOperations {
//     constructor(...args) {
//         super(...args);
//
//         this.onClickBasicOperations = this.onClickBasicOperations.bind(this);
//         this.handleClickForBasicOperations();
//     }
//     handleClickForBasicOperations() {
//         DEFAULT_VALUES.DOCUMENT_COLLECTION.forEach( element => {
//             const type = element.dataset.type;
//
//             if (type !== BUTTONS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION)
//             {
//                 return;
//             }
//
//             element.onclick = this.onClickBasicOperations;
//         } );
//     }
//
//     onClickBasicOperations(event) {
//         const content = event.target.dataset.text;
//
//         this.setOperation(content);
//
//         if (this.firstNumber === DEFAULT_VALUES.DEFAULT_FIRST_NUMBER &&
//             this.secondNumber === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {//если не было значний
//
//             this.firstNumber = BUTTONS_CONTENT.ZERO;
//
//             this.consoleInfo("BasicOperation");
//
//             return;
//         }
//
//         if (this.firstNumber === DEFAULT_VALUES.DEFAULT_FIRST_NUMBER &&
//             this.secondNumber !== DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {//если только введенное значение
//
//             this.firstNumber = this.secondNumber;
//             this.secondNumber = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
//
//             this.consoleInfo("BasicOperation");
//
//             return;
//         }
//
//         if (this.firstNumber !== DEFAULT_VALUES.DEFAULT_FIRST_NUMBER &&
//             this.secondNumber === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {//если только первое значение
//
//             this.consoleInfo("BasicOperation");
//
//             return;
//         }
//
//         if (this.firstNumber !== DEFAULT_VALUES.DEFAULT_FIRST_NUMBER &&
//             this.secondNumber !== DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) { // если введены оба значения
//
//             switch (content) {
//                 case BUTTONS_CONTENT.ADDITION: {
//                     this.addition();
//
//                     break;
//                 }
//                 case  BUTTONS_CONTENT.SUBTRACTION: {
//                     this.subtraction();
//
//                     break;
//                 }
//                 case  BUTTONS_CONTENT.MULTIPLICATION: {
//                     this.multiplication();
//
//                     break;
//                 }
//                 case  BUTTONS_CONTENT.DIVISION: {
//                     this.division();
//
//                     break;
//                 }
//             }
//         }
//     }
//
//     addition() {
//         this.firstNumber = `${Number(this.firstNumber) + Number(this.secondNumber)}`;
//     }
//
//     subtraction() {
//         this.firstNumber = `${Number(this.firstNumber) - Number(this.secondNumber)}`;
//     }
//
//     multiplication() {
//         this.firstNumber = `${Number(this.firstNumber) * Number(this.secondNumber)}`;
//     }
//
//     division() {
//         this.firstNumber = `${Number(this.firstNumber) / Number(this.secondNumber)}`;
//     }
// }
// const interface1 = new CalculatorBasicOperations(".calculator");

//ButtonNumber -> Button -> DomRendererElement
//ButttonOperation -> Button -> DomRendererElement

//Display -> DomRenderElement
//renderToDsiplay

//Number / Clenup / ComplexOpration / BasicOperation
//ButtonNumber / ButtonClenup / ButtonComplexOperation /  ButtonBasicOperation

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
//
    render() {
        const buttons = ELEMENTS.map(item => {
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

    this.root.append(...buttons);
    }
}

class Operations extends Calculator {
    constructor({root}) {
        super({root});

        this.firstArg = null;
        this.seconArg = null;
        this.currentOperation = null;
    }
}

const af = new Operations({
    root: document.querySelector(ELEMENTS_PROPERTY.ROOT_FOR_MAIN),
});