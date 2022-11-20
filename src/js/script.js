const ACTIVE_VALUES = {
    SECOND_NUMBER: "none",
    FIRST_NUMBER: "none",
    OPERATION: "no operations defined",
    DOCUMENT_COLLECTION: [],
}
const DEFAULT_VALUES = {
    DEFAULT_SECOND_NUMBER: "none",
    DEFAULT_FIRST_NUMBER: "none",
    DEFAULT_OPERATION: "no operations defined",
    MAX_LINE_LENGTH: 16,
    LENGTH_FOR_SWITCH_FONT_SIZE_MEDIUM: 10,
}
const BUTTONS_PROPERTY = {
    BUTTON_CLASS_GENERAL: "button-block",
    BUTTON_CLASS_OPERATION: "operation",
    BUTTON_CLASS_NUMBER: "number",
    BUTTON_CLASS_EQUAL: "equal",
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
const OPERATIONS = [
    {
        CONTENT: BUTTONS_CONTENT.PERCENT,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_LINE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_ALL,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.CLEAN_SYMBOL,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.REVERSE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.SQUARE_ROOT,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.DIVISION,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.SEVEN,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.EIGHT,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.NINE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.MULTIPLICATION,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.FOUR,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.FIVE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.SIX,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.SUBTRACTION,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.ONE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.TWO,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.TREE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.ADDITION,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_OPERATION,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_BASIC_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.NEGATE,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_COMPLEX_OPERATION
    },
    {
        CONTENT: BUTTONS_CONTENT.ZERO,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.POINT,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_NUMBER,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER
    },
    {
        CONTENT: BUTTONS_CONTENT.EQUAL,
        BUTTON_CLASS: BUTTONS_PROPERTY.BUTTON_CLASS_EQUAL,
        OPERATION_TYPE: BUTTONS_PROPERTY.OPERATION_TYPE_EQUAL
    },
]
class CalculatorDisplay {
    constructor(calculatorHTMLClass) {
        this.renderElements(calculatorHTMLClass);
    }

    renderElements(calculatorHTMLClass) {
        const mainElement = document.querySelector(calculatorHTMLClass);

        const topHtml = document.createElement("div");
        topHtml.classList.add("display");
        mainElement.append(topHtml);

        const topElement = document.querySelector('.display');

        this.bottomHtml = document.createElement("div");
        this.bottomHtml.classList.add("button");
        mainElement.append(this.bottomHtml);

        this.topHistory = document.createElement("output");
        this.topHistory.classList.add("display-history");
        this.topHistory.dataset.text = "0";
        topElement.append(this.topHistory);

        this.topResult = document.createElement("output");
        this.topResult.classList.add("display-result");
        this.topResult.textContent = '0';
        topElement.append(this.topResult);

        this.renderSimilarElements();
    }

    renderSimilarElements() {
        const appendTarget = document.querySelector('.button');

        DEFAULT_VALUES.DOCUMENT_COLLECTION = OPERATIONS.map((element, index) => {
            const button = document.createElement("button");

            button.textContent = element.CONTENT;
            button.dataset.text = element.CONTENT;
            button.dataset.type = element.OPERATION_TYPE;
            button.classList.add(BUTTONS_PROPERTY.BUTTON_CLASS_GENERAL);
            button.classList.add(element.BUTTON_CLASS);

            appendTarget.append(button);
            return button;
        } );
    }

    setCleanupOperation(button) {
        if (button.dataset.type !== "cleanupOperation") {
            return;
        }

        const textOfOperation = button.dataset.text;

        switch (textOfOperation) {
            case "C": {
                this.cleanAll();
                break;
            }

            case "CE": {
                if (this.operation === "=") {
                    this.cleanAll();

                    break;
                }

                this.cleanResult()
                break;
            }

            case "<": {
                if (this.operation === "=") {
                    this.cleanHistory();

                    break;
                }

                this.cleanLastSymbol();
                break;
            }
        }

        this.renderResults();
    }

    setBasicOperation(button) {
        if (button.dataset.type !== "basicOperation") {
            return;
        }

        if (this.firstNumber === this.defaultFirstNumber) { // если первое число не задано
            this.operation = button.dataset.text;

            if (this.secondNumber === this.defaultSecondNumber) {//если сразу нажать действие без заданного числа
                this.secondNumber = "0";
            }

            this.firstNumber = Number(this.secondNumber); // задаем число и операциию
            this.secondNumber = this.defaultSecondNumber;

            return;
        }

        if (this.secondNumber !== this.defaultSecondNumber) {//если второе число не задано
            switch (this.operation) { //выполняем операции
                case this.operations.addition.content: {
                    this.firstNumber = this.addition();
                    this.setResultAfterBasicOperation(button);

                    break;
                }

                case this.operations.subtraction.content: {
                    this.firstNumber = this.subtraction();
                    this.setResultAfterBasicOperation(button);

                    break;
                }

                case this.operations.multiplication.content: {
                    this.firstNumber = this.multiplication();
                    this.setResultAfterBasicOperation(button);

                    break;
                }

                case this.operations.division.content: {
                    this.firstNumber = this.division();
                    this.setResultAfterBasicOperation(button);

                    break;
                }
            }

            this.secondNumber = this.defaultSecondNumber;
        }
        else { //если второе число задано
            this.operation = button.dataset.text; // то только меняем операцию
        }

        //renderResult не выполняется в цонце данного блока, по этому число в поле результата
        //не изменяется сразу при нажатии на +-*/
    }

    setComplexOperation(button) {
        if (button.dataset.type !== "complexOperation") {
            return;
        }

        switch (button.dataset.text) {
            case "%": {
                this.percent();

                break;
            }

            case "1/x": {
                this.reverse();

                break;
            }

            case "x²": {
                this.square();

                break;
            }

            case "\u221Ax": {
                this.squareRoot();

                break;
            }

            case "±": {
                this.negate();

                break;
            }
        }

        this.renderResults();
    }

    setEqual(button) {

        const result = list.map(elem => {
        })
        if (button.dataset.type !== "equal") {
            return;
        }

        switch (this.operation) {
            case this.operations.addition.content: {
                this.topResult.innerHTML = this.addition();

                break;
            }

            case this.operations.subtraction.content: {
                this.topResult.innerHTML = this.subtraction();

                break;
            }

            case this.operations.multiplication.content: {
                this.topResult.innerHTML = this.multiplication();

                break;
            }

            case this.operations.division.content: {
                this.topResult.innerHTML = this.division();

                break;
            }
        }


    }

    setResultFontSize() {
        if (this.topResult.textContent.length < this.lengthForSwitchFontSizeMedium) {
            this.topResult.style.fontSize = "42px";
        }

        if (this.topResult.textContent.length > this.lengthForSwitchFontSizeMedium) {
            this.topResult.style.fontSize = "26px";
        }

        if (this.topResult.textContent.length > this.maxLineLength) {
            this.topResult.style.fontSize = "22px";
        }
    }

    handleExceptions() {
        // secondNumber
        // infinity, Cannot divide by zero
        // need block some buttons, next clearAll
    }

    setResultAfterBasicOperation(button) {
        this.topResult.innerHTML =  this.firstNumber;
        this.secondNumber = this.defaultSecondNumber;
        this.operation = button.dataset.text;
    }

    addition() {
        return  Number(this.firstNumber) + Number(this.secondNumber);
    }

    subtraction() {
        return Number(this.firstNumber) - Number(this.secondNumber);
    }

    multiplication() {
        return Number(this.firstNumber) * Number(this.secondNumber);
    }

    division() {
        return Number(this.firstNumber) / Number(this.secondNumber);
    }

    percent() {
        if (this.operation === this.defaultOperation) {//если не было использовано знаков
            this.cleanAll();
            return;
        }
        //сделать через include
        if (this.operation === this.operations.multiplication.content || this.operation === this.operations.division.content) {//если был использован знак * или /
            if (this.secondNumber === this.defaultSecondNumber) {//если еще одно число не вписано
                this.secondNumber = this.firstNumber;
            }

            this.secondNumber = `${Number(this.secondNumber) / 100}`;
        }

        if (this.operation === this.operations.addition.content || this.operation === this.operations.subtraction.content) {//если был использован знак + или -
            if (this.secondNumber === this.defaultSecondNumber) {//если еще одно число не вписано
                this.secondNumber = this.firstNumber;
            }

            this.secondNumber = `${Number(this.firstNumber) / 100 * Number(this.secondNumber)}`;
        }
    }

    reverse() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.topResult.innerHTML = "Cannot divide by zero";

            return;
        }

        this.secondNumber = `${1 / Number(this.secondNumber)}`;
    }

    square() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.secondNumber = "0";

            return
        }

        this.secondNumber = `${Number(this.secondNumber) * Number(this.secondNumber)}`;
    }

    squareRoot() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.secondNumber = "0";

            return
        }

        this.secondNumber = `${Math.sqrt(this.secondNumber)}`;
    }

    negate() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.secondNumber = "0";

            return
        }

        if (!this.secondNumber.includes( "-" )) {
            this.secondNumber = `-${this.secondNumber}`;
        }
        else {
            this.secondNumber = this.secondNumber.slice(1);
        }
    }

    cleanHistory() {
        this.topHistory.innerHTML = "";
        this.secondNumber = this.defaultSecondNumber;
        this.firstNumber = this.defaultFirstNumber;
        this.operation = this.defaultOperation;
    }

    cleanLastSymbol() {
        if (this.secondNumber === this.defaultSecondNumber) {
            return;
        }

        this.secondNumber = this.secondNumber.slice(0, this.secondNumber.length - 1);

        if (this.secondNumber === "") {
            this.secondNumber = this.defaultSecondNumber;
        }
    }

    renderResults() {
        if (ACTIVE_VALUES.SECOND_NUMBER === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            this.topResult.innerHTML = BUTTONS_CONTENT.ZERO;

            return;
        }

        this.topResult.innerHTML = ACTIVE_VALUES.SECOND_NUMBER;
    }

}
class CalculatorLogicOfNumbers extends CalculatorDisplay {
    constructor(...args) {
        super(...args);
        this.handleClickForNumber = this.handleClickForNumber.bind(this);
        this.handleClickForNumber();
    }

