
class CalculatorInterface {
    constructor(calculatorHTMLClass) {
        this.objectsMassive = [`%`, `CE`, `C`, `<`, `1/x`, `x²`, `\u221Ax`, `\xF7`, `7`, `8`, `9`, `\xD7`, `4`, `5`, `6`, `-`, `1`, `2`, `3`, `+`, `±`, `0`, `.`, `=`];

        this.textMassiveForNumbers = [`7`, `8`, `9`, `4`, `5`, `6`, `1`, `2`, `3`, `.`,`0` ,`±`];
        this.equalSymbol = "=";

        this.documentCollection = [];

        this.creatingElements(calculatorHTMLClass);
    }

    extensionOfElement() {
        const objectsMassive = this.objectsMassive;
        const textMassiveForNumbers = this.textMassiveForNumbers;
        const equalSymbol = this.equalSymbol;
        const documentCollection = this.documentCollection;

        const appendTarget = document.querySelector('.bottom');

        const defaultClass = "bottom-button";
        const numberClass = "number-button";
        const equalClass = "red-button";

        objectsMassive.forEach((element,index) => {
            documentCollection[index] = {};
            documentCollection[index] = document.createElement("button");
            documentCollection[index].textContent = element;
            documentCollection[index].classList.add(defaultClass);

            if (textMassiveForNumbers.includes(element)) {
                documentCollection[index].classList.add(numberClass);
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
        topElement.append(this.topHistory);

        this.topResult = document.createElement("output");
        this.topResult.classList.add("top-result");
        this.topResult.textContent = "0";
        topElement.append(this.topResult);

        this.extensionOfElement();
    }

}

class CalculatorNumbers extends CalculatorInterface {
    constructor(...args) {
        super(...args);

        this.additionEventForNumbers();
    }

    additionEventForNumbers() {
        const topResult = this.topResult;
        const lengthForSwitchFontSize = 10;
        const maxLineLength = 16;

        this.bottomHtml.onclick = function(event) {
            let target = event.target;

            if (!target.classList.contains("number-button")) {
                return;
            }

            this.resultNumberOfElement = topResult.innerHTML;
            const targetTextContent = target.textContent;

            switch (targetTextContent) {
                case "+/-":
                    if (this.resultNumberOfElement === "0") {
                        topResult.innerHTML = `${this.resultNumberOfElement}`;

                        break;
                    }

                    if (this.resultNumberOfElement.includes("-")) {
                        topResult.innerHTML = `${this.resultNumberOfElement.slice(1,undefined)}`;
                    }
                    else {
                        topResult.innerHTML = `-${this.resultNumberOfElement}`;
                    }

                    break;
                case ".":
                    if (!this.resultNumberOfElement.includes(".")) {
                        topResult.innerHTML = `${this.resultNumberOfElement}.`;
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
                    }
            }
        }
    }
}

class CalculatorAction extends CalculatorNumbers {
    constructor(...args) {
        super(...args);

        // this.isOperation = 0;
        // this.prevValue = parseFloat(CalculatorInterface.top_result.innerHTML);
        // this.nextValue = undefined;

        CalculatorAction.additionEventForOperation();
    }

    static addAction(action) {
        this.resultNumberOfElement = CalculatorInterface.topResult.innerHTML;
        // this.historyElement = CalculatorInterface.top_history.innerHTML;
        // CalculatorInterface.top_history.innerHTML = `${action}`;

        CalculatorInterface.topHistory.innerHTML = `${this.resultNumberOfElement} ${action}`;
        this.isOperation = 1;
    }

    static additionEventForOperation() {
        this.bottomHtml.onclick = function (event) {
            let target = event.target;

            if (!target.classList.contains("operation-button")) {
                return;
            }

            CalculatorAction.addAction(target.textContent);
        }
    }
}

const interface1 = new CalculatorNumbers(".calculator");