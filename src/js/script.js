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
const MAIN_ELEMENTS_CLASSES = {
    CLASS_DISPlAY: "display",
    CLASS_BUTTON: "button",
    CLASS_HISTORY: "display-history",
    CLASS_RESULT: "display-result",
    CLASS_PERCENT: "button-percent",
    CLASS_CLEAN_ALL: "button-cleanAll",
    CLASS_CLEAN_LINE: "button-cleanLine",
    CLASS_CLEAN_SYMBOL: "button-cleanSymbol",
    CLASS_REVERSE: "button-reverse",
    CLASS_SQUARE: "button-square",
    CLASS_SQUARE_ROOT: "button-squareRoot",
    CLASS_DIVISION: "button-division",
    CLASS_SEVEN: "button-seven",
    CLASS_EIGHT: "button-eight",
    CLASS_NINE: "button-nine",
    CLASS_MULTIPLICATION: "button-multiplication",
    CLASS_FOUR: "button-four",
    CLASS_FIVE: "button-five",
    CLASS_SIX: "button-six",
    CLASS_SUBTRACTION: "button-subtraction",
    CLASS_ONE: "button-one",
    CLASS_TWO: "button-two",
    CLASS_THREE: "button-three",
    CLASS_ADDITION: "button-addition",
    CLASS_NEGATE: "button-negate",
    CLASS_ZERO: "button-zero",
    CLASS_POINT: "button-point",
    CLASS_EQUAL: "button-equal",
}
const ELEMENTS = [
    {
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_DISPlAY,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_MAIN
    },
    {
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_BUTTON,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_DISPlAY
    },
    {
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_HISTORY,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_DISPlAY,
    },
    {
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_RESULT,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_HISTORY,
    },
    {
        CONTENT: BUTTONS_CONTENT.PERCENT,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_PERCENT,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_BUTTON,
    },
    {
        CONTENT: ELEMENTS_PROPERTY.CLEAN_LINE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_CLEAN_LINE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_PERCENT,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_ALL,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_CLEAN_ALL,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_CLEAN_LINE,
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_SYMBOL,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_CLEAN_SYMBOL,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_CLEAN_ALL,
    },
    {
        CONTENT: BUTTONS_CONTENT.REVERSE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_REVERSE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_CLEAN_SYMBOL,
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_SQUARE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_REVERSE,
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE_ROOT,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_SQUARE_ROOT,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_SQUARE,
    },
    {
        CONTENT: BUTTONS_CONTENT.DIVISION,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_DIVISION,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_SQUARE_ROOT,
    },
    {
        CONTENT: BUTTONS_CONTENT.SEVEN,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_SEVEN,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_DIVISION,
    },
    {
        CONTENT: BUTTONS_CONTENT.EIGHT,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_EIGHT,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_SEVEN,
    },
    {
        CONTENT: BUTTONS_CONTENT.NINE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_NINE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_EIGHT,
    },
    {
        CONTENT: BUTTONS_CONTENT.MULTIPLICATION,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_MULTIPLICATION,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_NINE,
    },
    {
        CONTENT: BUTTONS_CONTENT.FOUR,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_FOUR,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_MULTIPLICATION,
    },
    {
        CONTENT: BUTTONS_CONTENT.FIVE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_FIVE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_FOUR,
    },
    {
        CONTENT: BUTTONS_CONTENT.SIX,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_SIX,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_FIVE,
    },
    {
        CONTENT: BUTTONS_CONTENT.SUBTRACTION,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_SUBTRACTION,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_SIX,
    },
    {
        CONTENT: BUTTONS_CONTENT.ONE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_ONE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_SUBTRACTION,
    },
    {
        CONTENT: BUTTONS_CONTENT.TWO,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_TWO,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_ONE,
    },
    {
        CONTENT: BUTTONS_CONTENT.THREE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_THREE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_TWO,
    },
    {
        CONTENT: BUTTONS_CONTENT.ADDITION,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_ADDITION,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_THREE,
    },
    {
        CONTENT: BUTTONS_CONTENT.NEGATE,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_NEGATE,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT:  MAIN_ELEMENTS_CLASSES.CLASS_ADDITION,
    },
    {
        CONTENT: BUTTONS_CONTENT.ZERO,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_ZERO,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_NEGATE,
    },
    {
        CONTENT: BUTTONS_CONTENT.POINT,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_POINT,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_ZERO,
    },
    {
        CONTENT: BUTTONS_CONTENT.EQUAL,
        BUTTON_CLASS: MAIN_ELEMENTS_CLASSES.CLASS_EQUAL,
        BUTTON_TYPE_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_EQUAL,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL,
        ROOT_ELEMENT: MAIN_ELEMENTS_CLASSES.CLASS_POINT,
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

    setPropertiesForElement(params) {
        const {
            tagName,
            className,
            rootClass,
            textContent,
            datasetText,
            datasetType,
        } = params;
        const rootElement = document.querySelector(rootClass);
        const element = document.createElement(tagName);

        className.forEach(item => {
            element.classList.add(`${item}`);
        });

        if (textContent) {
            element.textContent = textContent;
        }
        if (datasetText) {
            element.dataset.text = datasetText;
        }
        if (datasetType) {
            element.dataset.type = datasetType;
        }

        //rootElement.append(element);
        //rootElement.after(element);

        return element;
    }

    renderElement(itemClass, rootClass) {
        this.rootElement = document.querySelector(rootClass)

        if (itemClass === MAIN_ELEMENTS_CLASSES.CLASS_DISPlAY || itemClass === MAIN_ELEMENTS_CLASSES.CLASS_DISPlAY || itemClass === MAIN_ELEMENTS_CLASSES.CLASS_DISPlAY) {

        }

        else {
            this.rootElement.after(itemClass);
        }

    }

    renderAllElements() {
        ELEMENTS.forEach(item => {
            let item1 = document.querySelector(item.BUTTON_CLASS);
            console.log(item1)
            let root1 = document.querySelector(item.ROOT_ELEMENT);
            console.log(root1)
            // if (list.filter(item => { item.classList.includes(itemClass)})) {
            // }

            if (item.BUTTON_CLASS === MAIN_ELEMENTS_CLASSES.CLASS_DISPlAY || item.BUTTON_CLASS === MAIN_ELEMENTS_CLASSES.CLASS_BUTTON || item.BUTTON_CLASS === MAIN_ELEMENTS_CLASSES.CLASS_PERCENT) {
                root1.append(item1);
            }
            else {
                root1.after(item1);
            }

        });
    }
}

class Display extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.displayList = [];
        this.renderedDisplayList = [];

        this.renderDisplayElements();
    }

    renderDisplayElements() {
        this.displayList = ELEMENTS.filter(item => item.OPERATION_TYPE === ELEMENTS_PROPERTY.DISPLAY_TYPE);

        this.renderedDisplayList = this.displayList.map(item => {
            return this.setPropertiesForElement({
                tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
                className: [item.BUTTON_CLASS],
                rootClass: item.ROOT_ELEMENT,
            })
        });
    }
}

