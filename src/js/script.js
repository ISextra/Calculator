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
    ROOT_FOR_BUTTONS: ".bottom",
    ROOT_FOR_MAIN: ".calculator",
    ROOT_FOR_DISPlAY: ".display",
    DISPLAY_CLASS: "display",
    DISPLAY_CLASS1: "button",
    DISPLAY_CLASS2: "display-history",
    DISPLAY_CLASS3: "display-result",
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
    TREE: "3",
    ADDITION: "+",
    NEGATE: "±",
    ZERO: "0",
    POINT: ".",
    EQUAL: "=",
}
const ELEMENTS = [
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_MAIN
    },
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS1,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_MAIN
    },
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS2,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_DISPlAY
    },
    {
        BUTTON_CLASS: ELEMENTS_PROPERTY.DISPLAY_CLASS3,
        OPERATION_TYPE: ELEMENTS_PROPERTY.DISPLAY_TYPE,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_DISPlAY
    },
    {
        CONTENT: BUTTONS_CONTENT.PERCENT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: ELEMENTS_PROPERTY.CLEAN_LINE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_ALL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_SYMBOL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.REVERSE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE_ROOT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.DIVISION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.SEVEN,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.EIGHT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.NINE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.MULTIPLICATION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.FOUR,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.FIVE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.SIX,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.SUBTRACTION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
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
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.TREE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.ADDITION,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.NEGATE,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.ZERO,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.POINT,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
    },
    {
        CONTENT: BUTTONS_CONTENT.EQUAL,
        BUTTON_CLASS: ELEMENTS_PROPERTY.BUTTON_CLASS_EQUAL,
        OPERATION_TYPE: ELEMENTS_PROPERTY.OPERATION_TYPE_EQUAL,
        ROOT_ELEMENT: ELEMENTS_PROPERTY.ROOT_FOR_BUTTONS
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

    renderElement(params) {
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

        element.classList.add(className);

        if (textContent) {
            element.textContent = textContent;
        }

        if (datasetText) {
            element.dataset.text = datasetText;
        }

        if (datasetType) {
            element.dataset.type = datasetType;
        }

        rootElement.append(element);

        return element;
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
            return this.renderElement({
                tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_DISPLAY,
                className: item.BUTTON_CLASS,
                rootClass: item.ROOT_ELEMENT,
            })
        });

        console.log(this.renderedDisplayList)
    }
}

class Buttons extends DomRendererElement {
    constructor(calculatorHTMLClass) {
        super(calculatorHTMLClass);
    }

    createButtonList(type) {
        return ELEMENTS.filter(item => item.OPERATION_TYPE === type);
    }

    renderAllButtonsFromList(list) {
        return list.map(item => {
            return this.renderElement({
                tagName: ELEMENTS_PROPERTY.TAG_NAME_FOR_BUTTONS,
                className: item.BUTTON_CLASS,
                rootClass: item.ROOT_ELEMENT,
                textContent: item.CONTENT,
                datasetText: item.CONTENT,
                datasetType: item.OPERATION_TYPE,
            })
        });
    }
}

class ButtonNumber extends Buttons{
    constructor(display, calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.display = display;
        this.numberList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.numberList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_NUMBER);
        console.log(this.numberList, 123);
        this.renderedNumberList = this.renderAllButtonsFromList(this.numberList);

    }
}

class ButtonCleanup extends Buttons{
    constructor(display, calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.cleanupList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.cleanupList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION);
    }
}

class ButtonComplexOperation  extends Buttons{
    constructor(display, calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.complexOperationList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.complexOperationList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION);
    }

}

class ButtonBasicOperation  extends Buttons{
    constructor(display, calculatorHTMLClass) {
        super(calculatorHTMLClass);

        this.baiscOperationList = [];

        this.renderTheList();
    }

    renderTheList() {
        this.baiscOperationList = this.createButtonList(ELEMENTS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION);
    }
}

class Operations {
    constructor([root]) {
        this.root = root;
        this.firstArg = null;
        this.seconArg = null;
        this.currentOperation = null;

        this.logic();
    }

    logic() {
        // switch () {
        //     case
        // }
    }
}

const af = new Operations([new ButtonNumber(new Display()),
    new ButtonCleanup(new Display()),
    new ButtonComplexOperation(new Display()),
    new ButtonBasicOperation(new Display())
]);


//const ab = new ButtonNumber();

//, new ButtonCleanup(), new ButtonComplexOperation(), new ButtonBasicOperation()