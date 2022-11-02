
class CalculatorInterface {
    constructor(calculatorHTMLClass) {
        this.objectsMassive = [`%`, `CE`, `C`, `<`, `1/x`, `x²`, `\u221Ax`, `\xF7`, `7`, `8`, `9`, `\xD7`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `±`, `0`, `.`, `=`];
        this.textMassiveForNumbers = [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`,`0` ,`±`];
        this.equalSymbol = "=";

        this.textMassiveForOperationsJs = [`%`, `CE`, `C`, `<`, `1/x`, `x²`, `\u221Ax`, `\xF7`, `\xD7`, `-`, `+`, `±`];
        this.textMassiveForNumbersJs= [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`,`0`];

        this.documentCollection = [];

        this.creatingElements(calculatorHTMLClass);
    }

    extensionOfElement() {
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

    creatingElements(calculatorHTMLClass) {
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
        this.topResult.textContent = "0";
        topElement.append(this.topResult);

        this.extensionOfElement();
    }

}

class CalculatorOperations extends CalculatorInterface {
    constructor(...args) {
        super(...args);

        this.secondNumber = ``;
        this.action = ``;

        this.setDataOnClick();
        this.additionOnClick();
        this.subtractionOnClick();
        this.multiplicationOnClick();
        this.divisionOnClick();
        this.reversOnClick1();
        this.clearAll();
        this.clearCurrentNumber();
        this.clearLastSymbol();
    }

    setDataOnClick() {
        const topResult = this.topResult;
        let topHistoryData = this.topHistory.dataset.text;
        const action = this.action;
        const lengthForSwitchFontSize = 10;
        const maxLineLength = 16;

        const numberButtons = document.querySelectorAll('.number-button-JS');

        numberButtons.forEach(element => {
            element.onclick = function(event) {
                let target = event.target;

                if (!target.classList.contains("number-button-JS")) {
                    return;
                }

                this.resultNumberOfElement = topResult.innerHTML;
                const targetTextContent = target.dataset.text;

                switch (targetTextContent) {
                    case ".":
                        if (!this.resultNumberOfElement.includes(".")) {
                            topResult.innerHTML = `${this.resultNumberOfElement}.`;
                            topHistoryData = `${this.resultNumberOfElement}.`;
                        }

                        break;
                    default:
                        if (this.resultNumberOfElement.length > lengthForSwitchFontSize) {
                            topResult.style.fontSize = "26px";
                        }

                        if (this.resultNumberOfElement.length > maxLineLength) {
                            topResult.innerHTML = `${this.resultNumberOfElement}`;

                            break;
                        }

                        if (this.resultNumberOfElement === "0" && targetTextContent !== ".") {
                            topResult.innerHTML = `${targetTextContent}`;
                        }
                        else {
                            topResult.innerHTML = `${this.resultNumberOfElement}${targetTextContent}`;
                            topHistoryData = `${this.resultNumberOfElement}${targetTextContent}`;
                        }
                }
            }
        })
    }

    additionOnClick() {
        const selectedData = document.querySelector("[data-text='-']");
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset.text;
        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = '-';
            topResult.innerHTML = `${Number(secondNumber)}`;
            topHistoryData = `${Number(secondNumber)} -`;
            topHistory.innerHTML = `${topHistoryData}`;
        }
    }

    subtractionOnClick() {
        const selectedData = document.querySelector("[data-text='+']");
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset.text;
        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = '+';
            topResult.innerHTML = `${Number(secondNumber)}`;
            topHistoryData = `${Number(secondNumber)} +`;
            topHistory.innerHTML = `${topHistoryData}`;
        }
    }

    multiplicationOnClick() {
        const selectedData = document.querySelector('[data-text="\xD7"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset.text;
        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `\xD7`;
            topResult.innerHTML = `${Number(secondNumber)}`;
            topHistoryData = `${Number(secondNumber)} \xD7`;
            topHistory.innerHTML = `${topHistoryData}`;
        }
    }

    divisionOnClick() {
        const selectedData = document.querySelector('[data-text="\xF7"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset.text;
        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `\xF7`;
            topResult.innerHTML = `${Number(secondNumber)}`;
            topHistoryData = `${Number(secondNumber)} \xF7`;
            topHistory.innerHTML = `${topHistoryData}`;
        }
    }

    reversOnClick() {
        const selectedData = document.querySelector('[data-text="1/x"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset;
        const lengthForSwitchFontSize = 10;

        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `\xF7`;

            topResult.innerHTML = `${1/Number(secondNumber)}`;

            topHistoryData.text = `1/(${Number(secondNumber)})`;
            topHistory.innerHTML = `1/(${Number(secondNumber)})`;

            if (topResult.innerHTML.length > lengthForSwitchFontSize) {
                topResult.style.fontSize = "26px";
            }
            else {
                topResult.style.fontSize = "42px";
            }
        }
    }

    reversOnClick1() {
        const selectedData = document.querySelector('[data-text="1/x"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        const lengthForSwitchFontSize = 10;

        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = Number(topResult.textContent);
            action = `\xF7`;

            topResult.innerHTML = `${1/Number(secondNumber)}`.slice(0, 17);

            topHistory.innerHTML = `1/(${Number(secondNumber)})`;

            if (topResult.innerHTML.length > lengthForSwitchFontSize) {
                topResult.style.fontSize = "26px";
            }
            else {
                topResult.style.fontSize = "42px";
            }
        }
    }

    clearAll() {
        const selectedData = document.querySelector('[data-text="C"]');
        const topResult = this.topResult;
        const topHistory = this.topHistory;
        let topHistoryData = this.topHistory.dataset.text;
        let action = this.action;
        let secondNumber = this.secondNumber;

        selectedData.onclick = function() {
            secondNumber = ``;
            action = ``;

            topHistoryData = ``;
            topHistory.innerHTML = ``;

            topResult.innerHTML = `0`;
            topResult.style.fontSize = "42px";
        }
    }

    clearCurrentNumber() {
        const selectedData = document.querySelector('[data-text="CE"]');
        const topResult = this.topResult;

        selectedData.onclick = function() {
            topResult.innerHTML = `0`;
            topResult.style.fontSize = "42px";
        }
    }

    clearLastSymbol() {
        const selectedData = document.querySelector('[data-text="<"]');
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