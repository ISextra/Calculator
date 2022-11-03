
class CalculatorDisplay {
    constructor(calculatorHTMLClass) {
        this.objectsMassive = [`%`, `CE`, `C`, `<`, `1/x`, `x²`, `\u221Ax`, `\xF7`, `7`, `8`, `9`, `\xD7`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `±`, `0`, `.`, `=`];
        this.textMassiveForNumbers = [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`,`0` ,`±`];
        this.equalSymbol = "=";

        this.textMassiveForOperationsJs = [`%`, `CE`, `C`, `<`, `1/x`, `x²`, `\u221Ax`, `\xF7`, `\xD7`, `-`, `+`, `±`];
        this.textMassiveForSimpleOperationsJs = [`\xF7`, `\xD7`, `-`, `+`];
        this.textMassiveForNumbersJs= [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`,`0`];

        this.documentCollection = [];

        this.creatingBaseElements(calculatorHTMLClass);
    }

    creatingLastElements() {
        const objectsMassive = this.objectsMassive;
        const textMassiveForNumbers = this.textMassiveForNumbers;
        const textMassiveForOperationsJs = this.textMassiveForOperationsJs;
        const textMassiveForNumbersJs = this.textMassiveForNumbersJs;
        const equalSymbol = this.equalSymbol;
        const documentCollection = this.documentCollection;

        const appendTarget = document.querySelector('.bottom');

        const defaultClass = "bottom-button";
        const numberClass = "number-button";
        const numberClassJs = "number-button-JS";
        const operationClassJs = "operation-button-JS";
        const equalClass = "red-button";

        objectsMassive.forEach((element,index) => {
            documentCollection[index] = {};
            documentCollection[index] = document.createElement("button");
            documentCollection[index].textContent = element;
            documentCollection[index].dataset.text = element;
            documentCollection[index].classList.add(defaultClass);

            if (textMassiveForNumbers.includes(element)) {
                documentCollection[index].classList.add(numberClass);
            }

            if (textMassiveForNumbersJs.includes(element)) {
                documentCollection[index].classList.add(numberClassJs);
            }

            if (textMassiveForOperationsJs.includes(element)) {
                documentCollection[index].classList.add(operationClassJs);
            }

            if (element === equalSymbol) {
                documentCollection[index].classList.add(equalClass);
            }

            appendTarget.append(documentCollection[index]);
        });
    }

    creatingBaseElements(calculatorHTMLClass) {
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

        this.creatingLastElements();
    }

}

class CalculatorOperations extends CalculatorDisplay {
    constructor(...args) {
        super(...args);

        this.secondNumber = ' ';
        this.action = 0;

        this.setDataOnClick();
        this.simpleOperationsOnClick();
        this.reversOnClick();
        this.clearAll();
        this.clearCurrentNumber();
        this.clearLastSymbol();
        this.squareOnClick();
        this.squareRootOnClick();
        this.negateOnClick();
    }

    setDataOnClick() {
        const topResult = this.topResult;
        const topHistoryData = this.topHistory.dataset;
        const lengthForSwitchFontSize = 10;
        const maxLineLength = 16;

        const numberButtons = document.querySelectorAll('.number-button-JS');

        numberButtons.forEach(element => {
            element.onclick = function(event) {
                let target = event.target;

                const targetTextContent = target.dataset.text;

                switch (targetTextContent) {
                    case ".":
                        if (!topResult.innerHTML.includes(".")) {
                            topResult.innerHTML = `${topResult.textContent}.`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }

                        break;
                    default:
                        if (topResult.innerHTML.length > lengthForSwitchFontSize) {
                            topResult.style.fontSize = "26px";
                        }

                        if (topResult.innerHTML.length > maxLineLength) {
                            break;
                        }

                        if (topResult.innerHTML === "0" && targetTextContent !== ".") {
                            topResult.innerHTML = `${targetTextContent}`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }
                        else {
                            topResult.innerHTML = `${topResult.textContent}${targetTextContent}`;
                            topHistoryData.text = `${topResult.textContent}`;
                        }
                }
            }
        })
    }

