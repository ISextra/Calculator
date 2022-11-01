
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

        this.getDataOnClick();
    }

    getDataOnClick() {
        const topResult = this.topResult;
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
        })
    }
}

const interface1 = new CalculatorOperations(".calculator");