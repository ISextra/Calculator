class CalculatorDisplay {
    constructor(calculatorHTMLClass) {
        this.secondNumber = "none";
        this.firstNumber = "none";
        this.operation = "no operations defined";

        this.defaultFirstNumber = "none";
        this.defaultSecondNumber = "none";
        this.defaultOperation = "no operations defined";

        this.maxLineLength = 16;
        this.lengthForSwitchFontSizeMedium = 10;

        this.operations = {
            percent: {
                content: "%",
                buttonClass: "bottom-button-operation",
                operationType: "complexOperation"
            },

            clearLine: {
                content: "CE",
                buttonClass: "bottom-button-operation",
                operationType: "cleanupOperation"
            },

            clearAll: {
                content: "C",
                buttonClass: "bottom-button-operation",
                operationType: "cleanupOperation"
            },

            clearSymbol: {
                content: "<",
                buttonClass: "bottom-button-operation",
                operationType: "cleanupOperation"
            },

            reverse: {
                content: "1/x",
                buttonClass: "bottom-button-operation",
                operationType: "complexOperation"
            },

            square: {
                content: "x²",
                buttonClass: "bottom-button-operation",
                operationType: "complexOperation"
            },

            squareRoot: {
                content: "\u221Ax",
                buttonClass: "bottom-button-operation",
                operationType: "complexOperation"
            },

            division: {
                content: "\xF7",
                buttonClass: "bottom-button-operation",
                operationType: "basicOperation"
            },

            seven: {
                content: "7",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            eight: {
                content: "8",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            nine: {
                content: "9",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            multiplication: {
                content: "\xD7",
                buttonClass: "bottom-button-operation",
                operationType: "basicOperation",
            },

            four: {
                content: "4",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            five: {
                content: "5",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            six: {
                content: "6",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            subtraction: {
                content: "-",
                buttonClass: "bottom-button-operation",
                operationType: "basicOperation"
            },

            one: {
                content: "1",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            two: {
                content: "2",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            three: {
                content: "3",
                buttonClass: "bottom-button-number",
                operationType: "number"
            },

            addition: {
                content: "+",
                buttonClass: "bottom-button-operation",
                operationType: "basicOperation"
            },

            negate: {
                content: "±",
                buttonClass: "bottom-button-number",
                operationType: "complexOperation"
            },

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
        this.setBasicOperation(event.target);
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
            this.firstNumber = Number(this.secondNumber); // задаем число и операциию
            this.secondNumber = this.defaultSecondNumber;

            return;
        }

        if (this.secondNumber !== this.defaultSecondNumber) {//если второе число не задано
            switch (this.operation) { //выполняем операции
                case this.operations.addition.content: {
                    this.addition(button);

                    break;
                }

                case this.operations.subtraction.content: {
                    this.subtraction(button)

                    break;
                }

                case this.operations.multiplication.content: {
                    this.multiplication(button);

                    break;
                }

                case this.operations.division.content: {
                    this.division(button);

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
        }

        this.renderResults();
    }

    setEqual(button) {
        if (button.dataset.type !== "equal") {
            return;
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

    addition(button) {
        this.firstNumber = Number(this.firstNumber) + Number(this.secondNumber);
        this.topResult.innerHTML =  this.firstNumber;
        this.secondNumber = this.defaultSecondNumber;
        this.operation = button.dataset.text;

    }

    subtraction(button) {
        this.firstNumber = Number(this.firstNumber) - Number(this.secondNumber);
        this.topResult.innerHTML =  this.firstNumber;
        this.secondNumber = this.defaultSecondNumber;
        this.operation = button.dataset.text;
    }

    multiplication(button) {
        this.firstNumber = Number(this.firstNumber) * Number(this.secondNumber);
        this.topResult.innerHTML =  this.firstNumber;
        this.secondNumber = this.defaultSecondNumber;
        this.operation = button.dataset.text;
    }

    division(button) {
        this.firstNumber = Number(this.firstNumber) / Number(this.secondNumber);
        this.topResult.innerHTML =  this.firstNumber;
        this.secondNumber = this.defaultSecondNumber;
        this.operation = button.dataset.text;
    }

    percent() {
        if (this.operation === this.defaultOperation) {//если не было использовано знаков
            this.cleanAll();
            return;
        }

        if (this.operation === this.operations.multiplication.content || this.operation === this.operations.division.content) {//если был использован знак * или /
            if (this.secondNumber === this.defaultSecondNumber) {//если еще одно число не вписано
                this.secondNumber = this.firstNumber;
            }

            this.secondNumber = Number(this.secondNumber) / 100;
        }

        if (this.operation === this.operations.addition.content || this.operation === this.operations.subtraction.content) {//если был использован знак + или -
            if (this.secondNumber === this.defaultSecondNumber) {//если еще одно число не вписано
                this.secondNumber = this.firstNumber;
            }

            this.secondNumber = Number(this.firstNumber) / 100 * Number(this.secondNumber);
        }
    }

    reverse() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.topResult.innerHTML = "Cannot divide by zero";

            return;
        }

        this.secondNumber = 1 / this.secondNumber;
    }

    square() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.secondNumber = "0";

            return
        }

        this.secondNumber = Number(this.secondNumber) * Number(this.secondNumber);
    }

    squareRoot() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.secondNumber = "0";

            return
        }

        this.secondNumber = Math.sqrt(this.secondNumber);
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