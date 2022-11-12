const CONSTANTS = {
    secondNumber: "none",
    firstNumber: "none",
    operation: "no operations defined",
    defaultSecondNumber: "none",
    defaultFirstNumber: "none",
    defaultOperation: "no operations defined",
    maxLineLength: 16,
    lengthForSwitchFontSizeMedium: 10,

    percent: "%",
    clearLine: "CE",
    clearAll: "C",
    clearSymbol: "<",
    reverse: "1/x",
    square: "x²",
    squareRoot: "\u221Ax",
    division: "\xF7",
    seven: "7",
    eight: "8",
    nine: "9",
    multiplication: "\xD7",
    four: "4",
    five: "5",
    six: "6",
    subtraction: "-",
    one: "1",
    two: "2",
    three: "3",
    addition: "+",
    negate: "±",
    zero: "0",
    point: ".",
    equal: "=",
}

const OPERATIONS = [
    {
        content: CONSTANTS.percent,
        buttonClass: "bottom-button-operation",
        operationType: "complexOperation"
    },

    {
        content: CONSTANTS.clearLine,
        buttonClass: "bottom-button-operation",
        operationType: "cleanupOperation"
    },

    {
        content: CONSTANTS.clearAll,
        buttonClass: "bottom-button-operation",
        operationType: "cleanupOperation"
    },

    {
        content: CONSTANTS.clearSymbol,
        buttonClass: "bottom-button-operation",
        operationType: "cleanupOperation"
    },

    {
        content: CONSTANTS.reverse,
        buttonClass: "bottom-button-operation",
        operationType: "complexOperation"
    },

    {
        content: CONSTANTS.square,
        buttonClass: "bottom-button-operation",
        operationType: "complexOperation"
    },

    {
        content: CONSTANTS.squareRoot,
        buttonClass: "bottom-button-operation",
        operationType: "complexOperation"
    },

    {
        content: CONSTANTS.division,
        buttonClass: "bottom-button-operation",
        operationType: "basicOperation"
    },

    {
        content: CONSTANTS.seven,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.eight,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.nine,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.multiplication,
        buttonClass: "bottom-button-operation",
        operationType: "basicOperation",
    },

    {
        content: CONSTANTS.four,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.five,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.six,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.subtraction,
        buttonClass: "bottom-button-operation",
        operationType: "basicOperation"
    },

    {
        content: CONSTANTS.one,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.two,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.three,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.addition,
        buttonClass: "bottom-button-operation",
        operationType: "basicOperation"
    },

    {
        content: CONSTANTS.negate,
        buttonClass: "bottom-button-number",
        operationType: "complexOperation"
    },

    {
        content: CONSTANTS.zero,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.point,
        buttonClass: "bottom-button-number",
        operationType: "number"
    },

    {
        content: CONSTANTS.equal,
        buttonClass: "bottom-button-red",
        operationType: "equal"
    },
]


class CalculatorDisplay {
    constructor(calculatorHTMLClass) {
        this.operations = {//сделать как массив обьектов, вынести вне классов


            zero: {
                content: "0",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            point: {
                content: ".",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            equal: {
                content: "=",
                buttonClass: "bottom-button-red",
                operationType: "equal"

            }
        }

        this.handleClick = this.handleClick.bind(this);
        this.renderElements(calculatorHTMLClass);
    }



    renderElements(calculatorHTMLClass) {
        this.calculatorHTMLClass = calculatorHTMLClass;
        const mainElement = document.querySelector(this.calculatorHTMLClass);

        const topHtml = document.createElement("div");
        topHtml.classList.add("top");
        mainElement.append(topHtml);

        const topElement = document.querySelector('.top');

        this.bottomHtml = document.createElement("div");
        this.bottomHtml.classList.add("bottom");
        mainElement.append(this.bottomHtml);

        this.topHistory = document.createElement("output");
        this.topHistory.classList.add("top-history");
        this.topHistory.dataset.text = "0";
        topElement.append(this.topHistory);

        this.topResult = document.createElement("output");
        this.topResult.classList.add("top-result");
        this.topResult.textContent = '0';
        topElement.append(this.topResult);

        this.renderSimilarElements();
    }

    renderSimilarElements() {
        const appendTarget = document.querySelector('.bottom');
        const documentCollection = [];
        let index = 0;

        for (let operation in this.operations) {
            documentCollection[index] = document.createElement("button");
            documentCollection[index].textContent = this.operations[operation].content;
            documentCollection[index].dataset.text = this.operations[operation].content;
            documentCollection[index].dataset.type = this.operations[operation].operationType;
            documentCollection[index].classList.add(this.operations[operation].buttonClass);
            appendTarget.append(documentCollection[index]);

            documentCollection[index].onclick = this.handleClick;

            index++;
        }

    }

    handleClick(event) {
        this.setNumber(event.target);
        this.setCleanupOperation(event.target);
        this.setBasicOperation(event.target);//вынести в один switch
        this.setComplexOperation(event.target);
        this.setEqual(event.target);

        this.setResultFontSize();
        this.handleExceptions()
    }

    setNumber(button) {
        if (button.dataset.type !== "number") {
            return;
        }
        const textOfOperation = button.dataset.text;

        switch (textOfOperation) {
            case ".": {
                if (this.secondNumber.includes(".")) {//если точка уже есть в числе
                    break;
                }

                if (this.secondNumber === this.defaultSecondNumber) {
                    this.secondNumber = "0";
                }

                this.secondNumber = `${this.secondNumber}.`;

                break;
            }

            default: {
                if (this.secondNumber.length > this.maxLineLength) {//если длинна больше допустимой
                    break;
                }

                if ((this.secondNumber === "0") || (this.secondNumber === this.defaultSecondNumber)) {//если изначально стоит 0 или начальное значение
                    this.secondNumber = `${textOfOperation}`;

                    break;
                }

                this.secondNumber = `${this.secondNumber}${textOfOperation}`;
            }
        }

        this.renderResults();
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

        console.log(this.firstNumber, this.operation , this.secondNumber);
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

    cleanAll() {
        this.topResult.innerHTML = "0";
        this.topHistory.innerHTML = "";
        this.secondNumber = this.defaultSecondNumber;
        this.firstNumber = this.defaultFirstNumber;
        this.operation = this.defaultOperation;
    }

    cleanHistory() {
        this.topHistory.innerHTML = "";
        this.secondNumber = this.defaultSecondNumber;
        this.firstNumber = this.defaultFirstNumber;
        this.operation = this.defaultOperation;
    }

    cleanResult() {
        this.topResult.innerHTML = "0";
        this.secondNumber = this.defaultSecondNumber;
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
        if (this.secondNumber === this.defaultSecondNumber) {
            this.topResult.innerHTML = "0";
            return;
        }

        this.topResult.innerHTML = this.secondNumber;
    }

}

const interface1 = new CalculatorDisplay(".calculator");