    simpleOperationsOnClick() {
        const operationsButtons = document.querySelectorAll('.operation-button-JS');
        const textMassiveForSimpleOperationsJs = this.textMassiveForSimpleOperationsJs;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        const topResult = this.topResult;
        let secondNumber = this.secondNumber;
        let action = this.action;

        operationsButtons.forEach(element => {
            element.onclick = function () {
                if (!textMassiveForSimpleOperationsJs.includes(element.textContent)) {
                    return;
                }

                if (action) {
                    topHistoryData.text = topHistoryData.text.slice(0,topHistoryData.text.length - 2);
                }

                action = element.textContent;
                topHistoryData.text = `${topHistoryData.text} ${action}`;
                topHistory.innerHTML = `${topHistoryData.text}`;
                secondNumber = topResult.textContent;
            }
        });
    }

    resultFontSizeFix() {
        const topResult = this.topResult;
        const lengthForSwitchFontSizeMedium = 10;
        const lengthForSwitchFontSizeLow = 16;

        if (topResult.textContent.length < lengthForSwitchFontSizeMedium) {
            topResult.style.fontSize = "42px";
        }

        if (topResult.textContent.length > lengthForSwitchFontSizeMedium) {
            topResult.style.fontSize = "26px";
        }

        if (topResult.textContent.length > lengthForSwitchFontSizeLow) {
            topResult.style.fontSize = "22px";
        }
    }

    percentOnClick() {
        const resultFontSizeFix = this.resultFontSizeFix;
        const selectedData = document.querySelector('[data-text = "%"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset;

        let action = this.action;

        selectedData.onclick = function() {
            if (!action) {
                topResult.innerHTML = "0";
                topHistory.innerHTML = "0";
                topHistoryData.text = "0";
                return;
            }

            topResult.innerHTML = `${topResult.textContent/100}`;
            topHistoryData.text = `${topHistoryData.text} ${topResult.textContent/100}`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            resultFontSizeFix();
        }
    }

    reversOnClick() {
        const resultFontSizeFix = this.resultFontSizeFix;
        const selectedData = document.querySelector('[data-text = "1/x"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset;

        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `1/x`;

            topResult.innerHTML = `${1/secondNumber}`;

            topHistoryData.text = `1/(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            resultFontSizeFix();
        }
    }

    squareOnClick() {
        const resultFontSizeFix = this.resultFontSizeFix;
        const selectedData = document.querySelector('[data-text = "x²"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset;

        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `x²`;

            topResult.innerHTML = `${secondNumber * secondNumber}`;

            topHistoryData.text = `sqr(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            resultFontSizeFix();
        }
    }

    squareRootOnClick() {
        const resultFontSizeFix = this.resultFontSizeFix;
        const selectedData = document.querySelector('[data-text = "\u221Ax"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset;

        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `\u221Ax`;

            topResult.innerHTML = `${Math.sqrt(secondNumber)}`;

            topHistoryData.text = `\u221A(${topHistoryData.text})`;
            topHistory.innerHTML = `${topHistoryData.text}`;

            resultFontSizeFix();
        }
    }

    negateOnClick() {
        const resultFontSizeFix = this.resultFontSizeFix;
        const selectedData = document.querySelector('[data-text = "±"]');
        const topResult = this.topResult;
        let topHistoryData = this.topHistory.dataset;

        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `±`;

            topResult.innerHTML = `${secondNumber * -1}`;

            topHistoryData.text = `negate(${topHistoryData.text})`;

            resultFontSizeFix();
        }
    }

    clearAll() {
        const selectedData = document.querySelector('[data-text = "C"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const topHistoryData = this.topHistory.dataset;
        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = " ";
            action = 0;

            topHistoryData.text = "0";
            topHistory.innerHTML = "";

            topResult.innerHTML = "0";
            topResult.style.fontSize = "42px";
        }
    }

    clearCurrentNumber() {
        const selectedData = document.querySelector('[data-text = "CE"]');
        const topResult = this.topResult;

        selectedData.onclick = function() {
            topResult.innerHTML = `0`;
            topResult.style.fontSize = "42px";
        }
    }

    clearLastSymbol() {
        const selectedData = document.querySelector('[data-text = "<"]');
        const topResult = this.topResult;
        const lengthForSwitchFontSize = 10;

        selectedData.onclick = function() {
            topResult.innerHTML = topResult.innerHTML.slice(0,topResult.innerHTML.length-1);

            if (topResult.innerHTML === "") {
                topResult.innerHTML = "0";
            }

            if (topResult.innerHTML.length > lengthForSwitchFontSize) {
                topResult.style.fontSize = "26px";
            }
        }
    }
}

const interface1 = new CalculatorOperations(".calculator");