    handleClickForNumber() {
        DEFAULT_VALUES.DOCUMENT_COLLECTION.forEach( element => {
            const type = element.dataset.type;

            if (type !== BUTTONS_PROPERTY.OPERATION_TYPE_NUMBER)
            {
                return;
            }

            element.onclick = this.setNumber;
        } );
    }

    setNumber(event) {
        const content = event.target.dataset.text;

        switch (content) {
            case BUTTONS_CONTENT.POINT: {
                if (ACTIVE_VALUES.SECOND_NUMBER.includes(".")) {//если точка уже есть в числе
                    break;
                }

                if (ACTIVE_VALUES.SECOND_NUMBER === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
                    ACTIVE_VALUES.SECOND_NUMBER = BUTTONS_CONTENT.ZERO;
                }

                ACTIVE_VALUES.SECOND_NUMBER = `${ACTIVE_VALUES.SECOND_NUMBER}.`;

                break;
            }

            default: {
                if (ACTIVE_VALUES.SECOND_NUMBER.length > DEFAULT_VALUES.MAX_LINE_LENGTH) {//если длинна больше допустимой
                    break;
                }

                if ((ACTIVE_VALUES.SECOND_NUMBER === BUTTONS_CONTENT.ZERO) || (ACTIVE_VALUES.SECOND_NUMBER === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER)) {//если изначально стоит 0 или начальное значение
                    ACTIVE_VALUES.SECOND_NUMBER = `${content}`;

                    break;
                }

                ACTIVE_VALUES.SECOND_NUMBER = `${ACTIVE_VALUES.SECOND_NUMBER}${content}`;
            }
        }

        console.log("setNumber;", 'secondNumber:',ACTIVE_VALUES.SECOND_NUMBER);
    }
}
class CalculatorLogicOfCleanupOperations extends CalculatorLogicOfNumbers {
    constructor(...args) {
        super(...args);

        this.cleanup = this.cleanup.bind(this);
        this.handleClickForCleanupOperation();
    }

