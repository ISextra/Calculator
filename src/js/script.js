class CalculatorDisplay {
    constructor(calculatorHTMLClass) {
        this.secondNumber = "no number two";
        this.firstNumber = "no number one";
        this.operation = "no operations defined";

        this.defaultFirstNumber = "no number one";
        this.defaultSecondNumber = "no number two";
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

    handleClick(event) {
        this.setNumber(event.target);
        this.setCleanupOperation(event.target);
        this.setBasicOperation(event.target);
        this.setComplexOperation(event.target);
        this.setEqual(event.target);

        this.renderResults();
        this.setResultFontSize();
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
        console.log(this.secondNumber);
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
                break;
            }

            case "x²": {
                break;
            }

            case "\u221Ax": {
                break;
            }
        }
    }

    setBasicOperation(button) {
        if (button.dataset.type !== "basicOperation") {
            return;
        }

        this.operation = button.dataset.text;
        this.firstNumber = Number(this.secondNumber);
        this.secondNumber = this.defaultSecondNumber;
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
    }

    setEqual(button) {
        if (button.dataset.type !== "equal") {
            return;
        }
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

    renderResults() {
        if (this.secondNumber === this.defaultSecondNumber) {
            this.topResult.innerHTML = "0";
            return;
        }

        this.topResult.innerHTML = this.secondNumber;
    }

}

class CalculatorOperations extends CalculatorDisplay {
    constructor(...args) {
        super(...args);

        this.secondNumber = "no secondNumber defined";
        this.action = "no actions defined";
        this.lengthForSwitchFontSizeMedium = 10;
        this.lengthForSwitchFontSizeLow = 16;

        this.setDataOnClick();
        this.setBasicOperations();
        this.setReversOnClick();
        this.setSquareOnClick();
        this.setSquareRootOnClick();
        this.setNegateOnClick();
        this.setPercentOnClick();
        this.clearAll();
        this.clearCurrentNumber();
        this.clearLastSymbol();
    }

    setResultFontSize(thisClass) {
        if (thisClass.topResult.textContent.length < thisClass.lengthForSwitchFontSizeMedium) {
            thisClass.topResult.style.fontSize = "42px";
        }

        if (thisClass.topResult.textContent.length > thisClass.lengthForSwitchFontSizeMedium) {
            thisClass.topResult.style.fontSize = "26px";
        }

        if (thisClass.topResult.textContent.length > thisClass.lengthForSwitchFontSizeLow) {
            thisClass.topResult.style.fontSize = "22px";
        }
    }

    setDataOnClick() {
        const setResultFontSize = this.setResultFontSize;
        const thisClass = this;
        const topResult = this.topResult;
        const topHistoryData = this.topHistory.dataset;
        const numberButtons = this.operations.numberButtons;
        const maxLineLength = 16;

        numberButtons.forEach(element => {
            const selectedData = document.querySelector(`[data-text = "${element}"]`);

            selectedData.onclick = function() {
                switch (element) {
                    case ".":
                        if (!topResult.innerHTML.includes(".")) {//если результат не имеет "."
                            topResult.innerHTML = `${topResult.textContent}.`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }

                        break;
                    default:
                        if (topResult.innerHTML.length > maxLineLength) {//если длинна больше допустимой
                            break;
                        }

                        if (topResult.innerHTML === "0") {//если стоит начальный 0
                            topResult.innerHTML = `${element}`;//заменяем его на число
                            topHistoryData.text = `${topResult.textContent}`;
                        }
                        else {
                            topResult.innerHTML = `${topResult.textContent}${element}`;//в остальных случаях добавляем нажатое значение
                            topHistoryData.text = `${topResult.textContent}`;
                        }

                        setResultFontSize(thisClass);
                }
            }
        })
    }

    setBasicOperations() {
        const defaultAction = "no actions defined";
        const basicOperations = this.operations.basicOperations;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const topResult = this.topResult;
        const thisClass = this;
        let secondNumber = this.secondNumber;

        basicOperations.forEach(element => {
            const selectedData = document.querySelector(`[data-text = "${element}"]`);
            selectedData.onclick = function () {
                if (thisClass.action !== defaultAction) { //если было нажато какое либо basic действие
                    topHistoryData.text = topHistoryData.text.slice(0,topHistoryData.text.length - 2); //стираем действие и пробел перед ним
                }

                thisClass.action = element;
                topHistoryData.text = `${topHistoryData.text} ${thisClass.action}`;
                topHistory.innerHTML = `${topHistoryData.text}`;
                secondNumber = topResult.textContent;
            }
        });
    }