class Buttons extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.generalList = [];
    }

    createButtonList(type) {
        return ELEMENTS.filter(item => item.OPERATION_TYPE === type);
    }

    setPropertiesForElementsInList(list) {
        let list1 = [];

        list1 = list.map(item => {
            return this.setPropertiesForElement({
                tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                className: [item.BUTTON_CLASS, item.BUTTON_TYPE_CLASS, ELEMENTS_PROPERTY.BUTTON_CLASS_GENERAL],
                rootClass: item.ROOT_ELEMENT,
                textContent: item.CONTENT,
                datasetText: item.CONTENT,
                datasetType: item.OPERATION_TYPE,
            })
       });

        return list1;
    }
}

class ButtonNumber extends Buttons{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.numberList = [];
        this.renderedList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.numberList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER);
        this.renderedList = this.setPropertiesForElementsInList(this.numberList);

        console.log(this.renderedList)
        console.log(this.renderedList)
    }
}

class ButtonCleanup extends Buttons{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.cleanupList = [];
        this.renderedList = [];

        this.renderTheList();

    }

    renderTheList() {
        this.cleanupList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION);
        this.renderedList = this.setPropertiesForElementsInList(this.cleanupList);

        console.log(this.renderedList)
    }
}

class ButtonComplexOperation extends Buttons{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.complexOperationList = [];
        this.renderedList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.complexOperationList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION);
        this.renderedList = this.setPropertiesForElementsInList(this.complexOperationList);

        console.log(this.renderedList)
    }
}

class ButtonBasicOperation extends Buttons{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.baiscOperationList = [];
        this.renderedList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.baiscOperationList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION);
        this.renderedList = this.setPropertiesForElementsInList(this.baiscOperationList);

        console.log(this.renderedList)
    }
}

class ButtonEqual extends Buttons{
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.equalList = [];
        this.renderedList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.equalList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL);
        this.renderedList = this.setPropertiesForElementsInList(this.equalList);

        console.log(this.renderedList[0].dataset.text)
    }
}

class Operations {
    constructor(display, ...root) {
        this.display = display;
        this.root = root;
        this.firstArg = null;
        this.seconArg = null;
        this.currentOperation = null;

        this.logic();
    }

    logic() {
        this.root[0].renderAllElements();
        //console.log(this.root)
        // switch () {
        //     case
        // }
    }
}

const af = new Operations(new Display, new ButtonNumber(), new ButtonCleanup(), new ButtonComplexOperation(), new ButtonBasicOperation(), new ButtonEqual());


//const ab = new ButtonNumber();

//, new ButtonCleanup(), new ButtonComplexOperation(), new ButtonBasicOperation()

//,
//     new ButtonCleanup(new Display()),
//     new ButtonComplexOperation(new Display()),
//     new ButtonBasicOperation(new Display()