    handleClickForCleanupOperation() {
        DEFAULT_VALUES.DOCUMENT_COLLECTION.forEach( element => {
            const type = element.dataset.type;

            if (type !== BUTTONS_PROPERTY.OPERATION_TYPE_CLEANUP_OPERATION)
            {
                return;
            }

            element.onclick = this.cleanup;
        } );
    }

    cleanup(event) {
        const content = event.target.dataset.text;

        switch (content) {
            case BUTTONS_CONTENT.CLEAN_ALL: {
                this.cleanAll();

                break;
            }
            case  BUTTONS_CONTENT.CLEAN_LINE: {
                this.cleanLine();

                break;
            }
            case  BUTTONS_CONTENT.CLEAN_SYMBOL: {
                this.cleanLastSymbol();

                break;
            }
        }
    }

    cleanAll() {
        this.topResult.innerHTML = BUTTONS_CONTENT.ZERO;
        this.topHistory.innerHTML = "";
        ACTIVE_VALUES.SECOND_NUMBER = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
        ACTIVE_VALUES.FIRST_NUMBER = DEFAULT_VALUES.DEFAULT_FIRST_NUMBER;
        ACTIVE_VALUES.OPERATION = DEFAULT_VALUES.DEFAULT_OPERATION;

        console.log("cleanAll;", 'secondNumber:',ACTIVE_VALUES.SECOND_NUMBER);
    }

    cleanLine() {
        this.topResult.innerHTML = BUTTONS_CONTENT.ZERO;
        ACTIVE_VALUES.SECOND_NUMBER = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;

        console.log("cleanLine;", 'secondNumber:',ACTIVE_VALUES.SECOND_NUMBER);
    }

    cleanLastSymbol() {
        if (ACTIVE_VALUES.SECOND_NUMBER === DEFAULT_VALUES.DEFAULT_SECOND_NUMBER) {
            return;
        }

        ACTIVE_VALUES.SECOND_NUMBER = ACTIVE_VALUES.SECOND_NUMBER.slice(0, ACTIVE_VALUES.SECOND_NUMBER.length - 1);

        if (ACTIVE_VALUES.SECOND_NUMBER === "") {
            ACTIVE_VALUES.SECOND_NUMBER = DEFAULT_VALUES.DEFAULT_SECOND_NUMBER;
        }

        console.log("cleanLastSymbol;", 'secondNumber:',ACTIVE_VALUES.SECOND_NUMBER);
    }
}
const interface1 = new CalculatorLogicOfCleanupOperations(".calculator");