    setPercentOnClick() {
        const setResultFontSize = this.setResultFontSize;
        const dataContent = "%";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            if (thisClass.action) {
                topResult.innerHTML = "0";
                topHistory.innerHTML = "0";
                topHistoryData.text = "0";
                return;
            }

            if (thisClass.action === "\xD7" || thisClass.action === "\xF7") {
                topResult.innerHTML = `${topResult.textContent/100}`;
                topHistoryData.text = `${topHistoryData.text} ${topResult.textContent/100}`;
                topHistory.innerHTML = `${topHistoryData.text}`;
            }

            if (thisClass.action === "+" || thisClass.action === "-") {
                topResult.innerHTML = `${secondNumber/100*topResult.textContent}`;
                topHistoryData.text = `${topHistoryData.text} ${secondNumber/100*topResult.textContent}`;
                topHistory.innerHTML = `${topHistoryData.text}`;
            }

            thisClass.action = dataContent;
            setResultFontSize(thisClass);
        }
    }

    setReversOnClick() {
        const setResultFontSize = this.setResultFontSize;
        const dataContent = "1/x";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent;

            topResult.innerHTML = `${1/secondNumber}`;

            topHistoryData.text = `1/(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            setResultFontSize(thisClass);
        }
    }

    setSquareOnClick() {
        const setResultFontSize = this.setResultFontSize;
        const dataContent = "x²";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent; //непонятно почему нельзя присвоить значение this.action способом как у secondNumber выше(значение не сохраняется в переменной в конструкторе)

            topResult.innerHTML = `${secondNumber * secondNumber}`;
            topHistoryData.text = `sqr(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            setResultFontSize(thisClass);
        }
    }

    setSquareRootOnClick() {
        const setResultFontSize = this.setResultFontSize;
        const dataContent = "\u221Ax";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent;

            topResult.innerHTML = `${Math.sqrt(secondNumber)}`;

            topHistoryData.text = `\u221A(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            setResultFontSize(thisClass);
        }
    }

    setNegateOnClick() {
        const setResultFontSize = this.setResultFontSize;
        const dataContent = "±";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const topResult = this.topResult;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            thisClass.action = dataContent;

            topResult.innerHTML = `${secondNumber * -1}`;

            topHistoryData.text = `negate(${topHistoryData.text})`;

            setResultFontSize(thisClass);
        }
    }

    clearAll() {
        const dataContent = "C";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const setResultFontSize = this.setResultFontSize;
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const thisClass = this;

        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = "no secondNumber defined";
            thisClass.action = "no actions defined";
            topHistoryData.text = "0";
            topHistory.innerHTML = "";

            topResult.innerHTML = "0";
            setResultFontSize(thisClass);
        }
    }

    clearCurrentNumber() {
        const dataContent = "CE";
        const thisClass = this;
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const setResultFontSize = this.setResultFontSize;
        const topResult = this.topResult;

        selectedData.onclick = function() {
            topResult.innerHTML = `0`;

            setResultFontSize(thisClass);
        }
    }

    clearLastSymbol() {
        const dataContent = "<";
        const selectedData = document.querySelector(`[data-text = "${dataContent}"]`);
        const setResultFontSize = this.setResultFontSize;
        const operations = this.operations;
        const thisClass = this;
        const topResult = this.topResult;

        selectedData.onclick = function() {
            if (!operations.complexOperations.includes(thisClass.action)) {//если до этого не была задействованна комплексная операция
                topResult.innerHTML = topResult.innerHTML.slice(0,topResult.innerHTML.length-1);//стереть последний символ
            }

            if (topResult.innerHTML === "") {//если стираем последний символ
                topResult.innerHTML = "0";//пишем начальный 0
            }

            setResultFontSize(thisClass);
        }
    }
}

const interface1 = new CalculatorDisplay(".calculator");